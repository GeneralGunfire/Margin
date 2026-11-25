import { useState } from "react";
import katex from "katex";
import { roleColour } from "./toolkit";
import { cn } from "@/lib/utils";

const texInline = (t: string) => katex.renderToString(t, { throwOnError: false, strict: false });
function MathTex({ tex, className }: { tex: string; className?: string }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: texInline(tex) }} />;
}

function ParamGroup<T extends string | number>({
  label,
  options,
  value,
  onChange,
  format = (v) => String(v),
}: {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
  format?: (v: T) => string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 text-xs">
      <span className="w-8 font-medium text-muted-foreground">{label}</span>
      <div className="flex flex-wrap gap-1">
        {options.map((opt) => (
          <button
            key={String(opt)}
            type="button"
            onClick={() => onChange(opt)}
            className={cn(
              "rounded px-2 py-0.5 text-xs tabular-nums transition-colors",
              opt === value ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            {format(opt)}
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * Interactive explorer for y = a(x + p)^2 + q with grid ticks, clipPath, parent ghost toggle, and y-intercept.
 */
export function ParabolaExplorer() {
  const [a, setA] = useState<number>(1);
  const [p, setP] = useState<number>(-1);
  const [q, setQ] = useState<number>(-2);
  const [showParent, setShowParent] = useState<boolean>(true);

  const W = 360, H = 240;
  const cx = W / 2, cy = H / 2;
  const scale = 22;

  const vx = -p;
  const vy = q;
  const pts: string[] = [];
  const parentPts: string[] = [];
  for (let x = -7.5; x <= 7.5; x += 0.15) {
    const y = a * (x + p) * (x + p) + q;
    const sx = cx + x * scale;
    const sy = cy - y * scale;
    if (sy >= -25 && sy <= H + 25) pts.push(`${sx.toFixed(1)},${sy.toFixed(1)}`);

    const py = x * x;
    const psy = cy - py * scale;
    if (psy >= -25 && psy <= H + 25) parentPts.push(`${sx.toFixed(1)},${psy.toFixed(1)}`);
  }

  const vxPx = cx + vx * scale;
  const vyPx = cy - vy * scale;
  const yIntVal = a * p * p + q;
  const yIntPx = cy - yIntVal * scale;
  const pSign = p === 0 ? "" : p > 0 ? `+ ${p}` : `- ${Math.abs(p)}`;
  const qSign = q === 0 ? "" : q > 0 ? `+ ${q}` : `- ${Math.abs(q)}`;
  const aStr = a === 1 ? "" : a === -1 ? "-" : String(a);
  const eq = p === 0 ? `y = ${aStr}x^{2} ${qSign}` : `y = ${aStr}(x ${pSign})^{2} ${qSign}`;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Parabola parameter explorer</span>
        <span className="text-sm font-medium text-primary">
          <MathTex tex={eq} />
        </span>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[1fr_230px]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[360px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <clipPath id="para-clip"><rect x={0} y={0} width={W} height={H} /></clipPath>
          <g clipPath="url(#para-clip)">
            {[-4, -2, 2, 4].map((u) => (
              <g key={u}>
                <line x1={cx + u * scale} y1={14} x2={cx + u * scale} y2={H - 14} stroke="var(--dg-line)" strokeOpacity={0.14} strokeWidth={1} />
                <line x1={14} y1={cy - u * scale} x2={W - 14} y2={cy - u * scale} stroke="var(--dg-line)" strokeOpacity={0.14} strokeWidth={1} />
                <text x={cx + u * scale} y={cy + 13} fontSize={9.5} textAnchor="middle" fill="var(--dg-line)">{u}</text>
                <text x={cx - 8} y={cy - u * scale + 3} fontSize={9.5} textAnchor="end" fill="var(--dg-line)">{u}</text>
              </g>
            ))}
            <line x1={14} y1={cy} x2={W - 14} y2={cy} stroke="var(--dg-line)" strokeWidth={1.3} />
            <line x1={cx} y1={14} x2={cx} y2={H - 14} stroke="var(--dg-line)" strokeWidth={1.3} />
            <text x={W - 16} y={cy - 6} fontSize={10.5} textAnchor="end" fill="var(--dg-line)">x</text>
            <text x={cx + 8} y={20} fontSize={10.5} fill="var(--dg-line)">y</text>

            {showParent && (
              <polyline points={parentPts.join(" ")} fill="none" stroke="var(--dg-line)" strokeOpacity={0.4} strokeWidth={1.5} strokeDasharray="4 4" />
            )}

            <line x1={vxPx} y1={14} x2={vxPx} y2={H - 14} stroke={roleColour.b} strokeWidth={1.4} strokeDasharray="4 4" />
            <polyline points={pts.join(" ")} fill="none" stroke={roleColour.a} strokeWidth={2.4} strokeLinecap="round" />

            {yIntPx >= 18 && yIntPx <= H - 18 && Math.abs(vx) > 0 && (
              <circle cx={cx} cy={yIntPx} r={3.5} fill={roleColour.b} />
            )}

            <circle cx={vxPx} cy={vyPx} r={4.5} fill={roleColour.result} />
            <text
              x={vxPx + (vx >= 0 ? 8 : -8)}
              y={a > 0 ? Math.min(H - 14, vyPx + 17) : Math.max(22, vyPx - 10)}
              fontSize={11}
              fontWeight={600}
              textAnchor={vx >= 0 ? "start" : "end"}
              fill={roleColour.result}
              style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}
            >
              ({vx}; {vy})
            </text>
          </g>
        </svg>

        <div className="space-y-2.5">
          <ParamGroup label="a =" options={[-2, -1, 1, 2]} value={a} onChange={setA} />
          <ParamGroup label="p =" options={[-2, -1, 0, 1, 2]} value={p} onChange={setP} />
          <ParamGroup label="q =" options={[-2, -1, 0, 1, 2]} value={q} onChange={setQ} />
          <button
            type="button"
            onClick={() => setShowParent((v) => !v)}
            className="rounded border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {showParent ? "Hide parent y = x²" : "Show parent y = x²"}
          </button>
          <div className="space-y-1 border-t border-border pt-2 text-xs text-muted-foreground">
            <p>
              Turning point: <span className="font-medium text-foreground"><MathTex tex={`(${vx};\\ ${vy})`} /></span>
            </p>
            <p>
              Axis of symmetry: <span className="font-medium text-foreground"><MathTex tex={`x = ${vx}`} /></span>
            </p>
            <p>
              y-intercept: <span className="font-medium text-foreground"><MathTex tex={`(0;\\ ${yIntVal})`} /></span>
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}

/**
 * Interactive explorer for y = a/(x + p) + q with labelled asymptotes, numbered ticks, and symmetry axes.
 */
export function HyperbolaExplorer() {
  const [a, setA] = useState<number>(2);
  const [p, setP] = useState<number>(-1);
  const [q, setQ] = useState<number>(1);
  const [showSym, setShowSym] = useState(false);

  const W = 360, H = 240;
  const cx = W / 2, cy = H / 2;
  const scale = 22;
  const vx = -p;
  const vy = q;

  const branch = (fromX: number, toX: number) => {
    const pts: string[] = [];
    for (let x = fromX; x <= toX; x += 0.1) {
      if (Math.abs(x + p) < 0.16) continue;
      const y = a / (x + p) + q;
      const sx = cx + x * scale;
      const sy = cy - y * scale;
      if (sy >= -25 && sy <= H + 25) pts.push(`${sx.toFixed(1)},${sy.toFixed(1)}`);
    }
    return pts.join(" ");
  };

  const pSign = p === 0 ? "" : p > 0 ? `+ ${p}` : `- ${Math.abs(p)}`;
  const qSign = q === 0 ? "" : q > 0 ? `+ ${q}` : `- ${Math.abs(q)}`;
  const eq = `y = \\frac{${a}}{x ${pSign}} ${qSign}`;

  const symLine = (slope: 1 | -1) => {
    const x1 = -7.5, x2 = 7.5;
    const y1 = slope * (x1 + p) + q;
    const y2 = slope * (x2 + p) + q;
    return { x1: cx + x1 * scale, y1: cy - y1 * scale, x2: cx + x2 * scale, y2: cy - y2 * scale };
  };
  const s1 = symLine(1);
  const s2 = symLine(-1);

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Hyperbola explorer</span>
        <span className="text-sm font-medium text-primary">
          <MathTex tex={eq} />
        </span>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[1fr_230px]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[360px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <clipPath id="hyp-clip">
            <rect x={0} y={0} width={W} height={H} />
          </clipPath>
          <g clipPath="url(#hyp-clip)">
            {[-4, -2, 2, 4].map((u) => (
              <g key={u}>
                <line x1={cx + u * scale} y1={14} x2={cx + u * scale} y2={H - 14} stroke="var(--dg-line)" strokeOpacity={0.14} strokeWidth={1} />
                <line x1={14} y1={cy - u * scale} x2={W - 14} y2={cy - u * scale} stroke="var(--dg-line)" strokeOpacity={0.14} strokeWidth={1} />
                <text x={cx + u * scale} y={cy + 13} fontSize={9.5} textAnchor="middle" fill="var(--dg-line)">{u}</text>
                <text x={cx - 8} y={cy - u * scale + 3} fontSize={9.5} textAnchor="end" fill="var(--dg-line)">{u}</text>
              </g>
            ))}

            <line x1={14} y1={cy} x2={W - 14} y2={cy} stroke="var(--dg-line)" strokeWidth={1.2} />
            <line x1={cx} y1={14} x2={cx} y2={H - 14} stroke="var(--dg-line)" strokeWidth={1.2} />
            <text x={W - 16} y={cy - 6} fontSize={10.5} textAnchor="end" fill="var(--dg-line)">x</text>
            <text x={cx + 8} y={20} fontSize={10.5} fill="var(--dg-line)">y</text>

            {/* Asymptotes */}
            <line x1={cx + vx * scale} y1={8} x2={cx + vx * scale} y2={H - 8} stroke={roleColour.b} strokeWidth={1.6} strokeDasharray="5 4" />
            <line x1={8} y1={cy - vy * scale} x2={W - 8} y2={cy - vy * scale} stroke={roleColour.b} strokeWidth={1.6} strokeDasharray="5 4" />

            <text
              x={cx + vx * scale + 6}
              y={22}
              fontSize={10.5}
              fontWeight={600}
              fill={roleColour.b}
              style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}
            >
              x = {vx}
            </text>
            <text
              x={W - 16}
              y={cy - vy * scale - 7}
              fontSize={10.5}
              fontWeight={600}
              textAnchor="end"
              fill={roleColour.b}
              style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}
            >
              y = {vy}
            </text>

            {showSym && (
              <>
                <line x1={s1.x1} y1={s1.y1} x2={s1.x2} y2={s1.y2} stroke={roleColour.result} strokeWidth={1.3} strokeDasharray="3 3" />
                <line x1={s2.x1} y1={s2.y1} x2={s2.x2} y2={s2.y2} stroke={roleColour.result} strokeWidth={1.3} strokeDasharray="3 3" />
              </>
            )}

            <polyline points={branch(-7.5, vx - 0.18)} fill="none" stroke={roleColour.a} strokeWidth={2.4} strokeLinecap="round" />
            <polyline points={branch(vx + 0.18, 7.5)} fill="none" stroke={roleColour.a} strokeWidth={2.4} strokeLinecap="round" />
            <circle cx={cx + vx * scale} cy={cy - vy * scale} r={3.5} fill={roleColour.b} />
          </g>
        </svg>

        <div className="space-y-2.5">
          <ParamGroup label="a =" options={[-4, -2, 2, 4]} value={a} onChange={setA} />
          <ParamGroup label="p =" options={[-2, -1, 0, 1, 2]} value={p} onChange={setP} />
          <ParamGroup label="q =" options={[-2, -1, 0, 1, 2]} value={q} onChange={setQ} />
          <button
            type="button"
            onClick={() => setShowSym((v) => !v)}
            className="rounded border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {showSym ? "Hide axes of symmetry" : "Show axes of symmetry"}
          </button>
          <div className="space-y-1 border-t border-border pt-2 text-xs text-muted-foreground">
            <p>
              Asymptotes: <span className="font-medium text-foreground"><MathTex tex={`x = ${vx},\\ y = ${vy}`} /></span>
            </p>
            <p>
              Quadrants (relative): <span className="font-medium text-foreground">{a > 0 ? "1st and 3rd" : "2nd and 4th"}</span>
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}

/**
 * Interactive explorer for y = a * b^(x + p) + q with asymptote badge and clipPath.
 */
export function ExponentialExplorer() {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(2);
  const [p, setP] = useState<number>(0);
  const [q, setQ] = useState<number>(-1);

  const W = 360, H = 240;
  const cx = W / 2, cy = H / 2;
  const scale = 22;

  const pts: string[] = [];
  for (let x = -7; x <= 7; x += 0.12) {
    const y = a * Math.pow(b, x + p) + q;
    const sx = cx + x * scale;
    const sy = cy - y * scale;
    if (sy >= -25 && sy <= H + 25) pts.push(`${sx.toFixed(1)},${sy.toFixed(1)}`);
  }

  const pSign = p === 0 ? "x" : p > 0 ? `x + ${p}` : `x - ${Math.abs(p)}`;
  const qSign = q === 0 ? "" : q > 0 ? `+ ${q}` : `- ${Math.abs(q)}`;
  const bStr = b === 0.5 ? "\\left(\\frac{1}{2}\\right)" : String(b);
  const aPrefix = a === 1 ? "" : a === -1 ? "-" : `${a}\\cdot `;
  const eq = `y = ${aPrefix}${bStr}^{${pSign}} ${qSign}`;

  const anchorX = cx + (-p) * scale;
  const anchorY = cy - (a + q) * scale;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Exponential parameter explorer</span>
        <span className="text-sm font-medium text-primary">
          <MathTex tex={eq} />
        </span>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[1fr_230px]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[360px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <clipPath id="exp-clip"><rect x={0} y={0} width={W} height={H} /></clipPath>
          <g clipPath="url(#exp-clip)">
            {[-4, -2, 2, 4].map((u) => (
              <g key={u}>
                <line x1={cx + u * scale} y1={14} x2={cx + u * scale} y2={H - 14} stroke="var(--dg-line)" strokeOpacity={0.14} strokeWidth={1} />
                <line x1={14} y1={cy - u * scale} x2={W - 14} y2={cy - u * scale} stroke="var(--dg-line)" strokeOpacity={0.14} strokeWidth={1} />
                <text x={cx + u * scale} y={cy + 13} fontSize={9.5} textAnchor="middle" fill="var(--dg-line)">{u}</text>
                <text x={cx - 8} y={cy - u * scale + 3} fontSize={9.5} textAnchor="end" fill="var(--dg-line)">{u}</text>
              </g>
            ))}

            <line x1={14} y1={cy} x2={W - 14} y2={cy} stroke="var(--dg-line)" strokeWidth={1.2} />
            <line x1={cx} y1={14} x2={cx} y2={H - 14} stroke="var(--dg-line)" strokeWidth={1.2} />
            <text x={W - 16} y={cy - 6} fontSize={10.5} textAnchor="end" fill="var(--dg-line)">x</text>
            <text x={cx + 8} y={20} fontSize={10.5} fill="var(--dg-line)">y</text>

            {/* Horizontal asymptote */}
            <line x1={12} y1={cy - q * scale} x2={W - 12} y2={cy - q * scale} stroke={roleColour.b} strokeWidth={1.6} strokeDasharray="5 4" />
            <text
              x={22}
              y={cy - q * scale - 7}
              fontSize={10.5}
              fontWeight={600}
              fill={roleColour.b}
              style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}
            >
              y = {q}
            </text>

            <polyline points={pts.join(" ")} fill="none" stroke={roleColour.a} strokeWidth={2.4} strokeLinecap="round" />

            {anchorY >= 14 && anchorY <= H - 14 && (
              <>
                <circle cx={anchorX} cy={anchorY} r={4.5} fill={roleColour.result} />
                <text
                  x={Math.min(W - 56, anchorX + 8)}
                  y={a > 0 ? anchorY - 10 : anchorY + 16}
                  fontSize={11}
                  fontWeight={600}
                  fill={roleColour.result}
                  style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}
                >
                  ({-p}; {a + q})
                </text>
              </>
            )}
          </g>
        </svg>

        <div className="space-y-2.5">
          <ParamGroup label="a =" options={[-1, 1, 2]} value={a} onChange={setA} />
          <ParamGroup label="b =" options={[0.5, 2, 3]} value={b} onChange={setB} format={(v) => (v === 0.5 ? "1/2" : String(v))} />
          <ParamGroup label="p =" options={[-1, 0, 1]} value={p} onChange={setP} />
          <ParamGroup label="q =" options={[-2, -1, 0, 1]} value={q} onChange={setQ} />
          <div className="space-y-1 border-t border-border pt-2 text-xs text-muted-foreground">
            <p>
              Asymptote: <span className="font-medium text-foreground"><MathTex tex={`y = ${q}`} /></span>
            </p>
            <p>
              Range: <span className="font-medium text-foreground"><MathTex tex={a > 0 ? `y > ${q}` : `y < ${q}`} /></span>
            </p>
            <p>
              Shape: <span className="font-medium text-foreground">{(a > 0 && b > 1) || (a < 0 && b < 1) ? "Increasing" : "Decreasing"}</span>
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}

/**
 * Interactive secant-to-tangent slider for average gradient on f(x) = x^2 with non-overlapping rise/run labels.
 */
export function AverageGradientVisual() {
  const [x2, setX2] = useState<number>(3);
  const x1 = 1;
  const y1 = x1 * x1;
  const y2 = x2 * x2;
  const avgGrad = (y2 - y1) / (x2 - x1);

  const W = 390, H = 215;
  const ox = 54, oy = 180, sx = 86, sy = 15.5;
  const toSvg = (x: number, y: number): [number, number] => [ox + x * sx, oy - y * sy];

  const curvePts: string[] = [];
  for (let x = -0.2; x <= 3.35; x += 0.08) {
    const [px, py] = toSvg(x, x * x);
    if (py >= 10 && py <= H) curvePts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }

  const [p1x, p1y] = toSvg(x1, y1);
  const [p2x, p2y] = toSvg(x2, y2);
  const [lx1, ly1] = toSvg(0.15, y1 + avgGrad * (0.15 - x1));
  const [lx2, ly2] = toSvg(3.25, y1 + avgGrad * (3.25 - x1));

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Secant line on f(x) = x²</span>
        <div className="flex flex-wrap gap-1">
          {[3, 2.5, 2, 1.5, 1.2].map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setX2(val)}
              className={cn(
                "rounded px-2 py-0.5 text-xs tabular-nums transition-colors",
                val === x2 ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              x₂ = {String(val).replace(".", ",")}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[1fr_220px]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[390px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <clipPath id="avg-clip"><rect x={16} y={10} width={W - 24} height={H - 18} /></clipPath>

          <line x1={22} y1={oy} x2={W - 16} y2={oy} stroke="var(--dg-line)" strokeWidth={1.2} />
          <line x1={ox} y1={14} x2={ox} y2={H - 12} stroke="var(--dg-line)" strokeWidth={1.2} />

          {[1, 2, 3].map((u) => (
            <text key={u} x={ox + u * sx} y={oy + 14} fontSize={9.5} textAnchor="middle" fill="var(--dg-line)">{u}</text>
          ))}
          {[2, 4, 6, 8].map((v) => (
            <text key={v} x={ox - 7} y={oy - v * sy + 3} fontSize={9.5} textAnchor="end" fill="var(--dg-line)">{v}</text>
          ))}

          <g clipPath="url(#avg-clip)">
            <line x1={lx1} y1={ly1} x2={lx2} y2={ly2} stroke={roleColour.b} strokeWidth={1.8} strokeDasharray="5 4" />
            <polyline points={curvePts.join(" ")} fill="none" stroke={roleColour.a} strokeWidth={2.4} strokeLinecap="round" />
          </g>

          {/* Rise / run guides */}
          <line x1={p1x} y1={p1y} x2={p2x} y2={p1y} stroke="var(--dg-line)" strokeWidth={1.2} strokeDasharray="3 3" />
          <line x1={p2x} y1={p1y} x2={p2x} y2={p2y} stroke="var(--dg-line)" strokeWidth={1.2} strokeDasharray="3 3" />

          {x2 >= 1.5 && (
            <>
              <text x={(p1x + p2x) / 2} y={p1y + 13} fontSize={10} textAnchor="middle" fill="var(--dg-line)">Δx = {String(Number((x2 - 1).toFixed(1))).replace(".", ",")}</text>
              <text x={p2x + 7} y={(p1y + p2y) / 2 + 3} fontSize={10} fill="var(--dg-line)">Δy = {String(Number((y2 - 1).toFixed(2))).replace(".", ",")}</text>
            </>
          )}

          <circle cx={p1x} cy={p1y} r={4.5} fill={roleColour.result} />
          <circle cx={p2x} cy={p2y} r={4.5} fill={roleColour.result} />

          {/* Place P1 neatly above-left, P2 neatly left with halo so neither touches the axis */}
          <text
            x={p1x - 8}
            y={p1y - 10}
            fontSize={11}
            fontWeight={600}
            textAnchor="end"
            fill={roleColour.result}
            style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}
          >
            (1; 1)
          </text>
          <text
            x={p2x - 8}
            y={p2y - 10}
            fontSize={11}
            fontWeight={600}
            textAnchor="end"
            fill={roleColour.result}
            style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}
          >
            ({String(x2).replace(".", ",")}; {String(Number(y2.toFixed(2))).replace(".", ",")})
          </text>
        </svg>

        <div className="space-y-2 text-xs">
          <p className="text-muted-foreground">As <MathTex tex="x_2" /> slides closer to <MathTex tex="1" />, the secant rotates toward the tangent at <MathTex tex="(1;\ 1)" />:</p>
          <div className="rounded-md bg-secondary/50 p-2.5 text-foreground">
            <MathTex tex={`m_{\\text{avg}} = \\frac{${Number(y2.toFixed(2))} - 1}{${x2} - 1} = ${Number(avgGrad.toFixed(2))}`} />
          </div>
          <p className="text-muted-foreground">
            Notice <MathTex tex="m_{\text{avg}} = x_2 + 1 \to 2" /> as <MathTex tex="x_2 \to 1" />.
          </p>
        </div>
      </div>
    </figure>
  );
}

/**
 * Interactive explorer for y = a sin/cos/tan(k(x + p)) + q on [-360°, 360°] with asymptotes, ticks, and parent toggle.
 */
export function TrigGraphExplorer() {
  const [fn, setFn] = useState<"sin" | "cos" | "tan">("sin");
  const [a, setA] = useState<number>(1);
  const [k, setK] = useState<number>(1);
  const [p, setP] = useState<number>(0);
  const [q, setQ] = useState<number>(0);
  const [showParent, setShowParent] = useState<boolean>(false);

  const W = 460, H = 200;
  const cx = W / 2, cy = H / 2;
  const pxPerDeg = 190 / 360;
  const pyPerUnit = 28;

  const evalFn = (deg: number, useParent = false) => {
    const rad = useParent ? (deg * Math.PI) / 180 : (k * (deg + p) * Math.PI) / 180;
    const amp = useParent ? 1 : a;
    const shift = useParent ? 0 : q;
    if (fn === "sin") return amp * Math.sin(rad) + shift;
    if (fn === "cos") return amp * Math.cos(rad) + shift;
    return amp * Math.tan(rad) + shift;
  };

  const buildSegments = (useParent = false) => {
    const segs: string[] = [];
    let cur: string[] = [];
    let prevVal = evalFn(-360, useParent);
    for (let deg = -360; deg <= 360; deg += 1) {
      const val = evalFn(deg, useParent);
      if (!Number.isFinite(val) || Math.abs(val) > 3.2 || Math.abs(val - prevVal) > 3.5) {
        if (cur.length > 1) segs.push(cur.join(" "));
        cur = [];
      } else {
        const sx = cx + deg * pxPerDeg;
        const sy = cy - val * pyPerUnit;
        cur.push(`${sx.toFixed(1)},${sy.toFixed(1)}`);
      }
      prevVal = val;
    }
    if (cur.length > 1) segs.push(cur.join(" "));
    return segs;
  };

  const segments = buildSegments(false);
  const parentSegs = showParent ? buildSegments(true) : [];

  // Tan asymptotes: k*(deg + p) = 90 + 180n
  const tanAsymptotes: number[] = [];
  if (fn === "tan") {
    for (let n = -8; n <= 8; n++) {
      const deg = (90 + 180 * n) / k - p;
      if (deg >= -360 && deg <= 360) tanAsymptotes.push(deg);
    }
  }

  const basePeriod = fn === "tan" ? 180 : 360;
  const period = basePeriod / k;
  const aStr = a === 1 ? "" : a === -1 ? "-" : String(a);
  const kStr = k === 1 ? "" : String(k);
  const inner = p === 0 ? `${kStr}x` : k === 1 ? `(x ${p > 0 ? `+ ${p}^\\circ` : `- ${Math.abs(p)}^\\circ`})` : `${k}(x ${p > 0 ? `+ ${p}^\\circ` : `- ${Math.abs(p)}^\\circ`})`;
  const qStr = q === 0 ? "" : q > 0 ? ` + ${q}` : ` - ${Math.abs(q)}`;
  const eq = `y = ${aStr}\\${fn} ${inner}${qStr}`;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Trig graph explorer</span>
        <span className="text-sm font-medium text-primary">
          <MathTex tex={eq} />
        </span>
      </div>

      <div className="space-y-3 p-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[460px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <clipPath id="trig-graph-clip"><rect x={16} y={10} width={W - 32} height={H - 20} /></clipPath>
          <line x1={16} y1={cy} x2={W - 16} y2={cy} stroke="var(--dg-line)" strokeWidth={1.2} />
          <line x1={cx} y1={12} x2={cx} y2={H - 12} stroke="var(--dg-line)" strokeWidth={1.2} />

          {[-2, -1, 1, 2].map((v) => (
            <g key={v}>
              <line x1={18} y1={cy - v * pyPerUnit} x2={W - 18} y2={cy - v * pyPerUnit} stroke="var(--dg-line)" strokeOpacity={0.1} strokeWidth={1} />
              <text x={cx - 6} y={cy - v * pyPerUnit + 3.5} fontSize={9.5} textAnchor="end" fill="var(--dg-line)" style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 3 }}>{v}</text>
            </g>
          ))}

          {[-360, -270, -180, -90, 90, 180, 270, 360].map((d) => (
            <g key={d}>
              <line x1={cx + d * pxPerDeg} y1={14} x2={cx + d * pxPerDeg} y2={H - 14} stroke="var(--dg-line)" strokeOpacity={0.14} strokeWidth={1} />
              <text x={cx + d * pxPerDeg} y={cy + 13} fontSize={8.5} textAnchor="middle" fill="var(--dg-line)" style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 3 }}>{d}°</text>
            </g>
          ))}

          <g clipPath="url(#trig-graph-clip)">
            {tanAsymptotes.map((d, idx) => (
              <line key={idx} x1={cx + d * pxPerDeg} y1={10} x2={cx + d * pxPerDeg} y2={H - 10} stroke={roleColour.b} strokeWidth={1.3} strokeDasharray="4 4" />
            ))}
            {parentSegs.map((pts, i) => (
              <polyline key={`p-${i}`} points={pts} fill="none" stroke="var(--dg-line)" strokeOpacity={0.45} strokeWidth={1.5} strokeDasharray="4 4" />
            ))}
            {segments.map((pts, i) => (
              <polyline key={i} points={pts} fill="none" stroke={roleColour.a} strokeWidth={2.2} strokeLinecap="round" />
            ))}
          </g>
        </svg>

        <div className="grid gap-2 sm:grid-cols-2">
          <ParamGroup label="fn:" options={["sin", "cos", "tan"] as const} value={fn} onChange={setFn} />
          <ParamGroup label="a =" options={[-1, 1, 2]} value={a} onChange={setA} />
          <ParamGroup label="k =" options={[0.5, 1, 2]} value={k} onChange={setK} format={(v) => (v === 0.5 ? "1/2" : String(v))} />
          <ParamGroup label="p =" options={[-30, 0, 30, 60]} value={p} onChange={setP} format={(v) => `${v}°`} />
          <ParamGroup label="q =" options={[-1, 0, 1]} value={q} onChange={setQ} />
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setShowParent((v) => !v)}
              className="rounded border border-border px-2.5 py-0.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {showParent ? `Hide base ${fn} x` : `Show base ${fn} x`}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-1 border-t border-border pt-2.5 text-xs text-muted-foreground">
          <span>
            Period: <span className="font-medium text-foreground">{period}°</span>
          </span>
          <span>
            Amplitude: <span className="font-medium text-foreground">{fn === "tan" ? "undefined" : Math.abs(a)}</span>
          </span>
          <span>
            Horizontal shift: <span className="font-medium text-foreground">{p === 0 ? "none" : p > 0 ? `${p}° left` : `${Math.abs(p)}° right`}</span>
          </span>
        </div>
      </div>
    </figure>
  );
}
