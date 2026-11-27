import { useState } from "react";
import katex from "katex";
import { roleColour } from "./toolkit";
import { cn } from "@/lib/utils";

function ChemTex({ tex }: { tex: string }) {
  return <span dangerouslySetInnerHTML={{ __html: katex.renderToString(tex, { throwOnError: false, strict: false }) }} />;
}

const MOLECULES = {
  co2: {
    label: "CO₂ (Linear)",
    shape: "Linear (180°)",
    bonds: "Polar covalent (ΔEN = 1,0)",
    polarity: "NON-POLAR molecule",
    note: "Symmetrical linear geometry causes the two equal C=O bond dipoles pulling opposite ways to cancel out completely.",
  },
  bf3: {
    label: "BF₃ (Trigonal planar)",
    shape: "Trigonal planar (120°)",
    bonds: "Polar covalent (ΔEN = 2,0)",
    polarity: "NON-POLAR molecule",
    note: "Three identical B−F dipoles spaced symmetrically at 120° pull evenly in all directions and cancel to zero net dipole.",
  },
  ch4: {
    label: "CH₄ (Tetrahedral)",
    shape: "Tetrahedral (109,5°)",
    bonds: "Polar covalent (ΔEN = 0,4)",
    polarity: "NON-POLAR molecule",
    note: "Four identical C−H bonds arranged symmetrically around carbon cancel out completely.",
  },
  nh3: {
    label: "NH₃ (Trigonal pyramidal)",
    shape: "Trigonal pyramidal (~107°)",
    bonds: "Polar covalent (ΔEN = 0,9)",
    polarity: "POLAR molecule",
    note: "One lone pair on nitrogen pushes the three N−H bonds down into an asymmetrical pyramid, creating a net dipole toward N.",
  },
  h2o: {
    label: "H₂O (Bent / Angular)",
    shape: "Bent / Angular (~104,5°)",
    bonds: "Polar covalent (ΔEN = 1,4)",
    polarity: "POLAR molecule",
    note: "Two lone pairs on oxygen squeeze the H−O−H angle to 104,5° (asymmetrical!), so the dipoles add toward oxygen.",
  },
} as const;

/**
 * Interactive VSEPR Molecular Shape & Polarity Explorer.
 */
export function VseprPolarityExplorer() {
  const [mol, setMol] = useState<keyof typeof MOLECULES>("h2o");
  const cur = MOLECULES[mol];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">VSEPR shape &amp; molecular polarity explorer</span>
        <div className="flex flex-wrap gap-1.5">
          {(Object.keys(MOLECULES) as (keyof typeof MOLECULES)[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setMol(k)}
              className={cn(
                "rounded-md px-2 py-1 text-xs transition-colors",
                mol === k ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {MOLECULES[k].label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[270px_1fr]">
        <svg viewBox="0 0 270 185" className="mx-auto block h-auto w-full max-w-[270px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          {mol === "co2" && (
            <>
              <line x1={62} y1={88} x2={208} y2={88} stroke="var(--dg-line)" strokeWidth={2.5} />
              <line x1={62} y1={96} x2={208} y2={96} stroke="var(--dg-line)" strokeWidth={2.5} />
              <circle cx={62} cy={92} r={17} fill={roleColour.b} fillOpacity={0.22} stroke={roleColour.b} strokeWidth={2} />
              <circle cx={135} cy={92} r={19} fill={roleColour.a} fillOpacity={0.22} stroke={roleColour.a} strokeWidth={2} />
              <circle cx={208} cy={92} r={17} fill={roleColour.b} fillOpacity={0.22} stroke={roleColour.b} strokeWidth={2} />
              <text x={62} y={96} fontSize={12} fontWeight={700} textAnchor="middle" fill={roleColour.b}>O</text>
              <text x={135} y={96} fontSize={12} fontWeight={700} textAnchor="middle" fill={roleColour.a}>C</text>
              <text x={208} y={96} fontSize={12} fontWeight={700} textAnchor="middle" fill={roleColour.b}>O</text>
              <text x={135} y={142} fontSize={11} fontWeight={600} textAnchor="middle" fill={roleColour.result}>180° (symmetrical)</text>
            </>
          )}

          {mol === "bf3" && (
            <>
              <line x1={135} y1={96} x2={135} y2={38} stroke="var(--dg-line)" strokeWidth={2.6} />
              <line x1={135} y1={96} x2={85} y2={125} stroke="var(--dg-line)" strokeWidth={2.6} />
              <line x1={135} y1={96} x2={185} y2={125} stroke="var(--dg-line)" strokeWidth={2.6} />
              <circle cx={135} cy={96} r={17} fill={roleColour.a} fillOpacity={0.22} stroke={roleColour.a} strokeWidth={2} />
              <circle cx={135} cy={38} r={14} fill={roleColour.b} fillOpacity={0.22} stroke={roleColour.b} strokeWidth={2} />
              <circle cx={85} cy={125} r={14} fill={roleColour.b} fillOpacity={0.22} stroke={roleColour.b} strokeWidth={2} />
              <circle cx={185} cy={125} r={14} fill={roleColour.b} fillOpacity={0.22} stroke={roleColour.b} strokeWidth={2} />
              <text x={135} y={100} fontSize={12} fontWeight={700} textAnchor="middle" fill={roleColour.a}>B</text>
              <text x={135} y={42} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.b}>F</text>
              <text x={85} y={129} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.b}>F</text>
              <text x={185} y={129} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.b}>F</text>
              <text x={135} y={162} fontSize={11} fontWeight={600} textAnchor="middle" fill={roleColour.result}>120° (no lone pairs)</text>
            </>
          )}

          {mol === "ch4" && (
            <>
              <line x1={135} y1={92} x2={135} y2={36} stroke="var(--dg-line)" strokeWidth={2.5} />
              <line x1={135} y1={92} x2={80} y2={124} stroke="var(--dg-line)" strokeWidth={2.5} />
              <line x1={135} y1={92} x2={190} y2={124} stroke="var(--dg-line)" strokeWidth={2.5} />
              <line x1={135} y1={92} x2={155} y2={140} stroke="var(--dg-line)" strokeDasharray="3 2" strokeWidth={2} />
              <circle cx={135} cy={92} r={17} fill={roleColour.a} fillOpacity={0.22} stroke={roleColour.a} strokeWidth={2} />
              {[
                [135, 36],
                [80, 124],
                [190, 124],
                [155, 140],
              ].map(([hx, hy], idx) => (
                <g key={idx}>
                  <circle cx={hx} cy={hy} r={12} fill={roleColour.b} fillOpacity={0.22} stroke={roleColour.b} strokeWidth={1.8} />
                  <text x={hx} y={hy + 4} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.b}>H</text>
                </g>
              ))}
              <text x={135} y={96} fontSize={12} fontWeight={700} textAnchor="middle" fill={roleColour.a}>C</text>
              <text x={135} y={170} fontSize={11} fontWeight={600} textAnchor="middle" fill={roleColour.result}>109,5° tetrahedral</text>
            </>
          )}

          {mol === "nh3" && (
            <>
              {/* Lone pair cloud on top */}
              <ellipse cx={135} cy={44} rx={18} ry={11} fill={roleColour.result} fillOpacity={0.18} stroke={roleColour.result} strokeDasharray="3 2" strokeWidth={1.4} />
              <circle cx={129} cy={44} r={2.3} fill={roleColour.result} />
              <circle cx={141} cy={44} r={2.3} fill={roleColour.result} />
              <text x={162} y={47} fontSize={9.5} fontWeight={600} fill={roleColour.result}>lone pair</text>

              <line x1={135} y1={86} x2={82} y2={128} stroke="var(--dg-line)" strokeWidth={2.5} />
              <line x1={135} y1={86} x2={135} y2={138} stroke="var(--dg-line)" strokeWidth={2.5} />
              <line x1={135} y1={86} x2={188} y2={128} stroke="var(--dg-line)" strokeWidth={2.5} />
              <circle cx={135} cy={86} r={17} fill={roleColour.a} fillOpacity={0.22} stroke={roleColour.a} strokeWidth={2} />
              {[
                [82, 128],
                [135, 138],
                [188, 128],
              ].map(([hx, hy], idx) => (
                <g key={idx}>
                  <circle cx={hx} cy={hy} r={12} fill={roleColour.b} fillOpacity={0.22} stroke={roleColour.b} strokeWidth={1.8} />
                  <text x={hx} y={hy + 4} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.b}>H</text>
                </g>
              ))}
              <text x={135} y={90} fontSize={12} fontWeight={700} textAnchor="middle" fill={roleColour.a}>N</text>
              <text x={135} y={170} fontSize={11} fontWeight={600} textAnchor="middle" fill={roleColour.result}>107° (asymmetrical)</text>
            </>
          )}

          {mol === "h2o" && (
            <>
              {/* Two lone pairs on top */}
              <ellipse cx={112} cy={46} rx={13} ry={9} fill={roleColour.result} fillOpacity={0.18} stroke={roleColour.result} strokeDasharray="3 2" strokeWidth={1.3} />
              <ellipse cx={158} cy={46} rx={13} ry={9} fill={roleColour.result} fillOpacity={0.18} stroke={roleColour.result} strokeDasharray="3 2" strokeWidth={1.3} />
              <circle cx={108} cy={46} r={2} fill={roleColour.result} />
              <circle cx={116} cy={46} r={2} fill={roleColour.result} />
              <circle cx={154} cy={46} r={2} fill={roleColour.result} />
              <circle cx={162} cy={46} r={2} fill={roleColour.result} />
              <text x={135} y={24} fontSize={9.5} fontWeight={600} textAnchor="middle" fill={roleColour.result}>2 lone pairs squeeze angle</text>

              <line x1={135} y1={86} x2={82} y2={126} stroke="var(--dg-line)" strokeWidth={2.6} />
              <line x1={135} y1={86} x2={188} y2={126} stroke="var(--dg-line)" strokeWidth={2.6} />
              <circle cx={135} cy={86} r={18} fill={roleColour.a} fillOpacity={0.22} stroke={roleColour.a} strokeWidth={2} />
              <circle cx={82} cy={126} r={12} fill={roleColour.b} fillOpacity={0.22} stroke={roleColour.b} strokeWidth={1.8} />
              <circle cx={188} cy={126} r={12} fill={roleColour.b} fillOpacity={0.22} stroke={roleColour.b} strokeWidth={1.8} />
              <text x={135} y={90} fontSize={12} fontWeight={700} textAnchor="middle" fill={roleColour.a}>O</text>
              <text x={82} y={130} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.b}>H</text>
              <text x={188} y={130} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.b}>H</text>
              <text x={135} y={162} fontSize={11} fontWeight={600} textAnchor="middle" fill={roleColour.result}>104,5° bent (net dipole)</text>
            </>
          )}
        </svg>

        <div className="space-y-2 text-xs">
          <div className="space-y-1 rounded bg-secondary/50 p-2.5">
            <div><span className="text-muted-foreground">Shape: </span><span className="font-semibold text-foreground">{cur.shape}</span></div>
            <div><span className="text-muted-foreground">Bonds: </span><span className="font-medium text-foreground">{cur.bonds}</span></div>
            <div><span className="text-muted-foreground">Overall: </span><span className="font-bold text-primary">{cur.polarity}</span></div>
          </div>
          <p className="text-muted-foreground">{cur.note}</p>
        </div>
      </div>
    </figure>
  );
}

/**
 * Interactive Intermolecular vs Intramolecular forces & boiling point chart.
 */
export function ImfBoilingPointVisual() {
  const [tab, setTab] = useState<"h2o" | "bp">("h2o");

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Interatomic bonds vs intermolecular forces (IMF)</span>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => setTab("h2o")}
            className={cn("rounded-md px-2.5 py-1 text-xs", tab === "h2o" ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground")}
          >
            What boiling actually breaks
          </button>
          <button
            type="button"
            onClick={() => setTab("bp")}
            className={cn("rounded-md px-2.5 py-1 text-xs", tab === "bp" ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground")}
          >
            Boiling points compared
          </button>
        </div>
      </div>

      <div className="p-4">
        {tab === "h2o" ? (
          <svg viewBox="0 0 380 155" className="mx-auto block h-auto w-full max-w-[380px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
            {/* Molecule 1 */}
            <line x1={76} y1={72} x2={52} y2={98} stroke={roleColour.a} strokeWidth={3} />
            <line x1={76} y1={72} x2={114} y2={72} stroke={roleColour.a} strokeWidth={3} />
            <circle cx={76} cy={72} r={14} fill={roleColour.a} fillOpacity={0.22} stroke={roleColour.a} strokeWidth={2} />
            <circle cx={52} cy={98} r={9} fill={roleColour.b} fillOpacity={0.22} stroke={roleColour.b} strokeWidth={1.8} />
            <circle cx={114} cy={72} r={9} fill={roleColour.b} fillOpacity={0.22} stroke={roleColour.b} strokeWidth={1.8} />
            <text x={76} y={76} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.a}>O</text>
            <text x={52} y={102} fontSize={9.5} fontWeight={700} textAnchor="middle" fill={roleColour.b}>H</text>
            <text x={114} y={76} fontSize={9.5} fontWeight={700} textAnchor="middle" fill={roleColour.b}>H</text>

            {/* Hydrogen bond (INTERmolecular dashed) */}
            <line x1={124} y1={72} x2={220} y2={72} stroke={roleColour.result} strokeWidth={2.5} strokeDasharray="5 4" />
            <text x={172} y={56} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.result}>Hydrogen bond (IMF)</text>
            <text x={172} y={92} fontSize={9.5} textAnchor="middle" fill={roleColour.result}>Broken when boiling!</text>

            {/* Molecule 2 */}
            <line x1={236} y1={72} x2={272} y2={58} stroke={roleColour.a} strokeWidth={3} />
            <line x1={236} y1={72} x2={266} y2={98} stroke={roleColour.a} strokeWidth={3} />
            <circle cx={236} cy={72} r={14} fill={roleColour.a} fillOpacity={0.22} stroke={roleColour.a} strokeWidth={2} />
            <circle cx={272} cy={58} r={9} fill={roleColour.b} fillOpacity={0.22} stroke={roleColour.b} strokeWidth={1.8} />
            <circle cx={266} cy={98} r={9} fill={roleColour.b} fillOpacity={0.22} stroke={roleColour.b} strokeWidth={1.8} />
            <text x={236} y={76} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.a}>O</text>
            <text x={272} y={62} fontSize={9.5} fontWeight={700} textAnchor="middle" fill={roleColour.b}>H</text>
            <text x={266} y={102} fontSize={9.5} fontWeight={700} textAnchor="middle" fill={roleColour.b}>H</text>

            <text x={78} y={134} fontSize={10} fontWeight={600} textAnchor="middle" fill={roleColour.a}>Covalent bond (stays intact!)</text>
          </svg>
        ) : (
          <svg viewBox="0 0 380 155" className="mx-auto block h-auto w-full max-w-[380px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
            {/* Simple horizontal comparison bars from -170 to +110 deg C */}
            {[
              { name: "CH₄ (London)", bp: -162, c: roleColour.a },
              { name: "HCl (Dipole-dipole)", bp: -85, c: roleColour.b },
              { name: "H₂O (H-bonding)", bp: 100, c: roleColour.result },
            ].map((row, idx) => {
              const y = 30 + idx * 42;
              const barW = Math.round(((row.bp + 180) / 300) * 195);
              return (
                <g key={row.name}>
                  <text x={12} y={y + 12} fontSize={10.5} fontWeight={600} fill="var(--dg-text)">{row.name}</text>
                  <rect x={148} y={y} width={barW} height={18} rx={3} fill={row.c} fillOpacity={0.28} stroke={row.c} strokeWidth={1.6} />
                  <text x={154 + barW} y={y + 13} fontSize={10.5} fontWeight={700} fill={row.c}>{row.bp} °C</text>
                </g>
              );
            })}
          </svg>
        )}
        <p className="mt-2 text-center text-xs text-muted-foreground">
          {tab === "h2o"
            ? "Boiling liquid water separates H₂O molecules from each other by overcoming hydrogen bonds—the covalent O−H bonds inside each molecule NEVER break."
            : "Stronger intermolecular forces require far more energy to overcome, sharply raising the boiling point."}
        </p>
      </div>
    </figure>
  );
}

/**
 * Interactive Gas Laws explorer: Boyle's Law, Charles's Law (Kelvin & -273 C intercept), Gay-Lussac's Law.
 */
export function GasLawsExplorer() {
  const [law, setLaw] = useState<"boyle" | "charles" | "gay">("boyle");

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Ideal gas laws &amp; exam graphs</span>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["boyle", "Boyle (p vs V)"],
              ["charles", "Charles (V vs T)"],
              ["gay", "Gay-Lussac (p vs T)"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setLaw(id)}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs transition-colors",
                law === id ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[270px_1fr]">
        <svg viewBox="0 0 270 175" className="mx-auto block h-auto w-full max-w-[270px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <line x1={42} y1={142} x2={245} y2={142} stroke="var(--dg-line)" strokeWidth={1.3} />
          <line x1={42} y1={18} x2={42} y2={142} stroke="var(--dg-line)" strokeWidth={1.3} />

          {law === "boyle" && (
            <>
              <text x={32} y={24} fontSize={11} fontWeight={700} textAnchor="end" fill="var(--dg-text)">p</text>
              <text x={242} y={156} fontSize={11} fontWeight={700} textAnchor="end" fill="var(--dg-text)">V</text>
              <path d="M 56,28 Q 76,108 230,130" fill="none" stroke={roleColour.result} strokeWidth={2.5} />
              <text x={150} y={76} fontSize={10.5} fontWeight={600} fill={roleColour.result}>pV = constant (T fixed)</text>
            </>
          )}

          {law === "charles" && (
            <>
              {/* V vs t(C) extrapolated to -273 C */}
              <line x1={124} y1={18} x2={124} y2={142} stroke="var(--dg-line)" strokeDasharray="3 3" strokeWidth={1.1} />
              <line x1={46} y1={142} x2={124} y2={95} stroke={roleColour.a} strokeDasharray="4 3" strokeWidth={2} />
              <line x1={124} y1={95} x2={232} y2={30} stroke={roleColour.result} strokeWidth={2.5} />
              <circle cx={46} cy={142} r={3.8} fill={roleColour.a} />
              <text x={48} y={158} fontSize={10} fontWeight={700} fill={roleColour.a}>−273 °C (0 K)</text>
              <text x={128} y={158} fontSize={10} fill="var(--dg-line)">0 °C</text>
              <text x={242} y={156} fontSize={10.5} fontWeight={700} textAnchor="end" fill="var(--dg-text)">t (°C)</text>
              <text x={32} y={24} fontSize={11} fontWeight={700} textAnchor="end" fill="var(--dg-text)">V</text>
            </>
          )}

          {law === "gay" && (
            <>
              <line x1={42} y1={142} x2={228} y2={30} stroke={roleColour.result} strokeWidth={2.5} />
              <circle cx={42} cy={142} r={3.8} fill={roleColour.result} />
              <text x={32} y={24} fontSize={11} fontWeight={700} textAnchor="end" fill="var(--dg-text)">p</text>
              <text x={242} y={156} fontSize={10.5} fontWeight={700} textAnchor="end" fill="var(--dg-text)">T (K)</text>
              <text x={52} y={158} fontSize={10} fill="var(--dg-line)">0 K</text>
              <text x={148} y={102} fontSize={10.5} fontWeight={600} fill={roleColour.result}>p ∝ T (Kelvin!)</text>
            </>
          )}
        </svg>

        <div className="space-y-2 text-xs text-muted-foreground">
          {law === "boyle" && (
            <>
              <p className="font-medium text-foreground">Boyle&apos;s Law (constant T and n)</p>
              <div className="overflow-x-auto"><ChemTex tex="p_1 V_1 = p_2 V_2 \qquad \left(p \propto \frac{1}{V}\right)" /></div>
              <p>Halving container volume doubles collision frequency with the walls, doubling pressure.</p>
            </>
          )}
          {law === "charles" && (
            <>
              <p className="font-medium text-foreground">Charles&apos;s Law (constant p and n)</p>
              <div className="overflow-x-auto"><ChemTex tex="\frac{V_1}{T_1} = \frac{V_2}{T_2} \qquad (T\text{ MUST be in Kelvin})" /></div>
              <p>Extrapolating <ChemTex tex="V" /> vs <ChemTex tex="t(^\circ\text{C})" /> back to zero volume hits <ChemTex tex="-273^\circ\text{C}" /> (absolute zero, <ChemTex tex="0\text{ K}" />).</p>
            </>
          )}
          {law === "gay" && (
            <>
              <p className="font-medium text-foreground">Gay-Lussac&apos;s Law (constant V and n)</p>
              <div className="overflow-x-auto"><ChemTex tex="\frac{p_1}{T_1} = \frac{p_2}{T_2} \qquad (T\text{ in Kelvin})" /></div>
              <p>Heating a rigid aerosol can raises average kinetic energy of particles, hitting the walls harder and more often.</p>
            </>
          )}
        </div>
      </div>
    </figure>
  );
}

/**
 * Stoichiometry Mole-Bridge Roadmap visual.
 */
export function StoichRoadmapVisual() {
  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card p-4">
      <p className="mb-2 text-xs font-medium text-foreground">Stoichiometry roadmap: always convert to MOLES first</p>
      <svg viewBox="0 0 430 165" className="mx-auto block h-auto w-full max-w-[430px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
        {/* Left column boxes (Reactant A -> moles A) */}
        <rect x={16} y={20} width={96} height={32} rx={5} fill={roleColour.a} fillOpacity={0.14} stroke={roleColour.a} strokeWidth={1.6} />
        <text x={64} y={40} fontSize={10.5} fontWeight={600} textAnchor="middle" fill={roleColour.a}>Mass m (g)</text>

        <rect x={16} y={66} width={96} height={32} rx={5} fill={roleColour.a} fillOpacity={0.14} stroke={roleColour.a} strokeWidth={1.6} />
        <text x={64} y={86} fontSize={10.5} fontWeight={600} textAnchor="middle" fill={roleColour.a}>Gas V (dm³)</text>

        <rect x={16} y={112} width={96} height={32} rx={5} fill={roleColour.a} fillOpacity={0.14} stroke={roleColour.a} strokeWidth={1.6} />
        <text x={64} y={132} fontSize={10.5} fontWeight={600} textAnchor="middle" fill={roleColour.a}>Solution c, V</text>

        {/* Center bridge: n(A) <-> n(B) */}
        <rect x={144} y={56} width={142} height={52} rx={7} fill={roleColour.result} fillOpacity={0.18} stroke={roleColour.result} strokeWidth={2} />
        <text x={215} y={78} fontSize={11.5} fontWeight={700} textAnchor="middle" fill={roleColour.result}>MOLE RATIO BRIDGE</text>
        <text x={215} y={96} fontSize={10} fontWeight={600} textAnchor="middle" fill="var(--dg-text)">n(A) → balanced eq → n(B)</text>

        {/* Connectors */}
        <line x1={112} y1={36} x2={144} y2={72} stroke="var(--dg-line)" strokeWidth={1.4} />
        <line x1={112} y1={82} x2={144} y2={82} stroke="var(--dg-line)" strokeWidth={1.4} />
        <line x1={112} y1={128} x2={144} y2={92} stroke="var(--dg-line)" strokeWidth={1.4} />

        {/* Right column boxes (Target B) */}
        <rect x={318} y={20} width={96} height={32} rx={5} fill={roleColour.b} fillOpacity={0.14} stroke={roleColour.b} strokeWidth={1.6} />
        <text x={366} y={40} fontSize={10.5} fontWeight={600} textAnchor="middle" fill={roleColour.b}>m = n·M (g)</text>

        <rect x={318} y={66} width={96} height={32} rx={5} fill={roleColour.b} fillOpacity={0.14} stroke={roleColour.b} strokeWidth={1.6} />
        <text x={366} y={86} fontSize={10.5} fontWeight={600} textAnchor="middle" fill={roleColour.b}>V = n·22,4 dm³</text>

        <rect x={318} y={112} width={96} height={32} rx={5} fill={roleColour.b} fillOpacity={0.14} stroke={roleColour.b} strokeWidth={1.6} />
        <text x={366} y={132} fontSize={10.5} fontWeight={600} textAnchor="middle" fill={roleColour.b}>c = n / V</text>

        <line x1={286} y1={72} x2={318} y2={36} stroke="var(--dg-line)" strokeWidth={1.4} />
        <line x1={286} y1={82} x2={318} y2={82} stroke="var(--dg-line)" strokeWidth={1.4} />
        <line x1={286} y1={92} x2={318} y2={128} stroke="var(--dg-line)" strokeWidth={1.4} />
      </svg>
    </figure>
  );
}

/**
 * Interactive Energy Profile explorer (Exothermic vs Endothermic + Catalyst toggle).
 */
export function EnthalpyProfileExplorer() {
  const [type, setType] = useState<"exo" | "endo">("exo");
  const [cat, setCat] = useState(false);

  const rY = type === "exo" ? 74 : 132;
  const pY = type === "exo" ? 132 : 66;
  const peakY = cat ? 46 : 24;

  const curve = `M 54,${rY} C 102,${rY} 118,${peakY} 168,${peakY} C 218,${peakY} 232,${pY} 288,${pY}`;
  const uncatCurve = `M 54,${rY} C 102,${rY} 118,24 168,24 C 218,24 232,${pY} 288,${pY}`;

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Energy profile &amp; catalyst effect</span>
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setType("exo")}
            className={cn("rounded-md px-2.5 py-1 text-xs", type === "exo" ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground")}
          >
            Exothermic (ΔH &lt; 0)
          </button>
          <button
            type="button"
            onClick={() => setType("endo")}
            className={cn("rounded-md px-2.5 py-1 text-xs", type === "endo" ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground")}
          >
            Endothermic (ΔH &gt; 0)
          </button>
          <button
            type="button"
            onClick={() => setCat((v) => !v)}
            className={cn("rounded-md border px-2.5 py-1 text-xs", cat ? "border-primary bg-primary/10 font-medium text-primary" : "border-border text-muted-foreground")}
          >
            {cat ? "Catalyst: ON" : "Add catalyst"}
          </button>
        </div>
      </div>

      <div className="p-4">
        <svg viewBox="0 0 360 175" className="mx-auto block h-auto w-full max-w-[360px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <line x1={38} y1={154} x2={342} y2={154} stroke="var(--dg-line)" strokeWidth={1.3} />
          <line x1={38} y1={14} x2={38} y2={154} stroke="var(--dg-line)" strokeWidth={1.3} />
          <text x={18} y={84} fontSize={10} textAnchor="middle" transform="rotate(-90 18 84)" fill="var(--dg-line)">Potential energy</text>
          <text x={338} y={168} fontSize={10} textAnchor="end" fill="var(--dg-line)">Course of reaction</text>

          {/* Dashed reference lines */}
          <line x1={54} y1={rY} x2={220} y2={rY} stroke="var(--dg-line)" strokeDasharray="3 3" strokeOpacity={0.45} strokeWidth={1.1} />
          <line x1={180} y1={pY} x2={288} y2={pY} stroke="var(--dg-line)" strokeDasharray="3 3" strokeOpacity={0.45} strokeWidth={1.1} />

          {cat && <path d={uncatCurve} fill="none" stroke="var(--dg-line)" strokeOpacity={0.35} strokeDasharray="4 4" strokeWidth={1.8} />}
          <path d={curve} fill="none" stroke={roleColour.a} strokeWidth={2.6} />

          {/* Ea arrow */}
          <line x1={168} y1={rY} x2={168} y2={peakY} stroke={roleColour.b} strokeWidth={2} />
          <text x={174} y={(rY + peakY) / 2 + 4} fontSize={10.5} fontWeight={700} fill={roleColour.b}>Ea</text>

          {/* Delta H arrow */}
          <line x1={222} y1={rY} x2={222} y2={pY} stroke={roleColour.result} strokeWidth={2.2} />
          <text x={228} y={(rY + pY) / 2 + 4} fontSize={10.5} fontWeight={700} fill={roleColour.result}>ΔH</text>

          <text x={72} y={rY - 8} fontSize={10} fontWeight={600} fill="var(--dg-text)">Reactants</text>
          <text x={274} y={pY - 8} fontSize={10} fontWeight={600} textAnchor="middle" fill="var(--dg-text)">Products</text>
        </svg>

        <p className="mt-2 text-center text-xs text-muted-foreground">
          {cat
            ? "A catalyst provides an alternative pathway with LOWER activation energy (Ea)—notice reactants, products, and ΔH stay completely unchanged!"
            : type === "exo"
              ? "Exothermic: products sit at lower potential energy than reactants, releasing net heat to the surroundings (ΔH < 0)."
              : "Endothermic: products sit higher in energy than reactants, absorbing net energy from the surroundings (ΔH > 0)."}
        </p>
      </div>
    </figure>
  );
}

/**
 * Interactive Acid-Base Proton Transfer vs Redox Electron Transfer visual.
 */
export function AcidBaseRedoxVisual() {
  const [mode, setMode] = useState<"ab" | "redox">("ab");

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">What gets transferred? Protons (H⁺) vs Electrons (e⁻)</span>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => setMode("ab")}
            className={cn("rounded-md px-2.5 py-1 text-xs", mode === "ab" ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground")}
          >
            Acid–Base (H⁺ transfer)
          </button>
          <button
            type="button"
            onClick={() => setMode("redox")}
            className={cn("rounded-md px-2.5 py-1 text-xs", mode === "redox" ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground")}
          >
            Redox (e⁻ transfer)
          </button>
        </div>
      </div>

      <div className="p-4">
        <svg viewBox="0 0 390 140" className="mx-auto block h-auto w-full max-w-[390px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <defs>
            <marker id="ab-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill={roleColour.result} />
            </marker>
          </defs>

          {mode === "ab" ? (
            <>
              <text x={195} y={76} fontSize={14} fontWeight={700} textAnchor="middle" fill="var(--dg-text)">
                HCl  +  NH₃  →  Cl⁻  +  NH₄⁺
              </text>
              {/* Proton arc from HCl to NH3 */}
              <path d="M 100,56 Q 134,26 164,56" fill="none" stroke={roleColour.result} strokeWidth={2.2} markerEnd="url(#ab-arr)" />
              <text x={132} y={32} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.result}>H⁺ donated</text>
              <text x={100} y={102} fontSize={10} fontWeight={600} textAnchor="middle" fill={roleColour.a}>Acid 1</text>
              <text x={165} y={102} fontSize={10} fontWeight={600} textAnchor="middle" fill={roleColour.b}>Base 2</text>
              <text x={238} y={102} fontSize={10} fontWeight={600} textAnchor="middle" fill={roleColour.a}>Conj Base 1</text>
              <text x={300} y={102} fontSize={10} fontWeight={600} textAnchor="middle" fill={roleColour.b}>Conj Acid 2</text>
            </>
          ) : (
            <>
              <text x={195} y={76} fontSize={14} fontWeight={700} textAnchor="middle" fill="var(--dg-text)">
                Zn(s)  +  Cu²⁺(aq)  →  Zn²⁺(aq)  +  Cu(s)
              </text>
              <path d="M 96,56 Q 132,26 164,56" fill="none" stroke={roleColour.result} strokeWidth={2.2} markerEnd="url(#ab-arr)" />
              <text x={130} y={32} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.result}>2e⁻ transferred</text>
              <text x={94} y={102} fontSize={10} fontWeight={600} textAnchor="middle" fill={roleColour.a}>Oxidised (0 → +2)</text>
              <text x={94} y={118} fontSize={9.5} textAnchor="middle" fill={roleColour.a}>Reducing agent</text>
              <text x={174} y={102} fontSize={10} fontWeight={600} textAnchor="middle" fill={roleColour.b}>Reduced (+2 → 0)</text>
              <text x={174} y={118} fontSize={9.5} textAnchor="middle" fill={roleColour.b}>Oxidising agent</text>
            </>
          )}
        </svg>

        <div className="mt-2 text-center text-xs text-muted-foreground">
          {mode === "ab" ? (
            <ChemTex tex="\text{Brønsted-Lowry: Acid donates } \text{H}^+; \text{ Base accepts } \text{H}^+." />
          ) : (
            <ChemTex tex="\text{OIL RIG: Oxidation Is Loss of } e^-; \text{ Reduction Is Gain of } e^-." />
          )}
        </div>
      </div>
    </figure>
  );
}
