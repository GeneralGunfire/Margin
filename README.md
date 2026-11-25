# Margin

A private study site for two people covering the South African CAPS **Grade 11** syllabus for 2027. It has a lesson library (written as Markdown files in this repo), a calendar, a shared past-papers store, and per-person progress tracking. There are exactly two accounts, both created by hand in Supabase. There is no sign-up.

Current progress, known issues and next steps are in [docs/PROJECT_STATUS.md](docs/PROJECT_STATUS.md).

## Stack

- **App:** React 19, Vite 8, TypeScript, React Router 7, Tailwind CSS v4 (Modern Minimal theme), Geist font
- **UI building blocks:** hand-written shadcn-style components (Radix Slot, class-variance-authority), an animated collapsible sidebar, custom select, date, time, dialog and popover components (built on `motion`)
- **Backend:** Supabase (email and password auth, Postgres with row-level security, private storage buckets). The browser only ever uses the public anon key.
- **Maths:** KaTeX via `remark-math` and `rehype-katex`. **Calendar:** FullCalendar v6. **Charts:** Recharts.
- **Lessons:** Markdown files in `content/`, bundled at build time (not stored in the database)

## Run it

```
npm install
npm run dev        # http://localhost:5173 (the first start is slow while Vite pre-bundles dependencies)
npm run build      # type-check and production build into dist/
npm run preview    # serve the production build
```

On Windows you can start it from PowerShell or Git Bash. The project path may be spelled `C:\...` or `c:\...` depending on the shell. `vite.config.ts` uses one canonical spelling so both work (see Known issues in the status doc).

## Supabase setup (once)

1. Create a Supabase project.
2. **Authentication > Sign In / Providers > Email:** turn **off** "Allow new users to sign up".
3. **SQL Editor:** run [supabase/schema.sql](supabase/schema.sql) **before creating any users**. It creates the tables, row-level security, the two private storage buckets (`avatars`, `papers`), the profile trigger and the subject seed data. The trigger also refuses a third account.
4. **Authentication > Users > Add user** (tick "Auto confirm"): create the two users. If you created users before running the script, run the backfill block described in the status doc.
5. Run `npm run sync-content`, then paste [supabase/content-sync.sql](supabase/content-sync.sql) into the SQL editor. (`content-sync-compact.sql` is the same data in a shorter form.) Repeat whenever lessons are added or renamed. Progress rows point at this lesson index.
6. Copy `.env.example` to `.env.local` and fill in:
   ```
   VITE_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
   Use the **anon / publishable** key from Project Settings > API. Never put the service-role key in this app. `.env.local` is git-ignored.

## Folder structure

```
src/
  pages/        Login, ForgotPassword, ResetPassword, Dashboard, CalendarPage, Library (3 levels), LessonPage, PastPapers, SettingsPage
  components/
    ui/         buttons (Btn), inputs, select, dialog, popover, date/time pickers, checkbox, file field, loading skeletons, animated sidebar
    auth/       sign-in layout and fields
    lesson/     lesson renderer (steps, rules, questions, definitions, diagrams) and the "Find a video" row
    diagram/    SVG diagram toolkit used by lessons
    Layout.tsx  app shell (sidebar and top bar), page.tsx (page header, stat, module, ring, meter)
  lib/          supabase client, auth, content loader, styles (shared class strings), prefs, stats, date helpers
  hooks/        useProgress, useAvatarUrl
content/        lesson Markdown files:  content/<subject>/<topic>/<lesson>.md
public/         static files, including public/content-images/ for lesson images
research/       curriculum research notes (not part of the app): see below
supabase/       schema.sql (run once), content-sync.sql (lesson index, regenerate when content changes)
scripts/        sync-content.mjs (builds the SQL and validates youtube_query phrases)
docs/           PROJECT_STATUS.md
```

## How the content works

Each lesson is one Markdown file with frontmatter. The folder names decide the structure: `content/<subject-slug>/<topic-folder>/<lesson>.md`.

Subject slugs: `ap-mathematics`, `pure-mathematics`, `physical-sciences`, `english-hl`, `afrikaans-fal`, `history`, `religion-studies`, `tourism`, `business-studies`, `life-orientation`.

```
---
title: Factorise and solve
youtube_query: Grade 11 solving quadratic equations by factorising
subject: pure-mathematics
topic: Equations and inequalities
part: Algebra
term: 1
subtopic: Quadratic equations: factorising and the formula
order: 101
status: live
pages: ["Textbook p. 40-52"]
---
```

| Field | Meaning |
| --- | --- |
| `title` | Lesson title |
| `subject` | Subject slug (defaults to the folder name) |
| `topic` | Topic title shown in the Library (defaults to the folder name) |
| `part` | Optional grouping above topics, for example `Algebra` and `Geometry` for Pure Maths, `Physics` and `Chemistry` for Physical Sciences |
| `term` | 1 to 4, groups topics inside a part |
| `subtopic` | Optional group inside a topic. Lessons with the same `subtopic` sit together |
| `order` | Sort order across the subject (lower first) |
| `status` | `live` (default) or `stub` |
| `pages` | Optional textbook page references |
| `youtube_query` | Optional search phrase for the "Find a video" row (see below) |

**Stubs.** A file with `status: stub` is a placeholder. It shows greyed out as "Coming soon", cannot be opened or marked done, and does not count toward progress totals. The Library navigation (part, term, topic, sub-topic) is built from all files, including stubs, so the skeleton of a subject can be laid out before the lessons are written.

**Lesson blocks.** Inside the Markdown, fenced blocks render as rich elements:

- ` ```steps ` worked examples with a "Next step" button (preferred over animation)
- ` ```questions ` practice questions
- ` ```rule ` and ` ```formula ` highlighted rules and formulas
- ` ```definition ` and ` ```worked ` definition and worked-example cards
- ` ```diagram ` an SVG diagram from `src/components/diagram`
- A blockquote starting `> **What you'll learn:**` renders as a callout
- KaTeX: `$inline$` and `$$display$$`; GitHub tables; images from `public/content-images/`

**Syncing.** `npm run sync-content` reads `content/` and writes `supabase/content-sync.sql` (topics and lessons). Paste it into the Supabase SQL editor after adding or renaming lessons. `npm run check-content` validates without writing.

### Find a video (`youtube_query`)

Every live lesson page has a small "Find a video" row: a search phrase to copy into YouTube, plus an "Open in YouTube" link. It builds text and a link only. Nothing is fetched from YouTube and no specific video is recommended.

- If `youtube_query` is present, it is shown exactly as written.
- If it is missing, the phrase is generated as `Grade 11 <lesson title> <subject> South Africa` (the tail is dropped if it would pass 80 characters).

Rules for writing a phrase:

- Short and specific to this exact lesson: 4 to 9 words, plain words, no punctuation tricks.
- Use the topic's real name as CAPS and teachers use it, and include "Grade 11". Add "South Africa" or "CAPS" only when it helps the results.
- For maths and sciences, name the specific skill ("Grade 11 solving quadratic inequalities"), not just the chapter.
- Do not include video titles, channel names or links.

`npm run check-content` warns (and never fails) when a phrase is empty, over 80 characters, or contains a URL.

## Research

`research/` holds the curriculum research that the content is built from: per-subject syllabus structure, topic depth, resources, past-paper coverage and a verified History timeline. See [research/README.md](research/README.md) and the summary in [docs/PROJECT_STATUS.md](docs/PROJECT_STATUS.md).

## Design rules

- **Dark mode only.** Modern Minimal theme tokens live in `src/index.css`: background `#171717`, foreground `#e5e5e5`, primary `#3b82f6` (white text on it), secondary and card `#262626`, accent `#1e3a8a`, muted `#1f1f1f`, muted text `#a3a3a3`, border `#404040`, ring `#3b82f6`, destructive `#ef4444`. Radius 0.375rem. Font: Geist.
- **Subject colours** (separate from the UI colours): Maths (AP and Pure) `#64b5f6`; Physical Sciences `#689f38`; English HL and Afrikaans FAL `#ffa000`; History, Religion Studies and Tourism `#df6035`; Business Studies `#284167` (light text); Life Orientation `#a0a0a0`. **Never red for a subject.** Red is only for errors and destructive actions.
- **Components:** use the shared pieces instead of one-off styling. Buttons come from `Btn` / `buttonClass` (`src/lib/styles.ts`); page layout from `src/components/page.tsx`; messages from `Note`; loading states from `Loading` and `Spinner`. No native `<select>`: use the custom `Select`. Dialogs, popovers and pickers render in a portal.
- **Layout:** thin dividers and small spaced-capital labels rather than heavy cards. The Library is a drill-down (subject, topic, lesson) with numbered cards, progress and reading time.
- **Motion:** subtle, and switched off for reduced-motion users. No emojis in the interface.
- **Mobile:** nothing may scroll sideways; tap targets are at least 44px where it matters.
- **Lesson graphs:** SVG or PNG on the app's dark grey `#171717`, light lines and text, no overlapping or clipped labels.
- **Lesson writing:** own words, answers checked, worked examples in `steps` blocks, practice in `questions` blocks, "Further help" only from verified rows of `research/resources-pure-maths-physical-sciences.md`.

## Deploy

Any static host (Vercel, Netlify, Cloudflare Pages): build command `npm run build`, output `dist`, set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. Add a rewrite of all paths to `/index.html` (single-page app routing). Add the deployed URL under Supabase **Auth > URL Configuration** so password-reset links work. Lessons are bundled at build time, so redeploy after content changes.
