import { useState } from "react";
import katex from "katex";
import { roleColour } from "./toolkit";
import { cn } from "@/lib/utils";

function PhysTex({ tex }: { tex: string }) {
  return <span dangerouslySetInnerHTML={{ __html: katex.renderToString(tex, { throwOnError: false, strict: false }) }} />;
}

/**
 * Interactive inclined-plane free-body diagram explorer.
 * Adjusts ramp angle theta, toggles weight components (mg sin theta, mg cos theta), and motion state.
 */
export function InclineForcesExplorer() {
  const [angle, setAngle] = useState(30);
  const [motion, setMotion] = useState<"down" | "up" | "rest">("down");
  const [showComp, setShowComp] = useState(true);

  const m = 5;
  const g = 9.8;
  const w = m * g;
  const rad = (angle * Math.PI) / 180;
  const wPar = w * Math.sin(rad);
  const wPerp = w * Math.cos(rad);

  const W = 340, H = 225;
  // Base of triangle at bottom-left (42, 195), base width 250
  const bx = 44, by = 195, bw = 248;
  const th = bw * Math.tan(rad);
  const topY = Math.max(32, by - th);
  const actualRun = (by - topY) / Math.tan(rad);
  const topX = bx + actualRun;

  // Midpoint along slope for block
  const ux = Math.cos(rad), uy = -Math.sin(rad); // up the slope
  const nx = -Math.sin(rad), ny = -Math.cos(rad); // outward normal (up-left)
  const cx = bx + actualRun * 0.52 + nx * 14;
  const cy = by - (actualRun * 0.52) * Math.tan(rad) + ny * 14;

  const boxPts = [
    [cx - ux * 20 - nx * 12, cy - uy * 20 - ny * 12],
    [cx + ux * 20 - nx * 12, cy + uy * 20 - ny * 12],
    [cx + ux * 20 + nx * 12, cy + uy * 20 + ny * 12],
    [cx - ux * 20 + nx * 12, cy - uy * 20 + ny * 12],
  ].map((p) => p.map((v) => v.toFixed(1)).join(",")).join(" ");

  const wTip: [number, number] = [cx, cy + 68];
  const nTip: [number, number] = [cx + nx * 60, cy + ny * 60];
  const fDir = motion === "up" ? -1 : 1; // sliding up => friction down (-ux); sliding/resting down => friction up (+ux)
  const fTip: [number, number] = [cx + fDir * ux * 46, cy + fDir * uy * 46];
  const wPerpTip: [number, number] = [cx - nx * (68 * Math.cos(rad)), cy - ny * (68 * Math.cos(rad))];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Inclined plane free-body explorer (m = 5 kg)</span>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["down", "Sliding down"],
              ["up", "Pushed up"],
              ["rest", "At rest (static f)"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setMotion(id)}
              className={cn(
                "rounded-md px-2 py-1 text-xs transition-colors",
                motion === id ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[340px_1fr]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[340px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <defs>
            <marker id="inc-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill={roleColour.a} />
            </marker>
            <marker id="inc-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill={roleColour.b} />
            </marker>
            <marker id="inc-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill={roleColour.result} />
            </marker>
          </defs>

          {/* Ramp */}
          <polygon points={`${bx},${by} ${topX.toFixed(1)},${by} ${topX.toFixed(1)},${topY.toFixed(1)}`} fill="var(--dg-line)" fillOpacity={0.08} stroke="var(--dg-line)" strokeWidth={1.5} />
          <text x={bx + 34} y={by - 7} fontSize={10.5} fontWeight={600} fill="var(--dg-line)">{angle}°</text>

          {/* Block */}
          <polygon points={boxPts} fill={roleColour.a} fillOpacity={0.14} stroke={roleColour.a} strokeWidth={1.8} />
          <circle cx={cx} cy={cy} r={3.5} fill="var(--dg-text)" />

          {/* Weight components (optional dashed guide) */}
          {showComp && (
            <>
              <line x1={cx} y1={cy} x2={wPerpTip[0]} y2={wPerpTip[1]} stroke={roleColour.a} strokeWidth={1.7} strokeDasharray="4 3" />
              <line x1={wPerpTip[0]} y1={wPerpTip[1]} x2={wTip[0]} y2={wTip[1]} stroke={roleColour.result} strokeWidth={1.7} strokeDasharray="4 3" />
              <text x={wPerpTip[0] + 10} y={wPerpTip[1] - 4} fontSize={10} fontWeight={600} fill={roleColour.a} style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 3 }}>
                w⊥ = mg cos θ
              </text>
              <text x={(wPerpTip[0] + wTip[0]) / 2 - 6} y={(wPerpTip[1] + wTip[1]) / 2 + 12} fontSize={10} fontWeight={600} textAnchor="end" fill={roleColour.result} style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 3 }}>
                w∥ = mg sin θ
              </text>
            </>
          )}

          {/* Normal force N */}
          <line x1={cx} y1={cy} x2={nTip[0]} y2={nTip[1]} stroke={roleColour.b} strokeWidth={2.4} markerEnd="url(#inc-b)" />
          <text x={nTip[0] - 8} y={nTip[1] - 6} fontSize={11} fontWeight={700} textAnchor="end" fill={roleColour.b}>N</text>

          {/* Friction f */}
          <line x1={cx} y1={cy} x2={fTip[0]} y2={fTip[1]} stroke={roleColour.result} strokeWidth={2.4} markerEnd="url(#inc-r)" />
          <text x={fTip[0] + fDir * 6} y={fTip[1] - 8} fontSize={11} fontWeight={700} textAnchor={fDir > 0 ? "start" : "end"} fill={roleColour.result}>
            {motion === "rest" ? "fs" : "fk"}
          </text>

          {/* Weight Fg / w */}
          <line x1={cx} y1={cy} x2={wTip[0]} y2={wTip[1]} stroke={roleColour.a} strokeWidth={2.5} markerEnd="url(#inc-a)" />
          <text x={wTip[0] + 8} y={wTip[1] + 2} fontSize={11} fontWeight={700} fill={roleColour.a}>w = mg</text>
        </svg>

        <div className="space-y-2.5 text-xs">
          <div className="space-y-1">
            <div className="flex justify-between">
              <label htmlFor="inc-angle" className="font-medium text-foreground">Slope angle θ</label>
              <span className="tabular-nums text-muted-foreground">{angle}°</span>
            </div>
            <input id="inc-angle" type="range" min={15} max={45} step={5} value={angle} onChange={(e) => setAngle(Number(e.target.value))} className="w-full accent-primary" />
          </div>

          <button
            type="button"
            onClick={() => setShowComp((v) => !v)}
            className="rounded border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {showComp ? "Hide weight components" : "Show weight components (w∥ & w⊥)"}
          </button>

          <div className="space-y-1 rounded bg-secondary/50 p-2.5 text-muted-foreground">
            <div className="overflow-x-auto"><PhysTex tex={`w = mg = 5(9{,}8) = 49{,}0\\text{ N}`} /></div>
            <div className="overflow-x-auto"><PhysTex tex={`w_\\parallel = mg\\sin ${angle}^\\circ = ${wPar.toFixed(1).replace(".", "{,")}\\text{ N}`} /></div>
            <div className="overflow-x-auto text-foreground"><PhysTex tex={`N = w_\\perp = mg\\cos ${angle}^\\circ = ${wPerp.toFixed(1).replace(".", "{,")}\\text{ N}`} /></div>
          </div>

          <p className="text-muted-foreground">
            Never draw <span className="font-medium text-foreground">w∥</span> and <span className="font-medium text-foreground">w⊥</span> on an exam Free-Body Diagram alongside <span className="font-medium text-foreground">w</span>—only use them in your working!
          </p>
        </div>
      </div>
    </figure>
  );
}

/**
 * Interactive inverse-square explorer for Universal Gravitation and Coulomb's Law.
 */
export function InverseSquareExplorer() {
  const [law, setLaw] = useState<"grav" | "coulomb">("coulomb");
  const [dist, setDist] = useState<1 | 2 | 3>(1);

  const fRatio = dist === 1 ? "F" : dist === 2 ? "1/4 F" : "1/9 F";
  const W = 350, H = 185;
  const r1x = 88, r2x = 88 + dist * 68, cy = 72;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Inverse-square law: distance r is centre-to-centre</span>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => setLaw("grav")}
            className={cn("rounded-md px-2.5 py-1 text-xs", law === "grav" ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground")}
          >
            Gravitation (F ∝ 1/r²)
          </button>
          <button
            type="button"
            onClick={() => setLaw("coulomb")}
            className={cn("rounded-md px-2.5 py-1 text-xs", law === "coulomb" ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground")}
          >
            Coulomb (F ∝ 1/r²)
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-1.5">
            {([1, 2, 3] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDist(d)}
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs transition-colors",
                  dist === d ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
                )}
              >
                Distance = {d}r
              </button>
            ))}
          </div>
          <span className="text-xs font-semibold text-foreground tabular-nums">Resulting Force = {fRatio}</span>
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[350px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <defs>
            <marker id="inv-f1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill={roleColour.result} />
            </marker>
          </defs>

          {/* Centre-to-centre distance line */}
          <line x1={r1x} y1={132} x2={r2x} y2={132} stroke="var(--dg-line)" strokeWidth={1.6} strokeDasharray="4 3" />
          <line x1={r1x} y1={cy} x2={r1x} y2={140} stroke="var(--dg-line)" strokeOpacity={0.45} strokeWidth={1} />
          <line x1={r2x} y1={cy} x2={r2x} y2={140} stroke="var(--dg-line)" strokeOpacity={0.45} strokeWidth={1} />
          <text x={(r1x + r2x) / 2} y={149} fontSize={11} fontWeight={600} textAnchor="middle" fill="var(--dg-text)">
            {dist === 1 ? "r (centre to centre)" : `${dist}r`}
          </text>

          {/* Spheres */}
          <circle cx={r1x} cy={cy} r={20} fill={roleColour.a} fillOpacity={0.2} stroke={roleColour.a} strokeWidth={2} />
          <circle cx={r2x} cy={cy} r={16} fill={roleColour.b} fillOpacity={0.2} stroke={roleColour.b} strokeWidth={2} />
          <text x={r1x} y={cy + 4} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.a}>
            {law === "grav" ? "m₁" : "+Q₁"}
          </text>
          <text x={r2x} y={cy + 4} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.b}>
            {law === "grav" ? "m₂" : "−Q₂"}
          </text>

          {/* Equal-and-opposite force arrows (Newton 3), length shrinks by 1/d^2 */}
          {(() => {
            const len = dist === 1 ? 44 : dist === 2 ? 18 : 10;
            return (
              <>
                <line x1={r1x + 22} y1={cy} x2={r1x + 22 + len} y2={cy} stroke={roleColour.result} strokeWidth={2.5} markerEnd="url(#inv-f1)" />
                <line x1={r2x - 18} y1={cy} x2={r2x - 18 - len} y2={cy} stroke={roleColour.result} strokeWidth={2.5} markerEnd="url(#inv-f1)" />
                <text x={r1x + 24 + len / 2} y={cy - 14} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.result}>
                  {fRatio}
                </text>
                <text x={r2x - 20 - len / 2} y={cy - 14} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.result}>
                  {fRatio}
                </text>
              </>
            );
          })()}
        </svg>

        <div className="mt-2.5 text-center text-xs text-muted-foreground">
          {law === "grav" ? (
            <PhysTex tex={`F = \\frac{G m_1 m_2}{r^2} \\quad\\text{Doubling } r \\text{ divides force by } 2^2 = 4;\\text{ tripling } r \\text{ divides force by } 3^2 = 9.`} />
          ) : (
            <PhysTex tex={`F = \\frac{k Q_1 Q_2}{r^2} \\quad\\text{Newton III: both charges always pull or push each other with EQUAL magnitude } F.`} />
          )}
        </div>
      </div>
    </figure>
  );
}

/**
 * Interactive 2D Coulomb right-angled arrangement & Electric Field line visualizer.
 */
export function CoulombAndFieldVisual() {
  const [mode, setMode] = useState<"2d" | "unlike" | "like">("2d");
  const W = 340, H = 205;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">2D electrostatic forces &amp; electric field patterns</span>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["2d", "Right-angled 2D charges"],
              ["unlike", "Field: + and −"],
              ["like", "Field: + and +"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setMode(id)}
              className={cn(
                "rounded-md px-2 py-1 text-xs transition-colors",
                mode === id ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[340px_1fr]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[340px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <defs>
            <marker id="el-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill={roleColour.a} />
            </marker>
            <marker id="el-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill={roleColour.b} />
            </marker>
            <marker id="el-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill={roleColour.result} />
            </marker>
          </defs>

          {mode === "2d" && (
            <>
              {/* Charges Q1 at top-left (105, 42), Q2 at corner (105, 132), Q3 at right (225, 132) */}
              <line x1={105} y1={42} x2={105} y2={132} stroke="var(--dg-line)" strokeDasharray="4 3" strokeWidth={1.3} />
              <line x1={105} y1={132} x2={225} y2={132} stroke="var(--dg-line)" strokeDasharray="4 3" strokeWidth={1.3} />
              <path d="M 105,120 L 117,120 L 117,132" fill="none" stroke="var(--dg-line)" strokeWidth={1.2} />

              {/* Force vectors acting ON Q2: Q1(+) repels Q2(+) DOWN; Q3(-) attracts Q2(+) RIGHT */}
              <line x1={105} y1={132} x2={105} y2={186} stroke={roleColour.a} strokeWidth={2.3} markerEnd="url(#el-a)" />
              <line x1={105} y1={132} x2={175} y2={132} stroke={roleColour.b} strokeWidth={2.3} markerEnd="url(#el-b)" />
              <line x1={105} y1={132} x2={175} y2={186} stroke={roleColour.result} strokeWidth={2.7} markerEnd="url(#el-r)" />
              <line x1={175} y1={132} x2={175} y2={186} stroke="var(--dg-line)" strokeOpacity={0.35} strokeDasharray="3 3" strokeWidth={1.1} />
              <line x1={105} y1={186} x2={175} y2={186} stroke="var(--dg-line)" strokeOpacity={0.35} strokeDasharray="3 3" strokeWidth={1.1} />

              <circle cx={105} cy={42} r={11} fill={roleColour.a} fillOpacity={0.2} stroke={roleColour.a} strokeWidth={1.8} />
              <text x={105} y={46} fontSize={10} fontWeight={700} textAnchor="middle" fill={roleColour.a}>+Q₁</text>
              <circle cx={105} cy={132} r={11} fill={roleColour.result} fillOpacity={0.2} stroke={roleColour.result} strokeWidth={1.8} />
              <text x={82} y={136} fontSize={10} fontWeight={700} textAnchor="end" fill={roleColour.result}>+Q₂</text>
              <circle cx={225} cy={132} r={11} fill={roleColour.b} fillOpacity={0.2} stroke={roleColour.b} strokeWidth={1.8} />
              <text x={246} y={136} fontSize={10} fontWeight={700} fill={roleColour.b}>−Q₃</text>

              <text x={84} y={176} fontSize={10} fontWeight={600} textAnchor="end" fill={roleColour.a}>F₁ on 2</text>
              <text x={144} y={122} fontSize={10} fontWeight={600} fill={roleColour.b}>F₃ on 2</text>
              <text x={182} y={188} fontSize={11} fontWeight={700} fill={roleColour.result}>Fnet</text>
            </>
          )}

          {mode === "unlike" && (
            <>
              <line x1={115} y1={102} x2={212} y2={102} stroke={roleColour.result} strokeWidth={1.8} markerEnd="url(#el-r)" />
              <path d="M 110,92 Q 170,40 220,92" fill="none" stroke={roleColour.result} strokeWidth={1.6} markerEnd="url(#el-r)" />
              <path d="M 110,112 Q 170,164 220,112" fill="none" stroke={roleColour.result} strokeWidth={1.6} markerEnd="url(#el-r)" />
              <path d="M 102,88 Q 170,12 232,88" fill="none" stroke={roleColour.result} strokeWidth={1.4} />
              <path d="M 102,116 Q 170,192 232,116" fill="none" stroke={roleColour.result} strokeWidth={1.4} />
              <line x1={90} y1={102} x2={44} y2={102} stroke={roleColour.result} strokeWidth={1.5} markerEnd="url(#el-r)" />
              <line x1={296} y1={102} x2={252} y2={102} stroke={roleColour.result} strokeWidth={1.5} markerEnd="url(#el-r)" />

              <circle cx={102} cy={102} r={14} fill={roleColour.a} fillOpacity={0.25} stroke={roleColour.a} strokeWidth={2} />
              <text x={102} y={107} fontSize={13} fontWeight={700} textAnchor="middle" fill={roleColour.a}>+</text>
              <circle cx={238} cy={102} r={14} fill={roleColour.b} fillOpacity={0.25} stroke={roleColour.b} strokeWidth={2} />
              <text x={238} y={106} fontSize={14} fontWeight={700} textAnchor="middle" fill={roleColour.b}>−</text>
            </>
          )}

          {mode === "like" && (
            <>
              <path d="M 116,94 Q 160,84 162,28" fill="none" stroke={roleColour.result} strokeWidth={1.6} markerEnd="url(#el-r)" />
              <path d="M 116,110 Q 160,120 162,176" fill="none" stroke={roleColour.result} strokeWidth={1.6} markerEnd="url(#el-r)" />
              <path d="M 224,94 Q 180,84 178,28" fill="none" stroke={roleColour.result} strokeWidth={1.6} markerEnd="url(#el-r)" />
              <path d="M 224,110 Q 180,120 178,176" fill="none" stroke={roleColour.result} strokeWidth={1.6} markerEnd="url(#el-r)" />
              <line x1={90} y1={102} x2={44} y2={102} stroke={roleColour.result} strokeWidth={1.6} markerEnd="url(#el-r)" />
              <line x1={250} y1={102} x2={296} y2={102} stroke={roleColour.result} strokeWidth={1.6} markerEnd="url(#el-r)" />
              <circle cx={170} cy={102} r={3} fill="var(--dg-line)" />
              <text x={170} y={118} fontSize={9.5} textAnchor="middle" fill="var(--dg-line)">E = 0</text>

              <circle cx={102} cy={102} r={14} fill={roleColour.a} fillOpacity={0.25} stroke={roleColour.a} strokeWidth={2} />
              <text x={102} y={107} fontSize={13} fontWeight={700} textAnchor="middle" fill={roleColour.a}>+</text>
              <circle cx={238} cy={102} r={14} fill={roleColour.a} fillOpacity={0.25} stroke={roleColour.a} strokeWidth={2} />
              <text x={238} y={107} fontSize={13} fontWeight={700} textAnchor="middle" fill={roleColour.a}>+</text>
            </>
          )}
        </svg>

        <div className="space-y-2 text-xs text-muted-foreground">
          {mode === "2d" && (
            <>
              <p className="font-medium text-foreground">Force on corner charge Q₂</p>
              <p>Use positive magnitudes inside Coulomb&apos;s law, then find direction from attraction/repulsion:</p>
              <div className="overflow-x-auto"><PhysTex tex={`F_{\\text{net}} = \\sqrt{F_{1\\text{ on }2}^2 + F_{3\\text{ on }2}^2}`} /></div>
            </>
          )}
          {mode === "unlike" && (
            <>
              <p className="font-medium text-foreground">Field lines start on (+) and end on (−)</p>
              <p>Arrows always show the direction a small <span className="font-medium text-foreground">positive test charge</span> would move. Field lines never cross!</p>
            </>
          )}
          {mode === "like" && (
            <>
              <p className="font-medium text-foreground">Null point where fields cancel</p>
              <p>Between two equal positive charges, field lines bend away from the centre, leaving <PhysTex tex="E_{\\text{net}} = 0" /> midway.</p>
            </>
          )}
        </div>
      </div>
    </figure>
  );
}

/**
 * Interactive Electromagnetism & Lenz's law explorer.
 */
export function FaradayLenzExplorer() {
  const [action, setAction] = useState<"in" | "still" | "out">("in");

  const coilPole = action === "in" ? "N" : action === "out" ? "S" : "None";
  const msg =
    action === "in"
      ? "Magnet N-pole moves IN -> coil creates an N-pole on the right face to REPEL it and oppose the increase in flux."
      : action === "out"
        ? "Magnet N-pole pulls OUT -> coil creates an S-pole on the right face to ATTRACT it back and oppose the drop in flux."
        : "Magnet is STATIONARY -> magnetic flux is NOT changing (ΔΦ = 0), so ZERO emf and ZERO current are induced!";

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Faraday&apos;s &amp; Lenz&apos;s Law: changing flux induces emf</span>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["in", "Push N-pole IN"],
              ["still", "Hold STILL"],
              ["out", "Pull N-pole OUT"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setAction(id)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs transition-colors",
                action === id ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <svg viewBox="0 0 380 155" className="mx-auto block h-auto w-full max-w-[380px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <defs>
            <marker id="lenz-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill={roleColour.result} />
            </marker>
          </defs>

          {/* Solenoid core and coils */}
          <rect x={60} y={48} width={116} height={54} rx={5} fill={roleColour.a} fillOpacity={0.08} stroke="var(--dg-line)" strokeWidth={1.5} />
          {[76, 98, 120, 142, 162].map((x) => (
            <ellipse key={x} cx={x} cy={75} rx={6} ry={30} fill="none" stroke={roleColour.a} strokeWidth={2.2} />
          ))}

          {/* Induced pole badge on coil face */}
          <text x={176} y={36} fontSize={11} fontWeight={700} textAnchor="middle" fill={action === "still" ? "var(--dg-line)" : roleColour.result}>
            {action === "still" ? "I = 0 A" : `Induced ${coilPole}-pole`}
          </text>

          {/* Bar magnet */}
          <g transform={`translate(${action === "in" ? 210 : action === "still" ? 236 : 254}, 54)`}>
            <rect x={0} y={0} width={52} height={42} fill={roleColour.b} fillOpacity={0.22} stroke={roleColour.b} strokeWidth={1.8} />
            <rect x={52} y={0} width={52} height={42} fill="var(--dg-line)" fillOpacity={0.14} stroke="var(--dg-line)" strokeWidth={1.8} />
            <text x={26} y={25} fontSize={13} fontWeight={700} textAnchor="middle" fill={roleColour.b}>N</text>
            <text x={78} y={25} fontSize={13} fontWeight={700} textAnchor="middle" fill="var(--dg-text)">S</text>
          </g>

          {/* Motion arrow */}
          {action === "in" && (
            <>
              <line x1={276} y1={116} x2={220} y2={116} stroke={roleColour.result} strokeWidth={2.4} markerEnd="url(#lenz-arr)" />
              <text x={248} y={134} fontSize={10.5} fontWeight={600} textAnchor="middle" fill={roleColour.result}>v (moving in)</text>
            </>
          )}
          {action === "out" && (
            <>
              <line x1={246} y1={116} x2={302} y2={116} stroke={roleColour.result} strokeWidth={2.4} markerEnd="url(#lenz-arr)" />
              <text x={274} y={134} fontSize={10.5} fontWeight={600} textAnchor="middle" fill={roleColour.result}>v (pulling out)</text>
            </>
          )}
          {action === "still" && (
            <text x={268} y={124} fontSize={10.5} fontWeight={600} textAnchor="middle" fill="var(--dg-line)">v = 0 (no flux change)</text>
          )}
        </svg>

        <p className="mt-2.5 text-center text-xs text-muted-foreground">{msg}</p>
      </div>
    </figure>
  );
}

/**
 * Interactive Series vs Parallel Circuit explorer (12 V battery, R1 = 4 ohm, R2 = 4 ohm).
 */
export function CircuitNetworkExplorer() {
  const [mode, setMode] = useState<"series" | "parallel" | "open">("series");

  const stats =
    mode === "series"
      ? { rTot: "8,0 Ω", iTot: "1,5 A", v1: "6,0 V", pTot: "18 W", desc: "Series: current is the SAME everywhere (1,5 A); voltage splits across R₁ and R₂." }
      : mode === "parallel"
        ? { rTot: "2,0 Ω", iTot: "6,0 A", v1: "12,0 V", pTot: "72 W", desc: "Parallel: adding a second branch gives charge another path, DROPPING total resistance to 2 Ω and quadrupling power!" }
        : { rTot: "4,0 Ω", iTot: "3,0 A", v1: "12,0 V", pTot: "36 W", desc: "Opening branch 2 removes a parallel path, so total resistance RISES from 2 Ω to 4 Ω and main current HALVES to 3,0 A." };

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Circuit comparison (12 V battery, two 4 Ω resistors)</span>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["series", "Series"],
              ["parallel", "Parallel (both closed)"],
              ["open", "Parallel (S₂ open)"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setMode(id)}
              className={cn(
                "rounded-md px-2 py-1 text-xs transition-colors",
                mode === id ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[290px_1fr]">
        <svg viewBox="0 0 290 170" className="mx-auto block h-auto w-full max-w-[290px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          {/* Outer loop */}
          <rect x={44} y={32} width={202} height={106} fill="none" stroke="var(--dg-line)" strokeWidth={1.8} />
          {/* Battery on left */}
          <rect x={36} y={72} width={16} height={24} fill="var(--dg-bg)" />
          <line x1={34} y1={77} x2={54} y2={77} stroke={roleColour.result} strokeWidth={2.5} />
          <line x1={39} y1={88} x2={49} y2={88} stroke={roleColour.result} strokeWidth={2.5} />
          <text x={24} y={87} fontSize={10.5} fontWeight={700} textAnchor="end" fill={roleColour.result}>12 V</text>

          {mode === "series" ? (
            <>
              <rect x={92} y={24} width={44} height={16} fill={roleColour.a} fillOpacity={0.2} stroke={roleColour.a} strokeWidth={1.8} />
              <text x={114} y={36} fontSize={10} fontWeight={700} textAnchor="middle" fill={roleColour.a}>4 Ω</text>
              <rect x={164} y={24} width={44} height={16} fill={roleColour.b} fillOpacity={0.2} stroke={roleColour.b} strokeWidth={1.8} />
              <text x={186} y={36} fontSize={10} fontWeight={700} textAnchor="middle" fill={roleColour.b}>4 Ω</text>
            </>
          ) : (
            <>
              <line x1={115} y1={32} x2={115} y2={85} stroke="var(--dg-line)" strokeWidth={1.6} />
              <line x1={215} y1={32} x2={215} y2={85} stroke="var(--dg-line)" strokeWidth={1.6} />
              <line x1={115} y1={85} x2={215} y2={85} stroke="var(--dg-line)" strokeWidth={1.6} />
              <rect x={143} y={24} width={44} height={16} fill={roleColour.a} fillOpacity={0.2} stroke={roleColour.a} strokeWidth={1.8} />
              <text x={165} y={36} fontSize={10} fontWeight={700} textAnchor="middle" fill={roleColour.a}>4 Ω</text>
              <rect x={143} y={77} width={44} height={16} fill={roleColour.b} fillOpacity={mode === "open" ? 0.05 : 0.2} stroke={roleColour.b} strokeOpacity={mode === "open" ? 0.45 : 1} strokeWidth={1.8} />
              <text x={165} y={89} fontSize={10} fontWeight={700} textAnchor="middle" fill={roleColour.b} fillOpacity={mode === "open" ? 0.45 : 1}>4 Ω</text>
              {mode === "open" && (
                <>
                  <rect x={194} y={79} width={16} height={12} fill="var(--dg-bg)" />
                  <line x1={194} y1={85} x2={208} y2={74} stroke={roleColour.result} strokeWidth={2} />
                  <text x={202} y={70} fontSize={9.5} fontWeight={700} textAnchor="middle" fill={roleColour.result}>Open</text>
                </>
              )}
            </>
          )}
        </svg>

        <div className="space-y-2 text-xs">
          <div className="grid grid-cols-2 gap-2 rounded bg-secondary/50 p-2.5 tabular-nums">
            <div><span className="text-muted-foreground">R total: </span><span className="font-semibold text-foreground">{stats.rTot}</span></div>
            <div><span className="text-muted-foreground">I total: </span><span className="font-semibold text-foreground">{stats.iTot}</span></div>
            <div><span className="text-muted-foreground">V across R₁: </span><span className="font-semibold text-foreground">{stats.v1}</span></div>
            <div><span className="text-muted-foreground">Total P: </span><span className="font-semibold text-foreground">{stats.pTot}</span></div>
          </div>
          <p className="text-muted-foreground">{stats.desc}</p>
        </div>
      </div>
    </figure>
  );
}
