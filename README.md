# Margin

A private study site for two people covering the CAPS Grade 11 syllabus (2027).
React + Vite + TypeScript, Tailwind v4, Supabase (auth, Postgres, storage), KaTeX, FullCalendar, Recharts.

## 1. Supabase setup (once)

1. Create a Supabase project.
2. **Auth > Sign In / Providers > Email**: turn **off** "Allow new users to sign up" (sign-ups disabled). The database also refuses a third profile as a safety net.
3. **SQL Editor**: paste and run [supabase/schema.sql](supabase/schema.sql) **before creating users** (it installs the trigger that creates each profile).
4. **Authentication > Users > Add user** (tick "Auto confirm"): create the two users. Optionally set `display_name` in user metadata; otherwise it is the email prefix and you can edit it in Settings.
5. Run `npm run sync-content`, then paste [supabase/content-sync.sql](supabase/content-sync.sql) into the SQL editor. Repeat whenever you add lessons.
6. Copy `.env.example` to `.env.local` and fill in **Project Settings > API**: Project URL and the `anon` public key. Never put the service-role key in the app.

## 2. Run

```
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

## 3. Adding lessons

Create `content/<subject-slug>/<topic-slug>/<lesson-slug>.md`. Subject slugs: `ap-mathematics`, `pure-mathematics`,
`physical-sciences`, `english-hl`, `afrikaans-fal`, `history`, `religion-studies`, `tourism`, `business-studies`, `life-orientation`.

```
---
title: Newton's Laws of Motion
subject: physical-sciences
topic: Mechanics          # topic title (shown in the Library)
part: Algebra             # optional, e.g. Algebra / Calculus for AP Maths
order: 1
pages: ["Platinum p. 40-52"]
---
Markdown, $inline$ and $$display$$ KaTeX, tables, images (put files in public/content-images/).
```

Then `npm run sync-content` and run the generated SQL (progress rows reference the lesson index). Content is bundled at build time, so redeploy after changes.

### Find a video phrase (`youtube_query`)

Every lesson page has a small "Find a video" row: a search phrase the learner can copy into YouTube, plus an "Open in YouTube" link. It only builds text and a link; nothing is fetched from YouTube and no specific video is recommended.

Add an optional field to the lesson's frontmatter:

```
youtube_query: Grade 11 solving quadratic inequalities
```

- **If the field is present**, it is shown exactly as written.
- **If it is missing**, the phrase is generated as `Grade 11 <lesson title> <subject> South Africa` (the tail is dropped if it would pass 80 characters).

Rules for writing a phrase:

- Short and specific to this exact lesson: 4 to 9 words, plain words, no punctuation tricks.
- Use the topic's real name as CAPS and teachers use it, and include "Grade 11". Add "South Africa" or "CAPS" only when it helps the results.
- For maths and sciences, name the specific skill ("Grade 11 solving quadratic inequalities"), not just the chapter.
- Do not include video titles, channel names or links.

Run `npm run check-content` to validate. It warns (and never fails) when a phrase is empty, over 80 characters, or contains a URL. `npm run sync-content` prints the same warnings.

## 4. Deploy

Any static host (Vercel, Netlify, Cloudflare Pages): build command `npm run build`, output `dist`, set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. Add a rewrite of all paths to `/index.html` (SPA routing). Add the deployed URL under Supabase **Auth > URL Configuration**.

## Structure

- `src/index.css` all theme tokens (dark/light colours, radius, calendar and lesson styling)
- `src/components/ui/ui.tsx` shared primitives; `src/components/Layout.tsx` side nav / mobile bottom bar
- `src/pages/*` one file per page; `src/lib/content.ts` the lesson loader
