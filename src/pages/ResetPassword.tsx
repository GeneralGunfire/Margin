import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/auth";
import { passwordStrength } from "@/lib/authErrors";
import { Button } from "@/components/ui/button";
import AuthShell from "@/components/auth/AuthShell";
import Field, { FormMessage } from "@/components/auth/Field";
import PasswordInput from "@/components/auth/PasswordInput";

const SEGMENT = ["bg-muted-foreground", "bg-amber-500", "bg-primary", "bg-green-500"];

/** Landing spot for the link in the reset email. Supabase puts a recovery session in the URL. */
export default function ResetPassword() {
  const { session, loading, signOut } = useAuth();
  const nav = useNavigate();
  const pwRef = useRef<HTMLInputElement>(null);
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [errors, setErrors] = useState<{ pw?: string; pw2?: string }>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [waited, setWaited] = useState(false);

  // Give Supabase a moment to read the recovery token from the URL before calling the link invalid.
  useEffect(() => {
    const t = setTimeout(() => setWaited(true), 1500);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (session) pwRef.current?.focus();
  }, [session]);

  const strength = passwordStrength(pw);

  const goToLogin = async () => {
    await signOut();
    nav("/login", { replace: true, state: { notice: "Password updated. Log in with your new password." } });
  };

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(goToLogin, 3000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);
    const next: typeof errors = {};
    if (pw.length < 8) next.pw = "Use at least 8 characters";
    if (pw2 !== pw) next.pw2 = "Passwords don't match";
    setErrors(next);
    if (next.pw) return pwRef.current?.focus();
    if (next.pw2) return;
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password: pw });
    setBusy(false);
    if (error) {
      const m = error.message.toLowerCase();
      setFormError(
        m.includes("same") ? "Choose a password you haven't used before." : error.status === 0 || error.status === undefined ? "Can't reach the server. Check your connection and try again." : error.message,
      );
      return;
    }
    setDone(true);
  };

  if (done) {
    return (
      <AuthShell title="Password updated" description="Taking you to log in.">
        <Button size="lg" className="w-full" onClick={goToLogin}>Log in now</Button>
      </AuthShell>
    );
  }

  if (!session) {
    if (loading || !waited) {
      return (
        <AuthShell title="Checking your link">
          <p role="status" className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 className="size-4 animate-spin" aria-hidden="true" /> One moment.</p>
        </AuthShell>
      );
    }
    return (
      <AuthShell title="This link has expired" description="Reset links work once and expire after a short time.">
        <div className="flex flex-col gap-3">
          <Button asChild size="lg"><Link to="/forgot-password">Send a new link</Link></Button>
          <Button asChild variant="ghost"><Link to="/login">Back to log in</Link></Button>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell title="Choose a new password" description="Use at least 8 characters.">
      <form onSubmit={submit} noValidate className="flex flex-col gap-4">
        {formError && <FormMessage tone="error">{formError}</FormMessage>}
        <Field id="pw" label="New password" error={errors.pw}>
          <PasswordInput
            ref={pwRef}
            id="pw"
            name="new-password"
            autoComplete="new-password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            aria-invalid={!!errors.pw}
            aria-describedby={errors.pw ? "pw-error pw-hint" : "pw-hint"}
          />
          {pw && (
            <div id="pw-hint" aria-live="polite" className="flex flex-col gap-1.5">
              <div className="flex gap-1" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <span key={i} className={`h-1 flex-1 rounded-full ${i < Math.max(strength.score, 1) && pw.length >= 8 ? SEGMENT[strength.score] : "bg-secondary"}`} />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">{strength.label}</span>
            </div>
          )}
        </Field>
        <Field id="pw2" label="Confirm new password" error={errors.pw2}>
          <PasswordInput
            id="pw2"
            name="confirm-password"
            autoComplete="new-password"
            value={pw2}
            onChange={(e) => setPw2(e.target.value)}
            aria-invalid={!!errors.pw2}
            aria-describedby={errors.pw2 ? "pw2-error" : undefined}
          />
        </Field>
        <Button type="submit" size="lg" className="w-full" disabled={busy}>
          {busy && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
          {busy ? "Saving" : "Save new password"}
        </Button>
      </form>
    </AuthShell>
  );
}
