import { createContext, useContext, type ReactNode } from "react";

/**
 * Diagram toolkit (reusable by any subject). Pure SVG, coloured only through CSS variables
 * from index.css (--dg-*, --vec-*) so diagrams follow the theme in dark and light mode.
 * Line weights: vectors 2.5, axes and construction lines 1.5. Arrowheads are markers
 * coloured per role. No red.
 *
 * Coordinates are SVG user units: x to the right, y DOWN.
 */
export type Role = "a" | "b" | "result" | "aux";
export const roleColour: Record<Role, string> = {
  a: "var(--vec-a)",
  b: "var(--vec-b)",
  result: "var(--vec-result)",
  aux: "var(--vec-aux)",
};
export type P = readonly [number, number];
export const W = { vector: 2.5, line: 1.5 };

const DiagramCtx = createContext("d");

/** Wrapper: title + description for screen readers, background matches the page, scales to width. */
export function Diagram({ width, height, title, desc, caption, children }: { width: number; height: number; title: string; desc: string; caption?: string; children: ReactNode }) {
  const id = "dg-" + title.replace(/\W+/g, "-").toLowerCase();
  return (
    <figure className="my-6 overflow-hidden rounded-xl border border-border" style={{ background: "var(--dg-bg)" }}>
      <svg role="img" aria-labelledby={`${id}-t ${id}-d`} viewBox={`0 0 ${width} ${height}`} className="mx-auto block h-auto w-full" style={{ maxWidth: width, fontFamily: "var(--font-sans)" }}>
        <title id={`${id}-t`}>{title}</title>
        <desc id={`${id}-d`}>{desc}</desc>
        <defs>
          {(Object.keys(roleColour) as Role[]).map((r) => (
            <marker key={r} id={`${id}-ah-${r}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill={roleColour[r]} />
            </marker>
          ))}
        </defs>
        <DiagramCtx.Provider value={id}>{children}</DiagramCtx.Provider>
      </svg>
      {caption && <figcaption className="border-t border-border px-4 py-2 text-[12px] text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}

/** Arrow from tail to head. */
export function Arrow({ from, to, role = "aux", dashed, width = W.vector }: { from: P; to: P; role?: Role; dashed?: boolean; width?: number }) {
  const id = useContext(DiagramCtx);
  return <line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} stroke={roleColour[role]} strokeWidth={width} strokeDasharray={dashed ? "6 5" : undefined} strokeLinecap="round" markerEnd={`url(#${id}-ah-${role})`} />;
}

export function Line({ from, to, dashed, colour = "var(--dg-line)" }: { from: P; to: P; dashed?: boolean; colour?: string }) {
  return <line x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} stroke={colour} strokeWidth={W.line} strokeDasharray={dashed ? "5 5" : undefined} strokeLinecap="round" />;
}

/** Text label with a background-coloured halo so it stays readable over lines. `sub` adds a subscript. */
export function Label({ at, children, role, anchor = "middle", size = 15, sub, weight }: { at: P; children: ReactNode; role?: Role; anchor?: "start" | "middle" | "end"; size?: number; sub?: string; weight?: number }) {
  return (
    <text x={at[0]} y={at[1]} textAnchor={anchor} dominantBaseline="middle" fontSize={size} fontWeight={weight} fill={role ? roleColour[role] : "var(--dg-text)"} style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4, strokeLinejoin: "round" }}>
      {children}
      {sub && <tspan fontSize={size * 0.72} dy={size * 0.28}>{sub}</tspan>}
    </text>
  );
}

export function unit(a: P, b: P): P {
  const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1;
  return [dx / l, dy / l];
}

/** Point at fraction t from `from` to `to`, pushed sideways by `off` px (for labels beside a vector). */
export function along(from: P, to: P, t = 0.5, off = 0): P {
  const d = unit(from, to);
  return [from[0] + (to[0] - from[0]) * t - d[1] * off, from[1] + (to[1] - from[1]) * t + d[0] * off];
}

/** Small square marking a right angle at `corner`, between the directions to `a` and `b`. */
export function RightAngle({ corner, a, b, size = 13 }: { corner: P; a: P; b: P; size?: number }) {
  const u = unit(corner, a), v = unit(corner, b);
  const p1: P = [corner[0] + u[0] * size, corner[1] + u[1] * size];
  const p3: P = [corner[0] + v[0] * size, corner[1] + v[1] * size];
  const p2: P = [p1[0] + v[0] * size, p1[1] + v[1] * size];
  return <path d={`M${p1.join(",")} L${p2.join(",")} L${p3.join(",")}`} fill="none" stroke="var(--dg-line)" strokeWidth={W.line} />;
}

/** Arc at `centre` sweeping the smaller angle between the directions to `a` and `b`. */
export function AngleArc({ centre, a, b, r = 34, role = "aux" }: { centre: P; a: P; b: P; r?: number; role?: Role }) {
  const u = unit(centre, a), v = unit(centre, b);
  const s: P = [centre[0] + u[0] * r, centre[1] + u[1] * r];
  const e: P = [centre[0] + v[0] * r, centre[1] + v[1] * r];
  const cross = u[0] * v[1] - u[1] * v[0];
  return <path d={`M${s.join(",")} A${r},${r} 0 0 ${cross > 0 ? 1 : 0} ${e.join(",")}`} fill="none" stroke={roleColour[role]} strokeWidth={W.line} />;
}

/** x and y axes with arrowheads and labels. `origin` in SVG coords; lengths in px. */
export function Axes({ origin, right, up, left = 0, down = 0, xLabel = "x", yLabel = "y" }: { origin: P; right: number; up: number; left?: number; down?: number; xLabel?: string; yLabel?: string }) {
  const [ox, oy] = origin;
  return (
    <g>
      <Arrow from={[ox - left, oy]} to={[ox + right, oy]} width={W.line} />
      <Arrow from={[ox, oy + down]} to={[ox, oy - up]} width={W.line} />
      <Label at={[ox + right - 4, oy + 16]} anchor="end">{xLabel}</Label>
      <Label at={[ox + 12, oy - up + 4]} anchor="start">{yLabel}</Label>
    </g>
  );
}

/** Compass rose (N, E, S, W) for direction questions. */
export function Compass({ at, size = 22 }: { at: P; size?: number }) {
  const [x, y] = at;
  return (
    <g>
      <Arrow from={[x, y + size]} to={[x, y - size]} width={W.line} />
      <Line from={[x - size, y]} to={[x + size, y]} />
      <Label at={[x, y - size - 12]} size={13} weight={600}>N</Label>
      <Label at={[x, y + size + 12]} size={13}>S</Label>
      <Label at={[x + size + 11, y]} size={13}>E</Label>
      <Label at={[x - size - 11, y]} size={13}>W</Label>
    </g>
  );
}

/** Marked placeholder for something needing a real interactive widget (listed in content/NEEDS_INTERACTIVE.md). */
export function InteractivePlaceholder({ title, note }: { title: string; note: string }) {
  return (
    <aside className="my-6 rounded-xl border border-dashed border-muted-foreground/50 px-4 py-3" data-needs-interactive="true">
      <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">Interactive diagram coming: {title}</p>
      <p className="mt-1 text-[13px] text-muted-foreground">{note}</p>
    </aside>
  );
}
