import { useState } from "react";
import { roleColour } from "./toolkit";
import { cn } from "@/lib/utils";

/* ============================================================================
 * 1. English HL — Visual Literacy Explorer (AIDA Adverts & Cartoon Analysis)
 * ========================================================================== */

const VISUAL_SPOTS = {
  advert: [
    {
      id: "hook",
      title: "Headline & Attention (A)",
      badge: "Large bold sans-serif + imperative",
      point: "Grabs attention instantly using contrast, a rhetorical question, or pun ('Don't let plastic choke tomorrow').",
      examTip: "Comment on font size, placement at top, and emotive diction.",
    },
    {
      id: "visual",
      title: "Central Visual & Interest (I)",
      badge: "Focal image + symbolism",
      point: "Symbolic contrast (a turtle beside a floating bottle) creates an emotional hook without extra words.",
      examTip: "Explain HOW the visual reinforces the written message — never merely describe what is drawn.",
    },
    {
      id: "desire",
      title: "Body Copy & Desire (D)",
      badge: "Statistics + inclusive pronouns ('you', 'our')",
      point: "Builds urgency and personal responsibility while keeping sentences short and punchy.",
      examTip: "Identify persuasive devices: facts/figures, repetition, emotive adjectives.",
    },
    {
      id: "action",
      title: "Call to Action & Logo (A)",
      badge: "Bottom-right anchor + website / QR",
      point: "Tells the target audience the exact next step ('Switch today at...') alongside brand credibility.",
      examTip: "Link the slogan and logo directly to the target market.",
    },
  ],
  cartoon: [
    {
      id: "bubble",
      title: "Speech & Thought Bubbles",
      badge: "Jagged / dotted / bold text",
      point: "Shows dialogue, tone (shouting in ALL CAPS, sarcasm, or unspoken thoughts in cloud bubbles).",
      examTip: "Quote exact punctuation (!, ?, ...) and explain what it reveals about attitude.",
    },
    {
      id: "body",
      title: "Facial Expression & Body Language",
      badge: "Raised eyebrows, slumped shoulders, gestures",
      point: "Communicates emotion visually (shock, smugness, exhaustion) that often contradicts the spoken words.",
      examTip: "Always name TWO concrete visual details (e.g. 'wide eyes and clenched fists').",
    },
    {
      id: "setting",
      title: "Setting, Props & Stereotypes",
      badge: "Background clues + exaggerated traits",
      point: "Establishes context (e.g. desk buried in 'URGENT' trays, cracked clock) and uses caricature or stereotype for satire.",
      examTip: "Connect background details to the broader social issue being satirised.",
    },
    {
      id: "irony",
      title: "Irony, Satire & Caption Punchline",
      badge: "Contrast between expectation and reality",
      point: "Humour or criticism comes from the mismatch between what a character claims ('We care about efficiency') and what the picture shows.",
      examTip: "State BOTH halves of irony clearly: 'The speaker says X, yet visually Y is happening.'",
    },
  ],
} as const;

export function EnglishVisualLiteracyExplorer() {
  const [mode, setMode] = useState<"advert" | "cartoon">("advert");
  const [spotIdx, setSpotIdx] = useState(0);
  const spots = VISUAL_SPOTS[mode];
  const active = spots[spotIdx] ?? spots[0];

  const switchMode = (next: "advert" | "cartoon") => {
    setMode(next);
    setSpotIdx(0);
  };

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Visual literacy anatomy explorer</span>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => switchMode("advert")}
            className={cn(
              "rounded-md px-2.5 py-1 text-xs transition-colors",
              mode === "advert" ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            Advertisement (AIDA)
          </button>
          <button
            type="button"
            onClick={() => switchMode("cartoon")}
            className={cn(
              "rounded-md px-2.5 py-1 text-xs transition-colors",
              mode === "cartoon" ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
            )}
          >
            Cartoon (Satire &amp; Irony)
          </button>
        </div>
      </div>

      <div className="grid items-center gap-4 p-4 sm:grid-cols-[290px_1fr]">
        <svg viewBox="0 0 290 220" className="mx-auto block h-auto w-full max-w-[290px]" style={{ background: "var(--dg-bg)", borderRadius: 6 }} aria-hidden="true">
          {mode === "advert" ? (
            <>
              <rect x={18} y={14} width={254} height={192} rx={6} fill="none" stroke="var(--dg-line)" strokeOpacity={0.35} strokeWidth={1.4} />
              {/* 0: Headline */}
              <rect x={28} y={24} width={234} height={36} rx={4} fill={spotIdx === 0 ? roleColour.a : "var(--dg-line)"} fillOpacity={spotIdx === 0 ? 0.18 : 0.06} stroke={spotIdx === 0 ? roleColour.a : "var(--dg-line)"} strokeOpacity={spotIdx === 0 ? 1 : 0.25} strokeWidth={spotIdx === 0 ? 1.8 : 1} />
              <text x={145} y={40} fontSize={11} fontWeight={700} textAnchor="middle" fill={spotIdx === 0 ? roleColour.a : "var(--dg-text)"}>KEEP OUR OCEANS ALIVE</text>
              <text x={145} y={53} fontSize={8.5} textAnchor="middle" fill="var(--dg-line)">1. Headline (Attention)</text>

              {/* 1: Central Visual */}
              <rect x={28} y={68} width={234} height={64} rx={4} fill={spotIdx === 1 ? roleColour.b : "var(--dg-line)"} fillOpacity={spotIdx === 1 ? 0.16 : 0.05} stroke={spotIdx === 1 ? roleColour.b : "var(--dg-line)"} strokeOpacity={spotIdx === 1 ? 1 : 0.25} strokeWidth={spotIdx === 1 ? 1.8 : 1} />
              <path d="M52,112 Q88,96 122,110 T192,108 T238,112" fill="none" stroke={roleColour.b} strokeWidth={1.8} />
              <circle cx={112} cy={95} r={12} fill={roleColour.b} fillOpacity={0.28} stroke={roleColour.b} strokeWidth={1.4} />
              <rect x={165} y={84} width={28} height={16} rx={3} fill="none" stroke={roleColour.result} strokeWidth={1.4} strokeDasharray="3 2" />
              <text x={145} y={125} fontSize={8.5} textAnchor="middle" fill="var(--dg-line)">2. Symbolic Image (Interest)</text>

              {/* 2: Body Copy */}
              <rect x={28} y={139} width={144} height={56} rx={4} fill={spotIdx === 2 ? roleColour.result : "var(--dg-line)"} fillOpacity={spotIdx === 2 ? 0.16 : 0.05} stroke={spotIdx === 2 ? roleColour.result : "var(--dg-line)"} strokeOpacity={spotIdx === 2 ? 1 : 0.25} strokeWidth={spotIdx === 2 ? 1.8 : 1} />
              <text x={36} y={155} fontSize={8.8} fontWeight={600} fill="var(--dg-text)">8 million tonnes yearly.</text>
              <text x={36} y={168} fontSize={8.5} fill="var(--dg-line)">Your small switch matters.</text>
              <text x={36} y={185} fontSize={8} fill={spotIdx === 2 ? roleColour.result : "var(--dg-line)"}>3. Persuasive Copy (Desire)</text>

              {/* 3: CTA / Logo */}
              <rect x={178} y={139} width={84} height={56} rx={4} fill={spotIdx === 3 ? roleColour.a : "var(--dg-line)"} fillOpacity={spotIdx === 3 ? 0.2 : 0.07} stroke={spotIdx === 3 ? roleColour.a : "var(--dg-line)"} strokeOpacity={spotIdx === 3 ? 1 : 0.3} strokeWidth={spotIdx === 3 ? 1.8 : 1} />
              <text x={220} y={162} fontSize={9.5} fontWeight={700} textAnchor="middle" fill={spotIdx === 3 ? roleColour.a : "var(--dg-text)"}>ACT NOW</text>
              <text x={220} y={175} fontSize={8} textAnchor="middle" fill="var(--dg-line)">CleanSea.org</text>
              <text x={220} y={188} fontSize={7.8} textAnchor="middle" fill="var(--dg-line)">4. Action &amp; Logo</text>
            </>
          ) : (
            <>
              {/* Cartoon panel frame */}
              <rect x={18} y={14} width={254} height={192} rx={4} fill="none" stroke="var(--dg-line)" strokeWidth={1.6} />

              {/* 0: Speech bubble */}
              <rect x={30} y={24} width={166} height={42} rx={10} fill={spotIdx === 0 ? roleColour.a : "var(--dg-bg)"} fillOpacity={spotIdx === 0 ? 0.16 : 1} stroke={spotIdx === 0 ? roleColour.a : "var(--dg-line)"} strokeWidth={spotIdx === 0 ? 2 : 1.3} />
              <text x={113} y={42} fontSize={9.2} fontWeight={600} textAnchor="middle" fill="var(--dg-text)">"Our turnaround is FASTER</text>
              <text x={113} y={55} fontSize={9.2} fontWeight={600} textAnchor="middle" fill="var(--dg-text)">than ever before!"</text>

              {/* 2: Desk & towering paperwork */}
              <rect x={198} y={62} width={58} height={66} rx={3} fill={spotIdx === 2 ? roleColour.result : "var(--dg-line)"} fillOpacity={spotIdx === 2 ? 0.18 : 0.08} stroke={spotIdx === 2 ? roleColour.result : "var(--dg-line)"} strokeWidth={spotIdx === 2 ? 1.8 : 1} />
              <line x1={206} y1={78} x2={248} y2={78} stroke="var(--dg-line)" strokeWidth={1.3} />
              <line x1={206} y1={90} x2={248} y2={90} stroke="var(--dg-line)" strokeWidth={1.3} />
              <line x1={206} y1={102} x2={248} y2={102} stroke="var(--dg-line)" strokeWidth={1.3} />
              <text x={227} y={121} fontSize={7.8} fontWeight={600} textAnchor="middle" fill={spotIdx === 2 ? roleColour.result : "var(--dg-line)"}>IN-TRAY 2021</text>

              {/* 1: Character stick/portrait with smug expression */}
              <circle cx={96} cy={112} r={19} fill={spotIdx === 1 ? roleColour.b : "var(--dg-line)"} fillOpacity={spotIdx === 1 ? 0.18 : 0.07} stroke={spotIdx === 1 ? roleColour.b : "var(--dg-text)"} strokeWidth={spotIdx === 1 ? 2 : 1.5} />
              <line x1={87} y1={106} x2={93} y2={104} stroke="var(--dg-text)" strokeWidth={1.6} />
              <line x1={100} y1={104} x2={106} y2={106} stroke="var(--dg-text)" strokeWidth={1.6} />
              <path d="M89,119 Q96,124 104,118" fill="none" stroke="var(--dg-text)" strokeWidth={1.5} />
              <path d="M68,158 L124,158 L124,132 L68,132 Z" fill="none" stroke="var(--dg-line)" strokeWidth={1.3} />

              {/* 3: Irony / Caption bar */}
              <rect x={28} y={166} width={234} height={30} rx={4} fill={spotIdx === 3 ? roleColour.result : "var(--dg-line)"} fillOpacity={spotIdx === 3 ? 0.16 : 0.06} stroke={spotIdx === 3 ? roleColour.result : "var(--dg-line)"} strokeWidth={spotIdx === 3 ? 1.8 : 1} />
              <text x={145} y={184} fontSize={8.8} fontWeight={600} textAnchor="middle" fill={spotIdx === 3 ? roleColour.result : "var(--dg-text)"}>Irony: claims speed while inbox is 5 years behind</text>
            </>
          )}
        </svg>

        <div className="space-y-2.5 text-xs">
          <div className="grid grid-cols-2 gap-1.5">
            {spots.map((sp, i) => (
              <button
                key={sp.id}
                type="button"
                onClick={() => setSpotIdx(i)}
                className={cn(
                  "rounded-md border px-2.5 py-1.5 text-left text-[11px] font-medium transition-colors",
                  spotIdx === i ? "border-primary bg-primary/10 text-foreground" : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground",
                )}
              >
                {i + 1}. {sp.title.split("(")[0].trim()}
              </button>
            ))}
          </div>

          <div className="space-y-1.5 rounded bg-secondary/50 p-3">
            <div className="font-semibold text-foreground">{active.title}</div>
            <div className="text-[11px] font-medium text-primary">{active.badge}</div>
            <p className="text-muted-foreground">{active.point}</p>
            <p className="border-t border-border/60 pt-1.5 text-[11px] text-foreground">
              <strong>Exam focus:</strong> {active.examTip}
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}

/* ============================================================================
 * 2. English HL — Grammar & Editing Lab (Error Spotting & Transformations)
 * ========================================================================== */

const GRAMMAR_CASES = [
  {
    id: "concord",
    label: "Concord",
    faulty: "Neither the coach nor the players **was** ready for the rain.",
    fixed: "Neither the coach nor the players **were** ready for the rain.",
    rule: "With 'neither...nor' or 'either...or', the verb agrees with the CLOSER subject ('players' = plural -> were).",
  },
  {
    id: "comma-splice",
    label: "Comma splice",
    faulty: "The sirens sounded at dawn**,** everyone rushed outside.",
    fixed: "The sirens sounded at dawn**;** everyone rushed outside. (OR '..., so everyone...')",
    rule: "Two independent clauses cannot be joined by a comma alone. Use a semicolon (;), full stop, or coordinating conjunction.",
  },
  {
    id: "passive",
    label: "Passive voice",
    faulty: "Active: The panel **has announced** the final winners.",
    fixed: "Passive: The final winners **have been announced** by the panel.",
    rule: "Keep the exact tense (present perfect) and match concord to the NEW plural subject ('winners' -> have been).",
  },
  {
    id: "reported",
    label: "Reported speech",
    faulty: "She said, \"I **saw** this play **yesterday**.\"",
    fixed: "She said that she **had seen** that play **the previous day**.",
    rule: "Backshift tense (simple past -> past perfect), shift pronouns (I -> she) and time/place markers (this -> that, yesterday -> the previous day).",
  },
  {
    id: "apostrophe",
    label: "Apostrophes",
    faulty: "The dog wagged **it's** tail while the **learners'** bag went missing.",
    fixed: "The dog wagged **its** tail while the **learner's** bag went missing.",
    rule: "'It's' ONLY means 'it is / it has'; possessive is 'its'. Singular owner = learner's; plural owners = learners'.",
  },
] as const;

export function EnglishEditingGrammarLab() {
  const [idx, setIdx] = useState(0);
  const item = GRAMMAR_CASES[idx];

  const renderBold = (text: string, color: string) =>
    text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <span key={i} className="font-semibold underline decoration-2 underline-offset-2" style={{ color }}>
          {part.slice(2, -2)}
        </span>
      ) : (
        <span key={i}>{part}</span>
      ),
    );

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Paper 1 Editing &amp; Grammar Lab</span>
        <div className="flex flex-wrap gap-1">
          {GRAMMAR_CASES.map((g, i) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setIdx(i)}
              className={cn(
                "rounded-md px-2 py-1 text-xs transition-colors",
                idx === i ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 p-4 text-xs">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-md border border-border bg-secondary/30 p-3">
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: roleColour.result }}>
              {item.id === "passive" || item.id === "reported" ? "Original form" : "Faulty sentence"}
            </div>
            <p className="text-[13px] leading-relaxed text-foreground">{renderBold(item.faulty, roleColour.result)}</p>
          </div>
          <div className="rounded-md border border-border bg-secondary/30 p-3">
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: roleColour.b }}>
              {item.id === "passive" || item.id === "reported" ? "Transformed form" : "Corrected sentence"}
            </div>
            <p className="text-[13px] leading-relaxed text-foreground">{renderBold(item.fixed, roleColour.b)}</p>
          </div>
        </div>
        <div className="rounded bg-secondary/50 px-3 py-2 text-muted-foreground">
          <strong className="text-foreground">Rule:</strong> {item.rule}
        </div>
      </div>
    </figure>
  );
}

/* ============================================================================
 * 3. English HL — Writing Structure & Format Blueprint Explorer
 * ========================================================================== */

const ENG_TEMPLATES = {
  peel: {
    title: "PEEL Literary Essay Paragraph",
    register: "Formal, objective, present literary tense",
    blocks: [
      { tag: "P · Point", detail: "State one clear argument answering the essay question directly." },
      { tag: "E · Evidence", detail: "Embed a short exact quotation or specific scene moment in context." },
      { tag: "E · Explain", detail: "Analyse diction/imagery/motivation — explain HOW it proves your point." },
      { tag: "L · Link", detail: "Tie the paragraph explicitly back to the thesis statement and prompt keywords." },
    ],
  },
  letter: {
    title: "Formal Business / Press Letter",
    register: "Polite, formal, zero slang/contractions",
    blocks: [
      { tag: "Sender & Date", detail: "Your street address, suburb, postal code, and full written date (top right or left — keep consistent)." },
      { tag: "Recipient & Salutation", detail: "Title + Recipient's address on the left, then 'Dear Sir/Madam,' or 'Dear Ms Dlamini,'." },
      { tag: "Subject Line", detail: "Short underlined/capitalised heading summarising purpose (e.g. RE: COMPLAINT ABOUT WATER OUTAGES)." },
      { tag: "Body + Sign-off", detail: "State purpose in Para 1, details in Para 2, action requested in Para 3. End: 'Yours faithfully,' (unknown name) or 'Yours sincerely,' (named)." },
    ],
  },
  minutes: {
    title: "Agenda & Minutes of a Meeting",
    register: "Impersonal, concise, past tense (minutes)",
    blocks: [
      { tag: "Header", detail: "Organisation name, date, time, and venue of the meeting." },
      { tag: "Opening Items", detail: "1. Welcome · 2. Attendance & Apologies · 3. Confirmation of previous minutes." },
      { tag: "Matters & Actions", detail: "Numbered agenda items recording ONLY decisions taken, responsible person, and deadlines (no verbatim chatter)." },
      { tag: "Closure", detail: "Date of next meeting, time meeting closed, and Chairperson + Secretary signature lines." },
    ],
  },
  cv: {
    title: "CV & Covering Letter",
    register: "Factual bullet points (CV) + persuasive formal prose (cover letter)",
    blocks: [
      { tag: "Personal Details", detail: "Full name, contact details, ID/DOB (keep clean and structured)." },
      { tag: "Education & Qualifications", detail: "Reverse chronological order: current Grade 11 school, subjects, academic achievements." },
      { tag: "Leadership & Experience", detail: "Clubs, volunteering, part-time roles with concrete action verbs." },
      { tag: "Referees", detail: "Two contactable referees (name, title, phone/email) plus short 3-paragraph covering letter matching the advert." },
    ],
  },
} as const;

export function EnglishWritingFormatsExplorer() {
  const [key, setKey] = useState<keyof typeof ENG_TEMPLATES>("peel");
  const cur = ENG_TEMPLATES[key];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Structure &amp; Format Blueprint</span>
        <div className="flex flex-wrap gap-1">
          {(Object.keys(ENG_TEMPLATES) as (keyof typeof ENG_TEMPLATES)[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setKey(k)}
              className={cn(
                "rounded-md px-2 py-1 text-xs transition-colors",
                key === k ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {ENG_TEMPLATES[k].title.split("(")[0].trim()}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 p-4 text-xs">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-sm font-semibold text-foreground">{cur.title}</span>
          <span className="text-[11px] text-muted-foreground">Register: {cur.register}</span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {cur.blocks.map((b, i) => (
            <div key={b.tag} className="rounded-md border border-border bg-secondary/30 p-2.5">
              <div className="font-semibold" style={{ color: i % 2 === 0 ? roleColour.a : roleColour.b }}>
                {b.tag}
              </div>
              <p className="mt-1 leading-relaxed text-muted-foreground">{b.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}

/* ============================================================================
 * 4. Afrikaans FAL — Interactive STOMPI & Voegwoorde Sentence Builder
 * ========================================================================== */

const STOMPI_MODES = {
  normaal: {
    title: "Normale woordorde (STOMPI)",
    rule: "Onderwerp (S) eerste, Vervoegde werkwoord (v1) ALTYD in posisie 2!",
    tokens: [
      { slot: "S", word: "Die leerders", role: "a" as const },
      { slot: "v1", word: "skryf", role: "result" as const },
      { slot: "T", word: "vandag", role: "b" as const },
      { slot: "O", word: "'n opstel", role: "a" as const },
      { slot: "M", word: "netjies", role: "b" as const },
      { slot: "P", word: "in die klas", role: "a" as const },
      { slot: "v2", word: "-", role: "line" as const },
      { slot: "I", word: "om te oefen.", role: "b" as const },
    ],
  },
  omgekeerd: {
    title: "Omgekeerde woordorde (begin met Tyd)",
    rule: "As jy met Tyd (of Plek) begin, bly v1 in posisie 2 — so Onderwerp (S) skuif AGTER v1!",
    tokens: [
      { slot: "T", word: "Vandag", role: "b" as const },
      { slot: "v1", word: "skryf", role: "result" as const },
      { slot: "S", word: "die leerders", role: "a" as const },
      { slot: "O", word: "'n opstel", role: "a" as const },
      { slot: "M", word: "netjies", role: "b" as const },
      { slot: "P", word: "in die klas.", role: "a" as const },
    ],
  },
  verlede: {
    title: "Verlede tyd (v1 = het, v2 = ge-deelwoord)",
    rule: "In die verlede tyd staan 'het' in posisie v1 (2de plek) en die hoofwerkwoord skuif heel agtertoe na v2!",
    tokens: [
      { slot: "S", word: "Die leerders", role: "a" as const },
      { slot: "v1", word: "het", role: "result" as const },
      { slot: "T", word: "gister", role: "b" as const },
      { slot: "O", word: "'n opstel", role: "a" as const },
      { slot: "M", word: "netjies", role: "b" as const },
      { slot: "P", word: "in die klas", role: "a" as const },
      { slot: "v2", word: "geskryf.", role: "result" as const },
    ],
  },
  groep3: {
    title: "Voegwoord Groep 3 (omdat / dat / toe / as)",
    rule: "Na 'n Groep 3-voegwoord (bysin) skuif die werkwoord heel agtertoe na die EINDE van die sin!",
    tokens: [
      { slot: "Hoofsin", word: "Sy glimlag,", role: "a" as const },
      { slot: "Groep 3", word: "omdat", role: "b" as const },
      { slot: "S", word: "sy", role: "a" as const },
      { slot: "T + P", word: "vandag hard", role: "b" as const },
      { slot: "v1 -> EINDE", word: "werk.", role: "result" as const },
    ],
  },
  ontkenning: {
    title: "Dubbele ontkenning (nie ... nie)",
    rule: "Eerste 'nie' staan gewoonlik ná v1 en voornaamwoord-voorwerp; tweede 'nie' staan HEEL AAN DIE EINDE!",
    tokens: [
      { slot: "S", word: "Ek", role: "a" as const },
      { slot: "v1", word: "het", role: "result" as const },
      { slot: "nie 1", word: "nie", role: "result" as const },
      { slot: "T", word: "gister", role: "b" as const },
      { slot: "O", word: "die boek", role: "a" as const },
      { slot: "v2", word: "gelees", role: "a" as const },
      { slot: "nie 2", word: "nie.", role: "result" as const },
    ],
  },
} as const;

export function AfrikaansStompiBuilder() {
  const [mode, setMode] = useState<keyof typeof STOMPI_MODES>("normaal");
  const cur = STOMPI_MODES[mode];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">STOMPI &amp; Woordorde-bouer</span>
        <div className="flex flex-wrap gap-1">
          {(
            [
              ["normaal", "STOMPI"],
              ["omgekeerd", "Omgekeerd"],
              ["verlede", "Verlede tyd"],
              ["groep3", "Groep 3 (omdat)"],
              ["ontkenning", "Nie ... nie"],
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

      <div className="space-y-3 p-4 text-xs">
        <div className="font-semibold text-foreground">{cur.title}</div>
        <div className="flex flex-wrap gap-2">
          {cur.tokens.map((t, i) => (
            <div
              key={`${t.slot}-${i}`}
              className="rounded-md border border-border bg-secondary/40 px-2.5 py-1.5 text-center"
              style={{
                borderColor: t.role === "result" ? roleColour.result : t.role === "b" ? roleColour.b : undefined,
              }}
            >
              <div
                className="text-[10px] font-bold uppercase tracking-[0.06em]"
                style={{ color: t.role === "result" ? roleColour.result : t.role === "b" ? roleColour.b : roleColour.a }}
              >
                {t.slot}
              </div>
              <div className="mt-0.5 text-[13px] font-medium text-foreground">{t.word}</div>
            </div>
          ))}
        </div>
        <div className="rounded bg-secondary/50 px-3 py-2 text-muted-foreground">
          <strong className="text-foreground">Reël:</strong> {cur.rule}
        </div>
      </div>
    </figure>
  );
}

/* ============================================================================
 * 5. Afrikaans FAL — Werkwoord- en Rede-transformeerder
 * ========================================================================== */

const AFR_TRANSFORMS = {
  lydend: {
    title: "Lydende vorm (Bedrywend -> Lydend)",
    items: [
      {
        label: "Teenwoordige tyd",
        before: "Die seun skop die bal.",
        after: "Die bal WORD deur die seun geskop.",
        note: "Gebruik 'word + ge-deelwoord'. 'Die bal' word die nuwe onderwerp.",
      },
      {
        label: "Verlede tyd",
        before: "Die seun het die bal geskop.",
        after: "Die bal IS deur die seun geskop.",
        note: "LET WEL: Verlede tyd in die lydende vorm gebruik 'IS + ge-deelwoord' (nie 'het' nie!).",
      },
      {
        label: "Toekomende tyd",
        before: "Die seun sal die bal skop.",
        after: "Die bal SAL deur die seun geskop WORD.",
        note: "Gebruik 'sal ... ge-deelwoord word' aan die einde.",
      },
    ],
  },
  rede: {
    title: "Direkte -> Indirekte rede",
    items: [
      {
        label: "Stelsin (teenwoordige tyd)",
        before: "Thabo sê: \"Ek lees my boek vandag.\"",
        after: "Thabo sê dat hy sy boek daardie dag lees.",
        note: "Inleidende werkwoord is 'sê' (teenwoordige tyd): werkwoord gaan agtertoe ná 'dat', voornaamwoorde en tyd/plek verander (vandag -> daardie dag).",
      },
      {
        label: "Stelsin (verlede tyd inleiding)",
        before: "Thabo het gesê: \"Ek werk hard.\"",
        after: "Thabo het gesê dat hy hard gewerk het.",
        note: "As 'het gesê' verlede tyd is, skuif die bysin se werkwoord na verlede tyd: 'gewerk het' aan die einde!",
      },
      {
        label: "Vraagsin (Ja/Nee-vraag)",
        before: "Sy vra: \"Kom jy saam?\"",
        after: "Sy vra OF ek saamkom.",
        note: "Gebruik 'of' (nooit 'dat' nie!) by vrae sonder 'n vraagwoord, en laat die vraagteken weg.",
      },
    ],
  },
  voegwoorde: {
    title: "Voegwoorde: Groep 1, 2 en 3",
    items: [
      {
        label: "Groep 1 (en, maar, want, of, dog)",
        before: "Hy bly tuis. Hy is siek. (want)",
        after: "Hy bly tuis, want hy IS siek.",
        note: "GEEN woordordeverandering nie! Komma altyd vóór 'want' en 'maar'.",
      },
      {
        label: "Groep 2 (dus, daarom, daarna, anders, tog)",
        before: "Hy is siek. Hy bly tuis. (daarom)",
        after: "Hy is siek, daarom BLY hy tuis.",
        note: "Werkwoord staan direk NA die voegwoord (omgekeerde woordorde)!",
      },
      {
        label: "Groep 3 (omdat, dat, as, toe, terwyl, hoewel)",
        before: "Hy bly tuis. Hy is siek. (omdat)",
        after: "Hy bly tuis omdat hy siek IS.",
        note: "Werkwoord skuif HEEL AAN DIE EINDE van die bysin! ('is' gaan agter 'siek').",
      },
    ],
  },
} as const;

export function AfrikaansGrammarTransformer() {
  const [cat, setCat] = useState<keyof typeof AFR_TRANSFORMS>("lydend");
  const group = AFR_TRANSFORMS[cat];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Afrikaans Grammatika-transformeerder</span>
        <div className="flex flex-wrap gap-1">
          {(
            [
              ["lydend", "Lydende vorm"],
              ["rede", "Indirekte rede"],
              ["voegwoorde", "Voegwoorde 1/2/3"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setCat(id)}
              className={cn(
                "rounded-md px-2 py-1 text-xs transition-colors",
                cat === id ? "bg-primary font-medium text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2.5 p-4 text-xs">
        <div className="font-semibold text-foreground">{group.title}</div>
        {group.items.map((row) => (
          <div key={row.label} className="rounded-md border border-border bg-secondary/30 p-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-primary">{row.label}</div>
            <div className="mt-1 grid gap-2 sm:grid-cols-2">
              <div className="text-muted-foreground">{row.before}</div>
              <div className="font-medium text-foreground">{row.after}</div>
            </div>
            <p className="mt-1.5 border-t border-border/60 pt-1 text-[11px] text-muted-foreground">{row.note}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}

/* ============================================================================
 * 6. Afrikaans FAL — Transaksionele Tekste Formaatgids
 * ========================================================================== */

const AFR_FORMATS = {
  formeel: {
    title: "Formele brief / Brief aan die pers",
    register: "Formeel, hoflik, geen verkortings of sleng nie",
    parts: [
      { name: "Jou adres + datum", text: "Straatadres, Dorp, Poskode, bv. 14 Maart 2027 (GEEN leestekens aan die einde van lyne nie)." },
      { name: "Ontvanger se adres", text: "Die Bestuurder / Die Redakteur + volledige adres aan die linkerkant." },
      { name: "Aanhef & Opskrif", text: "'Geagte Mnr./Me.' of 'Geagte Meneer', gevolg deur 'n kort hoofletter/onderstreepte opskrif." },
      { name: "Slot", text: "'Die uwe,' + handtekening + voorletters en van." },
    ],
  },
  vriendskaplik: {
    title: "Vriendskaplike brief",
    register: "Informeel en vriendelik, maar steeds korrekte Afrikaans",
    parts: [
      { name: "Adres + datum", text: "Jou adres regs bo (blokvorm), met datum onderaan uitgeskryf (bv. 20 April 2027)." },
      { name: "Aanhef", text: "'Liewe Thandi,' of 'Beste Oupa,' — GEEN komma as jy KABV-blokvorm gebruik nie, of konsekwent regdeur." },
      { name: "Inhoud", text: "Kort inleiding (groet/doel), 2-3 kernparagrawe, warm slotparagraaf." },
      { name: "Slot", text: "'Groete,' of 'Liefde,' + jou voornaam alleen." },
    ],
  },
  notule: {
    title: "Agenda en Notule van 'n vergadering",
    register: "Saaklik, onpersoonlik, verlede tyd (in notule)",
    parts: [
      { name: "Opskrif", text: "'AGENDA / NOTULE VAN DIE ...-VERGADERING' + datum, tyd, plek." },
      { name: "Vaste punte", text: "1. Opening en verwelkoming · 2. Teenwoordig en verskonings · 3. Notule van vorige vergadering." },
      { name: "Sake bespreek", text: "Skryf net besluite, wie verantwoordelik is en datums (nooit direkte aanhalings nie)." },
      { name: "Afsluiting", text: "Datum van volgende vergadering, tyd van verdaging, Voorsitter & Sekretaris handtekeninge." },
    ],
  },
  kort: {
    title: "Kort tekste: Dagboekinskrywing & E-pos",
    register: "Dagboek = persoonlik (1ste persoon); E-pos = hang af van ontvanger",
    parts: [
      { name: "Dagboek", text: "Begin met Dag + Datum (bv. Maandag, 12 Mei 2027), skryf gevoelens en refleksie in 1ste persoon ('ek')." },
      { name: "E-pos opskrif", text: "'Aan:' (e-posadres), 'CC:' (indien nodig), 'Onderwerp:' (duidelike opskrif)." },
      { name: "E-pos aanhef & inhoud", text: "Gepaste aanhef, kort duidelike paragrawe (80-100 woorde in Vraestel 3)." },
      { name: "E-pos slot", text: "'Vriendelike groete,' + volle naam (formeel) of voornaam (informeel)." },
    ],
  },
} as const;

export function AfrikaansTransactionalTemplates() {
  const [tab, setTab] = useState<keyof typeof AFR_FORMATS>("formeel");
  const cur = AFR_FORMATS[tab];

  return (
    <figure className="not-prose my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-foreground">Transaksionele Tekste Formaatgids</span>
        <div className="flex flex-wrap gap-1">
          {(
            [
              ["formeel", "Formele brief"],
              ["vriendskaplik", "Vriendskaplik"],
              ["notule", "Agenda & Notule"],
              ["kort", "Dagboek & E-pos"],
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

      <div className="space-y-3 p-4 text-xs">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-sm font-semibold text-foreground">{cur.title}</span>
          <span className="text-[11px] text-muted-foreground">Register: {cur.register}</span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {cur.parts.map((p, i) => (
            <div key={p.name} className="rounded-md border border-border bg-secondary/30 p-2.5">
              <div className="font-semibold" style={{ color: i % 2 === 0 ? roleColour.a : roleColour.b }}>
                {p.name}
              </div>
              <p className="mt-1 leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
