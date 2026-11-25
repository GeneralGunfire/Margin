import { useState } from "react";
import katex from "katex";
import { roleColour } from "./toolkit";
import { cn } from "@/lib/utils";

const texInline = (t: string) => katex.renderToString(t, { throwOnError: false, strict: false });
function MathTex({ tex }: { tex: string }) {
  return <span dangerouslySetInnerHTML={{ __html: texInline(tex) }} />;
}

const BINS = [
  { label: "0–20", mid: 10, f: 4 },
  { label: "20–40", mid: 30, f: 9 },
  { label: "40–60", mid: 50, f: 14 },
  { label: "60–80", mid: 70, f: 8 },
  { label: "80–100", mid: 90, f: 5 },
];

/**
 * Interactive Histogram vs Frequency Polygon explorer (showing zero-frequency anchor midpoints at -10 and 110).
 */
export function HistogramPolygonVisual() {
  const [view, setView] = useState<"both" | "hist" | "poly">("both");
  const W = 400, H = 200;
  const ox = 54, oy = 162, xSpan = 316, ySpan = 132;
  // Plot x from -20 to 120 (total 140 units so anchor midpoints -10 and 110 fit cleanly!)
  const toX = (val: number) => ox + ((val + 20) / 140) * xSpan;
  const toY = (f: number) => oy - (f / 16) * ySpan;

  const polyPts = [
    [-10, 0],
    ...BINS.map((b) => [b.mid, b.f]),
    [110, 0],
  ].map(([xv, fv]) => `${toX(xv).toFixed(1)},${toY(fv).toFixed(1)}`).join(" ");

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Histogram and frequency polygon (n = 40)</span>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["both", "Overlay both"],
              ["hist", "Histogram only"],
              ["poly", "Polygon only"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setView(id)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs transition-colors",
                view === id ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[400px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          {[4, 8, 12, 16].map((fv) => (
            <g key={fv}>
              <line x1={ox} y1={toY(fv)} x2={ox + xSpan} y2={toY(fv)} stroke="var(--dg-line)" strokeOpacity={0.14} strokeWidth={1} />
              <text x={ox - 6} y={toY(fv) + 3.5} fontSize={9.5} textAnchor="end" fill="var(--dg-line)">{fv}</text>
            </g>
          ))}
          <line x1={ox} y1={oy} x2={ox + xSpan} y2={oy} stroke="var(--dg-line)" strokeWidth={1.3} />
          <line x1={ox} y1={22} x2={ox} y2={oy} stroke="var(--dg-line)" strokeWidth={1.3} />

          {[0, 20, 40, 60, 80, 100].map((v) => (
            <text key={v} x={toX(v)} y={oy + 14} fontSize={9.5} textAnchor="middle" fill="var(--dg-line)">{v}</text>
          ))}

          {view !== "poly" &&
            BINS.map((b, i) => {
              const x1 = toX(i * 20);
              const x2 = toX((i + 1) * 20);
              const top = toY(b.f);
              return (
                <rect
                  key={b.label}
                  x={x1}
                  y={top}
                  width={x2 - x1}
                  height={oy - top}
                  fill={roleColour.a}
                  fillOpacity={0.22}
                  stroke={roleColour.a}
                  strokeWidth={1.6}
                />
              );
            })}

          {view !== "hist" && (
            <>
              <polyline points={polyPts} fill="none" stroke={roleColour.result} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
              {[-10, ...BINS.map((b) => b.mid), 110].map((mid, i) => {
                const fv = i === 0 || i === BINS.length + 1 ? 0 : BINS[i - 1].f;
                return <circle key={mid} cx={toX(mid)} cy={toY(fv)} r={3.8} fill={roleColour.result} />;
              })}
            </>
          )}
        </svg>

        <p className="mt-2 text-center text-xs text-muted-foreground">
          Each polygon dot sits at the <span className="font-medium text-foreground">midpoint</span> of its class interval, and the polygon closes onto the axis at the imaginary empty midpoints <MathTex tex="-10" /> and <MathTex tex="110" />.
        </p>
      </div>
    </figure>
  );
}

const QUARTILES = [
  { id: "q1", label: "Q₁ (25%)", cum: 10, xEst: 33.3, tex: "Q_1\\text{ at } 0{,}25 \\times 40 = 10\\text{th value} \\approx 33" },
  { id: "q2", label: "Median Q₂ (50%)", cum: 20, xEst: 50, tex: "Q_2\\text{ at } 0{,}50 \\times 40 = 20\\text{th value} = 50" },
  { id: "q3", label: "Q₃ (75%)", cum: 30, xEst: 67.5, tex: "Q_3\\text{ at } 0{,}75 \\times 40 = 30\\text{th value} \\approx 68" },
] as const;

/**
 * Interactive Ogive curve grounded at (0, 0) with horizontal quartile read-off lines.
 */
export function OgiveQuartilesVisual() {
  const [qId, setQId] = useState<(typeof QUARTILES)[number]["id"]>("q2");
  const cur = QUARTILES.find((q) => q.id === qId)!;

  const W = 400, H = 200;
  const ox = 54, oy = 164, xSpan = 316, ySpan = 136;
  const toX = (v: number) => ox + (v / 100) * xSpan;
  const toY = (cf: number) => oy - (cf / 40) * ySpan;

  const ogivePts = [
    [0, 0],
    [20, 4],
    [40, 13],
    [60, 27],
    [80, 35],
    [100, 40],
  ];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Ogive (cumulative frequency curve, n = 40)</span>
        <div className="flex flex-wrap gap-1.5">
          {QUARTILES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setQId(item.id)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs transition-colors",
                item.id === qId ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[400px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          {[10, 20, 30, 40].map((cf) => (
            <g key={cf}>
              <line x1={ox} y1={toY(cf)} x2={ox + xSpan} y2={toY(cf)} stroke="var(--dg-line)" strokeOpacity={0.14} strokeWidth={1} />
              <text x={ox - 6} y={toY(cf) + 3.5} fontSize={9.5} textAnchor="end" fill="var(--dg-line)">{cf}</text>
            </g>
          ))}
          <line x1={ox} y1={oy} x2={ox + xSpan} y2={oy} stroke="var(--dg-line)" strokeWidth={1.3} />
          <line x1={ox} y1={20} x2={ox} y2={oy} stroke="var(--dg-line)" strokeWidth={1.3} />

          {[0, 20, 40, 60, 80, 100].map((v) => (
            <text key={v} x={toX(v)} y={oy + 14} fontSize={9.5} textAnchor="middle" fill="var(--dg-line)">{v}</text>
          ))}

          {/* Read-off dashed guides */}
          <line x1={ox} y1={toY(cur.cum)} x2={toX(cur.xEst)} y2={toY(cur.cum)} stroke={roleColour.result} strokeWidth={1.6} strokeDasharray="4 3" />
          <line x1={toX(cur.xEst)} y1={toY(cur.cum)} x2={toX(cur.xEst)} y2={oy} stroke={roleColour.result} strokeWidth={1.6} strokeDasharray="4 3" />

          <polyline
            points={ogivePts.map(([xv, cf]) => `${toX(xv).toFixed(1)},${toY(cf).toFixed(1)}`).join(" ")}
            fill="none"
            stroke={roleColour.a}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {ogivePts.map(([xv, cf]) => (
            <circle key={xv} cx={toX(xv)} cy={toY(cf)} r={3.8} fill={roleColour.a} />
          ))}

          <circle cx={toX(cur.xEst)} cy={toY(cur.cum)} r={5} fill={roleColour.result} />
        </svg>

        <div className="mt-2.5 text-center text-xs text-muted-foreground">
          Always anchor the ogive at <span className="font-medium text-foreground">(0; 0)</span>, then plot upper class boundaries against cumulative frequency. <span className="font-medium text-foreground"><MathTex tex={cur.tex} /></span>.
        </div>
      </div>
    </figure>
  );
}

/**
 * Interactive skewness & box-plot visual comparing symmetric, positively skewed, and negatively skewed distributions.
 */
export function SkewnessBoxVisual() {
  const [skew, setSkew] = useState<"sym" | "pos" | "neg">("pos");
  const W = 400, H = 165;

  const box =
    skew === "sym"
      ? { min: 65, q1: 145, med: 200, q3: 255, max: 335, mean: 200, desc: "Symmetric: whiskers and box halves balance. Mean ≈ Median." }
      : skew === "pos"
        ? { min: 55, q1: 95, med: 135, q3: 195, max: 350, mean: 168, desc: "Positively skewed (skewed right): long right tail pulls Mean > Median." }
        : { min: 50, q1: 205, med: 265, q3: 305, max: 345, mean: 232, desc: "Negatively skewed (skewed left): long left tail pulls Mean < Median." };

  const y = 78;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Skewness on a box-and-whisker diagram</span>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["sym", "Symmetric"],
              ["pos", "Positively skewed (right)"],
              ["neg", "Negatively skewed (left)"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setSkew(id)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs transition-colors",
                skew === id ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[400px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <line x1={32} y1={132} x2={W - 32} y2={132} stroke="var(--dg-line)" strokeWidth={1.2} />

          {/* Whiskers */}
          <line x1={box.min} y1={y} x2={box.q1} y2={y} stroke={roleColour.a} strokeWidth={2.2} />
          <line x1={box.q3} y1={y} x2={box.max} y2={y} stroke={roleColour.a} strokeWidth={2.2} />
          <line x1={box.min} y1={y - 12} x2={box.min} y2={y + 12} stroke={roleColour.a} strokeWidth={2.2} />
          <line x1={box.max} y1={y - 12} x2={box.max} y2={y + 12} stroke={roleColour.a} strokeWidth={2.2} />

          {/* Box */}
          <rect x={box.q1} y={y - 22} width={box.q3 - box.q1} height={44} fill={roleColour.a} fillOpacity={0.16} stroke={roleColour.a} strokeWidth={2.2} />
          {/* Median line */}
          <line x1={box.med} y1={y - 22} x2={box.med} y2={y + 22} stroke={roleColour.result} strokeWidth={2.8} />

          {/* Mean marker */}
          <circle cx={box.mean} cy={y - 34} r={4.2} fill={roleColour.b} />
          <text x={box.mean} y={y - 44} fontSize={10.5} fontWeight={600} textAnchor="middle" fill={roleColour.b}>Mean</text>

          <text x={box.min} y={y + 34} fontSize={10} textAnchor="middle" fill="var(--dg-line)">Min</text>
          <text x={box.q1} y={y + 34} fontSize={10} textAnchor="middle" fill="var(--dg-line)">Q₁</text>
          <text x={box.med} y={y + 34} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.result}>Q₂</text>
          <text x={box.q3} y={y + 34} fontSize={10} textAnchor="middle" fill="var(--dg-line)">Q₃</text>
          <text x={box.max} y={y + 34} fontSize={10} textAnchor="middle" fill="var(--dg-line)">Max</text>
        </svg>

        <p className="mt-2 text-center text-xs text-muted-foreground">{box.desc}</p>
      </div>
    </figure>
  );
}

/**
 * Interactive 3D solids diagram showing r, h, l and scale-factor k -> SA (k^2) and Volume (k^3).
 */
export function MeasurementSolidsVisual() {
  const [solid, setSolid] = useState<"cyl" | "cone" | "pyr" | "sph">("cone");
  const [k, setK] = useState<1 | 2>(1);

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Solids &amp; scaling factor k</span>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["cyl", "Cylinder"],
              ["cone", "Cone"],
              ["pyr", "Pyramid"],
              ["sph", "Sphere"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setSolid(id)}
              className={cn(
                "rounded-md px-2 py-1 text-xs transition-colors",
                solid === id ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[240px_1fr]">
        <svg viewBox="0 0 240 190" className="mx-auto block h-auto w-full max-w-[240px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          {solid === "cyl" && (
            <>
              <ellipse cx={120} cy={46} rx={48} ry={14} fill={roleColour.a} fillOpacity={0.14} stroke={roleColour.a} strokeWidth={2} />
              <path d="M 72,46 L 72,144 A 48,14 0 0 0 168,144 L 168,46" fill={roleColour.a} fillOpacity={0.08} stroke={roleColour.a} strokeWidth={2} />
              <ellipse cx={120} cy={144} rx={48} ry={14} fill="none" stroke={roleColour.a} strokeWidth={1.4} strokeDasharray="4 3" />
              <line x1={120} y1={46} x2={168} y2={46} stroke={roleColour.result} strokeWidth={2} />
              <text x={144} y={39} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.result}>{k === 1 ? "r" : "2r"}</text>
              <line x1={182} y1={46} x2={182} y2={144} stroke={roleColour.b} strokeWidth={1.8} />
              <text x={190} y={98} fontSize={11} fontWeight={700} fill={roleColour.b}>{k === 1 ? "h" : "2h"}</text>
            </>
          )}

          {solid === "cone" && (
            <>
              <ellipse cx={120} cy={148} rx={52} ry={14} fill={roleColour.a} fillOpacity={0.1} stroke={roleColour.a} strokeWidth={2} />
              <line x1={120} y1={34} x2={68} y2={148} stroke={roleColour.a} strokeWidth={2.2} />
              <line x1={120} y1={34} x2={172} y2={148} stroke={roleColour.a} strokeWidth={2.2} />
              <line x1={120} y1={34} x2={120} y2={148} stroke={roleColour.b} strokeWidth={1.8} strokeDasharray="4 3" />
              <line x1={120} y1={148} x2={172} y2={148} stroke={roleColour.result} strokeWidth={2} />
              <text x={112} y={96} fontSize={11} fontWeight={700} textAnchor="end" fill={roleColour.b}>{k === 1 ? "h" : "2h"}</text>
              <text x={156} y={88} fontSize={11} fontWeight={700} fill={roleColour.a}>{k === 1 ? "l" : "2l"}</text>
              <text x={146} y={142} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.result}>{k === 1 ? "r" : "2r"}</text>
            </>
          )}

          {solid === "pyr" && (
            <>
              <polygon points="58,150 152,150 184,122 90,122" fill={roleColour.a} fillOpacity={0.12} stroke={roleColour.a} strokeWidth={2} />
              <line x1={121} y1={34} x2={58} y2={150} stroke={roleColour.a} strokeWidth={2} />
              <line x1={121} y1={34} x2={152} y2={150} stroke={roleColour.a} strokeWidth={2} />
              <line x1={121} y1={34} x2={184} y2={122} stroke={roleColour.a} strokeWidth={2} />
              <line x1={121} y1={34} x2={121} y2={136} stroke={roleColour.b} strokeWidth={1.8} strokeDasharray="4 3" />
              <text x={114} y={96} fontSize={11} fontWeight={700} textAnchor="end" fill={roleColour.b}>{k === 1 ? "h" : "2h"}</text>
              <text x={104} y={166} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.result}>{k === 1 ? "b" : "2b"}</text>
            </>
          )}

          {solid === "sph" && (
            <>
              <circle cx={120} cy={95} r={58} fill={roleColour.a} fillOpacity={0.12} stroke={roleColour.a} strokeWidth={2.2} />
              <ellipse cx={120} cy={95} rx={58} ry={16} fill="none" stroke={roleColour.a} strokeWidth={1.5} strokeDasharray="4 3" />
              <line x1={120} y1={95} x2={178} y2={95} stroke={roleColour.result} strokeWidth={2.2} />
              <circle cx={120} cy={95} r={3.5} fill="var(--dg-text)" />
              <text x={149} y={88} fontSize={11.5} fontWeight={700} textAnchor="middle" fill={roleColour.result}>{k === 1 ? "r" : "2r"}</text>
            </>
          )}
        </svg>

        <div className="space-y-2.5 text-xs text-muted-foreground">
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => setK(1)}
              className={cn("rounded border px-2.5 py-1 text-xs", k === 1 ? "border-primary bg-primary/10 font-medium text-primary" : "border-border")}
            >
              Original (k = 1)
            </button>
            <button
              type="button"
              onClick={() => setK(2)}
              className={cn("rounded border px-2.5 py-1 text-xs", k === 2 ? "border-primary bg-primary/10 font-medium text-primary" : "border-border")}
            >
              Double all lengths (k = 2)
            </button>
          </div>
          {solid === "cyl" && <MathTex tex="SA = 2\pi r^{2} + 2\pi r h \qquad V = \pi r^{2} h" />}
          {solid === "cone" && <MathTex tex="SA = \pi r^{2} + \pi r l \qquad V = \frac{1}{3}\pi r^{2} h" />}
          {solid === "pyr" && <MathTex tex="SA = b^{2} + 4\!\left(\frac{1}{2}b\,h_s\right) \qquad V = \frac{1}{3}b^{2} h" />}
          {solid === "sph" && <MathTex tex="SA = 4\pi r^{2} \qquad V = \frac{4}{3}\pi r^{3}" />}
          <p>
            {k === 1 ? (
              "Surface area multiplies two lengths (r, h, l); volume multiplies three lengths."
            ) : (
              <>
                Multiplying every dimension by <span className="font-medium text-foreground">k = 2</span> multiplies surface area by <span className="font-medium text-foreground">2² = 4</span> and volume by <span className="font-medium text-foreground">2³ = 8</span>!
              </>
            )}
          </p>
        </div>
      </div>
    </figure>
  );
}
