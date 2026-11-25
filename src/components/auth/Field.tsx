import type { ReactNode } from "react";
import { Note } from "@/components/ui/note";

/** Shared look for the sign-in inputs (rounded, softly filled). */
export const fieldClass =
  "h-11 rounded-2xl border-input bg-background px-4 text-sm transition-colors placeholder:text-muted-foreground/60 hover:border-muted-foreground/60 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0";

/** Label + control + inline error, wired together for screen readers. */
export default function Field({ id, label, error, children }: { id: string; label: string; error?: string | null; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-muted-foreground">{label}</label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function FormMessage({ tone, children }: { tone: "error" | "info"; children: ReactNode }) {
  return <Note ok={tone === "info"} className="mt-0">{children}</Note>;
}

