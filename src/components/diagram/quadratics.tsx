import { useState } from "react";
import katex from "katex";
import { roleColour } from "./toolkit";
import { cn } from "@/lib/utils";

const texInline = (t: string) => katex.renderToString(t, { throwOnError: false, strict: false });
const texDisplay = (t: string) => katex.renderToString(String.raw`\displaystyle ${t}`, { throwOnError: false, strict: false });

function MathTex({ tex, className }: { tex: string; className?: string }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: texInline(tex) }} />;
}

/**
 * Interactive geometric area model showing why x^2 + bx becomes (x + b/2)^2 - (b/2)^2.
 */
export function CompletingSquareVisual() {
  const [bVal, setBVal] = useState<4 | 6 | 8>(6);
  const halfB = bVal / 2;
  const sqCorner = halfB * halfB;

  const W = 560, H = 225;
  const x0 = 104, y0 = 32;
  const s = 110;
  const h = 44;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Area model for completing the square</span>
        <div className="flex gap-1.5">
          {([4, 6, 8] as const).map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBVal(b)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs tabular-nums transition-colors",
                b === bVal ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              x² + {b}x
            </button>
          ))}
        </div>
      </div>

      <svg
        role="img"
        aria-label={`Area model for x^2 + ${bVal}x showing corner square ${halfB}^2 = ${sqCorner}.`}
        viewBox={`0 0 ${W} ${H}`}
        className="mx-auto block h-auto w-full"
        style={{ maxWidth: W, background: "var(--dg-bg)", fontFamily: "var(--font-sans)" }}
      >
        <text x={x0 + s / 2} y={y0 - 12} fontSize={13} fontWeight={600} textAnchor="middle" fill={roleColour.result}>x</text>
        <text x={x0 + s + h / 2} y={y0 - 12} fontSize={13} fontWeight={600} textAnchor="middle" fill={roleColour.a}>{halfB}</text>

        <text x={x0 - 14} y={y0 + s / 2} fontSize={13} fontWeight={600} textAnchor="end" dominantBaseline="middle" fill={roleColour.result}>x</text>
        <text x={x0 - 14} y={y0 + s + h / 2} fontSize={13} fontWeight={600} textAnchor="end" dominantBaseline="middle" fill={roleColour.a}>{halfB}</text>

        <rect x={x0} y={y0} width={s} height={s} fill={roleColour.result} fillOpacity={0.14} stroke={roleColour.result} strokeWidth={1.6} />
        <text x={x0 + s / 2} y={y0 + s / 2} fontSize={15} fontWeight={600} textAnchor="middle" dominantBaseline="middle" fill="var(--dg-text)">x²</text>

        <rect x={x0 + s} y={y0} width={h} height={s} fill={roleColour.a} fillOpacity={0.14} stroke={roleColour.a} strokeWidth={1.6} />
        <text x={x0 + s + h / 2} y={y0 + s / 2} fontSize={13} fontWeight={600} textAnchor="middle" dominantBaseline="middle" fill="var(--dg-text)">{halfB}x</text>

        <rect x={x0} y={y0 + s} width={s} height={h} fill={roleColour.a} fillOpacity={0.14} stroke={roleColour.a} strokeWidth={1.6} />
        <text x={x0 + s / 2} y={y0 + s + h / 2} fontSize={13} fontWeight={600} textAnchor="middle" dominantBaseline="middle" fill="var(--dg-text)">{halfB}x</text>

        <rect x={x0 + s} y={y0 + s} width={h} height={h} fill={roleColour.b} fillOpacity={0.18} stroke={roleColour.b} strokeWidth={1.6} strokeDasharray="4 3" />
        <text x={x0 + s + h / 2} y={y0 + s + h / 2} fontSize={12.5} fontWeight={700} textAnchor="middle" dominantBaseline="middle" fill={roleColour.b}>{sqCorner}</text>

        <line x1={x0 + s + h + 6} y1={y0 + s + h / 2} x2={316} y2={y0 + s + h / 2} stroke={roleColour.b} strokeWidth={1.4} strokeDasharray="4 4" />
        <text x={324} y={y0 + s + h / 2 - 10} fontSize={12.5} fontWeight={600} fill={roleColour.b}>Missing corner: ({halfB})² = {sqCorner}</text>
        <text x={324} y={y0 + s + h / 2 + 10} fontSize={11.5} fill="var(--dg-line)">Add {sqCorner}, then subtract {sqCorner} back</text>
      </svg>

      <div
        className="border-t border-border bg-secondary/40 px-4 py-2.5 text-center text-[14px]"
        dangerouslySetInnerHTML={{
          __html: texDisplay(String.raw`x^{2} + ${bVal}x = (x + ${halfB})^{2} - ${sqCorner}`),
        }}
      />
    </figure>
  );
}

/**
 * Clean theme-aware diagram showing why completing the square reveals the vertex (-b/2a, c - b^2/4a).
 */
export function ParabolaVertexVisual() {
  const W = 400, H = 205;
  const ox = 100, oy = 148, sx = 42, sy = 24;
  // y = (x - 3)^2 - 1 = x^2 - 6x + 8
  const pts: string[] = [];
  for (let x = 0.2; x <= 5.8; x += 0.1) {
    const y = (x - 3) * (x - 3) - 1;
    const px = ox + x * sx;
    const py = oy - y * sy;
    if (py >= 10 && py <= H - 10) pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }
  const vx = ox + 3 * sx;
  const vy = oy - (-1) * sy;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-2.5 text-xs font-medium text-foreground">
        Completed square directly locates the turning point: y = (x − 3)² − 1
      </div>
      <div className="p-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[400px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <line x1={30} y1={oy} x2={W - 22} y2={oy} stroke="var(--dg-line)" strokeWidth={1.2} />
          <line x1={ox} y1={14} x2={ox} y2={H - 14} stroke="var(--dg-line)" strokeWidth={1.2} />

          {[1, 2, 3, 4, 5].map((u) => (
            <text key={u} x={ox + u * sx} y={oy + 13} fontSize={9.5} textAnchor="middle" fill="var(--dg-line)">{u}</text>
          ))}
          <text x={ox - 7} y={oy - 3 * sy + 3} fontSize={9.5} textAnchor="end" fill="var(--dg-line)">3</text>
          <text x={ox - 7} y={oy + 1 * sy + 3} fontSize={9.5} textAnchor="end" fill="var(--dg-line)">−1</text>

          {/* Axis of symmetry x = 3 */}
          <line x1={vx} y1={14} x2={vx} y2={H - 14} stroke={roleColour.b} strokeWidth={1.4} strokeDasharray="4 4" />
          <text x={vx + 6} y={28} fontSize={10.5} fontWeight={600} fill={roleColour.b}>x = 3</text>

          <polyline points={pts.join(" ")} fill="none" stroke={roleColour.a} strokeWidth={2.4} strokeLinecap="round" />

          {/* Roots (2; 0) and (4; 0) */}
          <circle cx={ox + 2 * sx} cy={oy} r={3.8} fill={roleColour.a} />
          <circle cx={ox + 4 * sx} cy={oy} r={3.8} fill={roleColour.a} />

          {/* Vertex (3; -1) */}
          <circle cx={vx} cy={vy} r={5} fill={roleColour.result} />
          <text x={vx + 9} y={vy + 14} fontSize={11} fontWeight={700} fill={roleColour.result}>Vertex (3; −1)</text>
        </svg>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Because <MathTex tex="(x - 3)^2 \geq 0" /> for every real <MathTex tex="x" />, the smallest possible output is <MathTex tex="-1" />, achieved right when <MathTex tex="x = 3" />.
        </p>
      </div>
    </figure>
  );
}

const DISC_CASES = [
  {
    id: "pos",
    label: "Δ > 0",
    eq: "y = x^{2} - 4x + 3",
    delta: "(-4)^2 - 4(1)(3) = 4 > 0",
    roots: "Two distinct real roots: x = 1 or x = 3",
    cVal: 3,
    vx: 2,
    vy: -1,
    color: roleColour.result,
  },
  {
    id: "zero",
    label: "Δ = 0",
    eq: "y = x^{2} - 4x + 4",
    delta: "(-4)^2 - 4(1)(4) = 0",
    roots: "One repeated real root (touches axis): x = 2",
    cVal: 4,
    vx: 2,
    vy: 0,
    color: roleColour.a,
  },
  {
    id: "neg",
    label: "Δ < 0",
    eq: "y = x^{2} - 4x + 6",
    delta: "(-4)^2 - 4(1)(6) = -8 < 0",
    roots: "No real roots (stays strictly above the x-axis)",
    cVal: 6,
    vx: 2,
    vy: 2,
    color: roleColour.b,
  },
] as const;

/**
 * Interactive explorer connecting the discriminant Δ = b^2 - 4ac to true coordinate parabola intercepts.
 */
export function DiscriminantExplorer() {
  const [idx, setIdx] = useState(0);
  const c = DISC_CASES[idx];

  const W = 380, H = 195;
  const ox = 86, oy = 142, sx = 52, sy = 24;
  const pts: string[] = [];
  for (let x = -0.3; x <= 4.3; x += 0.08) {
    const y = x * x - 4 * x + c.cVal;
    const px = ox + x * sx;
    const py = oy - y * sy;
    if (py >= 10 && py <= H - 8) pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Discriminant and x-intercepts</span>
        <div className="flex gap-1.5">
          {DISC_CASES.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIdx(i)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                i === idx ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[360px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <clipPath id="disc-clip"><rect x={16} y={8} width={W - 24} height={H - 16} /></clipPath>
          <line x1={22} y1={oy} x2={W - 18} y2={oy} stroke="var(--dg-line)" strokeWidth={1.3} />
          <line x1={ox} y1={12} x2={ox} y2={H - 12} stroke="var(--dg-line)" strokeWidth={1.3} />

          {[1, 2, 3, 4].map((u) => (
            <text key={u} x={ox + u * sx} y={oy + 14} fontSize={9.5} textAnchor="middle" fill="var(--dg-line)">{u}</text>
          ))}
          {[-1, 2, 4].map((v) => (
            <text key={v} x={ox - 7} y={oy - v * sy + 3} fontSize={9.5} textAnchor="end" fill="var(--dg-line)">{v}</text>
          ))}

          <g clipPath="url(#disc-clip)">
            <polyline points={pts.join(" ")} fill="none" stroke={c.color} strokeWidth={2.5} strokeLinecap="round" />
          </g>

          {c.id === "pos" && (
            <>
              <circle cx={ox + 1 * sx} cy={oy} r={4.5} fill={c.color} />
              <circle cx={ox + 3 * sx} cy={oy} r={4.5} fill={c.color} />
            </>
          )}
          {c.id === "zero" && <circle cx={ox + 2 * sx} cy={oy} r={4.5} fill={c.color} />}
          <circle cx={ox + c.vx * sx} cy={oy - c.vy * sy} r={4} fill={c.color} />
          <text
            x={ox + c.vx * sx}
            y={c.id === "pos" ? oy - c.vy * sy + 16 : oy - c.vy * sy - 10}
            fontSize={10.5}
            fontWeight={600}
            textAnchor="middle"
            fill={c.color}
            style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}
          >
            ({c.vx}; {c.vy})
          </text>
        </svg>

        <div className="space-y-2 text-xs">
          <div className="overflow-x-auto text-sm text-foreground">
            <MathTex tex={c.eq} />
          </div>
          <div className="overflow-x-auto text-muted-foreground">
            <MathTex tex={`\\Delta = ${c.delta}`} />
          </div>
          <p className="font-medium text-foreground">{c.roots}</p>
        </div>
      </div>
    </figure>
  );
}

/**
 * Interactive parabola + sign-line diagram with strict vs inclusive (open vs solid dots).
 */
export function InequalitySignVisual() {
  const [ineq, setIneq] = useState<"gt" | "ge" | "lt" | "le">("gt");
  const isPositive = ineq === "gt" || ineq === "ge";
  const isInclusive = ineq === "ge" || ineq === "le";

  const W = 450, H = 205;
  const cx = 225, axisY = 104, vertexY = 148;
  const k = (20 - vertexY) / 14400;
  const rOff = Math.sqrt((axisY - vertexY) / k);
  const r1 = cx - rOff, r2 = cx + rOff;
  const pts: string[] = [];
  for (let dx = -130; dx <= 130; dx += 5) {
    pts.push(`${cx + dx},${(vertexY + k * dx * dx).toFixed(1)}`);
  }

  const lineY = 180;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Reading signs from the parabola &amp; number line</span>
        <div className="flex flex-wrap gap-1">
          {(
            [
              ["gt", "> 0"],
              ["ge", "≥ 0"],
              ["lt", "< 0"],
              ["le", "≤ 0"],
            ] as const
          ).map(([id, sym]) => (
            <button
              key={id}
              type="button"
              onClick={() => setIneq(id)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs transition-colors",
                ineq === id ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              (x+2)(x−3) {sym}
            </button>
          ))}
        </div>
      </div>

      <div className="p-3">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[450px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <line x1={28} y1={axisY} x2={W - 28} y2={axisY} stroke="var(--dg-line)" strokeWidth={1.3} />
          {isPositive ? (
            <>
              <line x1={38} y1={axisY} x2={r1} y2={axisY} stroke={roleColour.result} strokeWidth={4} />
              <line x1={r2} y1={axisY} x2={W - 38} y2={axisY} stroke={roleColour.result} strokeWidth={4} />
            </>
          ) : (
            <line x1={r1} y1={axisY} x2={r2} y2={axisY} stroke={roleColour.result} strokeWidth={4} />
          )}

          <polyline points={pts.join(" ")} fill="none" stroke={roleColour.a} strokeWidth={2.2} strokeLinecap="round" />

          <text x={85} y={64} fontSize={14} fontWeight={700} textAnchor="middle" fill={isPositive ? roleColour.result : "var(--dg-line)"}>+</text>
          <text x={cx} y={132} fontSize={15} fontWeight={700} textAnchor="middle" fill={!isPositive ? roleColour.result : "var(--dg-line)"}>−</text>
          <text x={W - 85} y={64} fontSize={14} fontWeight={700} textAnchor="middle" fill={isPositive ? roleColour.result : "var(--dg-line)"}>+</text>

          <circle cx={r1} cy={axisY} r={5} fill={isInclusive ? roleColour.result : "var(--dg-bg)"} stroke={roleColour.result} strokeWidth={2.2} />
          <circle cx={r2} cy={axisY} r={5} fill={isInclusive ? roleColour.result : "var(--dg-bg)"} stroke={roleColour.result} strokeWidth={2.2} />
          <text x={r1} y={axisY + 19} fontSize={11.5} fontWeight={600} textAnchor="middle" fill="var(--dg-text)">−2</text>
          <text x={r2} y={axisY + 19} fontSize={11.5} fontWeight={600} textAnchor="middle" fill="var(--dg-text)">3</text>

          {/* Synchronized 1D sign line below */}
          <line x1={38} y1={lineY} x2={W - 38} y2={lineY} stroke="var(--dg-line)" strokeWidth={1.2} />
          {isPositive ? (
            <>
              <line x1={38} y1={lineY} x2={r1} y2={lineY} stroke={roleColour.result} strokeWidth={3.5} />
              <line x1={r2} y1={lineY} x2={W - 38} y2={lineY} stroke={roleColour.result} strokeWidth={3.5} />
            </>
          ) : (
            <line x1={r1} y1={lineY} x2={r2} y2={lineY} stroke={roleColour.result} strokeWidth={3.5} />
          )}
          <circle cx={r1} cy={lineY} r={4.5} fill={isInclusive ? roleColour.result : "var(--dg-bg)"} stroke={roleColour.result} strokeWidth={2} />
          <circle cx={r2} cy={lineY} r={4.5} fill={isInclusive ? roleColour.result : "var(--dg-bg)"} stroke={roleColour.result} strokeWidth={2} />
          <text x={r1} y={lineY + 16} fontSize={10.5} textAnchor="middle" fill="var(--dg-line)">−2</text>
          <text x={r2} y={lineY + 16} fontSize={10.5} textAnchor="middle" fill="var(--dg-line)">3</text>
        </svg>

        <p className="mt-2 text-center text-xs text-muted-foreground">
          {isPositive ? (
            <>
              Above the axis (<MathTex tex="+" />): <span className="font-medium text-foreground"><MathTex tex={isInclusive ? "x \\leq -2 \\;\\text{ or }\\; x \\geq 3" : "x < -2 \\;\\text{ or }\\; x > 3"} /></span> ({isInclusive ? "solid dots include critical values" : "open dots exclude critical values"}).
            </>
          ) : (
            <>
              Below the axis (<MathTex tex="-" />): <span className="font-medium text-foreground"><MathTex tex={isInclusive ? "-2 \\leq x \\leq 3" : "-2 < x < 3"} /></span> ({isInclusive ? "solid dots include critical values" : "open dots exclude critical values"}).
            </>
          )}
        </p>
      </div>
    </figure>
  );
}

const LINE_PARA_CASES = [
  {
    id: "two",
    label: "2 hits (Δ > 0): y = x + 1",
    eqLine: (x: number) => x + 1,
    points: [
      { x: -1, y: 0, label: "(−1; 0)" },
      { x: 2, y: 3, label: "(2; 3)" },
    ],
    desc: "Substituting g(x) = f(x) gives x² − x − 2 = 0 (Δ = 9 > 0): the line cuts the parabola at two points.",
  },
  {
    id: "one",
    label: "Tangent (Δ = 0): y = 4",
    eqLine: (_x: number) => 4,
    points: [{ x: 1, y: 4, label: "(1; 4)" }],
    desc: "Setting −x² + 2x + 3 = 4 gives (x − 1)² = 0 (Δ = 0): the line kisses the vertex once.",
  },
  {
    id: "zero",
    label: "Miss (Δ < 0): y = 5",
    eqLine: (_x: number) => 5,
    points: [],
    desc: "Setting −x² + 2x + 3 = 5 gives x² − 2x + 2 = 0 (Δ = −4 < 0): no real intersection.",
  },
] as const;

/**
 * Interactive graph connecting linear-quadratic intersection count to the discriminant Δ.
 */
export function LineParabolaIntersectionVisual() {
  const [idx, setIdx] = useState(0);
  const c = LINE_PARA_CASES[idx];

  const W = 400, H = 205;
  const ox = 152, oy = 148, sx = 40, sy = 22;

  const paraPts: string[] = [];
  for (let x = -1.6; x <= 3.6; x += 0.08) {
    const y = -x * x + 2 * x + 3;
    const py = oy - y * sy;
    if (py >= 10 && py <= H - 8) paraPts.push(`${(ox + x * sx).toFixed(1)},${py.toFixed(1)}`);
  }

  const lx1 = -2, lx2 = 4.2;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Intersections of f(x) = −x² + 2x + 3 and g(x)</span>
        <div className="flex flex-wrap gap-1.5">
          {LINE_PARA_CASES.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIdx(i)}
              className={cn(
                "rounded-md px-2 py-1 text-xs transition-colors",
                i === idx ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[400px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <clipPath id="lp-clip"><rect x={16} y={8} width={W - 24} height={H - 16} /></clipPath>
          <line x1={22} y1={oy} x2={W - 18} y2={oy} stroke="var(--dg-line)" strokeWidth={1.2} />
          <line x1={ox} y1={12} x2={ox} y2={H - 12} stroke="var(--dg-line)" strokeWidth={1.2} />

          {[-1, 1, 2, 3].map((u) => (
            <text key={u} x={ox + u * sx} y={oy + 14} fontSize={9.5} textAnchor="middle" fill="var(--dg-line)">{u}</text>
          ))}
          {[2, 4].map((v) => (
            <text key={v} x={ox - 7} y={oy - v * sy + 3} fontSize={9.5} textAnchor="end" fill="var(--dg-line)">{v}</text>
          ))}

          <g clipPath="url(#lp-clip)">
            <polyline points={paraPts.join(" ")} fill="none" stroke={roleColour.a} strokeWidth={2.4} strokeLinecap="round" />
            <line
              x1={ox + lx1 * sx}
              y1={oy - c.eqLine(lx1) * sy}
              x2={ox + lx2 * sx}
              y2={oy - c.eqLine(lx2) * sy}
              stroke={roleColour.b}
              strokeWidth={2}
            />
          </g>

          {c.points.map((pt) => (
            <g key={pt.label}>
              <circle cx={ox + pt.x * sx} cy={oy - pt.y * sy} r={4.8} fill={roleColour.result} />
              <text
                x={ox + pt.x * sx + 8}
                y={oy - pt.y * sy - 9}
                fontSize={11}
                fontWeight={700}
                fill={roleColour.result}
                style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}
              >
                {pt.label}
              </text>
            </g>
          ))}
        </svg>
        <p className="mt-2 text-center text-xs text-muted-foreground">{c.desc}</p>
      </div>
    </figure>
  );
}
