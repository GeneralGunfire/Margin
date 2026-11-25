import { useCallback, useEffect, useState } from "react";
import { supabase, type Progress } from "@/lib/supabase";
import { useAuth } from "@/lib/auth";
import { lessonById } from "@/lib/content";

/** The signed-in user's lesson_progress rows, keyed by lesson id. */
export function useProgress() {
  const { session } = useAuth();
  const uid = session?.user.id;
  const [map, setMap] = useState<Record<string, Progress>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!uid) return;
    supabase
      .from("lesson_progress")
      .select("*")
      .eq("user_id", uid)
      .then(({ data, error }) => {
        if (error) setError(error.message);
        setMap(Object.fromEntries(((data as Progress[]) ?? []).map((p) => [p.lesson_id, p])));
        setLoading(false);
      });
  }, [uid]);

  const update = useCallback(
    async (lessonId: string, patch: Partial<Pick<Progress, "done" | "flagged" | "note">>) => {
      if (!uid || lessonById(lessonId)?.status === "stub") return; // stubs can't be marked
      setError(null);
      const prev = map[lessonId];
      const base: Progress = prev ?? { user_id: uid, lesson_id: lessonId, done: false, flagged: false, note: null, updated_at: "" };
      const next: Progress = { ...base, ...patch, updated_at: new Date().toISOString() };
      setMap((m) => ({ ...m, [lessonId]: next }));
      const { error } = await supabase.from("lesson_progress").upsert(
        { user_id: uid, lesson_id: lessonId, done: next.done, flagged: next.flagged, note: next.note },
      );
      if (error) {
        setMap((m) => (prev ? { ...m, [lessonId]: prev } : (({ [lessonId]: _, ...rest }) => rest)(m)));
        setError(
          error.code === "23503"
            ? "This lesson isn't in the database index yet. Run `npm run sync-content` and paste the SQL (see README)."
            : error.message,
        );
      }
    },
    [uid, map],
  );

  return { progress: map, loading, error, update };
}
