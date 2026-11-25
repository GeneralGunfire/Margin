# Margin: project status

Snapshot after merging all work into `main`. See [README.md](../README.md) for how to run and set up the project.

## Where things stand

- **Branch:** everything lives on `main`. The branches `research-content`, `content-pure-maths-first-lesson`, `physics-first-lesson` and `feature-video-search` are all fully merged into it and were kept.
- **History note:** `main` did not exist before this merge. It was created at the point where the research branch and the app branches diverged, then `research-content` and `feature-video-search` were merged in that order. `physics-first-lesson` had no commits of its own (it pointed at the same commit as the Maths branch), so merging it changed nothing. The first Physics lesson was committed on `feature-video-search`.
- **Build:** `npm run build` passes (3036 modules). A crawl of the production build (105 pages: every route, topic and lesson) found no errors, against a mock backend.

## What is done

### App

| Area | State |
| --- | --- |
| Auth | Email and password sign-in against Supabase. No sign-up. "Keep me signed in", forgot-password email, reset-password page, session-expiry message, protected routes, return to the page you came from. `/` redirects to `/login` (there is no landing page). |
| Layout | Collapsible animated sidebar (Dashboard, Calendar, Library, Past Papers, Settings, Sign out), top bar with page title, mobile drawer. Dark mode only. |
| Dashboard | Greeting, stat row, 12-week activity chart, 5-week heatmap, weekly goal ring, up next, progress by subject, next exam countdown, today and coming up, flagged lessons, recent papers, this-week strip. |
| Calendar | Month and week views, add and edit events (exam, test, study, deadline) in a dialog with custom date and time pickers, side panel with upcoming events, monthly counts and a subject legend. Private to each user. |
| Library | Three levels: subjects overview (search, filters, continue bar), subject page (part, term, topic rows, overview sidebar), topic page (sub-topic groups of lesson rows). Stub lessons show as "Coming soon". |
| Lesson page | Rendered Markdown with KaTeX, step-by-step worked examples, rules, definitions, questions, diagrams. Done and flag-as-struggling toggles with an optional note, reading-progress bar, on-this-page contents with scroll highlighting, previous and next lesson (also left and right arrow keys), and a "Find a video" search-phrase row. |
| Past Papers | Upload PDFs (private bucket, signed URLs), view, download, filter by subject, year, term and type, search, shows who uploaded. |
| Settings | Display name, public tag, profile picture (cropped square in the browser), subject checklist (unticked subjects disappear from Library, Past Papers filters and Calendar), weekly goal, change password, sign out. |
| Database | `supabase/schema.sql`: tables, row-level security on every table, private `avatars` and `papers` buckets, profile trigger (also refuses a third account), seed subjects. |

### Content

**Pure Mathematics: 28 of 77 lessons complete.** All of Term 1 is written; everything else is a stub.

| Term | Topic | Live | Total |
| --- | --- | --- | --- |
| 1 | Exponents and surds | 9 | 9 |
| 1 | Equations and inequalities | 12 | 12 |
| 1 | Trigonometry: identities, reduction formulae and equations | 7 | 7 |
| 2 | Euclidean geometry | 0 | 5 |
| 2 | Analytical geometry | 0 | 6 |
| 2 | Functions | 0 | 15 |
| 3 | Trigonometry: sine, cosine and area rules | 0 | 4 |
| 3 | Statistics | 0 | 4 |
| 3 | Probability | 0 | 4 |
| 3 | Finance, growth and decay | 0 | 4 |
| 4 | Number patterns | 0 | 3 |
| 4 | Measurement revision | 0 | 2 |
| 4 | Revision: algebra, trigonometry | 0 | 2 |

**The next topic to write is Euclidean geometry, Term 2, starting with `chords-and-the-centre`.**

**Physical Sciences:** one lesson has been written, **"Resultant of perpendicular vectors"** (Physics, Term 1, Vectors in two dimensions). It includes the diagram toolkit and an interactive-graphic placeholder. `content/physical-sciences/mechanics/newtons-laws.md` is also marked live, but it is the original sample lesson from the project scaffold, not part of the written plan.

**All other subjects (AP Maths, English HL, Afrikaans FAL, History, Religion Studies, Tourism, Business Studies, Life Orientation): no lessons yet.** They appear in Settings and the Library filters but their pages are empty.

78 of the 79 lesson files (stubs included) have a hand-written `youtube_query` phrase. "Resultant of perpendicular vectors" does not, so it uses the automatic fallback phrase ("Grade 11 Resultant of perpendicular vectors Physical Sciences South Africa"). Add a phrase there when that lesson is next edited.

## What is not done (next steps)

1. **Write the next lessons.** Pure Maths Term 2 (Euclidean geometry first, then analytical geometry and functions), then Terms 3 and 4. Physical Sciences: the rest of Vectors in two dimensions, then the other planned topics.
2. **Start the other subjects.** The research is ready for most of them (see below). AP Maths is blocked on the IEB outline.
3. **Real interactive graphics.** `content/NEEDS_INTERACTIVE.md` lists the candidates (draggable vectors, parameter sliders, unit circle, circle geometry). Today only a placeholder exists.
4. **Test progress saving against the real Supabase project** (see verification gaps).
5. **Decide what to do with the old landing aggregate.** The landing page was removed, but `landing_stats()` in the schema is still granted to `anon`. Either drop the function or build the page it served.
6. **Code-split the bundle.** The production build is one JavaScript file of about 2 MB (a Vite size warning).
7. **Decide on the placeholders on the login page.** "Continue with Google" and "Create Account" are inert: they only show a message. Remove them or wire them up.
8. **Tests.** There are no automated tests (`npm test` is a placeholder). The checks so far were manual browser runs.
9. **Light mode.** The theme is dark-only. The light tokens are still in `src/index.css` but nothing switches to them.

## Research

`research/` is a set of Markdown notes from several research passes. It is not used by the app, but the lesson plan comes from it. Start at [research/README.md](../research/README.md).

**What exists.** Per-subject syllabus skeletons and depth notes for nine subjects (topic summaries, prerequisites, exam style, common mistakes, lesson breakdowns, visuals needed); a resource map for Pure Maths and Physical Sciences; past-paper coverage tables; a strategy, glossary and formulas file; and a History rebuild from a Via Afrika guide with a verified timeline.

**Verified.**
- Pure Maths and Physical Sciences resources: 155 Siyavula Grade 11 pages were fetched and their titles checked. YouTube titles and channels were confirmed by metadata only.
- History: all five topics rebuilt from the Via Afrika Grade 11 guide; 17 dates spot-checked (14 disagreements logged).
- Past papers: Pure Maths (Eastern Cape Grade 11 November memos 2023 to 2026), Physical Sciences (2024 to 2026), History and Business Studies (EC November 2024).
- A link check of 203 unique URLs (all reachable except one bot-checked site and one placeholder).

**Weak or unverified.**
- AP Maths: the IEB syllabus, exam structure and topic list were not found. Only the user's own study PDF was used.
- Resources for English HL, History, Business Studies, Tourism, LO, Religion Studies and Afrikaans FAL are few and mostly unverified. No YouTube video has been watched.
- No past papers for English HL, Tourism, LO, Religion Studies or Afrikaans FAL.
- The History timeline still has 92 entries marked UNVERIFIED.
- A full "sceptical teacher" re-read of every file has not been done. Hours per topic, some assessment weights and some paper durations are unverified.
- Literature set texts (English HL, Afrikaans FAL) and the Religion Studies textbook are unknown.

**Open questions (from `research/README.md`).**
1. **History:** which Grade 11 curriculum applies in 2027? The legacy five topics are what 2024 papers and the 2023/24 ATP use. A draft amended CAPS (March 2026) has entirely different topics and no implementation date.
2. **Physical Sciences:** CAPS text versus the 2023/24 ATP. Optics, wavefronts and diffraction, water chemistry and the lithosphere are in the CAPS text but not in the ATP or the Eastern Cape 2024 to 2026 exams. The default is the ATP topics unless the school says otherwise.
3. **Pure Maths:** the ATP term order differs from the 2011 CAPS pace setter, and Measurement is examined (9 to 11 marks) although the ATP calls it "revision". The content here follows the ATP order.
4. **Business Studies:** two 150-mark, 2-hour papers (ATP and EC 2024) rather than CAPS's single 300-mark paper.
5. **AP Maths:** needs the IEB outline or the textbook's table of contents.
6. Smaller flags: Tourism market segments (seven in CAPS, five in the ATP); English HL and Afrikaans FAL set texts for 2027; LO facts to recheck; which province's papers the school writes (the past-paper tables are Eastern Cape samples).

**Merge note.** `research-content` and the research commits on the app branch both edited the History notes. Git merged them without conflicts, but nobody has read the merged History files end to end.

## Known issues

- **Production crash when the project path has a lowercase drive letter (fixed).** Building or previewing from Git Bash (`c:\...`) instead of PowerShell (`C:\...`) bundled 13 duplicate modules, including a second copy of React, and every page failed with `Cannot read properties of null (reading 'useState')` (a blank page). Cause: Vite's root came from the shell's working directory while the `@` alias came from the config file path, and the two spelled the drive letter differently. Fix: `vite.config.ts` now uses one canonical (real) path for both. After the fix the lowercase build is byte-identical to the uppercase one and a 105-page crawl of the production build passes. `npm run dev` also works from both spellings. If the blank page ever returns, check for `Invalid hook call` or `reading 'useState'` first.
- **First `npm run dev` start is slow** (over 30 seconds on a cold start) while Vite pre-bundles the large dependencies. Later starts are quick.
- **`sync-content` also indexes stub lessons.** `content-sync.sql` currently inserts all 79 lessons, including the 49 stubs, into the `lessons` table. The app ignores stubs for totals, but any database totals (such as `landing_stats()`) will count them.
- **`supabase/content-sync-compact.sql`** is a shorter version of the same index that is committed next to the real one. It is not generated by `npm run sync-content`, so it can go out of date. Regenerate or delete it.
- **`filestructure.txt`** is a directory listing regenerated by a tool outside the repo, so it often shows as modified. It is not part of the app.
- **Vite prints a "native config" warning** on every build (`VITE_CONFIG_NATIVE_IGNORE_WARNING`). It is harmless.
- **Users created before `schema.sql` was run have no profile.** Run this once to fix them (safe to repeat):
  ```sql
  insert into public.profiles (id, display_name, public_tag)
  select id, split_part(email,'@',1), upper(left(split_part(email,'@',1),2)) from auth.users
  on conflict (id) do nothing;
  insert into public.user_subjects (user_id, subject_id)
  select u.id, s.id from auth.users u cross join public.subjects s on conflict do nothing;
  ```

## Verification gaps (what has not been proven)

- **Progress saving has only been tested against a mock backend.** Marking lessons done, flagging them and the notes were exercised in a browser run with a mocked Supabase API. They have not been verified end to end against the real project (row-level security on `lesson_progress`, the foreign key to the lesson index, and the dashboard numbers that depend on it).
- **The production preview crash** (above) was reproduced and fixed, but only against the mock backend. A production build against the real Supabase project has not been crawled.
- **Not tested on a real phone.** Phone layouts were checked with browser emulation at 390px wide (no sideways scroll, tap target sizes, wrapping). Clipboard copy on the "Find a video" row was tested in desktop Chromium, including the no-clipboard fallback, but not on iOS Safari.
- **Supabase features not verified live by this review:** password-reset emails, avatar and paper uploads, signed URLs. Sign-in against the real project has been confirmed by the owner.
- **No automated tests** exist; everything above was checked by hand.
