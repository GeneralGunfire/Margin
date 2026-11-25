import { useId } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

/** Margin mark: a blue-indigo gradient tile with a subtle margin rule and crisp geometric M. */
export function LogoMark({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const bgId = `margin-bg-${uid}`;
  const mId = `margin-m-${uid}`;
  return (
    <svg viewBox="0 0 40 40" className={cn("size-9 shrink-0", className)} aria-hidden="true">
      <defs>
        <linearGradient id={bgId} x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="52%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id={mId} x1="24" y1="11.5" x2="24" y2="28.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0efff" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10.5" fill={`url(#${bgId})`} />
      <rect x="0.5" y="0.5" width="39" height="39" rx="10" fill="none" stroke="white" strokeOpacity="0.2" />
      <path d="M9.5 8v24" stroke="white" strokeOpacity="0.4" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M15 28.5V11.5h3.05L24 20.1l5.95-8.6H33v17h-2.95V16.65L24.8 24.3h-1.6l-5.25-7.65V28.5H15Z"
        fill={`url(#${mId})`}
      />
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
