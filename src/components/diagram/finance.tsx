import { useState } from "react";
import katex from "katex";
import { roleColour } from "./toolkit";
import { cn } from "@/lib/utils";

const texInline = (t: string) => katex.renderToString(t, { throwOnError: false, strict: false });
function MathTex({ tex }: { tex: string }) {
  return <span dangerouslySetInnerHTML={{ __html: texInline(tex) }} />;
}

/**
 * Interactive comparison of Straight-line A = P(1 - i*n) vs Reducing-balance A = P(1 - i)^n depreciation.
 */
export function DepreciationCurves() {
  const [ratePct, setRatePct] = useState<number>(15);
  const i = ratePct / 100;
  const P = 100;

  const W = 400, H = 195;
  const ox = 50, oy = 160, xSpan = 320, ySpan = 128;
  const maxN = 8;

  const slEndN = Math.min(maxN, 1 / i);
  const slPts: string[] = [];
  for (let n = 0; n <= slEndN; n += 0.2) {
    const sx = ox + (n / maxN) * xSpan;
    const slVal = P * (1 - i * n);
    slPts.push(`${sx.toFixed(1)},${(oy - (slVal / 100) * ySpan).toFixed(1)}`);
  }
  slPts.push(`${(ox + (slEndN / maxN) * xSpan).toFixed(1)},${(oy - ((P * Math.max(0, 1 - i * slEndN)) / 100) * ySpan).toFixed(1)}`);

  const rbPts: string[] = [];
  for (let n = 0; n <= maxN; n += 0.2) {
    const sx = ox + (n / maxN) * xSpan;
    const rbVal = P * Math.pow(1 - i, n);
    rbPts.push(`${sx.toFixed(1)},${(oy - (rbVal / 100) * ySpan).toFixed(1)}`);
  }

  const sl5 = Math.max(0, Math.round(100 * (1 - i * 5)));
  const rb5 = Math.round(100 * Math.pow(1 - i, 5));
  const x5 = ox + (5 / maxN) * xSpan;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Straight-line vs Reducing-balance</span>
        <div className="flex gap-1.5">
          {[10, 15, 20].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRatePct(r)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs tabular-nums transition-colors",
                r === ratePct ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {r}% p.a.
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[400px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          {[25, 50, 75].map((pct) => {
            const y = oy - (pct / 100) * ySpan;
            return (
              <g key={pct}>
                <line x1={ox} y1={y} x2={ox + xSpan} y2={y} stroke="var(--dg-line)" strokeOpacity={0.14} strokeWidth={1} />
                <text x={ox - 6} y={y + 3} fontSize={9.5} textAnchor="end" fill="var(--dg-line)">{pct}%</text>
              </g>
            );
          })}

          <line x1={ox} y1={oy} x2={ox + xSpan} y2={oy} stroke="var(--dg-line)" strokeWidth={1.2} />
          <line x1={ox} y1={20} x2={ox} y2={oy} stroke="var(--dg-line)" strokeWidth={1.2} />
          <text x={ox - 6} y={oy - ySpan + 4} fontSize={10} textAnchor="end" fill="var(--dg-line)">100%</text>
          <text x={ox - 6} y={oy + 3} fontSize={10} textAnchor="end" fill="var(--dg-line)">R0</text>
          {[2, 4, 5, 6, 8].map((n) => (
            <text key={n} x={ox + (n / maxN) * xSpan} y={oy + 14} fontSize={9.5} fontWeight={n === 5 ? 700 : 400} textAnchor="middle" fill={n === 5 ? roleColour.result : "var(--dg-line)"}>{n}y</text>
          ))}

          {/* 5-year vertical marker */}
          <line x1={x5} y1={26} x2={x5} y2={oy} stroke={roleColour.result} strokeOpacity={0.4} strokeWidth={1.2} strokeDasharray="3 3" />

          <polyline points={slPts.join(" ")} fill="none" stroke={roleColour.b} strokeWidth={2.2} strokeDasharray="5 3" />
          <polyline points={rbPts.join(" ")} fill="none" stroke={roleColour.a} strokeWidth={2.4} strokeLinecap="round" />

          {/* Year-5 dots */}
          <circle cx={x5} cy={oy - (sl5 / 100) * ySpan} r={4} fill={roleColour.b} />
          <circle cx={x5} cy={oy - (rb5 / 100) * ySpan} r={4} fill={roleColour.a} />

          <text x={ox + xSpan} y={24} fontSize={10.5} fontWeight={600} textAnchor="end" fill={roleColour.a}>Reducing: A = P(1 − i)ⁿ</text>
          <text x={ox + xSpan} y={38} fontSize={10.5} fontWeight={600} textAnchor="end" fill={roleColour.b}>Straight-line: A = P(1 − in)</text>
        </svg>

        <p className="mt-2.5 text-center text-xs text-muted-foreground">
          After 5 years at {ratePct}% p.a.: Straight-line retains <span className="font-medium text-foreground">{sl5}%</span>{sl5 === 0 ? " (reaches R0)" : ""}; reducing-balance retains <span className="font-medium text-foreground">{rb5}%</span> (never reaches R0).
        </p>
      </div>
    </figure>
  );
}

/**
 * Visual timeline diagram with compounding arcs and deposit vs withdrawal toggle.
 */
export function FinanceTimeline() {
  const [scenario, setScenario] = useState<"deposit" | "withdraw">("deposit");
  const [method, setMethod] = useState<"stage" | "separate">("stage");

  const cashT2 = scenario === "deposit" ? "+R4 000" : "−R3 000";
  const formulaTex =
    scenario === "deposit"
      ? method === "stage"
        ? "A = \\bigl(10\\,000(1{,}08)^{2} + 4\\,000\\bigr)(1{,}10)^{3} \\approx \\text{R}20\\,848{,}78"
        : "A = 10\\,000(1{,}08)^{2}(1{,}10)^{3} + 4\\,000(1{,}10)^{3} \\approx \\text{R}20\\,848{,}78"
      : method === "stage"
        ? "A = \\bigl(10\\,000(1{,}08)^{2} - 3\\,000\\bigr)(1{,}10)^{3} \\approx \\text{R}11\\,531{,}78"
        : "A = 10\\,000(1{,}08)^{2}(1{,}10)^{3} - 3\\,000(1{,}10)^{3} \\approx \\text{R}11\\,531{,}78";

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Compound interest timeline</span>
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setScenario("deposit")}
            className={cn(
              "rounded-md px-2 py-1 text-xs transition-colors",
              scenario === "deposit" ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            Deposit +R4 000
          </button>
          <button
            type="button"
            onClick={() => setScenario("withdraw")}
            className={cn(
              "rounded-md px-2 py-1 text-xs transition-colors",
              scenario === "withdraw" ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            Withdraw −R3 000
          </button>
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex justify-center gap-1.5">
          <button
            type="button"
            onClick={() => setMethod("stage")}
            className={cn(
              "rounded border px-2.5 py-0.5 text-[11px] transition-colors",
              method === "stage" ? "border-primary bg-primary/10 font-medium text-primary" : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            Stage-by-stage
          </button>
          <button
            type="button"
            onClick={() => setMethod("separate")}
            className={cn(
              "rounded border px-2.5 py-0.5 text-[11px] transition-colors",
              method === "separate" ? "border-primary bg-primary/10 font-medium text-primary" : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            Track each cash flow to end
          </button>
        </div>

        <svg viewBox="0 0 430 132" className="mx-auto block h-auto w-full max-w-[430px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          {/* Compounding arcs */}
          <path d="M 48,68 Q 122,26 196,68" fill="none" stroke={roleColour.b} strokeWidth={1.6} strokeDasharray="4 3" />
          <path d="M 196,68 Q 290,26 384,68" fill="none" stroke={roleColour.result} strokeWidth={1.6} strokeDasharray="4 3" />

          <line x1={38} y1={74} x2={394} y2={74} stroke="var(--dg-line)" strokeWidth={2} />
          {[
            { x: 48, t: "T₀", cash: "+R10 000" },
            { x: 196, t: "T₂", cash: cashT2 },
            { x: 384, t: "T₅", cash: "Total?" },
          ].map((pt) => (
            <g key={pt.t}>
              <line x1={pt.x} y1={64} x2={pt.x} y2={84} stroke="var(--dg-text)" strokeWidth={2} />
              <text x={pt.x} y={98} fontSize={11.5} fontWeight={700} textAnchor="middle" fill="var(--dg-text)">{pt.t}</text>
              <text x={pt.x} y={115} fontSize={11} fontWeight={600} textAnchor="middle" fill={pt.t === "T₅" ? roleColour.result : roleColour.a}>{pt.cash}</text>
            </g>
          ))}
          <text x={122} y={28} fontSize={10.5} fontWeight={600} textAnchor="middle" fill={roleColour.b}>8% p.a. (× 1,08²)</text>
          <text x={290} y={28} fontSize={10.5} fontWeight={600} textAnchor="middle" fill={roleColour.result}>10% p.a. (× 1,10³)</text>
        </svg>

        <div className="text-center text-xs text-muted-foreground">
          <MathTex tex={formulaTex} />
        </div>
      </div>
    </figure>
  );
}
