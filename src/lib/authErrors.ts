import type { AuthError } from "@supabase/supabase-js";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Turns a Supabase auth error into one calm sentence.
 * Wrong email and wrong password deliberately share one message.
 */
export function loginErrorMessage(error: AuthError): string {
  const msg = (error.message || "").toLowerCase();
  const status = error.status;
  if (status === 429 || msg.includes("rate limit") || msg.includes("too many")) {
    return "Too many attempts. Wait a minute, then try again.";
  }
  if (status === 0 || status === undefined || msg.includes("fetch") || msg.includes("network")) {
    return "Can't reach the server. Check your connection and try again.";
  }
  if (status && status >= 500) return "Margin is having trouble right now. Try again in a moment.";
  return "Email or password is incorrect";
}

/** Rough strength hint for the reset page: 0 (too short) to 3 (strong). */
export function passwordStrength(pw: string): { score: 0 | 1 | 2 | 3; label: string } {
  if (pw.length < 8) return { score: 0, label: "Use at least 8 characters" };
  let points = 0;
  if (pw.length >= 12) points++;
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) points++;
  if (/\d/.test(pw)) points++;
  if (/[^A-Za-z0-9]/.test(pw)) points++;
  if (points <= 1) return { score: 1, label: "Okay. Add numbers, capitals or symbols" };
  if (points === 2) return { score: 2, label: "Good" };
  return { score: 3, label: "Strong" };
}
