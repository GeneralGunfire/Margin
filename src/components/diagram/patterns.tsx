import { useState } from "react";
import katex from "katex";
import { roleColour } from "./toolkit";
import { cn } from "@/lib/utils";

const texInline = (t: string) => katex.renderToString(t, { throwOnError: false, strict: false });

function MathTex({ tex }: { tex: string }) {
  return <span dangerouslySetInnerHTML={{ __html: texInline(tex) }} />;
}

const SEQ_EXAMPLES = [
  { label: "4, 10, 18, 28, 40", terms: [4, 10, 18, 28, 40], formula: "T_n = n^2 + 3n", a: 1, b: 3, c: 0 },
  { label: "5, 12, 21, 32, 45", terms: [5, 12, 21, 32, 45], formula: "T_n = n^2 + 4n", a: 1, b: 4, c: 0 },
  { label: "0, 3, 10, 21, 36", terms: [0, 3, 10, 21, 36], formula: "T_n = 2n^2 - 3n + 1", a: 2, b: -3, c: 1 },
];

/**
 * Interactive difference pyramid with SVG V-connectors showing exact subtraction links between rows.
 */
export function DifferencePyramid() {
  const [idx, setIdx] = useState(0);
  const ex = SEQ_EXAMPLES[idx];
  const d1 = ex.terms.slice(1).map((t, i) => t - ex.terms[i]);
  const d2 = d1.slice(1).map((d, i) => d - d1[i]);

  const xs0 = [110, 180, 250, 320, 390];
  const xs1 = [145, 215, 285, 355];
  const xs2 = [180, 250, 320];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Difference pyramid</span>
        <div className="flex flex-wrap gap-1.5">
          {SEQ_EXAMPLES.map((item, i) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setIdx(i)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs tabular-nums transition-colors",
                i === idx ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 px-4 py-4">
        <svg viewBox="0 0 430 154" className="mx-auto block h-auto w-full max-w-[430px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <text x={16} y={30} fontSize={11} fontWeight={600} fill="var(--dg-line)">Terms (Tₙ)</text>
          <text x={16} y={82} fontSize={11} fontWeight={600} fill={roleColour.a}>1st diff (Δ₁)</text>
          <text x={16} y={134} fontSize={11} fontWeight={600} fill={roleColour.b}>2nd diff (Δ₂)</text>

          {/* V-connectors row 0 -> row 1 */}
          {xs1.map((x, i) => (
            <g key={`v1-${i}`} stroke="var(--dg-line)" strokeOpacity={0.45} strokeWidth={1.2}>
              <line x1={xs0[i]} y1={38} x2={x - 6} y2={66} />
              <line x1={xs0[i + 1]} y1={38} x2={x + 6} y2={66} />
            </g>
          ))}

          {/* V-connectors row 1 -> row 2 */}
          {xs2.map((x, i) => (
            <g key={`v2-${i}`} stroke="var(--dg-line)" strokeOpacity={0.45} strokeWidth={1.2}>
              <line x1={xs1[i]} y1={90} x2={x - 6} y2={118} />
              <line x1={xs1[i + 1]} y1={90} x2={x + 6} y2={118} />
            </g>
          ))}

          {ex.terms.map((v, i) => (
            <text key={`t-${i}`} x={xs0[i]} y={30} fontSize={14} fontWeight={700} textAnchor="middle" fill={i === 0 ? roleColour.result : "var(--dg-text)"}>
              {v}
            </text>
          ))}

          {d1.map((v, i) => (
            <text key={`d1-${i}`} x={xs1[i]} y={82} fontSize={13.5} fontWeight={700} textAnchor="middle" fill={i === 0 ? roleColour.a : "var(--dg-text)"}>
              +{v}
            </text>
          ))}

          {d2.map((v, i) => (
            <text key={`d2-${i}`} x={xs2[i]} y={134} fontSize={13.5} fontWeight={700} textAnchor="middle" fill={roleColour.b}>
              +{v}
            </text>
          ))}
        </svg>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 border-t border-border pt-3 text-xs text-muted-foreground">
          <span><span className="font-semibold text-amber-500"><MathTex tex={`2a = ${d2[0]}`} /></span> <MathTex tex={`\\Rightarrow a = ${ex.a}`} /></span>
          <span><span className="font-semibold text-primary"><MathTex tex={`3a + b = ${d1[0]}`} /></span> <MathTex tex={`\\Rightarrow b = ${ex.b}`} /></span>
          <span><span className="font-semibold text-emerald-500"><MathTex tex={`a + b + c = ${ex.terms[0]}`} /></span> <MathTex tex={`\\Rightarrow c = ${ex.c}`} /></span>
          <span className="font-semibold text-foreground"><MathTex tex={ex.formula} /></span>
        </div>
      </div>
    </figure>
  );
}

/**
 * Visual dot pattern showing n = 1, 2, 3, 4 for T_n = n(n + 1) with height and width dimension brackets.
 */
export function QuadraticDotPattern() {
  const [n, setN] = useState(3);
  const cols = n + 1;
  const rows = n;
  const spacing = 22;
  const W = 290, H = 155;
  const startX = (W - (cols - 1) * spacing) / 2 + 12;
  const startY = (H - (rows - 1) * spacing) / 2 + 8;

  const dots: { x: number; y: number; border: boolean }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({ x: startX + c * spacing, y: startY + r * spacing, border: r === rows - 1 || c === cols - 1 });
    }
  }

  const leftEdge = startX - 14;
  const topEdge = startY - 14;
  const widthPx = (cols - 1) * spacing + 28;
  const heightPx = (rows - 1) * spacing + 28;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Rectangle dot pattern: n by (n + 1)</span>
        <div className="flex gap-1.5">
          {[1, 2, 3, 4].map((step) => (
            <button
              key={step}
              type="button"
              onClick={() => setN(step)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs tabular-nums transition-colors",
                step === n ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              n = {step}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[1fr_200px]">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[290px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          {/* Width label on top */}
          <line x1={leftEdge} y1={topEdge - 8} x2={leftEdge + widthPx} y2={topEdge - 8} stroke="var(--dg-line)" strokeWidth={1.2} />
          <text x={leftEdge + widthPx / 2} y={topEdge - 14} fontSize={11} fontWeight={600} textAnchor="middle" fill="var(--dg-text)">
            width = {n + 1}
          </text>

          {/* Height label on left */}
          <line x1={leftEdge - 8} y1={topEdge} x2={leftEdge - 8} y2={topEdge + heightPx} stroke="var(--dg-line)" strokeWidth={1.2} />
          <text x={leftEdge - 14} y={topEdge + heightPx / 2 + 4} fontSize={11} fontWeight={600} textAnchor="end" fill="var(--dg-text)">
            h = {n}
          </text>

          {dots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={5.5} fill={d.border ? roleColour.result : roleColour.a} />
          ))}
        </svg>

        <div className="space-y-1.5 text-xs text-muted-foreground">
          <p className="text-sm font-medium text-foreground">
            <MathTex tex={`T_{${n}} = ${n}\\times(${n} + 1) = ${n * (n + 1)}\\text{ dots}`} />
          </p>
          <p>First 4 terms: <span className="font-medium text-foreground">2, 6, 12, 20</span></p>
          <p>First differences: <span className="font-medium text-primary">4, 6, 8</span></p>
          <p>Constant 2nd difference: <span className="font-medium text-amber-500">2</span></p>
        </div>
      </div>
    </figure>
  );
}
