# Margin research brief (companion to the launch prompt)

Save this file in the repo as `research/BRIEF.md` and read it fully before starting. It is the full specification for the overnight research run. The launch prompt only starts the run. This file says what "done" means.

## 0. Ground rules

- Research and organise only. Do NOT change the UI, pages, components, styles, routes, database, Supabase setup or content loader. Do not put anything into `content/`. Everything goes in `research/`.
- The user is asleep and will not answer questions. Make the most reasonable choice, write it down in `research/ASSUMPTIONS.md`, and keep going. Only leave alone anything that can't be undone.
- This run should take many hours. Do not finish early. When a pass is complete, start the next one. If you run out of subjects to deepen, start a verification pass over your own work. Stop only when all passes below are complete or you truly run out of budget.
- Work on the branch `research-content`. Never touch `main`. Commit after every subject per pass with a clear message. Never commit secrets.
- Keep `research/PROGRESS.md` updated after each commit: what's done, current pass, current subject, what's next. If the run is interrupted, a later run must be able to resume from this file alone.
- Never invent anything: no fake links, video titles, paper details, page numbers, marks or quotes. If you can't verify something, mark it `UNVERIFIED` and say why.
- Write in your own words. Do not reproduce textbook passages, exam questions, memos or marking guidelines. Record papers by name, year and URL only.
- Cite the source URL next to every claim that comes from a source.
- Dates: today's date is late November 2026 and the target year is 2027. Prefer the newest CAPS documents, ATPs and past papers available, and note which year each source is from.

## 1. Subjects

Pure Mathematics, AP Mathematics (IEB), Physical Sciences, English Home Language, Afrikaans First Additional Language, History, Religion Studies, Tourism, Business Studies, Life Orientation.

Extras: list other subjects clearly worth adding in `research/EXTRA_SUBJECTS.md` without researching them.

The user's own split: Pure Maths is organised as Algebra and Geometry. Physical Sciences is organised as Physics and Chemistry. Keep that split inside those subject files, while still following CAPS term order. Mark each topic with which part it belongs to.

The curriculum is South African CAPS Grade 11, DBE, English medium. AP Maths is an IEB subject. Treat IEB and DBE papers and requirements separately.

## 2. What to produce for every subject

One file per subject in `research/` (for example `research/pure-maths.md`), with this structure:

1. **Subject overview:** what the subject is, how Grade 11 fits between Grade 10 and 12, and what carries over.
2. **Assessment:** how Grade 11 is assessed (term tests, exams, practical or formal tasks, SBA weighting, paper structure, marks, duration, cognitive levels). Include the final-exam format for Grade 12 if relevant to preparing in Grade 11.
3. **Prior knowledge:** the Grade 10 topics a Grade 11 learner must be solid on, as a checklist.
4. **Term 1 to Term 4:** following the official Annual Teaching Plan. For each term: weeks, formal assessments, then every topic and sub-topic in teaching order.
5. **For every sub-topic:**
   - What it covers, in plain language (2 to 5 sentences).
   - Key concepts, definitions, formulas, rules, vocabulary or set texts (as appropriate for the subject).
   - Prerequisites (which earlier sub-topics it builds on).
   - How it is typically examined: question types, usual marks, command words used.
   - Common mistakes and misconceptions.
   - Worked-example ideas and practice-question ideas, described briefly (not full questions copied from papers).
   - Suggested lesson breakdown: how it could be split into 1 to 5 short lessons, with a one-line title for each.
   - Diagrams, graphs, models or interactive visuals that would help (for example "sketch of a hyperbola with asymptotes", "ray diagram for a convex lens"), noting which need 3D, animation or a graph library.
   - Resources matched to the exact sub-topic: Khan Academy, YouTube (channel name and video title), Siyavula, Mindset or other free sources. Mark each `VERIFIED` (you opened it and it matches) or `UNVERIFIED`.
6. **Past paper coverage table** (see section 4).
7. **Cross-links:** sub-topics that connect to other subjects (for example Maths used in Physical Sciences, Business Studies finance and Maths finance).
8. **Gaps and uncertainty:** everything you couldn't confirm.

## 3. Subject-specific notes

These are starting hypotheses from the user's chat planning, NOT facts. Check every one against the official CAPS and ATP documents, and correct the hypothesis freely when the documents disagree.

- **Pure Mathematics.** Likely Algebra side: exponents and surds, equations and inequalities, nature of roots, number patterns, functions (parabola, hyperbola, exponential, inverses), finance (compound interest, nominal and effective rates, depreciation). Likely Geometry side: analytical geometry, Euclidean geometry (circle geometry), trigonometry (reduction formulae, identities, sine, cosine and area rules, 2D and 3D problems), statistics and probability. Confirm which are Grade 11 and the term order.
- **AP Mathematics (IEB).** The user already has a finished study document for Algebra (partial fractions, complex numbers, absolute values, absolute value graphs, rational inequalities) and Calculus (functions, limits, continuity), built from a Mindbourne textbook you cannot see. Do NOT redo those topics' content. Research the rest: the IEB AP Maths Grade 11 syllabus, term plan, assessment, exam structure, and all other topics (for example further functions, trigonometry, sequences and series, probability, calculus topics beyond the two parts above). List the already-covered topics in the same format as placeholders marked `COVERED ELSEWHERE`.
- **Physical Sciences.** Likely Physics: vectors and motion in 2D, Newton's laws, geometrical optics, waves and wavefronts, electrostatics, electromagnetism, electric circuits. Likely Chemistry: atomic combinations, intermolecular forces, ideal gases and thermal properties, quantitative aspects of chemical change, reactions in aqueous solution, energy and chemical change. Include the practical and experiment requirements and the data sheet items learners need.
- **English Home Language.** Literature (novel, drama, poetry, short stories), language in context, comprehension and summary, grammar and editing, writing (essays, transactional texts), oral assessment. Set works change by province and year: list what CAPS and DBE say are prescribed for 2027, and mark anything unconfirmed.
- **Afrikaans First Additional Language.** Literature set works, language structures and conventions, comprehension, writing and presentation, orals. The school's set books are unknown. List the commonly prescribed ones, marked `UNCONFIRMED`. Write the research notes in English, but keep all Afrikaans terms, examples and vocabulary in Afrikaans.
- **History.** Check the Grade 11 CAPS topic list and term order carefully, including source-based skills, essay writing and the formal tasks. Note which topics are examined in Paper 1 and Paper 2.
- **Religion Studies.** Check the CAPS topics, the religions covered, term order, assessment and the school's likely approach. The school's textbook is unknown, so mark book-dependent content `UNCONFIRMED`.
- **Tourism.** Topics such as map work and tour planning, tourist attractions and destinations, tourism sectors, culture and heritage, sustainability, communication and customer care, plus the practical and formal tasks. Confirm against CAPS.
- **Business Studies.** Business environments, business ventures, business roles, business operations, and the essay and case-study formats. Confirm against CAPS and note links to finance topics in Maths.
- **Life Orientation.** Development of the self, social and environmental responsibility, democracy and human rights, careers and career choices, study skills, physical education, and the PAT/task requirements. Confirm against CAPS.

## 4. Past paper coverage check

For each subject:

1. Find publicly available Grade 11 final exam papers and memos for the last 3 to 5 years. Use DBE sources for CAPS subjects and the IEB for AP Maths where public. Also check Grade 12 papers to see where Grade 11 content shows up as foundations.
2. For each paper, build a table: paper name and year, URL, then topics and sub-topics tested with marks or weighting.
3. Compare against your topic list. Flag: topics the papers test that your list misses, topics on your list that never appear, and topics tested far more heavily than their time allocation suggests.
4. Fix the topic list, then re-run the comparison until nothing is flagged. Record what changed in `research/CHANGELOG.md`.
5. Do not copy questions, memos or marking guidelines. Summaries and tables only.

## 5. Passes (work through them in order)

- **Pass 1: Skeleton.** For every subject in the order below: overview, assessment, prior knowledge, and the full term-by-term topic and sub-topic outline from the official ATP and CAPS. Commit after each subject.
- **Pass 2: Depth.** Revisit each subject and complete every field in section 2 for every sub-topic, including lesson breakdowns, diagrams needed, misconceptions and question types. Commit after each subject.
- **Pass 3: Resources.** Find and verify learning resources for each sub-topic. Open every link you list and check it matches the sub-topic. Remove anything dead or off-topic. Prefer a few excellent resources to many mediocre ones.
- **Pass 4: Past papers.** Do the coverage check from section 4 for every subject and fix every gap.
- **Pass 5: Verification.** Re-read every file as a sceptical teacher. Check: topic order matches the ATP, nothing important is missing, no unsupported claims, no invented links, no copied text, and consistent formatting. Fix problems and log them in `research/CHANGELOG.md`.
- **Pass 6: Extras (only if budget remains).** Per subject, add a one-page "exam strategy" summary, a glossary of key terms, and a list of formulas or key facts. Then add a Grade 11 to Grade 12 bridge note.

**Subject order within each pass:** Pure Mathematics, Physical Sciences, English HL, History, Business Studies, Tourism, Life Orientation, Religion Studies, Afrikaans FAL, AP Mathematics.

## 6. Files to create

- `research/README.md`: index of every file, status of every subject per pass, and the top things the user should check first.
- `research/BRIEF.md`: this file (leave it unchanged).
- `research/PROGRESS.md`: live progress log for resuming after an interruption.
- `research/ASSUMPTIONS.md`: every decision you made without asking, with the reason.
- `research/CHANGELOG.md`: corrections found in the verification and past-paper passes.
- `research/SOURCES.md`: every source used, grouped by subject, with URL, publisher, year and what it was used for.
- `research/EXTRA_SUBJECTS.md`: other subjects worth adding.
- One file per subject, as in section 2.

## 7. Quality bar

- A learner who has never seen the topic should be able to read your outline and know exactly what to learn, in what order, in how many lessons.
- Be specific. "Functions" is not a sub-topic. "Sketching hyperbolas of the form y = a/(x+p) + q with asymptotes" is.
- Prefer official terminology as used in CAPS and the papers.
- Use plain Markdown. Maths can be written as plain text or with `$...$` KaTeX syntax. Keep tables narrow so they stay readable.
- When two sources disagree, say so, say which you trust more and why.

## 8. Final summary

When the run ends (finished or out of budget), put at the top of `research/README.md`: what is done, what is weak, what's unverified, which subjects need the user's input, and the five most important things to check first. Then stop.
