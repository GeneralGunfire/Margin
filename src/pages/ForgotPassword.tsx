import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { EMAIL_RE } from "@/lib/authErrors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthShell from "@/components/auth/AuthShell";
import Field, { FormMessage, fieldClass } from "@/components/auth/Field";

export default function ForgotPassword() {
  const ref = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  useEffect(() => ref.current?.focus(), []);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);
    const v = email.trim();
    const err = !v ? "Enter your email" : !EMAIL_RE.test(v) ? "Enter a valid email address" : null;
    setError(err);
    if (err) return ref.current?.focus();
    setBusy(true);
    const { error } = await supabase.auth.resetPasswordForEmail(v, { redirectTo: `${window.location.origin}/reset-password` });
    setBusy(false);
    // Don't reveal whether the address has an account: only real failures are shown.
    if (error && (error.status === 429 || error.status === 0 || error.status === undefined || error.status >= 500)) {
      setFormError(error.status === 429 ? "Too many requests. Wait a minute, then try again." : "Couldn't send the email. Check your connection and try again.");
      return;
    }
    setSent(true);
  };

  return (
    <AuthShell title="Reset your password" description="Enter your email and we'll send you a link to choose a new password.">
      {sent ? (
        <div className="flex flex-col gap-4">
          <FormMessage tone="info">If that email has a Margin account, a reset link is on its way. It can take a few minutes.</FormMessage>
          <Button asChild variant="secondary" size="lg"><Link to="/login">Back to log in</Link></Button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="flex flex-col gap-4">
          {formError && <FormMessage tone="error">{formError}</FormMessage>}
          <Field id="email" label="Email" error={error}>
            <Input
              ref={ref}
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="username"
              autoCapitalize="none"
              spellCheck={false}
              className={fieldClass}
              
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={!!error}
              aria-describedby={error ? "email-error" : undefined}
            />
          </Field>
          <Button type="submit" size="lg" className="w-full" disabled={busy}>
            {busy && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
            {busy ? "Sending" : "Send reset link"}
          </Button>
          <Button asChild variant="ghost"><Link to="/login">Back to log in</Link></Button>
        </form>
      )}
    </AuthShell>
  );
}


