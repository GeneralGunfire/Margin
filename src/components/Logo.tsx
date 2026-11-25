import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

/** Margin mark: a tile with a margin rule and an M. Inherits the primary colour. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("size-9 shrink-0", className)} aria-hidden="true">
      <rect width="40" height="40" rx="11" className="fill-primary" />
      <path d="M11.5 7.5v25" stroke="white" strokeOpacity=".45" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 28V13l5 8.5L26 13v15" fill="none" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Logo({ to = "/dashboard", className }: { to?: string; className?: string }) {
  return (
    <Link to={to} aria-label="Margin" className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark />
      <span className="text-lg font-semibold tracking-tight">Margin</span>
    </Link>
  );
}
