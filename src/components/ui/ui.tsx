import * as React from "react";
import { cn, textOn } from "@/lib/utils";
import { Note } from "./note";

/* Small shadcn-style primitives. Restyle here; pages only compose these. */

export { Button } from "./button";

const field =
  "h-9 w-full rounded-md border bg-transparent px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...p }, ref) => <input ref={ref} className={cn(field, className)} {...p} />,
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...p }, ref) => <textarea ref={ref} className={cn(field, "h-auto py-2", className)} {...p} />,
);
Textarea.displayName = "Textarea";

export function Label({ className, ...p }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("text-sm font-medium", className)} {...p} />;
}

export function Card({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-lg border bg-card text-card-foreground p-4", className)} {...p} />;
}
export function CardTitle({ className, ...p }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("mb-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase", className)} {...p} />;
}

export function PageHeader({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {children}
    </div>
  );
}

/** Coloured subject chip. Optional `label` (e.g. "Algebra") is shown after the name. */
export function SubjectTag({ name, color, label }: { name: string; color: string; label?: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium"
      style={{ background: color, color: textOn(color) }}
    >
      {name}
      {label ? ` · ${label}` : ""}
    </span>
  );
}

export function ProgressBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

export function Notice({ children, tone = "error" }: { children: React.ReactNode; tone?: "error" | "info" }) {
  if (tone === "error") return <Note className="mt-0">{children}</Note>;
  return <p className="rounded-md border px-3 py-2 text-sm text-muted-foreground">{children}</p>;
}



