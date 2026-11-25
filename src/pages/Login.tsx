import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/auth";
import { EMAIL_RE, loginErrorMessage } from "@/lib/authErrors";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Spinner } from "@/components/ui/loading";
import Splash from "@/components/Splash";
import AuthShell from "@/components/auth/AuthShell";
import Field, { FormMessage, fieldClass } from "@/components/auth/Field";
import PasswordInput from "@/components/auth/PasswordInput";

type LocationState = { from?: string; expired?: boolean; notice?: string } | null;

const link = "text-violet-600 hover:underline dark:text-violet-400";
// Button text style from the design: small, bold, spaced capitals.
const caps = "text-xs font-semibold uppercase tracking-[0.22em]";

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="size-5" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.6 2.4 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.8 6.1C12.3 13.5 17.7 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.2 5.5-4.7 7.2l7.6 5.9c4.4-4.1 6.9-10.1 6.9-17.6z" />
      <path fill="#FBBC05" d="M10.4 28.7c-.5-1.5-.8-3-.8-4.7s.3-3.2.8-4.7l-7.8-6.1C1 16.4 0 20.1 0 24s1 7.6 2.6 10.8l7.8-6.1z" />
      <path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.6-5.9c-2.1 1.4-4.8 2.3-7.6 2.3-6.3 0-11.7-4-13.6-9.8l-7.8 6.1C6.5 42.6 14.6 48 24 48z" />
    </svg>
  );
}

export default function Login() {
  const { session, loading } = useAuth();
  const nav = useNavigate();
  const state = useLocation().state as LocationState;
  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keep, setKeep] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading) emailRef.current?.focus();
  }, [loading]);

  if (loading) return <Splash />;

  // Already signed in: skip straight to the dashboard (or where they were headed).
  if (session && !busy) return <Navigate to={state?.from ?? "/dashboard"} replace />;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setInfo(null);
    const next: typeof errors = {};
    const trimmed = email.trim();
    if (!trimmed) next.email = "Enter your email";
    else if (!EMAIL_RE.test(trimmed)) next.email = "Enter a valid email address";
    if (!password) next.password = "Enter your password";
    setErrors(next);
    if (next.email) return emailRef.current?.focus();
    if (next.password) return pwRef.current?.focus();

    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email: trimmed, password });
    if (error) {
      setBusy(false);
      setPassword("");
      setFormError(loginErrorMessage(error));
      return;
    }
    // "Keep me signed in" off: the session is dropped when the browser is closed (see AuthProvider).
    if (keep) localStorage.removeItem("margin-ephemeral");
    else {
      localStorage.setItem("margin-ephemeral", "1");
      sessionStorage.setItem("margin-live", "1");
    }
    nav(state?.from ?? "/dashboard", { replace: true });
  };

  return (
    <AuthShell title="Welcome" description="Access your account and continue your journey with us">
      <form onSubmit={submit} noValidate aria-busy={busy} className="rise-group flex flex-col gap-5">
        {state?.expired && <FormMessage tone="info">Your session expired. Log in again to continue.</FormMessage>}
        {state?.notice && <FormMessage tone="info">{state.notice}</FormMessage>}
        {formError && <FormMessage tone="error">{formError}</FormMessage>}
        {info && <FormMessage tone="info">{info}</FormMessage>}

        <Field id="email" label="Email Address" error={errors.email}>
          <Input
            ref={emailRef}
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="username"
            autoCapitalize="none"
            spellCheck={false}
            placeholder="Enter your email address"
            className={fieldClass}
            disabled={busy}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>

        <Field id="password" label="Password" error={errors.password}>
          <PasswordInput
            ref={pwRef}
            id="password"
            name="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            disabled={busy}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
          />
        </Field>

        <div className="flex items-center justify-between text-sm">
          <Checkbox checked={keep} onChange={setKeep} className="items-center font-medium">
            Keep me signed in
          </Checkbox>
          <Link to="/forgot-password" className={link}>Reset password</Link>
        </div>

        <button
          type="submit"
          disabled={busy}
          className={`flex h-11 w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-foreground text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-70 ${caps} ${busy ? "btn-sweep" : ""}`}
        >
          {busy && <Spinner className="border-background/30 border-t-background" />}
          {busy ? "Signing in" : "Sign In"}
        </button>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="h-px flex-1 bg-border" />
          Or continue with
          <span className="h-px flex-1 bg-border" />
        </div>

        <button
          type="button"
          onClick={() => setInfo("Google sign-in isn't set up. Use your email and password.")}
          className={`flex h-11 w-full cursor-pointer items-center justify-center gap-3 rounded-full border border-input bg-transparent transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${caps}`}
        >
          <GoogleG />
          Continue with Google
        </button>

        <p className="text-center text-sm text-muted-foreground">
          New to our platform?{" "}
          <button type="button" className={link} onClick={() => setInfo("Accounts are created by the site owner. Ask for yours.")}>
            Create Account
          </button>
        </p>
      </form>
    </AuthShell>
  );
}
