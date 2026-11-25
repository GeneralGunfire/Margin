import { useState } from "react";
import katex from "katex";
import { roleColour } from "./toolkit";
import { cn } from "@/lib/utils";

const texInline = (t: string) => katex.renderToString(t, { throwOnError: false, strict: false });
function MathTex({ tex }: { tex: string }) {
  return <span dangerouslySetInnerHTML={{ __html: texInline(tex) }} />;
}

const REGIONS = [
  { id: "and", label: "A ∩ B" },
  { id: "or", label: "A ∪ B" },
  { id: "onlyA", label: "A only" },
  { id: "neither", label: "(A ∪ B)'" },
] as const;

/**
 * Interactive Venn region explorer with count-vs-decimal toggle and non-overlapping disjoint circles.
 */
export function VennExplorer() {
  const [region, setRegion] = useState<(typeof REGIONS)[number]["id"]>("or");
  const [disjoint, setDisjoint] = useState(false);
  const [mode, setMode] = useState<"prob" | "count">("prob");

  const cxA = disjoint ? 116 : 146;
  const cxB = disjoint ? 264 : 234;
  const r = disjoint ? 52 : 60;
  const cy = 114;

  const vals = disjoint
    ? {
        onlyA: mode === "prob" ? "0,40" : "40",
        mid: mode === "prob" ? "0" : "0",
        onlyB: mode === "prob" ? "0,40" : "40",
        out: mode === "prob" ? "0,20" : "20",
      }
    : {
        onlyA: mode === "prob" ? "0,25" : "25",
        mid: mode === "prob" ? "0,15" : "15",
        onlyB: mode === "prob" ? "0,25" : "25",
        out: mode === "prob" ? "0,35" : "35",
      };

  const formulaTex = (() => {
    if (disjoint) {
      if (region === "and") return mode === "prob" ? "P(A \\cap B) = 0" : "n(A \\cap B) = 0";
      if (region === "or") return mode === "prob" ? "P(A \\cup B) = 0{,}40 + 0{,}40 = 0{,}80" : "n(A \\cup B) = 40 + 40 = 80";
      if (region === "onlyA") return mode === "prob" ? "P(A\\text{ only}) = P(A) = 0{,}40" : "n(A\\text{ only}) = 40";
      return mode === "prob" ? "P((A \\cup B)') = 1 - 0{,}80 = 0{,}20" : "n((A \\cup B)') = 100 - 80 = 20";
    }
    if (region === "and") return mode === "prob" ? "P(A \\cap B) = 0{,}15" : "n(A \\cap B) = 15";
    if (region === "or") return mode === "prob" ? "P(A \\cup B) = 0{,}40 + 0{,}40 - 0{,}15 = 0{,}65" : "n(A \\cup B) = 40 + 40 - 15 = 65";
    if (region === "onlyA") return mode === "prob" ? "P(A\\text{ only}) = 0{,}40 - 0{,}15 = 0{,}25" : "n(A\\text{ only}) = 40 - 15 = 25";
    return mode === "prob" ? "P((A \\cup B)') = 1 - 0{,}65 = 0{,}35" : "n((A \\cup B)') = 100 - 65 = 35";
  })();

  const desc = (() => {
    if (disjoint) {
      if (region === "and") return "Disjoint circles cannot happen at the same time, so their overlap is zero.";
      if (region === "or") return "With zero overlap, nothing is counted twice, so you simply add the two circles.";
      if (region === "onlyA") return "Since nothing overlaps with B, every outcome in A is 'A only'.";
      return "Outside both separate circles lies the rest of the sample space S.";
    }
    if (region === "and") return "Outcomes belonging to both A and B at once (the shared lens).";
    if (region === "or") return "Adding all of A and all of B counts the middle lens twice, so we subtract it once.";
    if (region === "onlyA") return "Inside A, with the shared middle removed so B is excluded.";
    return "Outside both circles, yet still inside the sample space S = 100.";
  })();

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Venn region explorer</span>
        <div className="flex flex-wrap gap-1.5">
          {REGIONS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setRegion(item.id)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs transition-colors",
                item.id === region ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[1fr_240px]">
        <svg viewBox="0 0 380 220" className="mx-auto block h-auto w-full max-w-[380px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <defs>
            <clipPath id="venn-clip-A"><circle cx={cxA} cy={cy} r={r} /></clipPath>
            <mask id="venn-mask-outside">
              <rect x={14} y={14} width={352} height={192} fill="white" />
              <circle cx={cxA} cy={cy} r={r} fill="black" />
              <circle cx={cxB} cy={cy} r={r} fill="black" />
            </mask>
            <mask id="venn-mask-onlyA">
              <circle cx={cxA} cy={cy} r={r} fill="white" />
              <circle cx={cxB} cy={cy} r={r} fill="black" />
            </mask>
          </defs>

          <rect
            x={14}
            y={14}
            width={352}
            height={192}
            rx={6}
            fill={region === "neither" ? roleColour.result : "none"}
            fillOpacity={region === "neither" ? 0.16 : 0}
            mask={region === "neither" ? "url(#venn-mask-outside)" : undefined}
            stroke="var(--dg-line)"
            strokeWidth={1.3}
          />
          <rect x={14} y={14} width={352} height={192} rx={6} fill="none" stroke="var(--dg-line)" strokeWidth={1.3} />
          <text x={24} y={32} fontSize={12} fontWeight={600} fill="var(--dg-line)">
            S ({mode === "prob" ? "1" : "100"})
          </text>

          {region === "or" && (
            <>
              <circle cx={cxA} cy={cy} r={r} fill={roleColour.result} fillOpacity={0.18} />
              <circle cx={cxB} cy={cy} r={r} fill={roleColour.result} fillOpacity={0.18} />
            </>
          )}
          {region === "and" && !disjoint && (
            <circle cx={cxB} cy={cy} r={r} clipPath="url(#venn-clip-A)" fill={roleColour.result} fillOpacity={0.28} />
          )}
          {region === "onlyA" && (
            <rect x={14} y={14} width={352} height={192} fill={roleColour.result} fillOpacity={0.22} mask="url(#venn-mask-onlyA)" />
          )}

          <circle cx={cxA} cy={cy} r={r} fill="none" stroke={roleColour.a} strokeWidth={2} />
          <circle cx={cxB} cy={cy} r={r} fill="none" stroke={roleColour.b} strokeWidth={2} />

          {/* Labels cleanly above circles so they never touch the strokes */}
          <text x={cxA} y={cy - r - 12} fontSize={13} fontWeight={700} textAnchor="middle" fill={roleColour.a}>
            A ({mode === "prob" ? "0,40" : "40"})
          </text>
          <text x={cxB} y={cy - r - 12} fontSize={13} fontWeight={700} textAnchor="middle" fill={roleColour.b}>
            B ({mode === "prob" ? "0,40" : "40"})
          </text>

          {!disjoint ? (
            <>
              <text x={128} y={cy + 4} fontSize={13} textAnchor="middle" fill="var(--dg-text)">{vals.onlyA}</text>
              <text x={190} y={cy + 4} fontSize={13} fontWeight={700} textAnchor="middle" fill="var(--dg-text)">{vals.mid}</text>
              <text x={252} y={cy + 4} fontSize={13} textAnchor="middle" fill="var(--dg-text)">{vals.onlyB}</text>
              <text x={352} y={194} fontSize={12} textAnchor="end" fill="var(--dg-line)">{vals.out}</text>
            </>
          ) : (
            <>
              <text x={cxA} y={cy + 4} fontSize={13} textAnchor="middle" fill="var(--dg-text)">{vals.onlyA}</text>
              <text x={190} y={cy + 4} fontSize={11} textAnchor="middle" fill="var(--dg-line)">gap (0)</text>
              <text x={cxB} y={cy + 4} fontSize={13} textAnchor="middle" fill="var(--dg-text)">{vals.onlyB}</text>
              <text x={352} y={194} fontSize={12} textAnchor="end" fill="var(--dg-line)">{vals.out}</text>
            </>
          )}
        </svg>

        <div className="space-y-3 text-xs">
          <div className="overflow-x-auto text-sm font-medium text-foreground">
            <MathTex tex={formulaTex} />
          </div>
          <p className="text-muted-foreground">{desc}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            <button
              type="button"
              onClick={() => setMode((m) => (m === "prob" ? "count" : "prob"))}
              className="rounded border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {mode === "prob" ? "Show counts (out of 100)" : "Show decimals (P)"}
            </button>
            <button
              type="button"
              onClick={() => setDisjoint((v) => !v)}
              className="rounded border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {disjoint ? "Switch to overlapping" : "Switch to mutually exclusive"}
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
}

const THREE_STEPS = [
  {
    step: 1,
    label: "1. Centre (all 3)",
    formula: "n(S \\cap R \\cap C) = 5",
    explain: "Start at the innermost triple overlap: 5 learners play all three sports.",
  },
  {
    step: 2,
    label: "2. Two-way overlaps",
    formula: "18 - 5 = 13,\\quad 15 - 5 = 10,\\quad 12 - 5 = 7",
    explain: "Each pairwise overlap already includes the 5 in the middle, so subtract 5 from each pair.",
  },
  {
    step: 3,
    label: "3. Single-sport outer parts",
    formula: "S: 50 - (13+5+10) = 22",
    explain: "Subtract all three inner pieces inside a circle from its total to find the 'only' region.",
  },
  {
    step: 4,
    label: "4. Neither / outside",
    formula: "100 - (22 + 15 + 13 + 13 + 10 + 7 + 5) = 15",
    explain: "Add every distinct region inside the circles (85) and subtract from 100 to leave 15 outside.",
  },
] as const;

/**
 * Interactive 4-stage inside-out builder for three-event Venn diagrams.
 */
export function ThreeEventVennVisual() {
  const [step, setStep] = useState<number>(4);
  const cur = THREE_STEPS[step - 1];

  // Circle centres & radius inside 380x256
  const r = 60;
  const sC = { x: 146, y: 102 };
  const rC = { x: 234, y: 102 };
  const cC = { x: 190, y: 170 };

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Three-event Venn: build from the centre outward</span>
        <div className="flex flex-wrap gap-1.5">
          {THREE_STEPS.map((item) => (
            <button
              key={item.step}
              type="button"
              onClick={() => setStep(item.step)}
              className={cn(
                "rounded-md px-2 py-1 text-xs transition-colors",
                item.step === step ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[1fr_240px]">
        <svg viewBox="0 0 380 256" className="mx-auto block h-auto w-full max-w-[380px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <rect x={12} y={12} width={356} height={232} rx={6} fill="none" stroke="var(--dg-line)" strokeWidth={1.3} />
          <text x={22} y={30} fontSize={12} fontWeight={600} fill="var(--dg-line)">n(U) = 100</text>

          {/* Circles */}
          <circle cx={sC.x} cy={sC.y} r={r} fill={roleColour.a} fillOpacity={0.07} stroke={roleColour.a} strokeWidth={2} />
          <circle cx={rC.x} cy={rC.y} r={r} fill={roleColour.b} fillOpacity={0.07} stroke={roleColour.b} strokeWidth={2} />
          <circle cx={cC.x} cy={cC.y} r={r} fill={roleColour.result} fillOpacity={0.07} stroke={roleColour.result} strokeWidth={2} />

          {/* Circle labels placed cleanly outside */}
          <text x={78} y={50} fontSize={12.5} fontWeight={700} textAnchor="middle" fill={roleColour.a}>S (50)</text>
          <text x={302} y={50} fontSize={12.5} fontWeight={700} textAnchor="middle" fill={roleColour.b}>R (40)</text>
          <text x={272} y={208} fontSize={12.5} fontWeight={700} textAnchor="start" fill={roleColour.result}>C (35)</text>

          {/* Step 1: triple centre */}
          <text x={190} y={128} fontSize={13} fontWeight={700} textAnchor="middle" fill={step === 1 ? roleColour.result : "var(--dg-text)"}>5</text>

          {/* Step 2: two-way overlaps minus 5 */}
          <g opacity={step >= 2 ? 1 : 0.16}>
            <text x={190} y={84} fontSize={12.5} fontWeight={step === 2 ? 700 : 500} textAnchor="middle" fill={step === 2 ? roleColour.result : "var(--dg-text)"}>13</text>
            <text x={152} y={148} fontSize={12.5} fontWeight={step === 2 ? 700 : 500} textAnchor="middle" fill={step === 2 ? roleColour.result : "var(--dg-text)"}>10</text>
            <text x={228} y={148} fontSize={12.5} fontWeight={step === 2 ? 700 : 500} textAnchor="middle" fill={step === 2 ? roleColour.result : "var(--dg-text)"}>7</text>
          </g>

          {/* Step 3: single outer parts */}
          <g opacity={step >= 3 ? 1 : 0.16}>
            <text x={118} y={84} fontSize={13} fontWeight={step === 3 ? 700 : 500} textAnchor="middle" fill={step === 3 ? roleColour.a : "var(--dg-text)"}>22</text>
            <text x={262} y={84} fontSize={13} fontWeight={step === 3 ? 700 : 500} textAnchor="middle" fill={step === 3 ? roleColour.b : "var(--dg-text)"}>15</text>
            <text x={190} y={206} fontSize={13} fontWeight={step === 3 ? 700 : 500} textAnchor="middle" fill={step === 3 ? roleColour.result : "var(--dg-text)"}>13</text>
          </g>

          {/* Step 4: outside */}
          <text x={352} y={230} fontSize={12.5} fontWeight={step === 4 ? 700 : 500} textAnchor="end" opacity={step >= 4 ? 1 : 0.16} fill={step === 4 ? roleColour.result : "var(--dg-line)"}>
            outside: 15
          </text>
        </svg>

        <div className="space-y-3 text-xs">
          <div className="overflow-x-auto text-sm font-medium text-foreground">
            <MathTex tex={cur.formula} />
          </div>
          <p className="text-muted-foreground">{cur.explain}</p>
          <p className="rounded bg-secondary/60 px-2.5 py-2 text-[11px] text-muted-foreground">
            Check all 8 regions: <span className="font-medium text-foreground">22 + 13 + 15 + 10 + 5 + 7 + 13 + 15 = 100</span>.
          </p>
        </div>
      </div>
    </figure>
  );
}

const DECK_CASES = [
  {
    id: "indep",
    tab: "Heart vs King (Independent)",
    aLabel: "Heart (13)",
    bLabel: "King (4)",
    overlapLabel: "King of Hearts (1)",
    pA: "13/52 = 0,25",
    pB: "4/52 = 1/13",
    pBGivenA: "1/13",
    productTex: "P(H)\\cdot P(K) = \\frac{13}{52}\\cdot\\frac{4}{52} = \\frac{1}{52}",
    interTex: "P(H \\cap K) = \\frac{1}{52}",
    verdict: "Independent (and NOT mutually exclusive)",
    reason: "Knowing a card is a Heart leaves the chance of a King at 1/13 (still 1 out of 13). Product equals intersection.",
    disjoint: false,
    nested: false,
  },
  {
    id: "mutex",
    tab: "Heart vs Spade (Mutually exclusive)",
    aLabel: "Heart (13)",
    bLabel: "Spade (13)",
    overlapLabel: "Overlap (0)",
    pA: "13/52 = 0,25",
    pB: "13/52 = 0,25",
    pBGivenA: "0/13 = 0",
    productTex: "P(H)\\cdot P(S) = \\frac{1}{4}\\cdot\\frac{1}{4} = \\frac{1}{16}",
    interTex: "P(H \\cap S) = 0",
    verdict: "Mutually exclusive (so STRONGLY dependent!)",
    reason: "Knowing a card is a Heart instantly drops the chance of a Spade from 0,25 down to 0. They cannot both happen.",
    disjoint: true,
    nested: false,
  },
  {
    id: "dep",
    tab: "Red vs Heart (Overlapping & dependent)",
    aLabel: "Red (26)",
    bLabel: "Heart (13)",
    overlapLabel: "13 cards",
    pA: "26/52 = 0,50",
    pB: "13/52 = 0,25",
    pBGivenA: "13/26 = 0,50",
    productTex: "P(R)\\cdot P(H) = \\frac{1}{2}\\cdot\\frac{1}{4} = \\frac{1}{8}",
    interTex: "P(R \\cap H) = \\frac{13}{52} = \\frac{1}{4}",
    verdict: "Dependent (P(R ∩ H) ≠ P(R)·P(H))",
    reason: "Knowing a card is Red doubles the chance that it is a Heart from 0,25 to 0,50.",
    disjoint: false,
    nested: true,
  },
] as const;

/**
 * Interactive 52-card explorer proving why mutually exclusive != independent.
 */
export function IndependenceExplorer() {
  const [idx, setIdx] = useState(0);
  const c = DECK_CASES[idx];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">52-card deck: does knowing A change the chance of B?</span>
        <div className="flex flex-wrap gap-1.5">
          {DECK_CASES.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIdx(i)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs transition-colors",
                i === idx ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {item.tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[260px_1fr]">
        <svg viewBox="0 0 260 155" className="mx-auto block h-auto w-full max-w-[260px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <rect x={10} y={10} width={240} height={135} rx={6} fill="none" stroke="var(--dg-line)" strokeWidth={1.2} />
          <text x={20} y={26} fontSize={11} fill="var(--dg-line)">52 cards</text>

          {c.disjoint && (
            <>
              <circle cx={82} cy={84} r={42} fill={roleColour.a} fillOpacity={0.14} stroke={roleColour.a} strokeWidth={2} />
              <circle cx={178} cy={84} r={42} fill={roleColour.b} fillOpacity={0.14} stroke={roleColour.b} strokeWidth={2} />
              <text x={82} y={88} fontSize={11.5} fontWeight={600} textAnchor="middle" fill={roleColour.a}>{c.aLabel}</text>
              <text x={178} y={88} fontSize={11.5} fontWeight={600} textAnchor="middle" fill={roleColour.b}>{c.bLabel}</text>
            </>
          )}

          {!c.disjoint && !c.nested && (
            <>
              <circle cx={102} cy={84} r={46} fill={roleColour.a} fillOpacity={0.14} stroke={roleColour.a} strokeWidth={2} />
              <circle cx={162} cy={84} r={40} fill={roleColour.b} fillOpacity={0.14} stroke={roleColour.b} strokeWidth={2} />
              <text x={82} y={88} fontSize={11} fontWeight={600} textAnchor="middle" fill={roleColour.a}>12 other ♥</text>
              <text x={132} y={88} fontSize={11.5} fontWeight={700} textAnchor="middle" fill={roleColour.result}>K♥ (1)</text>
              <text x={178} y={88} fontSize={11} fontWeight={600} textAnchor="middle" fill={roleColour.b}>3 other K</text>
            </>
          )}

          {c.nested && (
            <>
              <circle cx={130} cy={84} r={48} fill={roleColour.a} fillOpacity={0.14} stroke={roleColour.a} strokeWidth={2} />
              <circle cx={146} cy={86} r={28} fill={roleColour.b} fillOpacity={0.22} stroke={roleColour.b} strokeWidth={2} />
              <text x={96} y={76} fontSize={11} fontWeight={600} textAnchor="middle" fill={roleColour.a}>13 ♦</text>
              <text x={146} y={90} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.b}>13 ♥</text>
            </>
          )}
        </svg>

        <div className="space-y-2 text-xs">
          <p className="text-sm font-semibold text-foreground">{c.verdict}</p>
          <p className="text-muted-foreground">{c.reason}</p>
          <div className="grid gap-1.5 rounded bg-secondary/50 p-2.5 sm:grid-cols-2">
            <div>
              <span className="text-[11px] text-muted-foreground">Overall chance of B: </span>
              <span className="font-medium text-foreground">{c.pB}</span>
            </div>
            <div>
              <span className="text-[11px] text-muted-foreground">Inside A, chance of B: </span>
              <span className="font-medium text-foreground">{c.pBGivenA}</span>
            </div>
            <div className="overflow-x-auto sm:col-span-2">
              <MathTex tex={`${c.productTex} \\quad\\text{vs}\\quad ${c.interTex}`} />
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

/**
 * Interactive tree diagram comparing with replacement vs without replacement, with bag counts & path filter.
 */
export function TreeDiagramVisual() {
  const [withRep, setWithRep] = useState(false);
  const [filter, setFilter] = useState<"bb" | "atLeastB" | "diff">("bb");

  const b2b = withRep ? "3/5" : "2/4";
  const a2b = withRep ? "2/5" : "2/4";
  const b2a = withRep ? "3/5" : "3/4";
  const a2a = withRep ? "2/5" : "1/4";

  const active = {
    bb: filter === "bb" || filter === "atLeastB",
    ba: filter === "atLeastB" || filter === "diff",
    ab: filter === "atLeastB" || filter === "diff",
    aa: false,
  };

  const probText = (() => {
    if (withRep) {
      if (filter === "bb") return "P(BB) = \\frac{3}{5}\\cdot\\frac{3}{5} = \\frac{9}{25} = 0{,}36";
      if (filter === "atLeastB") return "P(\\text{at least 1 }B) = \\frac{9}{25} + \\frac{6}{25} + \\frac{6}{25} = \\frac{21}{25} = 0{,}84";
      return "P(\\text{different}) = \\frac{6}{25} + \\frac{6}{25} = \\frac{12}{25} = 0{,}48";
    }
    if (filter === "bb") return "P(BB) = \\frac{3}{5}\\cdot\\frac{2}{4} = \\frac{6}{20} = 0{,}30";
    if (filter === "atLeastB") return "P(\\text{at least 1 }B) = \\frac{6}{20} + \\frac{6}{20} + \\frac{6}{20} = \\frac{18}{20} = 0{,}90";
    return "P(\\text{different}) = \\frac{6}{20} + \\frac{6}{20} = \\frac{12}{20} = 0{,}60";
  })();

  const outcomes = withRep
    ? { bb: "9/25", ba: "6/25", ab: "6/25", aa: "4/25" }
    : { bb: "6/20", ba: "6/20", ab: "6/20", aa: "2/20" };

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">2 draws from 3 Blue + 2 Amber</span>
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setWithRep(false)}
            className={cn(
              "rounded-md px-2.5 py-1 text-xs transition-colors",
              !withRep ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            Without replacement
          </button>
          <button
            type="button"
            onClick={() => setWithRep(true)}
            className={cn(
              "rounded-md px-2.5 py-1 text-xs transition-colors",
              withRep ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            With replacement
          </button>
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {(
            [
              ["bb", "Both Blue (BB)"],
              ["atLeastB", "At least 1 Blue"],
              ["diff", "Different colours"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className={cn(
                "rounded border px-2 py-0.5 text-[11px] transition-colors",
                filter === id ? "border-primary bg-primary/10 font-medium text-primary" : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <svg viewBox="0 0 490 212" className="mx-auto block h-auto w-full max-w-[490px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          {/* Bag summary at start */}
          <text x={32} y={78} fontSize={10.5} fontWeight={600} textAnchor="middle" fill="var(--dg-line)">Bag: 3B, 2A</text>
          <circle cx={32} cy={106} r={5} fill="var(--dg-text)" />

          {/* Root to 1st draw */}
          <line x1={37} y1={106} x2={172} y2={54} stroke={active.bb || active.ba ? roleColour.a : "var(--dg-line)"} strokeWidth={active.bb || active.ba ? 2.4 : 1.5} />
          <line x1={37} y1={106} x2={172} y2={158} stroke={active.ab ? roleColour.b : "var(--dg-line)"} strokeWidth={active.ab ? 2.4 : 1.5} />
          <text x={96} y={70} fontSize={11.5} fontWeight={600} fill={roleColour.a}>3/5</text>
          <text x={96} y={146} fontSize={11.5} fontWeight={600} fill={roleColour.b}>2/5</text>

          {/* 1st draw nodes + remaining bag counts */}
          <circle cx={176} cy={54} r={5} fill={roleColour.a} />
          <text x={176} y={32} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.a}>
            B (now {withRep ? "3B, 2A" : "2B, 2A"})
          </text>

          <circle cx={176} cy={158} r={5} fill={roleColour.b} />
          <text x={176} y={184} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.b}>
            A (now {withRep ? "3B, 2A" : "3B, 1A"})
          </text>

          {/* 2nd draw from B */}
          <line x1={181} y1={54} x2={328} y2={28} stroke={active.bb ? roleColour.result : "var(--dg-line)"} strokeWidth={active.bb ? 2.4 : 1.4} opacity={active.bb ? 1 : 0.45} />
          <line x1={181} y1={54} x2={328} y2={80} stroke={active.ba ? roleColour.result : "var(--dg-line)"} strokeWidth={active.ba ? 2.4 : 1.4} opacity={active.ba ? 1 : 0.45} />
          <text x={252} y={33} fontSize={11} fontWeight={600} fill={active.bb ? roleColour.result : "var(--dg-line)"}>{b2b}</text>
          <text x={252} y={79} fontSize={11} fontWeight={600} fill={active.ba ? roleColour.result : "var(--dg-line)"}>{a2b}</text>

          {/* 2nd draw from A */}
          <line x1={181} y1={158} x2={328} y2={132} stroke={active.ab ? roleColour.result : "var(--dg-line)"} strokeWidth={active.ab ? 2.4 : 1.4} opacity={active.ab ? 1 : 0.45} />
          <line x1={181} y1={158} x2={328} y2={184} stroke="var(--dg-line)" strokeWidth={1.4} opacity={0.45} />
          <text x={252} y={137} fontSize={11} fontWeight={600} fill={active.ab ? roleColour.result : "var(--dg-line)"}>{b2a}</text>
          <text x={252} y={183} fontSize={11} fill="var(--dg-line)">{a2a}</text>

          {/* Outcome column */}
          {[
            { y: 32, code: "BB", val: outcomes.bb, on: active.bb },
            { y: 84, code: "BA", val: outcomes.ba, on: active.ba },
            { y: 136, code: "AB", val: outcomes.ab, on: active.ab },
            { y: 188, code: "AA", val: outcomes.aa, on: active.aa },
          ].map((row) => (
            <text
              key={row.code}
              x={340}
              y={row.y}
              fontSize={12}
              fontWeight={row.on ? 700 : 500}
              fill={row.on ? roleColour.result : "var(--dg-line)"}
            >
              {row.code}: {row.val}
            </text>
          ))}
        </svg>

        <div className="text-center text-xs text-muted-foreground">
          {withRep ? "Independent: marble goes back, so total stays 5. " : "Dependent: first marble stays out, so total drops to 4. "}
          <span className="font-medium text-foreground">
            <MathTex tex={probText} />
          </span>
        </div>
      </div>
    </figure>
  );
}

/**
 * Interactive 2x2 contingency table explorer showing total deduction, joint cells, and independence test.
 */
export function ContingencyTableVisual() {
  const [view, setView] = useState<"deduce" | "joint" | "indep">("deduce");

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Two-way contingency table (200 learners)</span>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["deduce", "1. Deduce missing cells"],
              ["joint", "2. Read joint & marginal"],
              ["indep", "3. Test independence"],
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
        <div className="overflow-x-auto">
          <table className="mx-auto w-full max-w-[440px] border-collapse text-center text-xs tabular-nums">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="p-2 text-left font-medium"></th>
                <th className="p-2 font-medium">Sport (S)</th>
                <th className="p-2 font-medium">Art (A)</th>
                <th className="p-2 font-semibold text-foreground">Row total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/60">
                <td className="p-2 text-left font-medium text-foreground">Male (M)</td>
                <td className={cn("p-2 font-semibold", view !== "deduce" && "bg-primary/15 text-primary")}>60</td>
                <td className={cn("p-2", view === "deduce" && "bg-amber-500/15 font-semibold text-amber-600 dark:text-amber-400")}>40</td>
                <td className={cn("p-2 font-semibold", view === "indep" && "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400")}>100</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 text-left font-medium text-foreground">Female (F)</td>
                <td className={cn("p-2", view === "deduce" && "bg-amber-500/15 font-semibold text-amber-600 dark:text-amber-400")}>48</td>
                <td className="p-2">52</td>
                <td className="p-2 font-semibold">100</td>
              </tr>
              <tr>
                <td className="p-2 text-left font-semibold text-foreground">Col total</td>
                <td className={cn("p-2 font-semibold", view === "indep" && "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400")}>108</td>
                <td className="p-2 font-semibold">92</td>
                <td className="p-2 font-bold text-foreground">200</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-3 text-center text-xs text-muted-foreground">
          {view === "deduce" && (
            <span>
              Given 100 males with 60 in Sport, Male &amp; Art must be <span className="font-medium text-foreground">100 − 60 = 40</span>; given 108 in Sport, Female &amp; Sport must be <span className="font-medium text-foreground">108 − 60 = 48</span>.
            </span>
          )}
          {view === "joint" && (
            <MathTex tex="P(M \cap S) = \frac{60}{200} = 0{,}30 \qquad P(M \cup S) = \frac{60 + 40 + 48}{200} = 0{,}74" />
          )}
          {view === "indep" && (
            <MathTex tex="P(M)\cdot P(S) = \frac{100}{200}\cdot\frac{108}{200} = 0{,}27 \neq 0{,}30 = P(M \cap S) \implies \text{not independent}" />
          )}
        </div>
      </div>
    </figure>
  );
}
