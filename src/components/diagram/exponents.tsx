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
 * Clean annotated SVG of x^(p/q) paired with a KaTeX identity bar underneath.
 */
export function ExponentAnatomy() {
  const W = 540, H = 152;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border" style={{ background: "var(--dg-bg)" }}>
      <svg
        role="img"
        aria-label="Anatomy of a fractional exponent x to the power p over q: p is the numerator (power), q is the denominator (root index), and x is the base."
        viewBox={`0 0 ${W} ${H}`}
        className="mx-auto block h-auto w-full"
        style={{ maxWidth: W, fontFamily: "var(--font-sans)" }}
      >
        <text x={156} y={96} fontSize={52} fontWeight={600} fontStyle="italic" textAnchor="middle" dominantBaseline="middle" fill={roleColour.result}>
          x
        </text>
        <text x={194} y={52} fontSize={23} fontWeight={700} fontStyle="italic" textAnchor="middle" dominantBaseline="middle" fill={roleColour.a}>
          p
        </text>
        <line x1={180} y1={71} x2={208} y2={71} stroke="var(--dg-text)" strokeWidth={2.2} strokeLinecap="round" />
        <text x={194} y={92} fontSize={23} fontWeight={700} fontStyle="italic" textAnchor="middle" dominantBaseline="middle" fill={roleColour.b}>
          q
        </text>

        <line x1={216} y1={50} x2={284} y2={38} stroke={roleColour.a} strokeWidth={1.5} strokeDasharray="4 4" />
        <circle cx={216} cy={50} r={3.2} fill={roleColour.a} />
        <text x={294} y={36} fontSize={13.5} fontWeight={600} dominantBaseline="middle" fill={roleColour.a}>
          Numerator (p) = Power
        </text>
        <text x={294} y={54} fontSize={12} dominantBaseline="middle" fill="var(--dg-line)">
          Raises the result to power p
        </text>

        <line x1={216} y1={94} x2={284} y2={104} stroke={roleColour.b} strokeWidth={1.5} strokeDasharray="4 4" />
        <circle cx={216} cy={94} r={3.2} fill={roleColour.b} />
        <text x={294} y={102} fontSize={13.5} fontWeight={600} dominantBaseline="middle" fill={roleColour.b}>
          Denominator (q) = Root index
        </text>
        <text x={294} y={120} fontSize={12} dominantBaseline="middle" fill="var(--dg-line)">
          Takes the q-th root (roots sit at the bottom)
        </text>

        <line x1={132} y1={108} x2={96} y2={124} stroke={roleColour.result} strokeWidth={1.5} strokeDasharray="4 4" />
        <circle cx={132} cy={108} r={3.2} fill={roleColour.result} />
        <text x={88} y={125} fontSize={12.5} fontWeight={600} textAnchor="end" dominantBaseline="middle" fill={roleColour.result}>
          Base (x &gt; 0)
        </text>
      </svg>

      <div
        className="border-t border-border bg-secondary/40 px-4 py-2.5 text-center text-[15px]"
        dangerouslySetInnerHTML={{
          __html: texDisplay(String.raw`x^{\frac{p}{q}} = \left(\sqrt[q]{x}\right)^{p} = \sqrt[q]{x^{p}}`),
        }}
      />
      <figcaption className="border-t border-border px-4 py-2 text-xs text-muted-foreground">
        Roots grow underground (at the bottom): the denominator <MathTex tex="q" /> always sets the root, and the numerator <MathTex tex="p" /> sets the power.
      </figcaption>
    </figure>
  );
}

type PathExample = {
  id: string;
  base: number;
  p: number;
  q: number;
  rootVal: number;
  powerVal: number;
  bigIntermediate: number;
};

const PATH_EXAMPLES: PathExample[] = [
  { id: "16^(3/4)", base: 16, p: 3, q: 4, rootVal: 2, powerVal: 8, bigIntermediate: 4096 },
  { id: "27^(2/3)", base: 27, p: 2, q: 3, rootVal: 3, powerVal: 9, bigIntermediate: 729 },
  { id: "81^(3/4)", base: 81, p: 3, q: 4, rootVal: 3, powerVal: 27, bigIntermediate: 531441 },
  { id: "64^(5/6)", base: 64, p: 5, q: 6, rootVal: 2, powerVal: 32, bigIntermediate: 1073741824 },
];

export function RootVsPowerExplorer() {
  const [exIdx, setExIdx] = useState(0);
  const [neg, setNeg] = useState(false);
  const ex = PATH_EXAMPLES[exIdx];
  const fracTex = `${neg ? "-" : ""}\\frac{${ex.p}}{${ex.q}}`;
  const posFracTex = `\\frac{${ex.p}}{${ex.q}}`;
  const rootTex = `\\sqrt[${ex.q}]{${ex.base}}`;
  const bigRootTex = `\\sqrt[${ex.q}]{${ex.bigIntermediate.toLocaleString()}}`;
  const finalTex = neg ? `\\frac{1}{${ex.powerVal}}` : `${ex.powerVal}`;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Compare: root first vs power first</span>
        <div className="flex flex-wrap items-center gap-1.5">
          {PATH_EXAMPLES.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setExIdx(idx)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs transition-colors",
                idx === exIdx
                  ? "bg-primary font-medium text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              <MathTex tex={`${item.base}^{${neg ? "-" : ""}\\frac{${item.p}}{${item.q}}}`} />
            </button>
          ))}
          <button
            type="button"
            onClick={() => setNeg((v) => !v)}
            className={cn(
              "ml-1 rounded-md border px-2.5 py-1 text-xs transition-colors",
              neg ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {neg ? "Negative: on" : "Make negative"}
          </button>
        </div>
      </div>

      <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <div className="p-4">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-xs font-semibold text-emerald-500">Root first (easier)</span>
            <span className="text-[11px] tabular-nums text-muted-foreground">Largest number: {ex.base}</span>
          </div>
          <ol className="mt-3 space-y-2 text-[13px]">
            {neg && (
              <li className="text-muted-foreground">
                1. Flip: <span className="text-foreground"><MathTex tex={`${ex.base}^{${fracTex}} = \\dfrac{1}{${ex.base}^{${posFracTex}}}`} /></span>
              </li>
            )}
            <li className="text-muted-foreground">
              {neg ? "2." : "1."} Root: <span className="text-foreground"><MathTex tex={`${rootTex} = ${ex.rootVal}`} /></span>
            </li>
            <li className="text-muted-foreground">
              {neg ? "3." : "2."} Power: <span className="text-foreground"><MathTex tex={`${ex.rootVal}^{${ex.p}} = ${ex.powerVal}`} /></span>
            </li>
            <li className="pt-1 font-semibold text-foreground">
              Answer: <MathTex tex={finalTex} />
            </li>
          </ol>
        </div>

        <div className="p-4">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-xs font-semibold text-amber-500">Power first (harder)</span>
            <span className="text-[11px] tabular-nums text-muted-foreground">Largest number: {ex.bigIntermediate.toLocaleString()}</span>
          </div>
          <ol className="mt-3 space-y-2 text-[13px]">
            {neg && (
              <li className="text-muted-foreground">
                1. Flip: <span className="text-foreground"><MathTex tex={`${ex.base}^{${fracTex}} = \\dfrac{1}{${ex.base}^{${posFracTex}}}`} /></span>
              </li>
            )}
            <li className="text-muted-foreground">
              {neg ? "2." : "1."} Power: <span className="text-foreground"><MathTex tex={`${ex.base}^{${ex.p}} = ${ex.bigIntermediate.toLocaleString()}`} /></span>
            </li>
            <li className="text-muted-foreground">
              {neg ? "3." : "2."} Root: <span className="text-foreground"><MathTex tex={`${bigRootTex} = ${ex.powerVal}`} /></span>
            </li>
            <li className="pt-1 font-semibold text-foreground">
              Answer: <MathTex tex={finalTex} />
            </li>
          </ol>
        </div>
      </div>
    </figure>
  );
}

const SURD_EXAMPLES = [
  { n: 12, sq: 4, sqRoot: 2, rem: 3 },
  { n: 48, sq: 16, sqRoot: 4, rem: 3 },
  { n: 72, sq: 36, sqRoot: 6, rem: 2 },
  { n: 75, sq: 25, sqRoot: 5, rem: 3 },
  { n: 98, sq: 49, sqRoot: 7, rem: 2 },
];

export function SurdSplitExplorer() {
  const [idx, setIdx] = useState(2);
  const ex = SURD_EXAMPLES[idx];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Split by largest square factor</span>
        <div className="flex flex-wrap gap-1.5">
          {SURD_EXAMPLES.map((item, i) => (
            <button
              key={item.n}
              type="button"
              onClick={() => setIdx(i)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs transition-colors",
                i === idx ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              <MathTex tex={`\\sqrt{${item.n}}`} />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2.5 px-4 py-4 text-center">
        <div className="overflow-x-auto text-base" dangerouslySetInnerHTML={{ __html: texDisplay(`\\sqrt{${ex.n}} = \\sqrt{${ex.sq} \\times ${ex.rem}} = \\sqrt{${ex.sq}} \\cdot \\sqrt{${ex.rem}} = ${ex.sqRoot}\\sqrt{${ex.rem}}`) }} />
        <p className="text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{ex.sq}</span> is the largest perfect square dividing {ex.n}, so it escapes the root as <span className="font-medium text-foreground">{ex.sqRoot}</span>; <span className="font-medium text-foreground">{ex.rem}</span> has no square factors left.
        </p>
      </div>
    </figure>
  );
}

const FACTOR_EXAMPLES = [
  {
    id: "2^(n+2) - 2^n",
    label: "2^{n+2} - 2^n",
    split: "2^n \\cdot 2^2 - 2^n \\cdot 1",
    factored: "2^n(2^2 - 1)",
    simplified: "3 \\cdot 2^n",
  },
  {
    id: "3^(x+1) + 3^x",
    label: "3^{x+1} + 3^x",
    split: "3^x \\cdot 3^1 + 3^x \\cdot 1",
    factored: "3^x(3 + 1)",
    simplified: "4 \\cdot 3^x",
  },
  {
    id: "(5^(x+1) - 5^(x-1)) / 5^x",
    label: "\\dfrac{5^{x+1} - 5^{x-1}}{5^x}",
    split: "\\dfrac{5^x \\cdot 5^1 - 5^x \\cdot 5^{-1}}{5^x}",
    factored: "\\dfrac{5^x\\left(5 - \\frac{1}{5}\\right)}{5^x}",
    simplified: "\\dfrac{24}{5}",
  },
];

export function FactorPowerVisual() {
  const [idx, setIdx] = useState(0);
  const ex = FACTOR_EXAMPLES[idx];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Factor out the base power</span>
        <div className="flex flex-wrap gap-1.5">
          {FACTOR_EXAMPLES.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIdx(i)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs transition-colors",
                i === idx ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              <MathTex tex={item.label} />
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-2 px-4 py-4 text-[14px] sm:grid-cols-3 sm:divide-x sm:divide-border">
        <div className="px-2 text-center">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">1. Split exponents</p>
          <div className="overflow-x-auto py-1" dangerouslySetInnerHTML={{ __html: texDisplay(ex.split) }} />
        </div>
        <div className="px-2 text-center">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-primary">2. Factor out base</p>
          <div className="overflow-x-auto py-1" dangerouslySetInnerHTML={{ __html: texDisplay(ex.factored) }} />
        </div>
        <div className="px-2 text-center">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-emerald-500">3. Simplify</p>
          <div className="overflow-x-auto py-1" dangerouslySetInnerHTML={{ __html: texDisplay(ex.simplified) }} />
        </div>
      </div>
    </figure>
  );
}

/**
 * Interactive graph showing why 2^x = k only has a solution when k > 0.
 */
export function ExpAlwaysPositiveVisual() {
  const [k, setK] = useState<number>(-2);
  const W = 380, H = 200;
  const cx = 190, oy = 142, sx = 46, sy = 20;

  const pts: string[] = [];
  for (let x = -3.2; x <= 2.7; x += 0.08) {
    const y = Math.pow(2, x);
    const py = oy - y * sy;
    if (py >= 10 && py <= H - 8) pts.push(`${(cx + x * sx).toFixed(1)},${py.toFixed(1)}`);
  }

  const ky = oy - k * sy;
  const hitX = k > 0 ? Math.log2(k) : null;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Why 2ˣ &gt; 0 always (try solving 2ˣ = k)</span>
        <div className="flex gap-1.5">
          {[4, 1, 0, -2].map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setK(val)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs tabular-nums transition-colors",
                val === k ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              k = {val}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[380px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <clipPath id="exp-pos-clip"><rect x={16} y={8} width={W - 24} height={H - 16} /></clipPath>
          <line x1={22} y1={oy} x2={W - 18} y2={oy} stroke="var(--dg-line)" strokeWidth={1.2} />
          <line x1={cx} y1={12} x2={cx} y2={H - 12} stroke="var(--dg-line)" strokeWidth={1.2} />

          {[-2, -1, 1, 2].map((u) => (
            <text key={u} x={cx + u * sx} y={oy + 13} fontSize={9.5} textAnchor="middle" fill="var(--dg-line)">{u}</text>
          ))}
          {[-2, 1, 4].map((v) => (
            <text key={v} x={cx - 7} y={oy - v * sy + 3} fontSize={9.5} textAnchor="end" fill="var(--dg-line)">{v}</text>
          ))}

          <g clipPath="url(#exp-pos-clip)">
            <polyline points={pts.join(" ")} fill="none" stroke={roleColour.a} strokeWidth={2.4} strokeLinecap="round" />
            <line x1={22} y1={ky} x2={W - 18} y2={ky} stroke={roleColour.b} strokeWidth={1.8} strokeDasharray="5 4" />
          </g>

          <text x={W - 22} y={ky - 7} fontSize={10.5} fontWeight={600} textAnchor="end" fill={roleColour.b} style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}>
            y = {k}
          </text>

          {hitX !== null && (
            <>
              <circle cx={cx + hitX * sx} cy={ky} r={4.8} fill={roleColour.result} />
              <text
                x={cx + hitX * sx - 8}
                y={ky - 10}
                fontSize={11}
                fontWeight={700}
                textAnchor="end"
                fill={roleColour.result}
                style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}
              >
                x = {hitX}
              </text>
            </>
          )}
        </svg>

        <p className="mt-2 text-center text-xs text-muted-foreground">
          {k > 0 ? (
            <>
              Because <MathTex tex={`${k} > 0`} />, the line hits <MathTex tex="y = 2^x" /> once at <span className="font-medium text-foreground"><MathTex tex={`x = ${hitX}`} /></span>.
            </>
          ) : (
            <>
              <span className="font-medium text-foreground">No intersection:</span> <MathTex tex="2^x" /> is strictly above the x-axis (<MathTex tex="2^x > 0" />), so <MathTex tex={`2^x = ${k}`} /> has no real solution.
            </>
          )}
        </p>
      </div>
    </figure>
  );
}

/**
 * Interactive visual showing why squaring √(x + 7) = x + 1 introduces the phantom root x = -3 from the negative branch.
 */
export function SurdExtraneousVisual() {
  const [showTwin, setShowTwin] = useState(true);
  const W = 400, H = 210;
  const ox = 230, oy = 122, sx = 22, sy = 20;

  const posPts: string[] = [];
  const negPts: string[] = [];
  for (let x = -7; x <= 4.5; x += 0.1) {
    const r = Math.sqrt(x + 7);
    posPts.push(`${(ox + x * sx).toFixed(1)},${(oy - r * sy).toFixed(1)}`);
    negPts.push(`${(ox + x * sx).toFixed(1)},${(oy + r * sy).toFixed(1)}`);
  }

  const lx1 = -5.5, lx2 = 3.5;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Why squaring √(x + 7) = x + 1 creates an extraneous root</span>
        <button
          type="button"
          onClick={() => setShowTwin((v) => !v)}
          className="rounded border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          {showTwin ? "Hide phantom −√(x+7)" : "Show phantom −√(x+7)"}
        </button>
      </div>

      <div className="p-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-[400px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <clipPath id="surd-clip"><rect x={14} y={8} width={W - 28} height={H - 16} /></clipPath>
          <line x1={18} y1={oy} x2={W - 18} y2={oy} stroke="var(--dg-line)" strokeWidth={1.2} />
          <line x1={ox} y1={12} x2={ox} y2={H - 12} stroke="var(--dg-line)" strokeWidth={1.2} />

          {[-7, -3, 2].map((u) => (
            <text key={u} x={ox + u * sx} y={oy + 14} fontSize={9.5} textAnchor="middle" fill="var(--dg-line)">{u}</text>
          ))}

          <g clipPath="url(#surd-clip)">
            {showTwin && (
              <polyline points={negPts.join(" ")} fill="none" stroke="var(--dg-line)" strokeOpacity={0.55} strokeWidth={1.8} strokeDasharray="5 4" />
            )}
            <polyline points={posPts.join(" ")} fill="none" stroke={roleColour.a} strokeWidth={2.5} strokeLinecap="round" />
            <line
              x1={ox + lx1 * sx}
              y1={oy - (lx1 + 1) * sy}
              x2={ox + lx2 * sx}
              y2={oy - (lx2 + 1) * sy}
              stroke={roleColour.b}
              strokeWidth={2}
            />
          </g>

          {/* Valid root (2, 3) */}
          <circle cx={ox + 2 * sx} cy={oy - 3 * sy} r={4.8} fill={roleColour.result} />
          <text x={ox + 2 * sx + 8} y={oy - 3 * sy - 6} fontSize={11} fontWeight={700} fill={roleColour.result} style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}>
            Valid: (2; 3)
          </text>

          {/* Extraneous root (-3, -2) */}
          {showTwin && (
            <>
              <circle cx={ox - 3 * sx} cy={oy - (-2) * sy} r={4.8} fill="var(--dg-bg)" stroke={roleColour.b} strokeWidth={2.2} />
              <text x={ox - 3 * sx + 8} y={oy + 2 * sy + 14} fontSize={10.5} fontWeight={600} fill={roleColour.b} style={{ paintOrder: "stroke", stroke: "var(--dg-bg)", strokeWidth: 4 }}>
                Extraneous: (−3; −2)
              </text>
            </>
          )}
        </svg>

        <p className="mt-2 text-center text-xs text-muted-foreground">
          Squaring solves <MathTex tex="x + 7 = (x + 1)^2" />, which treats <MathTex tex="+\sqrt{x+7}" /> and <MathTex tex="-\sqrt{x+7}" /> alike. <MathTex tex="x = -3" /> solves the dashed bottom branch, so <span className="font-medium text-foreground">always check in the original equation</span>.
        </p>
      </div>
    </figure>
  );
}
