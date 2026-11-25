import { useState } from "react";
import katex from "katex";
import { roleColour } from "./toolkit";
import { cn } from "@/lib/utils";

const texInline = (t: string) => katex.renderToString(t, { throwOnError: false, strict: false });
function MathTex({ tex }: { tex: string }) {
  return <span dangerouslySetInnerHTML={{ __html: texInline(tex) }} />;
}

/**
 * Interactive explorer for Distance, Midpoint, Gradient, Parallel, and Perpendicular lines.
 */
export function AnalyticalLineExplorer() {
  const [mode, setMode] = useState<"basics" | "perp" | "para">("basics");

  const W = 380, H = 240;
  const ox = 140, oy = 186, sc = 30;
  const toSvg = (x: number, y: number): [number, number] => [ox + x * sc, oy - y * sc];

  const [ax, ay] = toSvg(-2, 1);
  const [bx, by] = toSvg(4, 5);
  const [mx, my] = toSvg(1, 3);
  // Perpendicular line through M(1,3) with slope -3/2: x=-1 -> y=6, x=3 -> y=0
  const [px1, py1] = toSvg(-1, 6);
  const [px2, py2] = toSvg(3, 0);
  // Parallel line shifted down 2: (-2,-1) to (4,3)
  const [cx, cy] = toSvg(-2, -1);
  const [dx, dy] = toSvg(4, 3);

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Analytical geometry explorer</span>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["basics", "Distance & Midpoint"],
              ["perp", "Perpendicular (m₁·m₂ = −1)"],
              ["para", "Parallel (m₁ = m₂)"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setMode(id)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs transition-colors",
                mode === id ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[1fr_235px]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[380px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <clipPath id="ana-clip"><rect x={12} y={10} width={W - 24} height={H - 20} /></clipPath>

          {[-3, -2, -1, 1, 2, 3, 4, 5, 6].map((u) => (
            <g key={`gx-${u}`}>
              <line x1={ox + u * sc} y1={12} x2={ox + u * sc} y2={H - 12} stroke="var(--dg-line)" strokeOpacity={0.12} strokeWidth={1} />
              {u % 2 === 0 && <text x={ox + u * sc} y={oy + 14} fontSize={9.5} textAnchor="middle" fill="var(--dg-line)">{u}</text>}
            </g>
          ))}
          {[1, 2, 3, 4, 5].map((v) => (
            <g key={`gy-${v}`}>
              <line x1={14} y1={oy - v * sc} x2={W - 14} y2={oy - v * sc} stroke="var(--dg-line)" strokeOpacity={0.12} strokeWidth={1} />
              {v % 2 === 0 && <text x={ox - 7} y={oy - v * sc + 3.5} fontSize={9.5} textAnchor="end" fill="var(--dg-line)">{v}</text>}
            </g>
          ))}

          <line x1={16} y1={oy} x2={W - 16} y2={oy} stroke="var(--dg-line)" strokeWidth={1.3} />
          <line x1={ox} y1={12} x2={ox} y2={H - 12} stroke="var(--dg-line)" strokeWidth={1.3} />
          <text x={W - 18} y={oy - 6} fontSize={10.5} textAnchor="end" fill="var(--dg-line)">x</text>
          <text x={ox + 7} y={20} fontSize={10.5} fill="var(--dg-line)">y</text>

          <g clipPath="url(#ana-clip)">
            {mode === "basics" && (
              <>
                <line x1={ax} y1={ay} x2={bx} y2={ay} stroke={roleColour.b} strokeWidth={1.6} strokeDasharray="4 3" />
                <line x1={bx} y1={ay} x2={bx} y2={by} stroke={roleColour.b} strokeWidth={1.6} strokeDasharray="4 3" />
                <text x={(ax + bx) / 2} y={ay + 14} fontSize={10.5} fontWeight={600} textAnchor="middle" fill={roleColour.b} style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}>
                  Δx = 6
                </text>
                <text x={bx + 8} y={(ay + by) / 2 + 3} fontSize={10.5} fontWeight={600} fill={roleColour.b} style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}>
                  Δy = 4
                </text>
              </>
            )}

            <line x1={ax} y1={ay} x2={bx} y2={by} stroke={roleColour.a} strokeWidth={2.5} strokeLinecap="round" />

            {mode === "perp" && (
              <>
                <line x1={px1} y1={py1} x2={px2} y2={py2} stroke={roleColour.result} strokeWidth={2.2} />
                {/* Right-angle marker at M */}
                <path d={`M ${(mx + 10).toFixed(1)},${(my - 6.7).toFixed(1)} L ${(mx + 3.3).toFixed(1)},${(my - 16.7).toFixed(1)} L ${(mx - 6.7).toFixed(1)},${(my - 10).toFixed(1)}`} fill="none" stroke="var(--dg-text)" strokeWidth={1.4} />
              </>
            )}

            {mode === "para" && (
              <>
                <line x1={cx} y1={cy} x2={dx} y2={dy} stroke={roleColour.result} strokeWidth={2.3} />
                <circle cx={cx} cy={cy} r={3.8} fill={roleColour.result} />
                <circle cx={dx} cy={dy} r={3.8} fill={roleColour.result} />
                <text x={dx + 6} y={dy + 4} fontSize={10.5} fontWeight={600} fill={roleColour.result} style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}>D(4; 3)</text>
              </>
            )}
          </g>

          <circle cx={ax} cy={ay} r={4.5} fill={roleColour.a} />
          <circle cx={bx} cy={by} r={4.5} fill={roleColour.a} />
          <text x={ax - 6} y={ay - 10} fontSize={10.5} fontWeight={600} textAnchor="end" fill={roleColour.a} style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}>A(−2; 1)</text>
          <text x={bx - 4} y={by - 10} fontSize={10.5} fontWeight={600} textAnchor="end" fill={roleColour.a} style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}>B(4; 5)</text>

          {mode !== "para" && (
            <>
              <circle cx={mx} cy={my} r={4.5} fill={roleColour.result} />
              <text x={mx - 8} y={my - 10} fontSize={10.5} fontWeight={700} textAnchor="end" fill={roleColour.result} style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}>
                M(1; 3)
              </text>
            </>
          )}
        </svg>

        <div className="space-y-2 text-xs text-muted-foreground">
          {mode === "basics" && (
            <>
              <p className="font-medium text-foreground">Pythagoras &amp; averages</p>
              <div className="overflow-x-auto"><MathTex tex="AB = \sqrt{6^2 + 4^2} = \sqrt{52} = 2\sqrt{13}" /></div>
              <div className="overflow-x-auto"><MathTex tex="M = \left(\frac{-2+4}{2};\ \frac{1+5}{2}\right) = (1;\ 3)" /></div>
              <div className="overflow-x-auto"><MathTex tex="m_{AB} = \frac{5 - 1}{4 - (-2)} = \frac{4}{6} = \frac{2}{3}" /></div>
            </>
          )}
          {mode === "perp" && (
            <>
              <p className="font-medium text-foreground">Negative reciprocal gradient</p>
              <p>Turning a line by <MathTex tex="90^\circ" /> swaps rise and run and flips the sign:</p>
              <div className="overflow-x-auto"><MathTex tex="m_{AB} = \frac{2}{3} \;\Longrightarrow\; m_{\perp} = -\frac{3}{2}" /></div>
              <div className="overflow-x-auto"><MathTex tex="m_{AB} \cdot m_{\perp} = \frac{2}{3}\cdot\left(-\frac{3}{2}\right) = -1" /></div>
            </>
          )}
          {mode === "para" && (
            <>
              <p className="font-medium text-foreground">Equal gradients stay parallel</p>
              <p>Same rise-over-run means the two lines never meet:</p>
              <div className="overflow-x-auto"><MathTex tex="m_{AB} = \frac{2}{3},\qquad m_{CD} = \frac{3 - (-1)}{4 - (-2)} = \frac{2}{3}" /></div>
              <p>Because <MathTex tex="m_{AB} = m_{CD}" />, <MathTex tex="AB \parallel CD" />.</p>
            </>
          )}
        </div>
      </div>
    </figure>
  );
}

/**
 * Interactive explorer for angle of inclination (acute m > 0, obtuse m < 0, and angle between two lines).
 */
export function InclinationExplorer() {
  const [caseId, setCaseId] = useState<"acute" | "obtuse" | "between">("obtuse");

  const W = 360, H = 220;
  const ox = 180, oy = 152;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Angle of inclination (measured from +x-axis)</span>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["acute", "Positive m (acute)"],
              ["obtuse", "Negative m (obtuse)"],
              ["between", "Angle between lines"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setCaseId(id)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs transition-colors",
                caseId === id ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[1fr_230px]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[360px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <line x1={20} y1={oy} x2={W - 20} y2={oy} stroke="var(--dg-line)" strokeWidth={1.3} />
          <line x1={ox} y1={16} x2={ox} y2={H - 16} stroke="var(--dg-line)" strokeWidth={1.3} />
          <text x={W - 22} y={oy + 14} fontSize={10.5} textAnchor="end" fill="var(--dg-line)">+x</text>

          {caseId === "acute" && (
            <>
              <line x1={90} y1={oy + 90} x2={290} y2={oy - 110} stroke={roleColour.a} strokeWidth={2.5} />
              <path d={`M ${ox + 34},${oy} A 34,34 0 0 0 ${(ox + 34 * Math.cos(Math.PI / 4)).toFixed(1)},${(oy - 34 * Math.sin(Math.PI / 4)).toFixed(1)}`} fill="none" stroke={roleColour.result} strokeWidth={2} />
              <text x={ox + 42} y={oy - 15} fontSize={12} fontWeight={700} fill={roleColour.result}>θ = 45°</text>
            </>
          )}

          {caseId === "obtuse" && (
            <>
              <line x1={230} y1={oy + 60} x2={115} y2={oy - 115} stroke={roleColour.a} strokeWidth={2.5} />
              {/* Reference arc */}
              <path d={`M ${ox + 32},${oy} A 32,32 0 0 0 ${(ox - 16).toFixed(1)},${(oy - 27.7).toFixed(1)}`} fill="none" stroke={roleColour.result} strokeWidth={2.2} />
              <text x={ox + 26} y={oy - 34} fontSize={12} fontWeight={700} fill={roleColour.result}>θ = 123,7°</text>
            </>
          )}

          {caseId === "between" && (
            <>
              {/* Line 1: slope 0.5 through (70, oy) and (210, oy - 70) */}
              <line x1={38} y1={oy + 16} x2={290} y2={oy - 110} stroke={roleColour.a} strokeWidth={2.3} />
              {/* Line 2: slope 1.5 through (163.3, oy) and (210, oy - 70) */}
              <line x1={142} y1={oy + 32} x2={258} y2={oy - 142} stroke={roleColour.b} strokeWidth={2.3} />
              <circle cx={210} cy={oy - 70} r={4} fill={roleColour.result} />
              <text x={108} y={oy - 14} fontSize={10.5} fontWeight={600} fill={roleColour.a} style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}>β = 26,6°</text>
              <text x={202} y={oy - 14} fontSize={10.5} fontWeight={600} fill={roleColour.b} style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}>α = 56,3°</text>
              <text x={222} y={oy - 78} fontSize={11.5} fontWeight={700} fill={roleColour.result} style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}>φ = α − β</text>
            </>
          )}
        </svg>

        <div className="space-y-2 text-xs text-muted-foreground">
          {caseId === "acute" && (
            <>
              <p className="font-medium text-foreground">When m &gt; 0, θ is acute (0° &lt; θ &lt; 90°)</p>
              <div className="overflow-x-auto"><MathTex tex="m = 1 \;\Longrightarrow\; \tan\theta = 1 \;\Longrightarrow\; \theta = 45^\circ" /></div>
            </>
          )}
          {caseId === "obtuse" && (
            <>
              <p className="font-medium text-foreground">When m &lt; 0, add 180°</p>
              <p>The calculator gives a negative acute angle. Always add <MathTex tex="180^\circ" /> to swing into Quadrant II:</p>
              <div className="overflow-x-auto"><MathTex tex="m = -\frac{3}{2} \;\Longrightarrow\; \theta = 180^\circ - 56{,}3^\circ = 123{,}7^\circ" /></div>
            </>
          )}
          {caseId === "between" && (
            <>
              <p className="font-medium text-foreground">Exterior angle of a triangle</p>
              <p>Measure both inclinations (<MathTex tex="\alpha" /> and <MathTex tex="\beta" />) from the <MathTex tex="+x" />-axis, then subtract:</p>
              <div className="overflow-x-auto"><MathTex tex="\varphi = \alpha - \beta" /></div>
              <p>If obtuse, the acute angle between the lines is <MathTex tex="180^\circ - \varphi" />.</p>
            </>
          )}
        </div>
      </div>
    </figure>
  );
}

/**
 * Theorem 1: Line from centre O perpendicular to chord AB bisects AB (and converse).
 */
export function CircleChordCentre() {
  const [converse, setConverse] = useState(false);
  const W = 310, H = 225;
  const cx = 155, cy = 112, r = 82;
  const my = 156;
  const dx = Math.sqrt(r * r - (my - cy) * (my - cy));

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Theorem 1: Chord and centre</span>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => setConverse(false)}
            className={cn(
              "rounded-md px-2.5 py-1 text-xs transition-colors",
              !converse ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            OM ⊥ AB ⇒ AM = MB
          </button>
          <button
            type="button"
            onClick={() => setConverse(true)}
            className={cn(
              "rounded-md px-2.5 py-1 text-xs transition-colors",
              converse ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            AM = MB ⇒ OM ⊥ AB
          </button>
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[310px_1fr]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[310px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--dg-line)" strokeWidth={1.6} />

          {/* Radius OA */}
          <line x1={cx} y1={cy} x2={cx - dx} y2={my} stroke={roleColour.b} strokeWidth={1.6} strokeDasharray="4 3" />
          <text x={cx - dx / 2 - 12} y={(cy + my) / 2} fontSize={11} fontWeight={600} fill={roleColour.b}>r = 5</text>

          {/* Perpendicular OM */}
          <line x1={cx} y1={cy} x2={cx} y2={my} stroke={roleColour.result} strokeWidth={2.2} />
          <text x={cx + 7} y={(cy + my) / 2 + 3} fontSize={11} fontWeight={600} fill={roleColour.result}>3</text>

          {/* Chord AB */}
          <line x1={cx - dx} y1={my} x2={cx + dx} y2={my} stroke={roleColour.a} strokeWidth={2.5} />

          {/* Right angle at M */}
          <path d={`M ${cx},${my - 11} L ${cx + 11},${my - 11} L ${cx + 11},${my}`} fill="none" stroke="var(--dg-text)" strokeWidth={1.4} />

          {/* Equal tick marks on AM and MB */}
          <line x1={cx - dx / 2} y1={my - 5} x2={cx - dx / 2} y2={my + 5} stroke={roleColour.a} strokeWidth={1.8} />
          <line x1={cx + dx / 2} y1={my - 5} x2={cx + dx / 2} y2={my + 5} stroke={roleColour.a} strokeWidth={1.8} />

          <circle cx={cx} cy={cy} r={3.5} fill="var(--dg-text)" />
          <text x={cx} y={cy - 10} fontSize={11.5} fontWeight={700} textAnchor="middle" fill="var(--dg-text)">O</text>
          <text x={cx - dx - 10} y={my + 4} fontSize={11.5} fontWeight={700} textAnchor="end" fill={roleColour.a}>A</text>
          <text x={cx + dx + 10} y={my + 4} fontSize={11.5} fontWeight={700} textAnchor="start" fill={roleColour.a}>B</text>
          <text x={cx} y={my + 16} fontSize={11.5} fontWeight={700} textAnchor="middle" fill={roleColour.result}>M</text>
        </svg>

        <div className="space-y-2 text-xs text-muted-foreground">
          {!converse ? (
            <>
              <p className="font-medium text-foreground">Line from centre perpendicular to chord</p>
              <p>Because <MathTex tex="OA = OB = r" />, <MathTex tex="\triangle OAM \equiv \triangle OBM" /> (RHS), forcing <MathTex tex="AM = MB" />.</p>
              <p className="font-medium text-foreground">Official reason: line from centre ⊥ to chord</p>
              <p>Right-angled <MathTex tex="\triangle OAM" /> immediately gives Pythagoras: <MathTex tex="AM = \sqrt{5^2 - 3^2} = 4" />, so <MathTex tex="AB = 8" />.</p>
            </>
          ) : (
            <>
              <p className="font-medium text-foreground">Line from centre to midpoint of chord</p>
              <p>If <MathTex tex="AM = MB" />, then <MathTex tex="\triangle OAM \equiv \triangle OBM" /> (SSS), so the adjacent straight angles at <MathTex tex="M" /> are each <MathTex tex="90^\circ" />.</p>
              <p className="font-medium text-foreground">Official reason: line from centre to midpt of chord</p>
            </>
          )}
        </div>
      </div>
    </figure>
  );
}

/**
 * Theorems 2, 3, and 4: Angle at centre = 2 x circumference, semicircle 90°, same segment.
 */
export function CircleAngleCentre() {
  const [tab, setTab] = useState<"centre" | "semi" | "segment">("centre");
  const W = 310, H = 228;
  const cx = 155, cy = 114, r = 82;

  const pt = (deg: number): [number, number] => [cx + r * Math.cos((deg * Math.PI) / 180), cy - r * Math.sin((deg * Math.PI) / 180)];
  const [ax, ay] = pt(215);
  const [bx, by] = pt(325);
  const [cxP, cyP] = pt(82);
  const [dxP, dyP] = pt(132);
  const [sx1, sy1] = pt(180);
  const [sx2, sy2] = pt(0);
  const [scx, scy] = pt(64);

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Circle angle theorems</span>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["centre", "∠ at centre = 2×∠ at circum"],
              ["semi", "Angle in semicircle (90°)"],
              ["segment", "Same segment"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={cn(
                "rounded-md px-2 py-1 text-xs transition-colors",
                tab === id ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[310px_1fr]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[310px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--dg-line)" strokeWidth={1.6} />

          {tab === "centre" && (
            <>
              <polyline points={`${ax},${ay} ${cx},${cy} ${bx},${by}`} fill="none" stroke={roleColour.b} strokeWidth={2.2} />
              <polyline points={`${ax},${ay} ${cxP},${cyP} ${bx},${by}`} fill="none" stroke={roleColour.a} strokeWidth={2.2} />
              <circle cx={cx} cy={cy} r={3.5} fill="var(--dg-text)" />
              <text x={cx - 12} y={cy - 4} fontSize={11} fontWeight={700} fill="var(--dg-text)">O</text>
              <text x={cx} y={cy + 26} fontSize={12} fontWeight={700} textAnchor="middle" fill={roleColour.b}>2x (110°)</text>
              <text x={cxP} y={cyP - 10} fontSize={11.5} fontWeight={700} textAnchor="middle" fill={roleColour.a}>C (x = 55°)</text>
              <text x={ax - 10} y={ay + 8} fontSize={11.5} fontWeight={700} textAnchor="end" fill="var(--dg-text)">A</text>
              <text x={bx + 10} y={by + 8} fontSize={11.5} fontWeight={700} textAnchor="start" fill="var(--dg-text)">B</text>
            </>
          )}

          {tab === "semi" && (
            <>
              <line x1={sx1} y1={sy1} x2={sx2} y2={sy2} stroke={roleColour.b} strokeWidth={2.2} />
              <polyline points={`${sx1},${sy1} ${scx},${scy} ${sx2},${sy2}`} fill="none" stroke={roleColour.a} strokeWidth={2.2} />
              <circle cx={cx} cy={cy} r={3.5} fill="var(--dg-text)" />
              <text x={cx} y={cy + 15} fontSize={11.5} fontWeight={700} textAnchor="middle" fill="var(--dg-text)">O</text>
              <text x={scx + 6} y={scy - 10} fontSize={11.5} fontWeight={700} fill={roleColour.result}>C = 90°</text>
              <text x={sx1 - 10} y={sy1 + 4} fontSize={11.5} fontWeight={700} textAnchor="end" fill="var(--dg-text)">A</text>
              <text x={sx2 + 10} y={sy2 + 4} fontSize={11.5} fontWeight={700} textAnchor="start" fill="var(--dg-text)">B</text>
            </>
          )}

          {tab === "segment" && (
            <>
              <line x1={ax} y1={ay} x2={bx} y2={by} stroke="var(--dg-line)" strokeWidth={1.6} />
              <polyline points={`${ax},${ay} ${cxP},${cyP} ${bx},${by}`} fill="none" stroke={roleColour.a} strokeWidth={2.1} />
              <polyline points={`${ax},${ay} ${dxP},${dyP} ${bx},${by}`} fill="none" stroke={roleColour.result} strokeWidth={2.1} />
              <text x={cxP + 4} y={cyP - 10} fontSize={11.5} fontWeight={700} fill={roleColour.a}>C (x)</text>
              <text x={dxP - 8} y={dyP - 8} fontSize={11.5} fontWeight={700} textAnchor="end" fill={roleColour.result}>D (x)</text>
              <text x={ax - 10} y={ay + 8} fontSize={11.5} fontWeight={700} textAnchor="end" fill="var(--dg-text)">A</text>
              <text x={bx + 10} y={by + 8} fontSize={11.5} fontWeight={700} textAnchor="start" fill="var(--dg-text)">B</text>
            </>
          )}
        </svg>

        <div className="space-y-2 text-xs text-muted-foreground">
          {tab === "centre" && (
            <>
              <p className="font-medium text-foreground">Angle at centre is twice angle at circumference</p>
              <p>Both angles open from the same arc <MathTex tex="AB" />. Official reason: <span className="font-medium text-foreground">∠ at centre = 2 × ∠ at circumference</span>.</p>
            </>
          )}
          {tab === "semi" && (
            <>
              <p className="font-medium text-foreground">Special case: straight angle <MathTex tex="180^\circ" /> at <MathTex tex="O" /></p>
              <p>When <MathTex tex="AB" /> is a diameter, <MathTex tex="A\hat{O}B = 180^\circ" />, forcing <MathTex tex="A\hat{C}B = \frac{1}{2}(180^\circ) = 90^\circ" />. Reason: <span className="font-medium text-foreground">∠ in semi-circle</span>.</p>
            </>
          )}
          {tab === "segment" && (
            <>
              <p className="font-medium text-foreground">Angles in the same segment are equal</p>
              <p>Because <MathTex tex="\hat{C}" /> and <MathTex tex="\hat{D}" /> are both half of the same centre angle <MathTex tex="A\hat{O}B" />, <MathTex tex="\hat{C} = \hat{D}" />. Reason: <span className="font-medium text-foreground">∠s in the same seg</span>.</p>
            </>
          )}
        </div>
      </div>
    </figure>
  );
}

/**
 * Cyclic quadrilateral theorems: opposite angles sum to 180° and exterior angle equals interior opposite.
 */
export function CyclicQuadExplorer() {
  const [ext, setExt] = useState(false);
  const W = 330, H = 225;
  const cx = 148, cy = 112, r = 78;
  const pt = (deg: number): [number, number] => [cx + r * Math.cos((deg * Math.PI) / 180), cy - r * Math.sin((deg * Math.PI) / 180)];
  const p = pt(132);
  const q = pt(42);
  const s = pt(220);
  const rv = pt(320);
  // Extend S -> R outward to T cleanly
  const dx = rv[0] - s[0], dy = rv[1] - s[1];
  const len = Math.hypot(dx, dy);
  const t: [number, number] = [rv[0] + (dx / len) * 56, rv[1] + (dy / len) * 56];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Cyclic quadrilateral PQRS</span>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => setExt(false)}
            className={cn(
              "rounded-md px-2.5 py-1 text-xs transition-colors",
              !ext ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            Opposite ∠s = 180°
          </button>
          <button
            type="button"
            onClick={() => setExt(true)}
            className={cn(
              "rounded-md px-2.5 py-1 text-xs transition-colors",
              ext ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            Exterior ∠ = int opp ∠
          </button>
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[330px_1fr]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[330px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--dg-line)" strokeWidth={1.5} />
          <polygon points={`${p[0]},${p[1]} ${q[0]},${q[1]} ${rv[0]},${rv[1]} ${s[0]},${s[1]}`} fill={roleColour.a} fillOpacity={0.07} stroke={roleColour.a} strokeWidth={2.1} />

          {ext && (
            <>
              <line x1={rv[0]} y1={rv[1]} x2={t[0]} y2={t[1]} stroke={roleColour.result} strokeWidth={2.2} />
              <text x={t[0] + 6} y={t[1] + 4} fontSize={11.5} fontWeight={700} fill={roleColour.result}>T</text>
              <text x={rv[0] + 22} y={rv[1] - 12} fontSize={11} fontWeight={700} fill={roleColour.result}>105°</text>
            </>
          )}

          <text x={p[0] - 8} y={p[1] - 8} fontSize={11.5} fontWeight={700} textAnchor="end" fill={roleColour.result}>P (105°)</text>
          <text x={q[0] + 8} y={q[1] - 8} fontSize={11.5} fontWeight={700} fill="var(--dg-text)">Q</text>
          <text x={rv[0] + 6} y={rv[1] + 15} fontSize={11.5} fontWeight={700} fill={roleColour.b}>R (75°)</text>
          <text x={s[0] - 8} y={s[1] + 12} fontSize={11.5} fontWeight={700} textAnchor="end" fill="var(--dg-text)">S</text>
        </svg>

        <div className="space-y-2 text-xs text-muted-foreground">
          {!ext ? (
            <>
              <p className="font-medium text-foreground">Opposite angles are supplementary</p>
              <p>All 4 vertices sit on the circle, so <MathTex tex="\hat{P} + \hat{R} = 180^\circ" /> and <MathTex tex="\hat{Q} + \hat{S} = 180^\circ" />.</p>
              <p className="font-medium text-foreground">Official reason: opp ∠s of cyclic quad</p>
            </>
          ) : (
            <>
              <p className="font-medium text-foreground">Exterior angle equals interior opposite angle</p>
              <p>Since <MathTex tex="Q\hat{R}S + Q\hat{R}T = 180^\circ" /> (straight line) and <MathTex tex="\hat{P} + Q\hat{R}S = 180^\circ" />, it forces <MathTex tex="Q\hat{R}T = \hat{P} = 105^\circ" />.</p>
              <p className="font-medium text-foreground">Official reason: ext ∠ of cyclic quad</p>
            </>
          )}
        </div>
      </div>
    </figure>
  );
}

/**
 * Tangent theorems explorer: Tan perpendicular to radius, Equal tangents from point, and Tan-Chord theorem.
 */
export function TangentCircleExplorer() {
  const [tab, setTab] = useState<"perp" | "equal" | "chord">("chord");
  const W = 320, H = 230;
  const cx = 148, cy = 105, r = 74;
  const pt = (deg: number): [number, number] => [cx + r * Math.cos((deg * Math.PI) / 180), cy - r * Math.sin((deg * Math.PI) / 180)];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Tangent theorems</span>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["perp", "tan ⊥ radius"],
              ["equal", "Tangents from same point"],
              ["chord", "Tan-chord theorem"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={cn(
                "rounded-md px-2 py-1 text-xs transition-colors",
                tab === id ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[320px_1fr]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[320px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--dg-line)" strokeWidth={1.6} />

          {tab === "perp" && (
            <>
              <line x1={cx} y1={cy} x2={cx} y2={cy + r} stroke={roleColour.a} strokeWidth={2.2} />
              <line x1={38} y1={cy + r} x2={268} y2={cy + r} stroke={roleColour.result} strokeWidth={2.3} />
              <path d={`M ${cx},${cy + r - 12} L ${cx + 12},${cy + r - 12} L ${cx + 12},${cy + r}`} fill="none" stroke="var(--dg-text)" strokeWidth={1.4} />
              <circle cx={cx} cy={cy} r={3.5} fill="var(--dg-text)" />
              <text x={cx + 8} y={cy - 4} fontSize={11.5} fontWeight={700} fill="var(--dg-text)">O</text>
              <text x={cx} y={cy + r + 16} fontSize={11.5} fontWeight={700} textAnchor="middle" fill={roleColour.result}>A (90°)</text>
              <text x={268} y={cy + r - 8} fontSize={11} fontWeight={600} textAnchor="end" fill={roleColour.result}>T</text>
            </>
          )}

          {tab === "equal" && (
            <>
              {/* External point P = (290, 105). Tangent angle cos(alpha) = 74 / 142 => ~58.6 deg */}
              {(() => {
                const a1 = pt(58.6);
                const a2 = pt(-58.6);
                return (
                  <>
                    <line x1={286} y1={cy} x2={a1[0]} y2={a1[1]} stroke={roleColour.result} strokeWidth={2.2} />
                    <line x1={286} y1={cy} x2={a2[0]} y2={a2[1]} stroke={roleColour.result} strokeWidth={2.2} />
                    <line x1={cx} y1={cy} x2={a1[0]} y2={a1[1]} stroke={roleColour.a} strokeWidth={1.5} strokeDasharray="4 3" />
                    <line x1={cx} y1={cy} x2={a2[0]} y2={a2[1]} stroke={roleColour.a} strokeWidth={1.5} strokeDasharray="4 3" />
                    <text x={a1[0] - 4} y={a1[1] - 10} fontSize={11.5} fontWeight={700} fill="var(--dg-text)">A</text>
                    <text x={a2[0] - 4} y={a2[1] + 16} fontSize={11.5} fontWeight={700} fill="var(--dg-text)">B</text>
                    <text x={294} y={cy + 4} fontSize={11.5} fontWeight={700} fill={roleColour.result}>P</text>
                    <text x={232} y={cy - 44} fontSize={10.5} fontWeight={600} fill={roleColour.result}>PA = PB</text>
                  </>
                );
              })()}
            </>
          )}

          {tab === "chord" && (
            <>
              {(() => {
                const a = pt(270);
                const c = pt(45);
                const b = pt(145);
                return (
                  <>
                    {/* Horizontal tangent at bottom A */}
                    <line x1={38} y1={a[1]} x2={268} y2={a[1]} stroke={roleColour.b} strokeWidth={2.2} />
                    <polygon points={`${a[0]},${a[1]} ${c[0]},${c[1]} ${b[0]},${b[1]}`} fill="none" stroke={roleColour.a} strokeWidth={2} />
                    <text x={42} y={a[1] + 16} fontSize={11} fontWeight={700} fill={roleColour.b}>E</text>
                    <text x={a[0]} y={a[1] + 16} fontSize={11.5} fontWeight={700} textAnchor="middle" fill="var(--dg-text)">A</text>
                    <text x={264} y={a[1] + 16} fontSize={11} fontWeight={700} fill={roleColour.b}>T</text>
                    <text x={b[0] - 10} y={b[1] - 6} fontSize={11.5} fontWeight={700} textAnchor="end" fill={roleColour.result}>B (x)</text>
                    <text x={c[0] + 10} y={c[1] - 4} fontSize={11.5} fontWeight={700} fill="var(--dg-text)">C</text>
                    <text x={a[0] + 34} y={a[1] - 8} fontSize={11.5} fontWeight={700} fill={roleColour.result}>x</text>
                  </>
                );
              })()}
            </>
          )}
        </svg>

        <div className="space-y-2 text-xs text-muted-foreground">
          {tab === "perp" && (
            <>
              <p className="font-medium text-foreground">Tangent is perpendicular to the radius</p>
              <p>At the point of contact <MathTex tex="A" />, <MathTex tex="OA \perp ET" />. Official reason: <span className="font-medium text-foreground">tan ⊥ radius</span>.</p>
            </>
          )}
          {tab === "equal" && (
            <>
              <p className="font-medium text-foreground">Two tangents from the same external point are equal</p>
              <p>Both triangles <MathTex tex="\triangle OAP" /> and <MathTex tex="\triangle OBP" /> are right-angled with equal hypotenuse <MathTex tex="OP" /> and radii <MathTex tex="OA = OB" />, forcing <MathTex tex="PA = PB" />.</p>
              <p className="font-medium text-foreground">Official reason: tangents from same pt</p>
            </>
          )}
          {tab === "chord" && (
            <>
              <p className="font-medium text-foreground">Angle between tangent and chord equals angle in alternate segment</p>
              <p>Look across chord <MathTex tex="AC" />: the angle between tangent <MathTex tex="AT" /> and chord <MathTex tex="AC" /> (<MathTex tex="C\hat{A}T = x" />) equals angle <MathTex tex="\hat{B}" /> subtended by chord <MathTex tex="AC" /> on the far side.</p>
              <p className="font-medium text-foreground">Official reason: tan-chord theorem</p>
            </>
          )}
        </div>
      </div>
    </figure>
  );
}

/**
 * Interactive non-right triangle diagram proving Area, Sine, and Cosine rules via dropped altitude h = b sin A.
 */
export function TrigRulesTriangle() {
  const [rule, setRule] = useState<"area" | "sine" | "cosine">("area");
  const W = 340, H = 200;
  const A: [number, number] = [52, 162];
  const B: [number, number] = [294, 162];
  const C: [number, number] = [142, 42];
  const D: [number, number] = [142, 162];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Why all three 2D trig rules share one altitude</span>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["area", "Area rule"],
              ["sine", "Sine rule"],
              ["cosine", "Cosine rule"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setRule(id)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs transition-colors",
                rule === id ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[340px_1fr]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[340px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <polygon points={`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`} fill={roleColour.a} fillOpacity={0.07} stroke={roleColour.a} strokeWidth={2.2} />
          <line x1={C[0]} y1={C[1]} x2={D[0]} y2={D[1]} stroke={roleColour.result} strokeWidth={1.8} strokeDasharray="4 3" />
          <path d={`M ${D[0]},${D[1] - 11} L ${D[0] + 11},${D[1] - 11} L ${D[0] + 11},${D[1]}`} fill="none" stroke="var(--dg-text)" strokeWidth={1.3} />

          <text x={A[0] - 8} y={A[1] + 8} fontSize={12} fontWeight={700} textAnchor="end" fill="var(--dg-text)">A</text>
          <text x={B[0] + 8} y={B[1] + 8} fontSize={12} fontWeight={700} fill="var(--dg-text)">B</text>
          <text x={C[0]} y={C[1] - 10} fontSize={12} fontWeight={700} textAnchor="middle" fill="var(--dg-text)">C</text>
          <text x={D[0]} y={D[1] + 16} fontSize={11} textAnchor="middle" fill="var(--dg-line)">D</text>

          <text x={85} y={96} fontSize={12} fontWeight={600} fill={roleColour.a}>b</text>
          <text x={228} y={96} fontSize={12} fontWeight={600} fill={roleColour.b}>a</text>
          <text x={148} y={108} fontSize={12} fontWeight={700} fill={roleColour.result}>h</text>
          {rule === "cosine" ? (
            <>
              <text x={(A[0] + D[0]) / 2} y={178} fontSize={10.5} textAnchor="middle" fill={roleColour.a}>b cos A</text>
              <text x={(D[0] + B[0]) / 2} y={178} fontSize={10.5} textAnchor="middle" fill={roleColour.b}>c − b cos A</text>
            </>
          ) : (
            <text x={218} y={178} fontSize={12} fontWeight={600} fill="var(--dg-text)">c</text>
          )}
        </svg>

        <div className="space-y-2 text-xs text-muted-foreground">
          {rule === "area" && (
            <>
              <p className="font-medium text-foreground">Replace unknown perpendicular height <MathTex tex="h" /> with <MathTex tex="b\sin A" /></p>
              <div className="overflow-x-auto"><MathTex tex="\sin A = \frac{h}{b} \;\Longrightarrow\; h = b\sin A" /></div>
              <div className="overflow-x-auto"><MathTex tex="\text{Area} = \frac{1}{2}c h = \frac{1}{2}bc\sin A" /></div>
            </>
          )}
          {rule === "sine" && (
            <>
              <p className="font-medium text-foreground">Write the same height <MathTex tex="h" /> from both right triangles</p>
              <div className="overflow-x-auto"><MathTex tex="h = b\sin A \quad\text{and}\quad h = a\sin B" /></div>
              <div className="overflow-x-auto"><MathTex tex="\Longrightarrow\; \frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c}" /></div>
            </>
          )}
          {rule === "cosine" && (
            <>
              <p className="font-medium text-foreground">Pythagoras on the right-hand triangle <MathTex tex="\triangle CDB" /></p>
              <div className="overflow-x-auto"><MathTex tex="a^2 = h^2 + (c - b\cos A)^2" /></div>
              <div className="overflow-x-auto"><MathTex tex="a^2 = b^2\sin^2 A + c^2 - 2bc\cos A + b^2\cos^2 A = b^2 + c^2 - 2bc\cos A" /></div>
            </>
          )}
        </div>
      </div>
    </figure>
  );
}
