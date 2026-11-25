import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { kicker } from "@/lib/styles";

/* Page building blocks in the New Forge style: thin dividers instead of boxes, small spaced-capital labels. */

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** A number that counts up to its value when it first appears. */
export function useCount(target: number, ms = 800) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (reduced()) return setV(target);
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / ms);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return v;
}

/** True shortly after mount, so bars can grow from zero. */
export function useReady(delay = 60) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return ready;
}

/** Title block at the top of a page. */
export function PageHead({ kicker: k, title, sub, children }: { kicker?: ReactNode; title: ReactNode; sub?: ReactNode; children?: ReactNode }) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
      <div className="min-w-0">
        {k && <p className={kicker}>{k}</p>}
        <h1 className="mt-1.5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h1>
        {sub && <p className="mt-1 text-sm text-muted-foreground">{sub}</p>}
      </div>
      {children && <div className="flex flex-wrap items-center gap-1.5">{children}</div>}
    </header>
  );
}

/** A labelled module: a thin divider above, no box. */
export function Mod({ title, link, to, span = "", children, className }: { title: string; link?: string; to?: string; span?: string; children: ReactNode; className?: string }) {
  return (
    <section className={cn("min-w-0 border-t border-border pt-4", span, className)}>
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h2 className={kicker}>{title}</h2>
        {link && to ? (
          <Link to={to} className="inline-flex items-center gap-1 text-[11px] text-muted-foreground transition-colors hover:text-foreground">
            {link}
            <ArrowUpRight aria-hidden="true" className="size-3" />
          </Link>
        ) : null}
      </div>
      {children}
    </section>
  );
}

/** A stat: small label, big number that counts up. */
export function Stat({ k, value, suffix = "", note, bad, to }: { k: string; value: number; suffix?: string; note?: string; bad?: boolean; to?: string }) {
  const n = useCount(value);
  const body = (
    <>
      <dt className={kicker}>{k}</dt>
      <dd className={cn("mt-1 text-3xl font-semibold tabular-nums tracking-tight", bad && value > 0 && "text-destructive")}>
        {n}
        {suffix}
      </dd>
      {note ? <p className="mt-0.5 truncate text-xs text-muted-foreground">{note}</p> : null}
    </>
  );
  return to ? (
    <Link to={to} className="block rounded-md transition-opacity hover:opacity-80">{body}</Link>
  ) : (
    <div>{body}</div>
  );
}

/** A calm empty state: icon, one line, one hint. */
export function Quiet({ icon, title, note, to, action }: { icon: ReactNode; title: string; note?: string; to?: string; action?: string }) {
  return (
    <div className="flex items-start gap-2.5 text-muted-foreground">
      <span aria-hidden="true" className="mt-0.5 grid size-4 place-items-center">{icon}</span>
      <div>
        <p className="text-[13px] font-medium text-foreground/80">{title}</p>
        {note && <p className="mt-0.5 text-xs leading-5">{note}</p>}
        {to && action && <Link to={to} className="mt-1 inline-block text-xs font-medium text-primary hover:underline">{action}</Link>}
      </div>
    </div>
  );
}

/** A thin progress bar that grows in. */
export function Meter({ pct, color = "var(--primary)", className }: { pct: number; color?: string; className?: string }) {
  const ready = useReady();
  return (
    <div className={cn("h-1.5 w-full overflow-hidden rounded-full bg-secondary", className)} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full transition-[width] duration-700 ease-out motion-reduce:transition-none" style={{ width: ready ? `${pct}%` : "0%", background: color }} />
    </div>
  );
}

/** A progress ring that draws itself in. Put text in the middle with children. */
export function Ring({ value, max, size = 112, stroke = 8, children }: { value: number; max: number; size?: number; stroke?: number; children?: ReactNode }) {
  const ready = useReady();
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const frac = Math.min(1, max > 0 ? value / max : 0);
  return (
    <div className="relative grid shrink-0 place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--secondary)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--primary)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={ready ? c * (1 - frac) : c}
          className="transition-[stroke-dashoffset] duration-1000 ease-out motion-reduce:transition-none"
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">{children}</div>
    </div>
  );
}
