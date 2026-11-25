import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase, type Profile, type Subject } from "./supabase";

type Ctx = {
  session: Session | null;
  loading: boolean;
  profile: Profile | null;
  subjects: Subject[]; // all subjects
  mySubjectIds: Set<number>; // ticked in Settings
  mySubjects: Subject[];
  refreshProfile: () => Promise<void>;
  setSubjectTicked: (id: number, ticked: boolean) => Promise<void>;
  signOut: () => Promise<void>;
  sessionExpired: boolean;
};

const AuthCtx = createContext<Ctx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [mine, setMine] = useState<Set<number>>(new Set());

  const hadSession = useRef(false);
  const manualSignOut = useRef(false);
  const [sessionExpired, setSessionExpired] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data }) => {
      // "Keep me signed in" was off and the browser was closed since: drop the old session.
      if (data.session && localStorage.getItem("margin-ephemeral") && !sessionStorage.getItem("margin-live")) {
        manualSignOut.current = true;
        await supabase.auth.signOut();
        localStorage.removeItem("margin-ephemeral");
        setLoading(false);
        return;
      }
      hadSession.current = !!data.session;
      setSession(data.session);
      setLoading(false);
    });
    const { data } = supabase.auth.onAuthStateChange((event, s) => {
      // A sign-out we didn't ask for while a session existed means it expired or was revoked.
      if (event === "SIGNED_OUT" && hadSession.current && !manualSignOut.current) setSessionExpired(true);
      if (event === "SIGNED_IN") setSessionExpired(false);
      hadSession.current = !!s;
      if (event === "SIGNED_OUT") manualSignOut.current = false;
      setSession(s);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  const uid = session?.user.id;

  const load = useCallback(async () => {
    if (!uid) {
      setProfile(null);
      setSubjects([]);
      setMine(new Set());
      return;
    }
    const [p, s, us] = await Promise.all([
      supabase.from("profiles").select("*").eq("id", uid).maybeSingle(),
      supabase.from("subjects").select("*").order("sort"),
      supabase.from("user_subjects").select("subject_id").eq("user_id", uid),
    ]);
    setProfile((p.data as Profile) ?? null);
    setSubjects((s.data as Subject[]) ?? []);
    setMine(new Set((us.data ?? []).map((r) => r.subject_id as number)));
  }, [uid]);

  useEffect(() => {
    void load();
  }, [load]);

  const setSubjectTicked = useCallback(
    async (id: number, ticked: boolean) => {
      if (!uid) return;
      setMine((prev) => {
        const n = new Set(prev);
        ticked ? n.add(id) : n.delete(id);
        return n;
      });
      const { error } = ticked
        ? await supabase.from("user_subjects").upsert({ user_id: uid, subject_id: id })
        : await supabase.from("user_subjects").delete().eq("user_id", uid).eq("subject_id", id);
      if (error) await load(); // revert optimistic update
    },
    [uid, load],
  );

  const value = useMemo<Ctx>(
    () => ({
      session,
      loading,
      profile,
      subjects,
      mySubjectIds: mine,
      mySubjects: subjects.filter((s) => mine.has(s.id)),
      refreshProfile: load,
      setSubjectTicked,
      sessionExpired,
      signOut: async () => {
        manualSignOut.current = true;
        await supabase.auth.signOut();
      },
    }),
    [session, loading, profile, subjects, mine, load, setSubjectTicked, sessionExpired],
  );

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  const c = useContext(AuthCtx);
  if (!c) throw new Error("useAuth outside AuthProvider");
  return c;
}
