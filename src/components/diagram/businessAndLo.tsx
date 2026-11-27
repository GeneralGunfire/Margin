import { useState } from "react";
import { roleColour } from "./toolkit";
import { cn } from "@/lib/utils";

/* ============================================================================
 * 1. Business Studies — Three Business Environments Concentric Control Ring
 * ========================================================================== */

const ENV_LAYERS = [
  {
    id: "micro",
    label: "Micro (Full Control)",
    control: "Full / Direct Control",
    elements: "Vision, mission, objectives, organisational structure, resources (human, financial, physical), business culture, management.",
    challenges: "Difficult employees, lack of vision/mission, inadequate management skills, strikes/go-slows, low productivity.",
    adapt: "Train managers & staff, clarify strategic vision, improve communication & workplace morale, upgrade internal systems.",
  },
  {
    id: "market",
    label: "Market (No Control / Influence)",
    control: "Zero Direct Control (Can Influence)",
    elements: "Customers/consumers, suppliers, competitors, intermediaries, regulators/NGOs, trade unions, strategic allies.",
    challenges: "Aggressive competitors, supply shortages, shifting consumer tastes, changing demographics & psychographics, union demands.",
    adapt: "Gather market research (`information management`), negotiate supplier contracts, form strategic alliances, differentiate products.",
  },
  {
    id: "macro",
    label: "Macro (Least Control)",
    control: "Least Control (Must Adapt)",
    elements: "PESTLE: Political, Economic (`inflation, interest`), Social, Technological, Legal (`LRA, BCEA, OHS`), Environmental (`climate/resources`).",
    challenges: "Inflation & exchange-rate swings, new labour/tax laws, crime, piracy/dumping, loadshedding, rapid tech shifts, globalisation.",
    adapt: "Lobbying government through business chambers, hedging against inflation, CSR/CSI projects, flexible digital redesign, mergers/takeovers.",
  },
] as const;

export function BusinessEnvironmentsRing() {
  const [idx, setIdx] = useState(0);
  const active = ENV_LAYERS[idx] ?? ENV_LAYERS[0];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Business environments and control explorer</span>
        <div className="flex flex-wrap gap-1.5">
          {ENV_LAYERS.map((layer, i) => (
            <button
              key={layer.id}
              type="button"
              onClick={() => setIdx(i)}
              className={cn(
                "whitespace-nowrap rounded-md px-2.5 py-1 text-xs transition-colors",
                i === idx ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {layer.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-[240px_1fr]">
        <svg viewBox="0 0 240 210" className="mx-auto block h-auto w-full max-w-[240px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <circle
            cx={120}
            cy={105}
            r={92}
            fill={idx === 2 ? roleColour.aux : "transparent"}
            fillOpacity={idx === 2 ? 0.16 : 0}
            stroke={idx === 2 ? roleColour.aux : "var(--dg-line)"}
            strokeWidth={idx === 2 ? 2.2 : 1.2}
          />
          <text x={120} y={29} fontSize={10} fontWeight={700} textAnchor="middle" fill={idx === 2 ? roleColour.aux : "var(--dg-text)"}>
            MACRO (Least control)
          </text>

          <circle
            cx={120}
            cy={105}
            r={64}
            fill={idx === 1 ? roleColour.b : "transparent"}
            fillOpacity={idx === 1 ? 0.18 : 0}
            stroke={idx === 1 ? roleColour.b : "var(--dg-line)"}
            strokeWidth={idx === 1 ? 2.2 : 1.2}
          />
          <text x={120} y={56} fontSize={10} fontWeight={700} textAnchor="middle" fill={idx === 1 ? roleColour.b : "var(--dg-text)"}>
            MARKET (Influence only)
          </text>

          <circle
            cx={120}
            cy={105}
            r={35}
            fill={idx === 0 ? roleColour.a : roleColour.a}
            fillOpacity={idx === 0 ? 0.24 : 0.08}
            stroke={roleColour.a}
            strokeWidth={idx === 0 ? 2.4 : 1.3}
          />
          <text x={120} y={102} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.a}>
            MICRO
          </text>
          <text x={120} y={115} fontSize={8.5} textAnchor="middle" fill="var(--dg-text)">
            Full control
          </text>
        </svg>

        <div className="space-y-2.5 text-xs">
          <div>
            <div className="font-semibold text-foreground">{active.label}</div>
            <div className="text-muted-foreground">Degree of control: {active.control}</div>
          </div>
          <div className="rounded-md border border-border bg-background/60 p-2.5 leading-relaxed text-foreground">
            <span className="font-semibold">Key components: </span>
            {active.elements}
          </div>
          <div className="rounded-md border border-border bg-background/60 p-2.5 leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Typical Grade 11 challenges: </span>
            {active.challenges}
          </div>
          <div className="rounded-md border border-border bg-secondary/40 p-2.5 leading-relaxed text-foreground">
            <span className="font-semibold">How business adapts: </span>
            {active.adapt}
          </div>
        </div>
      </div>
    </figure>
  );
}

/* ============================================================================
 * 2. Business Studies — Action Plan Gantt Chart & Production Cost Calculator
 * ========================================================================== */

const GANTT_TASKS = [
  { task: "1. Register company (CIPC / MOI)", owner: "Founder A", start: 1, span: 2 },
  { task: "2. Secure equity & loan funding", owner: "Finance Lead", start: 2, span: 2 },
  { task: "3. Fit out premises & OHS check", owner: "Ops Manager", start: 3, span: 2 },
  { task: "4. Hire & induct core staff", owner: "HR Lead", start: 4, span: 2 },
  { task: "5. Launch BTL promo & open doors", owner: "Marketing Lead", start: 5, span: 2 },
] as const;

export function BusinessGanttAndCostLab() {
  const [mode, setMode] = useState<"gantt" | "cost">("gantt");
  const [fixedCost, setFixedCost] = useState(24000);
  const [varPerUnit, setVarPerUnit] = useState(45);
  const [units, setUnits] = useState(800);

  const totalVariable = varPerUnit * units;
  const totalCost = fixedCost + totalVariable;
  const unitCost = units > 0 ? (totalCost / units).toFixed(2) : "0.00";

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Action-plan Gantt chart &amp; production costing lab</span>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => setMode("gantt")}
            className={cn(
              "whitespace-nowrap rounded-md px-2.5 py-1 text-xs transition-colors",
              mode === "gantt" ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            Action Plan Gantt Chart
          </button>
          <button
            type="button"
            onClick={() => setMode("cost")}
            className={cn(
              "whitespace-nowrap rounded-md px-2.5 py-1 text-xs transition-colors",
              mode === "cost" ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            Production Cost Calculator
          </button>
        </div>
      </div>

      {mode === "gantt" ? (
        <div className="space-y-3 p-4 text-xs">
          <p className="text-muted-foreground">
            A Gantt chart turns a business plan into scheduled weekly action blocks with clear owners so overlapping tasks run on time.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border text-[11px] text-muted-foreground">
                  <th className="py-1.5 pr-3 font-medium">Action Step</th>
                  <th className="py-1.5 pr-3 font-medium">Owner</th>
                  {[1, 2, 3, 4, 5, 6].map((w) => (
                    <th key={w} className="w-12 py-1.5 text-center font-mono font-medium tabular-nums">
                      Wk {w}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {GANTT_TASKS.map((row) => (
                  <tr key={row.task}>
                    <td className="py-2 pr-3 font-medium text-foreground">{row.task}</td>
                    <td className="py-2 pr-3 text-muted-foreground">{row.owner}</td>
                    {[1, 2, 3, 4, 5, 6].map((w) => {
                      const active = w >= row.start && w < row.start + row.span;
                      return (
                        <td key={w} className="p-1 text-center">
                          <div
                            className={cn(
                              "h-4 w-full rounded-sm",
                              active ? "bg-primary/80" : "bg-secondary/40",
                            )}
                          />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 p-4 sm:grid-cols-[1fr_1fr]">
          <div className="space-y-3 text-xs">
            <label className="block space-y-1">
              <span className="text-muted-foreground">
                Fixed costs (rent, salaries, insurance): <strong className="font-mono tabular-nums text-foreground">R{fixedCost.toLocaleString()}</strong>
              </span>
              <input type="range" min={5000} max={60000} step={1000} value={fixedCost} onChange={(e) => setFixedCost(Number(e.target.value))} className="w-full accent-primary" />
            </label>
            <label className="block space-y-1">
              <span className="text-muted-foreground">
                Variable cost per unit (materials, packaging): <strong className="font-mono tabular-nums text-foreground">R{varPerUnit}</strong>
              </span>
              <input type="range" min={10} max={150} step={5} value={varPerUnit} onChange={(e) => setVarPerUnit(Number(e.target.value))} className="w-full accent-primary" />
            </label>
            <label className="block space-y-1">
              <span className="text-muted-foreground">
                Units produced: <strong className="font-mono tabular-nums text-foreground">{units} units</strong>
              </span>
              <input type="range" min={100} max={2500} step={50} value={units} onChange={(e) => setUnits(Number(e.target.value))} className="w-full accent-primary" />
            </label>
          </div>

          <div className="flex flex-col justify-between rounded-md border border-border bg-secondary/40 p-3.5 text-xs">
            <div className="space-y-1.5 font-mono tabular-nums">
              <div className="text-muted-foreground">
                Total Variable = {units} × R{varPerUnit} = <span className="text-foreground">R{totalVariable.toLocaleString()}.00</span>
              </div>
              <div className="text-muted-foreground">
                Total Cost = Fixed + Variable = <span className="text-lg font-bold text-primary">R{totalCost.toLocaleString()}.00</span>
              </div>
              <div className="text-muted-foreground">
                Unit Cost = Total Cost ÷ {units} = <span className="font-semibold text-foreground">R{unitCost} / unit</span>
              </div>
            </div>
            <p className="mt-2 font-sans leading-relaxed text-muted-foreground">
              Notice how producing more units spreads fixed costs over more items, lowering the unit production cost (economies of scale).
            </p>
          </div>
        </div>
      )}
    </figure>
  );
}

/* ============================================================================
 * 3. Business Studies — Operations & Labour Law Reference Matrix
 * ========================================================================== */

const OPS_MATRIX = [
  {
    id: "production",
    label: "Production Systems",
    rows: [
      { key: "Job Production", desc: "One unique, custom item at a time to exact client spec (e.g. custom wedding cake, tailored suit, bridge). High skill, slow, highest unit cost." },
      { key: "Batch Production", desc: "Identical groups made in batches before switching machinery/recipe (e.g. 500 loaves, seasonal T-shirts). Flexible variety + moderate cost." },
      { key: "Mass Production", desc: "Continuous high-volume assembly line of identical goods (e.g. bottled water, standard bricks, cars). Lowest unit cost, capital-intensive." },
    ],
  },
  {
    id: "marketing",
    label: "4Ps Marketing Mix",
    rows: [
      { key: "Product Policy", desc: "Design, features, quality, packaging, branding & registered trade marks matching customer wants across product life cycle." },
      { key: "Pricing Policy", desc: "Cost-plus, skimming (high launch price), penetration (low entry price), promotional discounts, psychological pricing (R99.95)." },
      { key: "Distribution (Place)", desc: "Direct (`producer -> consumer`) vs indirect channels (`producer -> wholesaler -> retailer -> consumer`) and logistics storage." },
      { key: "Marketing Comms", desc: "Advertising, sales promotion, personal selling, and publicity blended across formal/informal markets and digital media." },
    ],
  },
  {
    id: "labour",
    label: "Four Key HR Acts",
    rows: [
      { key: "LRA 66 of 1995", desc: "Labour Relations Act: collective bargaining, legal strikes/lockouts, workplace forums, CCMA dispute resolution, protects against unfair dismissal." },
      { key: "BCEA 75 of 1997", desc: "Basic Conditions of Employment Act: sets max 45 ordinary hours/week, overtime rates, annual/sick/family/parental leave, written contracts." },
      { key: "EEA 55 of 1998", desc: "Employment Equity Act: bans unfair discrimination and implements affirmative action for equitable representation of designated groups." },
      { key: "COIDA 61 of 1997", desc: "Compensation for Occupational Injuries and Diseases Act: compensates workers/dependants for workplace injury, illness, or death on duty." },
    ],
  },
] as const;

export function BusinessMarketingProductionMatrix() {
  const [tab, setTab] = useState(0);
  const current = OPS_MATRIX[tab] ?? OPS_MATRIX[0];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Business operations &amp; HR compliance explorer</span>
        <div className="flex flex-wrap gap-1.5">
          {OPS_MATRIX.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(i)}
              className={cn(
                "whitespace-nowrap rounded-md px-2.5 py-1 text-xs transition-colors",
                i === tab ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="divide-y divide-border">
        {current.rows.map((r) => (
          <div key={r.key} className="grid gap-1 px-4 py-3 text-xs sm:grid-cols-[175px_1fr] sm:gap-4">
            <div className="font-semibold text-foreground">{r.key}</div>
            <div className="leading-relaxed text-muted-foreground">{r.desc}</div>
          </div>
        ))}
      </div>
    </figure>
  );
}

/* ============================================================================
 * 4. Life Orientation — NSC APS Calculator & Study Funding Explorer
 * ========================================================================== */

function pctToLevel(pct: number): number {
  if (pct >= 80) return 7;
  if (pct >= 70) return 6;
  if (pct >= 60) return 5;
  if (pct >= 50) return 4;
  if (pct >= 40) return 3;
  if (pct >= 30) return 2;
  return 1;
}

const DEFAULT_MARKS = [
  { name: "Home Language", pct: 68 },
  { name: "First Additional Language", pct: 62 },
  { name: "Mathematics / Maths Lit", pct: 64 },
  { name: "Subject 4 (e.g. Physical Sciences)", pct: 58 },
  { name: "Subject 5 (e.g. Business Studies)", pct: 71 },
  { name: "Subject 6 (e.g. History / Tourism)", pct: 66 },
] as const;

export function LoApsAndFundingLab() {
  const [marks, setMarks] = useState<number[]>(DEFAULT_MARKS.map((m) => m.pct));
  const [loPct, setLoPct] = useState(75);

  const levels = marks.map(pctToLevel);
  const sixSubjectAps = levels.reduce((acc, v) => acc + v, 0);
  const count50PlusExclLo = marks.filter((p) => p >= 50).length;
  const count40PlusExclLo = marks.filter((p) => p >= 40).length;
  const hlPass40 = marks[0] >= 40;
  const twoOther30 = marks.slice(1).filter((p) => p >= 30).length >= 2 && loPct >= 30;

  let standing = "Below NSC minimum requirements — focus on raising core subjects above 30%/40%";
  if (hlPass40 && count50PlusExclLo >= 4 && marks.every((p) => p >= 30)) {
    standing = "Meets national Bachelor's Degree baseline (check university faculty APS & Maths rules)";
  } else if (hlPass40 && count40PlusExclLo >= 4 && marks.filter((p) => p >= 30).length >= 5) {
    standing = "Meets national Diploma baseline";
  } else if (hlPass40 && twoOther30 && marks.filter((p) => p >= 40).length >= 3) {
    standing = "Meets national Higher Certificate baseline";
  }

  const updateMark = (idx: number, val: number) => {
    setMarks((prev) => prev.map((m, i) => (i === idx ? val : m)));
  };

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">NSC Admission Point Score (APS) practice calculator</span>
        <span className="font-mono text-xs font-semibold tabular-nums text-primary">
          6-Subject APS: {sixSubjectAps} / 42
        </span>
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-[1.2fr_1fr]">
        <div className="space-y-2.5 text-xs">
          {DEFAULT_MARKS.map((subj, i) => (
            <label key={subj.name} className="block space-y-0.5">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{subj.name}</span>
                <span className="font-mono tabular-nums text-foreground">
                  {marks[i]}% (Level {levels[i]})
                </span>
              </div>
              <input
                type="range"
                min={20}
                max={95}
                value={marks[i]}
                onChange={(e) => updateMark(i, Number(e.target.value))}
                className="w-full accent-primary"
              />
            </label>
          ))}
          <label className="block space-y-0.5">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Life Orientation (excluded by most SA universities from 6-subj APS)</span>
              <span className="font-mono tabular-nums text-foreground">
                {loPct}% (Level {pctToLevel(loPct)})
              </span>
            </div>
            <input type="range" min={20} max={95} value={loPct} onChange={(e) => setLoPct(Number(e.target.value))} className="w-full accent-primary" />
          </label>
        </div>

        <div className="flex flex-col justify-between space-y-3 rounded-md border border-border bg-secondary/40 p-3.5 text-xs">
          <div>
            <div className="text-[11px] font-medium text-muted-foreground">Estimated NSC admission standing</div>
            <div className="mt-1 text-sm font-semibold leading-snug text-foreground">{standing}</div>
          </div>
          <div className="space-y-1.5 border-t border-border pt-2.5 text-muted-foreground">
            <p>
              <strong className="text-foreground">Rule reminder:</strong> Many SA universities exclude Life Orientation from the 6-subject APS total (while some score it partially or require 50%+).
            </p>
            <p>
              Always verify each institution&apos;s exact prospectus — high APS alone cannot override a missing required subject (e.g. Pure Mathematics for Engineering).
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}

/* ============================================================================
 * 5. Life Orientation — Balanced Lifestyle Wheel & Climate Action Explorer
 * ========================================================================== */

const LIFESTYLE_FACETS = [
  {
    id: "physical",
    name: "Physical",
    focus: "Balanced nutrition, 60 min movement, sleep hygiene, road/personal safety, avoiding substance harm.",
    risk: "Poor diet, sedentary routines, risky driving, binge drinking, untreated STIs.",
  },
  {
    id: "psychological",
    name: "Psychological",
    focus: "Managing academic/life stress, critical thinking against fake social-media ideals, seeking counselling early.",
    risk: "Chronic overwhelm, burnout, isolating during depressive moods or hopelessness.",
  },
  {
    id: "social",
    name: "Social",
    focus: "Healthy respectful friendships, clear boundaries against peer pressure, community participation.",
    risk: "Toxic peer coercion, bullying, unsafe party scenes, isolation from supportive adults.",
  },
  {
    id: "emotional",
    name: "Emotional",
    focus: "Naming feelings calmly, empathy, resolving relationship conflict without violence or manipulation.",
    risk: "Uncontrolled anger, jealousy/control in dating, bottling trauma in silence.",
  },
  {
    id: "spiritual",
    name: "Spiritual",
    focus: "Clear personal values, sense of purpose, inner peace (`via faith, nature, reflection, or service`).",
    risk: "Living without ethical compass, chasing empty status validation over dignity.",
  },
] as const;

export function LoGoalsAndLifestyleWheel() {
  const [idx, setIdx] = useState(0);
  const active = LIFESTYLE_FACETS[idx] ?? LIFESTYLE_FACETS[0];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Five facets of a balanced, healthy lifestyle</span>
        <div className="flex flex-wrap gap-1.5">
          {LIFESTYLE_FACETS.map((f, i) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setIdx(i)}
              className={cn(
                "whitespace-nowrap rounded-md px-2.5 py-1 text-xs transition-colors",
                i === idx ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-[220px_1fr]">
        <svg viewBox="0 0 220 200" className="mx-auto block h-auto w-full max-w-[220px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <circle cx={110} cy={100} r={26} fill={roleColour.result} fillOpacity={0.18} stroke={roleColour.result} strokeWidth={1.6} />
          <text x={110} y={98} fontSize={9.5} fontWeight={700} textAnchor="middle" fill={roleColour.result}>Well-being</text>
          <text x={110} y={110} fontSize={8} textAnchor="middle" fill="var(--dg-text)">Balance</text>

          {LIFESTYLE_FACETS.map((f, i) => {
            const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / 5;
            const cx = 110 + Math.cos(angle) * 66;
            const cy = 100 + Math.sin(angle) * 66;
            const selected = i === idx;
            return (
              <g key={f.id}>
                <line x1={110 + Math.cos(angle) * 26} y1={100 + Math.sin(angle) * 26} x2={110 + Math.cos(angle) * 44} y2={100 + Math.sin(angle) * 44} stroke="var(--dg-line)" strokeWidth={1.2} />
                <circle
                  cx={cx}
                  cy={cy}
                  r={selected ? 24 : 20}
                  fill={selected ? roleColour.a : "var(--dg-bg)"}
                  fillOpacity={selected ? 0.22 : 1}
                  stroke={selected ? roleColour.a : "var(--dg-line)"}
                  strokeWidth={selected ? 2 : 1.2}
                />
                <text x={cx} y={cy + 3} fontSize={8} fontWeight={selected ? 700 : 500} textAnchor="middle" fill={selected ? roleColour.a : "var(--dg-text)"}>
                  {f.name}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="space-y-2.5 text-xs">
          <div className="font-semibold text-foreground">{active.name} well-being</div>
          <div className="rounded-md border border-border bg-background/60 p-3 leading-relaxed text-foreground">
            <span className="font-semibold">Positive choices: </span>
            {active.focus}
          </div>
          <div className="rounded-md border border-border bg-secondary/40 p-3 leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Risk factors to watch: </span>
            {active.risk}
          </div>
        </div>
      </div>
    </figure>
  );
}
