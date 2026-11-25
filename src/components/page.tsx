import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { kicker } from "@/lib/styles";

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

/** Clean editorial page header matching Dashboard and LessonPage. */
export function PageHead({ kicker: k, title, sub, children }: { kicker?: ReactNode; title: ReactNode; sub?: ReactNode; children?: ReactNode }) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
      <div className="min-w-0">
        {k && <p className="text-xs text-muted-foreground">{k}</p>}
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h1>
        {sub && <p className="mt-1.5 max-w-2xl text-xs text-muted-foreground sm:text-[13px]">{sub}</p>}
      </div>
      {children && <div className="flex flex-wrap items-center gap-2">{children}</div>}
    </header>
  );
}

/** Calm architectural surface module with generous padding and optional header link. */
export function Mod({ title, link, to, span = "", children, className }: { title: string; link?: string; to?: string; span?: string; children: ReactNode; className?: string }) {
  return (
    <section className={cn("min-w-0 rounded-2xl border border-border/80 bg-card/45 p-5 sm:p-6", span, className)}>
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h2 className={kicker}>{title}</h2>
        {link && to ? (
          <Link to={to} className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground">
            {link}
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </Link>
        ) : null}
      </div>
      {children}
    </section>
  );
}

/** Clean metric tile: quiet kicker, light display number, short note. */
export function Stat({ k, value, suffix = "", note, bad, to }: { k: string; value: number; suffix?: string; note?: string; bad?: boolean; to?: string }) {
  const n = useCount(value);
  const body = (
    <div className="rounded-2xl border border-border/75 bg-card/40 p-5 transition-colors hover:border-border">
      <dt className={kicker}>{k}</dt>
      <dd className={cn("mt-2 text-3xl font-light tabular-nums tracking-tight sm:text-4xl", bad && value > 0 && "text-destructive")}>
        {n}
        <span className="text-xl text-muted-foreground">{suffix}</span>
      </dd>
      {note ? <p className="mt-1.5 truncate text-xs text-muted-foreground">{note}</p> : null}
    </div>
  );
  return to ? (
    <Link to={to} className="block rounded-2xl transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0">{body}</Link>
  ) : (
    <div>{body}</div>
  );
}

/** A calm empty state: icon, one line, one hint. */
export function Quiet({ icon, title, note, to, action }: { icon: ReactNode; title: string; note?: string; to?: string; action?: string }) {
  return (
    <div className="flex items-start gap-3 text-muted-foreground">
      <span aria-hidden="true" className="mt-0.5 grid size-5 shrink-0 place-items-center text-muted-foreground/80">{icon}</span>
      <div>
        <p className="text-sm font-medium text-foreground/85">{title}</p>
        {note && <p className="mt-0.5 text-xs leading-5">{note}</p>}
        {to && action && <Link to={to} className="mt-2 inline-block text-xs font-medium text-primary hover:underline">{action}</Link>}
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
export function Ring({ value, max, size = 112, stroke = 7, children }: { value: number; max: number; size?: number; stroke?: number; children?: ReactNode }) {
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
