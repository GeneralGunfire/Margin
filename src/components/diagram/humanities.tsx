import { useState } from "react";
import { roleColour } from "./toolkit";
import { cn } from "@/lib/utils";

/* ============================================================================
 * 1. History — Source Analysis & Essay Argument Explorer
 * ========================================================================== */

const SOURCE_CRITERIA = [
  {
    id: "useful",
    label: "Usefulness",
    question: "How does this source help a historian answer the key question?",
    checks: [
      "What specific evidence (facts, statistics, viewpoint) does it give on the topic?",
      "Who created it and when (contemporary eyewitness vs later historian)?",
      "Even biased propaganda is USEFUL for showing what the regime wanted people to believe!",
    ],
    sample:
      "A 1933 Nazi election poster is BIASED against opposition parties, yet STILL USEFUL to historians as direct evidence of Nazi propaganda messaging.",
  },
  {
    id: "reliable",
    label: "Reliability & Bias",
    question: "Can we trust the accuracy of what the source claims?",
    checks: [
      "Origin & Author: Does the writer have first-hand access, or political/personal motive to exaggerate?",
      "Purpose & Audience: Was it a private diary, secret telegram, state newspaper, or election speech?",
      "Corroboration: Does independent statistical or opposing evidence back it up?",
    ],
    sample:
      "Stalin's official 1933 collective-farm harvest poster is UNRELIABLE on actual grain output because it hid mass famine to celebrate Five-Year Plan targets.",
  },
  {
    id: "compare",
    label: "Comparing Sources",
    question: "How do Source A and Source B support or contradict each other?",
    checks: [
      "Support: Quote BOTH sources explicitly ('Source A states X, which is supported by Source B showing Y').",
      "Contradict: State the clash clearly ('Whereas Source A claims peaceful reform, Source B depicts violent repression').",
      "Never summarise Source A and Source B in two separate paragraphs without linking them!",
    ],
    sample:
      "Source 1A (Israeli Declaration, May 1948) celebrates national rebirth, whereas Source 1B (Palestinian oral testimony) describes displacement (An-Nakba) — showing contrasting perspectives of 1948.",
  },
  {
    id: "peel",
    label: "50-Mark Essay & Stance",
    question: "How do markers award the 50-mark Essay Matrix?",
    checks: [
      "Introduction: Take an explicit STANCE ('To a large extent...' / 'To a lesser extent...') + preview main line of argument.",
      "Body Paragraphs (PEEL): Point -> Historical Evidence (dates, laws, leaders) -> Explain link back to stance.",
      "Conclusion: Tie back to introduction cleanly with ZERO brand-new historical facts.",
    ],
    sample:
      "Prompt: 'To what extent was the New Deal a success?' -> Weak: listing agencies. Strong: arguing it rescued banking and relief (success) yet failed to end unemployment before WWII (limitation).",
  },
] as const;

export function HistorySourceAnalysisLab() {
  const [idx, setIdx] = useState(0);
  const active = SOURCE_CRITERIA[idx] ?? SOURCE_CRITERIA[0];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Historical source evaluation &amp; essay lab</span>
        <div className="flex flex-wrap gap-1.5">
          {SOURCE_CRITERIA.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIdx(i)}
              className={cn(
                "whitespace-nowrap rounded-md px-2.5 py-1 text-xs transition-colors",
                i === idx ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-[260px_1fr]">
        <svg viewBox="0 0 260 190" className="mx-auto block h-auto w-full max-w-[260px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          <rect x={16} y={14} width={228} height={42} rx={5} fill={roleColour.a} fillOpacity={0.14} stroke={roleColour.a} strokeWidth={1.5} />
          <text x={130} y={32} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.a}>1. ORIGIN &amp; CONTEXT</text>
          <text x={130} y={46} fontSize={8.5} textAnchor="middle" fill="var(--dg-text)">Who · When · Purpose · Audience</text>

          <line x1={130} y1={56} x2={130} y2={72} stroke="var(--dg-line)" strokeWidth={1.3} />
          <rect x={16} y={72} width={228} height={46} rx={5} fill={roleColour.b} fillOpacity={0.14} stroke={roleColour.b} strokeWidth={1.5} />
          <text x={130} y={91} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.b}>2. CORROBORATE / BIAS</text>
          <text x={130} y={106} fontSize={8.5} textAnchor="middle" fill="var(--dg-text)">Compare with other sources &amp; facts</text>

          <line x1={130} y1={118} x2={130} y2={134} stroke="var(--dg-line)" strokeWidth={1.3} />
          <rect x={16} y={134} width={228} height={42} rx={5} fill={roleColour.result} fillOpacity={0.14} stroke={roleColour.result} strokeWidth={1.5} />
          <text x={130} y={152} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.result}>3. VERDICT + REASON</text>
          <text x={130} y={166} fontSize={8.5} textAnchor="middle" fill="var(--dg-text)">State stance + specific evidence</text>
        </svg>

        <div className="space-y-3 text-sm">
          <div>
            <p className="font-semibold text-foreground">{active.label}: {active.question}</p>
          </div>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            {active.checks.map((c, i) => (
              <li key={i} className="leading-relaxed">
                <span className="font-semibold text-foreground">{i + 1}.</span> {c}
              </li>
            ))}
          </ul>
          <div className="rounded-md border border-border bg-secondary/40 p-3 text-xs leading-relaxed text-foreground">
            <span className="font-semibold">Model insight: </span>
            {active.sample}
          </div>
        </div>
      </div>
    </figure>
  );
}

/* ============================================================================
 * 2. History — Verified Grade 11 Timeline & Cause-Effect Explorer
 * ========================================================================== */

const HISTORY_TRACKS = {
  russia: {
    label: "Russia (1905–1941)",
    note: "Note dual calendar until Feb 1918: Old Style (Julian, O.S.) was 13 days behind New Style (Gregorian, N.S.).",
    events: [
      { year: "22 Jan 1905 N.S.", title: "Bloody Sunday (9 Jan O.S.)", detail: "Peaceful petition march led by Father Gapon shot at Winter Palace; sparked strikes, soviets, and October Manifesto (30 Oct N.S.)." },
      { year: "8–15 Mar 1917 N.S.", title: "February Revolution (23 Feb–2 Mar O.S.)", detail: "International Women's Day strikes in Petrograd grew into mass mutiny; Provisional Government formed; Nicholas II abdicated 15 Mar N.S." },
      { year: "7–8 Nov 1917 N.S.", title: "October Revolution (25–26 Oct O.S.)", detail: "Planned Bolshevik seizure led by Lenin and Trotsky's Military-Revolutionary Committee; Winter Palace taken; Brest-Litovsk signed 3 Mar 1918." },
      { year: "Mar 1921", title: "Kronstadt & New Economic Policy (NEP)", detail: "War Communism caused famine and Kronstadt mutiny; Lenin introduced NEP (grain tax + small private trade). USSR formed 30 Dec 1922." },
      { year: "1928–1938", title: "Stalin: Plans, Collectivisation & Terror", detail: "First Five-Year Plan (1928), collectivisation (1929–30) and famine (1932–33), Kirov murder (1934), Show Trials (1936–38), Operation Barbarossa (22 Jun 1941)." },
    ],
  },
  usa: {
    label: "USA (1919–1941)",
    note: "Boom-bust cycle: 1920s credit/speculation boom -> 1929 Crash -> New Deal (3 Rs) -> WWII rearmament.",
    events: [
      { year: "1920–1929", title: "Roaring Twenties & Hidden Faultlines", detail: "Laissez-faire policies, Model T mass production, hire-purchase credit, margin buying (10% down), alongside farm overproduction and unequal wealth." },
      { year: "24 & 29 Oct 1929", title: "Wall Street Crash", detail: "Black Thursday (12.9 million shares) and Black Tuesday (~16 million shares) triggered bank failures, unemployment, and Hoovervilles." },
      { year: "Mar 1933", title: "FDR & First 100 Days (First New Deal)", detail: "Emergency Banking Act (9 Mar 1933), bank holiday, Relief/Recovery/Reform agencies (FERA, CCC, AAA, NRA) and Fireside Chats." },
      { year: "1935–1938", title: "Second New Deal & 1937 Recession", detail: "WPA jobs, Social Security Act (1935), Wagner Act (unions), Supreme Court striking down NRA/AAA, and 1937–38 recession after spending cuts." },
      { year: "1938–Dec 1941", title: "WWII Ends the Depression", detail: "Rearmament from 1938–39 and US entry after Pearl Harbor (7 Dec 1941) absorbed unemployment; globally, SA left the gold standard in Dec 1932." },
    ],
  },
  nationalisms: {
    label: "Nationalisms (1910–1994)",
    note: "Compare inclusive civic nationalism with exclusive ethnic nationalism across case studies.",
    events: [
      { year: "1910–1913", title: "Union (1910), SANNC (1912) & Land Act (1913)", detail: "Union excluded Black majority; SANNC founded 8 Jan 1912 in Bloemfontein (renamed ANC 1923); Natives Land Act (1913) restricted Black land ownership." },
      { year: "1918–1938", title: "Rise of Afrikaner Nationalism", detail: "Broederbond (5 Jun 1918), Afrikaans official (1925), Carnegie Poor White study (1932), Malan's Purified NP (1934), Eeufees trek (16 Dec 1938)." },
      { year: "1943–1948", title: "WWII Turning Points & Middle East 1948", detail: "Xuma's African Claims (1943), ANC Youth League (1944), Balfour Declaration legacy (1917), Israel declared 14 May 1948 & Palestinian An-Nakba." },
      { year: "1949–1957", title: "Ghana Independence & Pan-Africanism", detail: "Nkrumah formed CPP (Jun 1949), Positive Action (Jan 1950), Ghana became first sub-Saharan British colony to win independence (6 Mar 1957)." },
      { year: "1990–1996", title: "Inclusive Nation-Building in SA", detail: "Mandela released 11 Feb 1990, democratic elections 27 Apr 1994, TRC (1995), Constitution Act 108 of 1996." },
    ],
  },
  apartheid: {
    label: "Apartheid (1948–1964)",
    note: "From legalising racial separation (1949–53) to non-violent defiance (1950s) and armed struggle after 1960.",
    events: [
      { year: "May 1948", title: "NP Election Victory & Foundations", detail: "Malan's HNP–Afrikaner Party won 5-seat majority; Mixed Marriages (1949), Population Registration, Group Areas, Immorality & Suppression of Communism Acts (1950)." },
      { year: "1952–1956", title: "Defiance, Freedom Charter & Women's March", detail: "Defiance Campaign (26 Jun 1952), Bantu Education & Separate Amenities (1953), Freedom Charter (Kliptown, 25–26 Jun 1955), Women's March (9 Aug 1956)." },
      { year: "1956–1961", title: "Treason Trial & PAC Breakaway", detail: "156 leaders arrested Dec 1956 (all acquitted 29 Mar 1961); Sobukwe led PAC formation (Apr 1959) over Africanist vs Congress Alliance debate." },
      { year: "21 Mar 1960", title: "Sharpeville Massacre & Banning", detail: "69 killed at PAC anti-pass protest; State of Emergency (30 Mar); ANC & PAC banned (Apr 1960); SA became Republic outside Commonwealth (31 May 1961)." },
      { year: "1961–1964", title: "MK, Liliesleaf Raid & Rivonia Trial", detail: "Umkhonto we Sizwe sabotage launched 16 Dec 1961; Liliesleaf arrests 11 Jul 1963; Rivonia Trial (9 Oct 1963–12 Jun 1964) gave 8 life sentences for sabotage." },
    ],
  },
} as const;

type TrackKey = keyof typeof HISTORY_TRACKS;

export function HistoryTimelineExplorer() {
  const [track, setTrack] = useState<TrackKey>("russia");
  const [eventIdx, setEventIdx] = useState(0);
  const current = HISTORY_TRACKS[track];
  const active = current.events[eventIdx] ?? current.events[0];

  const selectTrack = (k: TrackKey) => {
    setTrack(k);
    setEventIdx(0);
  };

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Verified chronology explorer</span>
        <div className="flex flex-wrap gap-1.5">
          {(Object.keys(HISTORY_TRACKS) as TrackKey[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => selectTrack(k)}
              className={cn(
                "whitespace-nowrap rounded-md px-2.5 py-1 text-xs transition-colors",
                k === track ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {HISTORY_TRACKS[k].label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 p-4">
        <p className="text-xs text-muted-foreground">{current.note}</p>

        <div className="grid gap-1.5 sm:grid-cols-5">
          {current.events.map((ev, i) => (
            <button
              key={ev.year}
              type="button"
              onClick={() => setEventIdx(i)}
              className={cn(
                "rounded-md border px-2.5 py-2 text-left text-xs transition-colors",
                i === eventIdx ? "border-primary bg-primary/10 text-foreground" : "border-border bg-background/60 text-muted-foreground hover:text-foreground",
              )}
            >
              <div className="font-mono text-[11px] font-semibold tabular-nums text-primary">{ev.year}</div>
              <div className="mt-0.5 line-clamp-2 font-medium leading-snug">{ev.title}</div>
            </button>
          ))}
        </div>

        <div className="rounded-md border border-border bg-secondary/40 p-3.5 text-sm">
          <div className="font-mono text-xs font-semibold tabular-nums text-primary">{active.year}</div>
          <div className="mt-0.5 font-semibold text-foreground">{active.title}</div>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{active.detail}</p>
        </div>
      </div>
    </figure>
  );
}

/* ============================================================================
 * 3. Religion Studies — Five Religion–State Relationship Models
 * ========================================================================== */

const STATE_MODELS = [
  {
    id: "none",
    name: "No Differentiation",
    freedom: "Traditional integration",
    summary: "Religion and community governance are inseparable; leaders hold sacred and civic authority together.",
    example: "Traditional pre-colonial kingdoms and societies where ancestral, seasonal, and legal customs formed one unified worldview.",
  },
  {
    id: "theocracy",
    name: "Theocracy",
    freedom: "Restricted to state doctrine",
    summary: "Religious clergy or sacred law governs the state directly; civil law is subordinate to religious authority.",
    example: "Historical Papal States or modern systems where clerical councils hold supreme constitutional veto over parliament.",
  },
  {
    id: "state-religion",
    name: "State Religion",
    freedom: "Privileged official faith",
    summary: "One religion receives official constitutional status and funding, while minority religions may still exist with varying tolerance.",
    example: "Countries with an established national church (e.g. Church of England historically) alongside legal toleration of other faiths.",
  },
  {
    id: "secularism",
    name: "Secularism (Separation)",
    freedom: "Neutral non-establishment",
    summary: "Strict separation of religion and state — NOT hostility or atheism! The state favours no religion and protects equal conscience.",
    example: "Strict separation models banning religious funding or symbols in state institutions while protecting private belief.",
  },
  {
    id: "cooperative",
    name: "Co-operative Model",
    freedom: "Pluralist partnership",
    summary: "State has NO official religion, treats all religions equally, and actively partners with religious communities on education and welfare.",
    example: "South Africa's 1996 Constitution: protects religious freedom (Section 15), allows inclusive religious observances in public schools equitably.",
  },
] as const;

export function ReligionStateModelsExplorer() {
  const [idx, setIdx] = useState(4);
  const active = STATE_MODELS[idx] ?? STATE_MODELS[0];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Five religion–state models</span>
        <div className="flex flex-wrap gap-1.5">
          {STATE_MODELS.map((m, i) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setIdx(i)}
              className={cn(
                "whitespace-nowrap rounded-md px-2.5 py-1 text-xs transition-colors",
                i === idx ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {m.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-[270px_1fr]">
        <svg viewBox="0 0 270 175" className="mx-auto block h-auto w-full max-w-[270px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          {idx === 0 && (
            <>
              <circle cx={135} cy={88} r={54} fill={roleColour.a} fillOpacity={0.18} stroke={roleColour.a} strokeWidth={1.8} />
              <text x={135} y={84} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.a}>Religion &amp; State</text>
              <text x={135} y={100} fontSize={9.5} textAnchor="middle" fill="var(--dg-text)">One unified sphere</text>
            </>
          )}
          {idx === 1 && (
            <>
              <rect x={45} y={24} width={180} height={50} rx={6} fill={roleColour.a} fillOpacity={0.22} stroke={roleColour.a} strokeWidth={1.8} />
              <text x={135} y={53} fontSize={11} fontWeight={700} textAnchor="middle" fill={roleColour.a}>Religious Law (Top)</text>
              <line x1={135} y1={74} x2={135} y2={98} stroke="var(--dg-line)" strokeWidth={1.6} />
              <rect x={60} y={98} width={150} height={46} rx={6} fill={roleColour.b} fillOpacity={0.14} stroke={roleColour.b} strokeWidth={1.4} />
              <text x={135} y={125} fontSize={10.5} textAnchor="middle" fill="var(--dg-text)">Civil Administration</text>
            </>
          )}
          {idx === 2 && (
            <>
              <rect x={28} y={32} width={214} height={54} rx={6} fill={roleColour.a} fillOpacity={0.18} stroke={roleColour.a} strokeWidth={1.8} />
              <text x={135} y={55} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.a}>State + Official Religion</text>
              <text x={135} y={71} fontSize={8.5} textAnchor="middle" fill="var(--dg-text)">Constitutional privilege &amp; funding</text>
              <rect x={48} y={104} width={174} height={42} rx={6} fill="none" stroke="var(--dg-line)" strokeDasharray="4 3" />
              <text x={135} y={129} fontSize={9.5} textAnchor="middle" fill="var(--dg-line)">Other faiths (tolerated)</text>
            </>
          )}
          {idx === 3 && (
            <>
              <rect x={20} y={44} width={96} height={82} rx={6} fill={roleColour.b} fillOpacity={0.16} stroke={roleColour.b} strokeWidth={1.5} />
              <text x={68} y={88} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.b}>State</text>
              <line x1={135} y1={24} x2={135} y2={152} stroke="var(--dg-line)" strokeWidth={2} strokeDasharray="5 4" />
              <rect x={154} y={44} width={96} height={82} rx={6} fill={roleColour.a} fillOpacity={0.16} stroke={roleColour.a} strokeWidth={1.5} />
              <text x={202} y={88} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.a}>Religions</text>
              <text x={135} y={166} fontSize={8.5} textAnchor="middle" fill="var(--dg-line)">Strict institutional separation</text>
            </>
          )}
          {idx === 4 && (
            <>
              <rect x={20} y={44} width={92} height={82} rx={6} fill={roleColour.result} fillOpacity={0.18} stroke={roleColour.result} strokeWidth={1.6} />
              <text x={66} y={84} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.result}>Neutral State</text>
              <text x={66} y={98} fontSize={8} textAnchor="middle" fill="var(--dg-text)">Equal protection</text>
              <line x1={112} y1={72} x2={154} y2={72} stroke={roleColour.result} strokeWidth={1.8} />
              <line x1={154} y1={98} x2={112} y2={98} stroke={roleColour.result} strokeWidth={1.8} />
              <rect x={154} y={44} width={96} height={82} rx={6} fill={roleColour.a} fillOpacity={0.16} stroke={roleColour.a} strokeWidth={1.6} />
              <text x={202} y={84} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={roleColour.a}>All Religions</text>
              <text x={202} y={98} fontSize={8} textAnchor="middle" fill="var(--dg-text)">Civic dialogue</text>
            </>
          )}
        </svg>

        <div className="space-y-2.5 text-sm">
          <div>
            <p className="font-semibold text-foreground">{active.name}</p>
            <p className="text-xs text-muted-foreground">Status of freedom: {active.freedom}</p>
          </div>
          <p className="text-xs leading-relaxed text-foreground">{active.summary}</p>
          <div className="rounded-md border border-border bg-secondary/40 p-3 text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Illustrative context: </span>
            {active.example}
          </div>
        </div>
      </div>
    </figure>
  );
}

/* ============================================================================
 * 4. Religion Studies — Concepts & Theories Explorer
 * ========================================================================== */

const RELIGION_CONCEPTS = [
  {
    id: "interaction",
    label: "Influence & Adaptation",
    items: [
      { term: "Mission / Evangelism", desc: "Outward sharing of beliefs to invite new adherents (e.g. Christianity, Islam, Buddhism, Baha'i Faith)." },
      { term: "Proselytisation", desc: "Aggressive or coercive persuasion to convert someone away from another faith (often criticised in dialogue)." },
      { term: "Ecumenism", desc: "Co-operation and unity initiatives among different denominations WITHIN one religion (especially Christian churches)." },
      { term: "Syncretism", desc: "Blending elements from two or more distinct religious traditions into a new combined practice." },
      { term: "Revitalisation", desc: "Renewing and reforming a religion from within to stay relevant to modern challenges." },
    ],
  },
  {
    id: "theories",
    label: "Functionalist vs Conflict",
    items: [
      { term: "Functionalist Theory", desc: "Asks what religion DOES for society: builds social cohesion, shared values, comfort in grief, and moral order (Durkheim)." },
      { term: "Conflict Theory", desc: "Examines how dominant groups can use religion to justify power/inequality — OR how oppressed groups use faith for liberation." },
      { term: "Key Academic Rule", desc: "Sociological theories explain social roles of religion; they do NOT judge whether sacred beliefs are spiritually true or false." },
    ],
  },
  {
    id: "symbols",
    label: "Symbols, Myth & Ritual",
    items: [
      { term: "Representing vs Presenting", desc: "A symbol REPRESENTS an abstract belief (cross = sacrifice) and PRESENTS sacred meaning immediately to worshippers." },
      { term: "Myth (Academic Sense)", desc: "A sacred narrative explaining origins, identity, or moral order — NEVER use 'myth' to mean 'a lie' in Religion Studies!" },
      { term: "Types of Rituals", desc: "Rites of passage (birth, initiation, marriage, death), worship/prayer rituals, seasonal festivals, and pilgrimage." },
    ],
  },
] as const;

export function ReligionConceptsMatrix() {
  const [tab, setTab] = useState(0);
  const current = RELIGION_CONCEPTS[tab] ?? RELIGION_CONCEPTS[0];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Core Religion Studies concepts</span>
        <div className="flex flex-wrap gap-1.5">
          {RELIGION_CONCEPTS.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setTab(i)}
              className={cn(
                "whitespace-nowrap rounded-md px-2.5 py-1 text-xs transition-colors",
                i === tab ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="divide-y divide-border">
        {current.items.map((row) => (
          <div key={row.term} className="grid gap-1 px-4 py-3 text-xs sm:grid-cols-[200px_1fr] sm:gap-4">
            <div className="font-semibold text-foreground">{row.term}</div>
            <div className="leading-relaxed text-muted-foreground">{row.desc}</div>
          </div>
        ))}
      </div>
    </figure>
  );
}

/* ============================================================================
 * 5. Tourism — Foreign Exchange & Car Rental Calculator
 * ========================================================================== */

const CURRENCY_RATES = [
  { code: "USD", name: "US Dollar", rateToZar: 18.45 },
  { code: "EUR", name: "Euro", rateToZar: 19.95 },
  { code: "GBP", name: "British Pound", rateToZar: 23.40 },
  { code: "AUD", name: "Australian Dollar", rateToZar: 12.10 },
  { code: "JPY", name: "Japanese Yen", rateToZar: 0.12 },
] as const;

export function TourismForexAndItineraryLab() {
  const [currIdx, setCurrIdx] = useState(0);
  const [direction, setDirection] = useState<"toZar" | "fromZar">("toZar");
  const [amount, setAmount] = useState(250);

  const curr = CURRENCY_RATES[currIdx] ?? CURRENCY_RATES[0];
  const result =
    direction === "toZar"
      ? (amount * curr.rateToZar).toFixed(2)
      : (amount / curr.rateToZar).toFixed(2);

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Foreign exchange practice calculator (illustrative rate sheet)</span>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => setDirection("toZar")}
            className={cn(
              "whitespace-nowrap rounded-md px-2.5 py-1 text-xs transition-colors",
              direction === "toZar" ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            Foreign to ZAR (×)
          </button>
          <button
            type="button"
            onClick={() => setDirection("fromZar")}
            className={cn(
              "whitespace-nowrap rounded-md px-2.5 py-1 text-xs transition-colors",
              direction === "fromZar" ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            ZAR to Foreign (÷)
          </button>
        </div>
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-[1fr_1fr]">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {CURRENCY_RATES.map((c, i) => (
              <button
                key={c.code}
                type="button"
                onClick={() => setCurrIdx(i)}
                className={cn(
                  "rounded-md border px-2.5 py-1 text-xs font-mono tabular-nums transition-colors",
                  i === currIdx ? "border-primary bg-primary/10 font-semibold text-foreground" : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {c.code} (R{c.rateToZar.toFixed(2)})
              </button>
            ))}
          </div>

          <label className="block space-y-1 text-xs">
            <span className="text-muted-foreground">
              Amount in {direction === "toZar" ? curr.code : "ZAR"}: <strong className="font-mono tabular-nums text-foreground">{amount}</strong>
            </span>
            <input
              type="range"
              min={50}
              max={5000}
              step={50}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </label>
        </div>

        <div className="flex flex-col justify-between rounded-md border border-border bg-secondary/40 p-3.5 text-xs">
          <div>
            <div className="text-muted-foreground">
              Rate: 1 {curr.code} = <span className="font-mono tabular-nums text-foreground">R{curr.rateToZar.toFixed(2)}</span>
            </div>
            <div className="mt-2 font-mono text-lg font-bold tabular-nums text-primary">
              {direction === "toZar"
                ? `${curr.code} ${amount} × ${curr.rateToZar.toFixed(2)} = R ${result}`
                : `R ${amount} ÷ ${curr.rateToZar.toFixed(2)} = ${curr.code} ${result}`}
            </div>
          </div>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Golden rule: Always round final currency answers to <strong>two decimal places</strong> and use the exact rate sheet printed in the exam paper.
          </p>
        </div>
      </div>
    </figure>
  );
}

/* ============================================================================
 * 6. Tourism — SADC Countries, Gateways & Heritage Explorer
 * ========================================================================== */

const SADC_SAMPLES = [
  {
    country: "Botswana",
    capital: "Gaborone",
    gateway: "Sir Seretse Khama Intl (Air) · Kazungula / Ramatlabama (Road)",
    attractions: "Okavango Delta, Chobe National Park, Tsodilo Hills (WHS)",
  },
  {
    country: "Namibia",
    capital: "Windhoek",
    gateway: "Hosea Kutako Intl (Air) · Walvis Bay (Sea) · Ariamsvlei (Road)",
    attractions: "Fish River Canyon, Etosha National Park, Namib-Naukluft & Sossusvlei, Skeleton Coast",
  },
  {
    country: "Zimbabwe & Zambia",
    capital: "Harare & Lusaka",
    gateway: "Robert Gabriel Mugabe / Kenneth Kaunda Intl · Beitbridge / Victoria Falls Bridge",
    attractions: "Victoria Falls (shared WHS), Hwange, Great Zimbabwe (WHS), Matopo Hills, Lake Kariba, Kafue",
  },
  {
    country: "Lesotho & Eswatini",
    capital: "Maseru & Mbabane",
    gateway: "Moshoeshoe I Intl / King Mswati III Intl · Sani Pass / Maseru Bridge / Oshoek",
    attractions: "Maluti Mountains, Katse Dam, pony trails (Lesotho); cultural reserves & wildlife parks (Eswatini)",
  },
  {
    country: "Mozambique & Tanzania",
    capital: "Maputo & Dodoma",
    gateway: "Maputo / Julius Nyerere Intl · Maputo & Dar es Salaam harbours",
    attractions: "Bazaruto Archipelago, Cahora Bassa, Island of Mozambique (WHS); Mount Kilimanjaro (WHS), Serengeti, Ngorongoro (WHS), Stone Town Zanzibar (WHS)",
  },
  {
    country: "Madagascar & Mauritius",
    capital: "Antananarivo & Port Louis",
    gateway: "Ivato Intl / Sir Seewoosagur Ramgoolam Intl · Toamasina & Port Louis harbours",
    attractions: "Tsingy de Bemaraha (WHS), Royal Hill of Ambohimanga (WHS); volcanic peaks, lagoons & coral reefs",
  },
] as const;

export function TourismSadcAndServiceExplorer() {
  const [idx, setIdx] = useState(0);
  const active = SADC_SAMPLES[idx] ?? SADC_SAMPLES[0];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">SADC capitals, gateways &amp; top attractions explorer</span>
        <div className="flex flex-wrap gap-1.5">
          {SADC_SAMPLES.map((s, i) => (
            <button
              key={s.country}
              type="button"
              onClick={() => setIdx(i)}
              className={cn(
                "whitespace-nowrap rounded-md px-2.5 py-1 text-xs transition-colors",
                i === idx ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {s.country}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2.5 p-4 text-xs">
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-md border border-border bg-background/60 p-3">
            <div className="text-[11px] font-medium text-muted-foreground">Capital city</div>
            <div className="mt-0.5 text-sm font-semibold text-foreground">{active.capital}</div>
          </div>
          <div className="rounded-md border border-border bg-background/60 p-3">
            <div className="text-[11px] font-medium text-muted-foreground">Major gateways (Air / Sea / Road)</div>
            <div className="mt-0.5 font-medium text-foreground">{active.gateway}</div>
          </div>
        </div>
        <div className="rounded-md border border-border bg-secondary/40 p-3">
          <div className="text-[11px] font-medium text-muted-foreground">Signature Attractions (WHS = World Heritage Site)</div>
          <div className="mt-0.5 leading-relaxed text-foreground">{active.attractions}</div>
        </div>
      </div>
    </figure>
  );
}
