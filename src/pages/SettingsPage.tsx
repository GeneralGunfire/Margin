import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ImagePlus, Minus, Plus, Trash2 } from "lucide-react";
import { useWeeklyGoal } from "@/lib/prefs";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/auth";
import { useAvatarUrl } from "@/hooks/useAvatarUrl";
import { btn, field, kicker } from "@/lib/styles";
import { Btn } from "@/components/ui/btn";
import { Checkbox } from "@/components/ui/checkbox";
import { Note } from "@/components/ui/note";
import { Spinner } from "@/components/ui/loading";
import { SubjectTag } from "@/components/ui/ui";
import { PageHead } from "@/components/page";
import PasswordInput from "@/components/auth/PasswordInput";

const TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_BYTES = 2 * 1024 * 1024;
const SIZE = 256;

/** Centre-crop to a square and shrink to 256 px in the browser before anything is uploaded. */
async function squareBlob(file: File): Promise<Blob> {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((ok, no) => {
      const i = new Image();
      i.onload = () => ok(i);
      i.onerror = () => no(new Error("That file could not be read as a picture."));
      i.src = url;
    });
    const side = Math.min(img.naturalWidth, img.naturalHeight);
    const c = document.createElement("canvas");
    c.width = SIZE;
    c.height = SIZE;
    const g = c.getContext("2d");
    if (!g) throw new Error("This browser cannot resize pictures.");
    g.imageSmoothingQuality = "high";
    g.drawImage(img, (img.naturalWidth - side) / 2, (img.naturalHeight - side) / 2, side, side, 0, 0, SIZE, SIZE);
    return await new Promise<Blob>((ok, no) => c.toBlob((b) => (b ? ok(b) : no(new Error("Could not prepare the picture."))), "image/jpeg", 0.9));
  } finally {
    URL.revokeObjectURL(url);
  }
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10 border-t border-border pt-6">
      <h2 className={kicker}>{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function SettingsPage() {
  const { profile, session, subjects, mySubjectIds, setSubjectTicked, refreshProfile, signOut } = useAuth();
  const nav = useNavigate();
  const [goal, setGoal] = useWeeklyGoal();
  const avatar = useAvatarUrl(profile?.avatar_url);
  const pick = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [pending, setPending] = useState<{ blob: Blob; url: string } | null>(null);
  const [busy, setBusy] = useState<"profile" | "password" | null>(null);
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; t: string } | null>(null);

  useEffect(() => {
    setName(profile?.display_name ?? "");
    setTag(profile?.public_tag ?? "");
  }, [profile]);
  useEffect(() => () => { if (pending) URL.revokeObjectURL(pending.url); }, [pending]);

  const say = (ok: boolean, t: string) => setMsg({ ok, t });
  const dirty = !!pending || name.trim() !== (profile?.display_name ?? "") || tag.trim().toUpperCase() !== (profile?.public_tag ?? "");

  async function choose(f: File | undefined) {
    if (!f) return;
    setMsg(null);
    if (!TYPES.includes(f.type)) return say(false, "Use a JPEG, PNG or WebP picture.");
    if (f.size > MAX_BYTES) return say(false, "That picture is larger than 2 MB. Choose a smaller one.");
    try {
      const blob = await squareBlob(f);
      setPending({ blob, url: URL.createObjectURL(blob) });
    } catch (e) {
      say(false, (e as Error).message);
    }
  }

  const saveProfile = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy("profile");
    setMsg(null);
    try {
      const uid = session!.user.id;
      let path = profile?.avatar_url ?? null;
      if (pending) {
        const next = `${uid}/avatar-${Date.now()}.jpg`;
        const up = await supabase.storage.from("avatars").upload(next, pending.blob, { contentType: "image/jpeg" });
        if (up.error) throw up.error;
        if (path) await supabase.storage.from("avatars").remove([path]);
        path = next;
      }
      const { error } = await supabase
        .from("profiles")
        .update({ display_name: name.trim(), public_tag: tag.trim().toUpperCase().slice(0, 4), avatar_url: path })
        .eq("id", uid);
      if (error) throw error;
      setPending(null);
      await refreshProfile();
      say(true, "Saved.");
    } catch (err) {
      say(false, (err as Error).message);
    } finally {
      setBusy(null);
    }
  };

  const removePicture = async () => {
    if (!profile?.avatar_url) return setPending(null);
    await supabase.storage.from("avatars").remove([profile.avatar_url]);
    const { error } = await supabase.from("profiles").update({ avatar_url: null }).eq("id", session!.user.id);
    if (error) return say(false, error.message);
    await refreshProfile();
    say(true, "Picture removed.");
  };

  const changePw = async (e: FormEvent) => {
    e.preventDefault();
    setMsg(null);
    if (pw.length < 8) return say(false, "Use at least 8 characters.");
    if (pw !== pw2) return say(false, "The two passwords don't match.");
    setBusy("password");
    const { error } = await supabase.auth.updateUser({ password: pw });
    setBusy(null);
    if (error) return say(false, error.message);
    setPw("");
    setPw2("");
    say(true, "Password changed.");
  };

  const shown = pending?.url ?? avatar;

  return (
    <div className="max-w-2xl">
      <PageHead kicker="Settings" title="Your account" sub="Your profile, your subjects and how Margin looks." />
      {msg && <Note ok={msg.ok}>{msg.t}</Note>}

      <Section title="Profile">
        <form onSubmit={saveProfile} className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-5">
            <span className="grid size-24 shrink-0 place-items-center overflow-hidden rounded-full border border-border bg-primary text-2xl font-semibold text-primary-foreground">
              {shown ? <img src={shown} alt="Your picture" className="size-full object-cover" /> : (tag || name.slice(0, 1) || "?")}
            </span>
            <div className="space-y-2.5">
              <div className="flex flex-wrap gap-2">
                <button type="button" className={btn} onClick={() => pick.current?.click()}>
                  <ImagePlus className="size-4" aria-hidden="true" /> {shown ? "Choose another" : "Choose a picture"}
                </button>
                {(profile?.avatar_url || pending) && (
                  <button type="button" className={btn} onClick={() => (pending ? setPending(null) : removePicture())}>
                    <Trash2 className="size-4" aria-hidden="true" /> {pending ? "Discard" : "Remove"}
                  </button>
                )}
              </div>
              <p className="max-w-sm text-xs leading-5 text-muted-foreground">JPEG, PNG or WebP, up to 2 MB. It is cropped to a square and resized in your browser before upload.</p>
            </div>
            <input ref={pick} type="file" accept=".jpg,.jpeg,.png,.webp" className="hidden" onChange={(e) => { void choose(e.target.files?.[0]); e.target.value = ""; }} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="dn" className={kicker}>Display name</label>
              <input id="dn" className={`${field} h-9`} value={name} maxLength={60} onChange={(e) => setName(e.target.value)} required />
              <p className="text-xs text-muted-foreground">Private. Shown on papers you upload.</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="tag" className={kicker}>Public tag</label>
              <input id="tag" className={`${field} h-9 uppercase`} value={tag} maxLength={4} onChange={(e) => setTag(e.target.value)} required />
              <p className="text-xs text-muted-foreground">Initials, up to four letters.</p>
            </div>
          </div>

          <div>
            <Btn type="submit" variant="primary" disabled={!dirty} loading={busy === "profile"}>
              {busy === "profile" ? "Saving" : "Save profile"}
            </Btn>
          </div>
        </form>
      </Section>

      <Section title="Subjects">
        <p className="mb-4 text-sm text-muted-foreground">Unticked subjects are hidden from your Library, Past Papers filters and Calendar tags.</p>
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {subjects.map((s) => (
            <li key={s.id} className="border-b border-border py-2.5">
              <Checkbox checked={mySubjectIds.has(s.id)} onChange={(v) => setSubjectTicked(s.id, v)} className="w-full items-center">
                <SubjectTag name={s.name} color={s.color} />
              </Checkbox>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Study goal">
        <p className="mb-4 text-sm text-muted-foreground">How many lessons you want to finish each week. The dashboard ring tracks it. Saved on this device.</p>
        <div className="flex items-center gap-3">
          <Btn size="icon" aria-label="Fewer lessons per week" onClick={() => setGoal(goal - 1)} disabled={goal <= 1}>
            <Minus aria-hidden="true" />
          </Btn>
          <span className="w-24 text-center" aria-live="polite">
            <span className="text-2xl font-semibold tabular-nums">{goal}</span>
            <span className="ml-1.5 text-xs text-muted-foreground">per week</span>
          </span>
          <Btn size="icon" aria-label="More lessons per week" onClick={() => setGoal(goal + 1)} disabled={goal >= 50}>
            <Plus aria-hidden="true" />
          </Btn>
        </div>
      </Section>

      <Section title="Password">
        <form onSubmit={changePw} className="grid max-w-md gap-3">
          <PasswordInput name="new-password" autoComplete="new-password" placeholder="New password" aria-label="New password" value={pw} onChange={(e) => setPw(e.target.value)} />
          <PasswordInput name="confirm-password" autoComplete="new-password" placeholder="Repeat new password" aria-label="Repeat new password" value={pw2} onChange={(e) => setPw2(e.target.value)} />
          <div>
            <Btn type="submit" disabled={!pw} loading={busy === "password"}>
              Update password
            </Btn>
          </div>
        </form>
      </Section>

      <Section title="Account">
        <p className="mb-3 text-sm text-muted-foreground">Signed in as {session?.user.email}</p>
        <button
          type="button"
          className={btn}
          onClick={async () => {
            nav("/login", { replace: true });
            await signOut();
          }}
        >
          Sign out
        </button>
      </Section>
    </div>
  );
}
