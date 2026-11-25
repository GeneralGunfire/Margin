import { useState } from "react";
import katex from "katex";
import { roleColour } from "./toolkit";
import { cn } from "@/lib/utils";

const texInline = (t: string) => katex.renderToString(t, { throwOnError: false, strict: false });

function MathTex({ tex }: { tex: string }) {
  return <span dangerouslySetInnerHTML={{ __html: texInline(tex) }} />;
}

const QUADRANTS = [
  {
    q: "I",
    label: "Q I (0°–90°)",
    reduction: "\\theta",
    xSign: "+",
    ySign: "+",
    allPos: "All positive (sin +, cos +, tan +)",
    angleDeg: 40,
  },
  {
    q: "II",
    label: "Q II (90°–180°)",
    reduction: "180^\\circ - \\theta",
    xSign: "-",
    ySign: "+",
    allPos: "Only sin positive (cos −, tan −)",
    angleDeg: 140,
  },
  {
    q: "III",
    label: "Q III (180°–270°)",
    reduction: "180^\\circ + \\theta",
    xSign: "-",
    ySign: "-",
    allPos: "Only tan positive (sin −, cos −)",
    angleDeg: 220,
  },
  {
    q: "IV",
    label: "Q IV (270°–360°)",
    reduction: "360^\\circ - \\theta",
    xSign: "+",
    ySign: "-",
    allPos: "Only cos positive (sin −, tan −)",
    angleDeg: 320,
  },
] as const;

/**
 * Interactive CAST quadrant explorer showing terminal arm, angle arc, (x, y) triangle sides, and reduction form.
 */
export function CastExplorer() {
  const [idx, setIdx] = useState(1);
  const q = QUADRANTS[idx];
  const W = 264, H = 264;
  const cx = 132, cy = 132, r = 74;
  const rad = (q.angleDeg * Math.PI) / 180;
  const px = cx + r * Math.cos(rad);
  const py = cy - r * Math.sin(rad);

  // Counter-clockwise arc from +x axis (cx + arcR, cy) to angleDeg
  const arcR = 24;
  const ax = cx + arcR * Math.cos(rad);
  const ay = cy - arcR * Math.sin(rad);
  const largeArc = q.angleDeg > 180 ? 1 : 0;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">CAST quadrant explorer</span>
        <div className="flex flex-wrap gap-1.5">
          {QUADRANTS.map((item, i) => (
            <button
              key={item.q}
              type="button"
              onClick={() => setIdx(i)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs transition-colors",
                i === idx ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[264px_1fr]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[264px]" style={{ background: "var(--dg-bg)", borderRadius: 8 }} aria-hidden="true">
          <line x1={26} y1={cy} x2={W - 26} y2={cy} stroke="var(--dg-line)" strokeWidth={1.2} />
          <line x1={cx} y1={24} x2={cx} y2={H - 24} stroke="var(--dg-line)" strokeWidth={1.2} />
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--dg-line)" strokeOpacity={0.35} strokeWidth={1.2} />

          {/* Axis degree markers cleanly outside circle */}
          <text x={W - 22} y={cy - 6} fontSize={10} textAnchor="end" fill="var(--dg-line)">0°</text>
          <text x={cx + 6} y={22} fontSize={10} fill="var(--dg-line)">90°</text>
          <text x={22} y={cy - 6} fontSize={10} fill="var(--dg-line)">180°</text>
          <text x={cx + 6} y={H - 14} fontSize={10} fill="var(--dg-line)">270°</text>

          {/* CAST letters placed safely in outer corners well outside r=74 */}
          <text x={224} y={42} fontSize={15} fontWeight={700} textAnchor="middle" fill={idx === 0 ? roleColour.result : "var(--dg-line)"}>A</text>
          <text x={40} y={42} fontSize={15} fontWeight={700} textAnchor="middle" fill={idx === 1 ? roleColour.result : "var(--dg-line)"}>S</text>
          <text x={40} y={228} fontSize={15} fontWeight={700} textAnchor="middle" fill={idx === 2 ? roleColour.result : "var(--dg-line)"}>T</text>
          <text x={224} y={228} fontSize={15} fontWeight={700} textAnchor="middle" fill={idx === 3 ? roleColour.result : "var(--dg-line)"}>C</text>

          {/* Angle arc from 0° */}
          <path d={`M ${cx + arcR},${cy} A ${arcR},${arcR} 0 ${largeArc} 0 ${ax.toFixed(1)},${ay.toFixed(1)}`} fill="none" stroke={roleColour.result} strokeWidth={1.5} />

          {/* Reference triangle dropped to x-axis */}
          <line x1={cx} y1={cy} x2={px} y2={cy} stroke={roleColour.a} strokeWidth={2.2} strokeDasharray="4 3" />
          <line x1={px} y1={cy} x2={px} y2={py} stroke={roleColour.b} strokeWidth={2.2} strokeDasharray="4 3" />
          <line x1={cx} y1={cy} x2={px} y2={py} stroke={roleColour.result} strokeWidth={2.6} strokeLinecap="round" />
          <circle cx={px} cy={py} r={4.5} fill={roleColour.result} />

          {/* Triangle side labels with halo */}
          <text
            x={(cx + px) / 2}
            y={py < cy ? cy + 14 : cy - 8}
            fontSize={11.5}
            fontWeight={600}
            textAnchor="middle"
            fill={roleColour.a}
            style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}
          >
            x ({q.xSign})
          </text>
          <text
            x={px > cx ? px + 10 : px - 10}
            y={(cy + py) / 2 + 4}
            fontSize={11.5}
            fontWeight={600}
            textAnchor={px > cx ? "start" : "end"}
            fill={roleColour.b}
            style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}
          >
            y ({q.ySign})
          </text>
          <text
            x={px > cx ? px + 8 : px - 8}
            y={py < cy ? py - 8 : py + 15}
            fontSize={11}
            fontWeight={600}
            textAnchor={px > cx ? "start" : "end"}
            fill={roleColour.result}
            style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}
          >
            P(x; y)
          </text>
        </svg>

        <div className="space-y-2.5 text-xs">
          <p className="text-sm font-medium text-foreground">{q.allPos}</p>
          <p className="text-muted-foreground">
            Coordinates: <span className="font-medium text-foreground">x is {q.xSign}</span>, <span className="font-medium text-foreground">y is {q.ySign}</span>, and <span className="font-medium text-foreground">r &gt; 0</span> always.
          </p>
          <p className="text-muted-foreground">
            Standard reduction angle: <span className="font-medium text-foreground"><MathTex tex={q.reduction} /></span>
          </p>
        </div>
      </div>
    </figure>
  );
}

/**
 * Interactive reduction circle explorer showing congruent acute reference triangles against the x-axis,
 * plus 90° ± θ co-ratio side swap.
 */
export function ReductionCircleVisual() {
  const [theta, setTheta] = useState<30 | 45 | 60>(35 as 30);
  const [refDeg, setRefDeg] = useState<number>(30);
  const [coRatio, setCoRatio] = useState<boolean>(false);
  void theta;
  void setTheta;

  const W = 280, H = 250;
  const cx = 140, cy = 128, r = 82;

  const pt = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };
  };

  const q1 = pt(refDeg);
  const q2 = pt(180 - refDeg);
  const q3 = pt(180 + refDeg);
  const q4 = pt(360 - refDeg);
  const q90 = pt(90 - refDeg);

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Reference triangles against the horizontal axis</span>
        <div className="flex flex-wrap gap-1.5">
          {[30, 45, 60].map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setRefDeg(d)}
              className={cn(
                "rounded-md px-2 py-1 text-xs tabular-nums transition-colors",
                d === refDeg ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              θ = {d}°
            </button>
          ))}
          <button
            type="button"
            onClick={() => setCoRatio((v) => !v)}
            className={cn(
              "rounded-md border px-2 py-1 text-xs transition-colors",
              coRatio ? "border-primary bg-primary/10 font-medium text-primary" : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {coRatio ? "Showing 90° − θ" : "Compare 90° − θ"}
          </button>
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[280px_1fr]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[280px]" style={{ background: "var(--dg-bg)", borderRadius: 8 }} aria-hidden="true">
          <line x1={22} y1={cy} x2={W - 22} y2={cy} stroke="var(--dg-line)" strokeWidth={1.2} />
          <line x1={cx} y1={22} x2={cx} y2={H - 18} stroke="var(--dg-line)" strokeWidth={1.2} />
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--dg-line)" strokeOpacity={0.3} strokeWidth={1.2} />

          {!coRatio ? (
            <>
              {[
                { p: q1, col: roleColour.result, tag: `${refDeg}°` },
                { p: q2, col: roleColour.a, tag: `${180 - refDeg}°` },
                { p: q3, col: roleColour.b, tag: `${180 + refDeg}°` },
                { p: q4, col: roleColour.b, tag: `${360 - refDeg}°` },
              ].map((item, i) => (
                <g key={i}>
                  <polygon
                    points={`${cx},${cy} ${item.p.x.toFixed(1)},${cy} ${item.p.x.toFixed(1)},${item.p.y.toFixed(1)}`}
                    fill={item.col}
                    fillOpacity={0.14}
                    stroke={item.col}
                    strokeWidth={1.8}
                  />
                  <circle cx={item.p.x} cy={item.p.y} r={3.8} fill={item.col} />
                  <text
                    x={item.p.x + (item.p.x >= cx ? 6 : -6)}
                    y={item.p.y + (item.p.y <= cy ? -7 : 14)}
                    fontSize={10.5}
                    fontWeight={600}
                    textAnchor={item.p.x >= cx ? "start" : "end"}
                    fill={item.col}
                    style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}
                  >
                    {item.tag}
                  </text>
                </g>
              ))}
            </>
          ) : (
            <>
              <polygon
                points={`${cx},${cy} ${q1.x.toFixed(1)},${cy} ${q1.x.toFixed(1)},${q1.y.toFixed(1)}`}
                fill={roleColour.a}
                fillOpacity={0.14}
                stroke={roleColour.a}
                strokeWidth={2}
              />
              <polygon
                points={`${cx},${cy} ${q90.x.toFixed(1)},${cy} ${q90.x.toFixed(1)},${q90.y.toFixed(1)}`}
                fill={roleColour.result}
                fillOpacity={0.14}
                stroke={roleColour.result}
                strokeWidth={2}
              />
              <text x={q1.x + 6} y={q1.y - 6} fontSize={10.5} fontWeight={600} fill={roleColour.a}>θ = {refDeg}°</text>
              <text x={q90.x + 6} y={q90.y - 6} fontSize={10.5} fontWeight={600} fill={roleColour.result}>90° − θ = {90 - refDeg}°</text>
            </>
          )}
        </svg>

        <div className="space-y-2.5 text-xs text-muted-foreground">
          {!coRatio ? (
            <>
              <p className="font-medium text-foreground">Why 180° ± θ and 360° − θ keep the same function name</p>
              <p>
                Every terminal arm drops its perpendicular to the <span className="font-medium text-foreground">x-axis</span>, forming the exact same right triangle with height <MathTex tex="|y|" /> and base <MathTex tex="|x|" />. Only the signs change per CAST.
              </p>
            </>
          ) : (
            <>
              <p className="font-medium text-foreground">Why 90° ± θ swaps sin and cos</p>
              <p>
                Reflecting across the diagonal swaps horizontal and vertical legs: the height at <MathTex tex={`${90 - refDeg}^\\circ`} /> equals the base at <MathTex tex={`${refDeg}^\\circ`} />, so <MathTex tex={`\\sin(${90 - refDeg}^\\circ) = \\cos ${refDeg}^\\circ`} />.
              </p>
            </>
          )}
        </div>
      </div>
    </figure>
  );
}

const EQ_CASES = [
  { id: "sinPos", label: "sin x = 1/2", fn: "sin" as const, k: 0.5, sols: [30, 150], gen: "x = 30^\\circ + k\\cdot 360^\\circ \\;\\text{or}\\; 150^\\circ + k\\cdot 360^\\circ" },
  { id: "sinNeg", label: "sin x = -1/2", fn: "sin" as const, k: -0.5, sols: [210, 330], gen: "x = 210^\\circ + k\\cdot 360^\\circ \\;\\text{or}\\; 330^\\circ + k\\cdot 360^\\circ" },
  { id: "cosPos", label: "cos x = 1/2", fn: "cos" as const, k: 0.5, sols: [60, 300], gen: "x = \\pm 60^\\circ + k\\cdot 360^\\circ" },
  { id: "tanOne", label: "tan x = 1", fn: "tan" as const, k: 1, sols: [45, 225], gen: "x = 45^\\circ + k\\cdot 180^\\circ" },
];

/**
 * Interactive trig equation wave showing intersections with y = k in [0°, 360°].
 */
export function TrigEquationWave() {
  const [idx, setIdx] = useState(0);
  const c = EQ_CASES[idx];

  const W = 460, H = 190;
  const x0 = 42, xSpan = 384, midY = 95, amp = c.fn === "tan" ? 28 : 54;

  const evalFn = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    if (c.fn === "sin") return Math.sin(rad);
    if (c.fn === "cos") return Math.cos(rad);
    return Math.tan(rad);
  };

  const segments: string[] = [];
  let cur: string[] = [];
  let prevVal = evalFn(0);
  for (let deg = 0; deg <= 360; deg += 2) {
    const val = evalFn(deg);
    if (!Number.isFinite(val) || Math.abs(val) > 2.6 || Math.abs(val - prevVal) > 3.2) {
      if (cur.length > 1) segments.push(cur.join(" "));
      cur = [];
    } else {
      const x = x0 + (deg / 360) * xSpan;
      const y = midY - amp * val;
      cur.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    prevVal = val;
  }
  if (cur.length > 1) segments.push(cur.join(" "));

  const targetY = midY - amp * c.k;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Visualising trig equations on [0°, 360°]</span>
        <div className="flex flex-wrap gap-1.5">
          {EQ_CASES.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIdx(i)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs transition-colors",
                i === idx ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[460px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <clipPath id="eq-wave-clip"><rect x={x0} y={14} width={xSpan} height={H - 34} /></clipPath>
          <line x1={x0} y1={midY} x2={x0 + xSpan} y2={midY} stroke="var(--dg-line)" strokeWidth={1.2} />
          <line x1={x0} y1={16} x2={x0} y2={H - 22} stroke="var(--dg-line)" strokeWidth={1.2} />

          {/* y ticks */}
          {[1, -1].map((v) => (
            <g key={v}>
              <line x1={x0 - 4} y1={midY - v * amp} x2={x0} y2={midY - v * amp} stroke="var(--dg-line)" strokeWidth={1} />
              <text x={x0 - 7} y={midY - v * amp + 3.5} fontSize={10} textAnchor="end" fill="var(--dg-line)">{v}</text>
            </g>
          ))}

          {/* x ticks every 90° */}
          {[90, 180, 270, 360].map((d) => (
            <g key={d}>
              <line x1={x0 + (d / 360) * xSpan} y1={18} x2={x0 + (d / 360) * xSpan} y2={H - 24} stroke="var(--dg-line)" strokeOpacity={0.16} strokeWidth={1} />
              <text x={x0 + (d / 360) * xSpan} y={H - 10} fontSize={10} textAnchor="middle" fill="var(--dg-line)">{d}°</text>
            </g>
          ))}

          {/* tan asymptotes */}
          {c.fn === "tan" && [90, 270].map((d) => (
            <line key={d} x1={x0 + (d / 360) * xSpan} y1={18} x2={x0 + (d / 360) * xSpan} y2={H - 24} stroke="var(--dg-line)" strokeOpacity={0.5} strokeWidth={1.2} strokeDasharray="4 4" />
          ))}

          <g clipPath="url(#eq-wave-clip)">
            {segments.map((pts, i) => (
              <polyline key={i} points={pts} fill="none" stroke={roleColour.a} strokeWidth={2.4} strokeLinecap="round" />
            ))}
          </g>

          <line x1={x0} y1={targetY} x2={x0 + xSpan} y2={targetY} stroke={roleColour.b} strokeWidth={1.5} strokeDasharray="5 4" />

          {c.sols.map((deg) => {
            const sx = x0 + (deg / 360) * xSpan;
            return (
              <g key={deg}>
                <circle cx={sx} cy={targetY} r={4.5} fill={roleColour.result} />
                <text
                  x={sx}
                  y={c.k >= 0 ? targetY - 10 : targetY + 18}
                  fontSize={11.5}
                  fontWeight={700}
                  textAnchor="middle"
                  fill={roleColour.result}
                  style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}
                >
                  {deg}°
                </text>
              </g>
            );
          })}
        </svg>

        <div className="mt-2.5 text-center text-xs text-muted-foreground">
          General solution: <span className="font-medium text-foreground"><MathTex tex={c.gen} /></span>
        </div>
      </div>
    </figure>
  );
}
