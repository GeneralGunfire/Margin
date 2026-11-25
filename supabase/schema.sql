-- =====================================================================
-- Margin — database schema, RLS, storage and seed data
-- Run ONCE in the Supabase SQL editor (Dashboard > SQL Editor > New query)
-- BEFORE you create the two users. Safe to re-run (idempotent where possible).
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. TABLES
-- ---------------------------------------------------------------------

-- One row per auth user. Created automatically by a trigger (section 3).
create table if not exists public.profiles (
  id           uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  public_tag   text not null default '',        -- shown on the public landing page (e.g. initials)
  avatar_url   text                              -- storage path inside the "avatars" bucket
);

-- Reference data: the ten subjects. Readable by signed-in users only.
create table if not exists public.subjects (
  id    serial primary key,
  slug  text unique not null,                    -- matches /content/<slug>/ folders
  name  text not null,
  color text not null,                           -- hex, used for tags and calendar
  sort  int  not null default 0
);

-- Which subjects each user has ticked in Settings.
create table if not exists public.user_subjects (
  user_id    uuid not null references auth.users(id) on delete cascade,
  subject_id int  not null references public.subjects(id) on delete cascade,
  primary key (user_id, subject_id)
);

-- Index of topics found in /content. Filled by `npm run sync-content` (see README).
create table if not exists public.topics (
  id         text primary key,                   -- "<subject-slug>/<topic-slug>"
  subject_id int  not null references public.subjects(id) on delete cascade,
  title      text not null,
  part       text,                               -- e.g. 'Algebra' / 'Calculus' for AP Maths
  sort       int  not null default 0
);

-- Index of lesson files found in /content. The text lives in the repo, not here.
create table if not exists public.lessons (
  id       text primary key,                     -- "<subject>/<topic>/<lesson>" (file path without .md)
  topic_id text not null references public.topics(id) on delete cascade,
  title    text not null,
  sort     int  not null default 0
);

-- Per-user completion / struggling flags.
create table if not exists public.lesson_progress (
  user_id    uuid not null references auth.users(id) on delete cascade,
  lesson_id  text not null references public.lessons(id) on delete cascade,
  done       boolean not null default false,
  flagged    boolean not null default false,
  note       text,
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

-- Per-user calendar events.
create table if not exists public.events (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null default auth.uid() references auth.users(id) on delete cascade,
  subject_id int references public.subjects(id) on delete set null,
  title      text not null,
  kind       text not null default 'study' check (kind in ('exam','test','study','deadline')),
  starts_at  timestamptz not null,
  ends_at    timestamptz,
  all_day    boolean not null default false,
  notes      text,
  created_at timestamptz not null default now()
);
create index if not exists events_user_start_idx on public.events(user_id, starts_at);

-- Past papers shared between both users. The PDF itself is in the "papers" bucket.
create table if not exists public.past_papers (
  id          uuid primary key default gen_random_uuid(),
  file_path   text unique not null,              -- path inside the "papers" bucket
  title       text,
  subject_id  int  not null references public.subjects(id),
  year        int  not null,
  paper       int  not null default 1,           -- paper number
  term        int  check (term between 1 and 4),
  type        text not null default 'paper' check (type in ('paper','memo')),
  uploaded_by uuid not null default auth.uid() references auth.users(id) on delete cascade,
  created_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------
-- 2. SEED: subjects (colours per design brief; no red)
-- ---------------------------------------------------------------------
insert into public.subjects (slug, name, color, sort) values
  ('ap-mathematics',      'AP Mathematics',                  '#64b5f6', 1),
  ('pure-mathematics',    'Pure Mathematics',                '#64b5f6', 2),
  ('physical-sciences',   'Physical Sciences',               '#689f38', 3),
  ('english-hl',          'English Home Language',           '#ffa000', 4),
  ('afrikaans-fal',       'Afrikaans First Additional Language', '#ffa000', 5),
  ('history',             'History',                         '#df6035', 6),
  ('religion-studies',    'Religion Studies',                '#df6035', 7),
  ('tourism',             'Tourism',                         '#df6035', 8),
  ('business-studies',    'Business Studies',                '#284167', 9),
  ('life-orientation',    'Life Orientation',                '#a0a0a0', 10)
on conflict (slug) do update set name = excluded.name, color = excluded.color, sort = excluded.sort;

-- ---------------------------------------------------------------------
-- 3. TRIGGER: new auth user -> profile row (+ all subjects ticked by default)
--    Also a safety net: refuses a 3rd account (the site is for exactly two people).
-- ---------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if (select count(*) from public.profiles) >= 2 then
    raise exception 'Margin is limited to two users';
  end if;

  insert into public.profiles (id, display_name, public_tag)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)),
    upper(left(split_part(new.email, '@', 1), 2))
  );

  insert into public.user_subjects (user_id, subject_id)
  select new.id, id from public.subjects;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Keep lesson_progress.updated_at fresh (used for streaks).
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;
drop trigger if exists lesson_progress_touch on public.lesson_progress;
create trigger lesson_progress_touch before update on public.lesson_progress
  for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------
-- 4. ROW-LEVEL SECURITY — enabled on every table
-- ---------------------------------------------------------------------
alter table public.profiles        enable row level security;
alter table public.subjects        enable row level security;
alter table public.user_subjects   enable row level security;
alter table public.topics          enable row level security;
alter table public.lessons         enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.events          enable row level security;
alter table public.past_papers     enable row level security;

-- profiles: both users may read both profiles (needed for "uploaded by");
-- the profile holds only display_name, public_tag and avatar path. Edit own only.
drop policy if exists profiles_read   on public.profiles;
drop policy if exists profiles_insert on public.profiles;
drop policy if exists profiles_update on public.profiles;
create policy profiles_read   on public.profiles for select to authenticated using (true);
create policy profiles_insert on public.profiles for insert to authenticated with check (id = auth.uid());
create policy profiles_update on public.profiles for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

-- subjects / topics / lessons: read-only reference data for signed-in users.
-- (No insert/update policies: content is synced via the SQL editor, which bypasses RLS.)
drop policy if exists subjects_read on public.subjects;
drop policy if exists topics_read   on public.topics;
drop policy if exists lessons_read  on public.lessons;
create policy subjects_read on public.subjects for select to authenticated using (true);
create policy topics_read   on public.topics   for select to authenticated using (true);
create policy lessons_read  on public.lessons  for select to authenticated using (true);

-- user_subjects / lesson_progress / events: strictly own rows.
drop policy if exists user_subjects_own on public.user_subjects;
create policy user_subjects_own on public.user_subjects for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists lesson_progress_own on public.lesson_progress;
create policy lesson_progress_own on public.lesson_progress for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists events_own on public.events;
create policy events_own on public.events for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- past_papers: both users read everything and upload; you can delete only your own.
drop policy if exists papers_read   on public.past_papers;
drop policy if exists papers_insert on public.past_papers;
drop policy if exists papers_delete on public.past_papers;
create policy papers_read   on public.past_papers for select to authenticated using (true);
create policy papers_insert on public.past_papers for insert to authenticated with check (uploaded_by = auth.uid());
create policy papers_delete on public.past_papers for delete to authenticated using (uploaded_by = auth.uid());

-- ---------------------------------------------------------------------
-- 5. STORAGE: two private buckets + policies
-- ---------------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types) values
  ('avatars', 'avatars', false, 2097152,  array['image/png','image/jpeg','image/webp']),
  ('papers',  'papers',  false, 31457280, array['application/pdf'])
on conflict (id) do update set public = false;

-- avatars: each user manages files under their own folder "<uid>/..."
drop policy if exists avatars_own on storage.objects;
create policy avatars_own on storage.objects for all to authenticated
  using      (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

-- papers: both users read and upload; delete only what is in their own folder "<uid>/..."
drop policy if exists papers_obj_read   on storage.objects;
drop policy if exists papers_obj_insert on storage.objects;
drop policy if exists papers_obj_delete on storage.objects;
create policy papers_obj_read   on storage.objects for select to authenticated
  using (bucket_id = 'papers');
create policy papers_obj_insert on storage.objects for insert to authenticated
  with check (bucket_id = 'papers' and (storage.foldername(name))[1] = auth.uid()::text);
create policy papers_obj_delete on storage.objects for delete to authenticated
  using (bucket_id = 'papers' and (storage.foldername(name))[1] = auth.uid()::text);

-- ---------------------------------------------------------------------
-- 6. LANDING PAGE AGGREGATES (the ONLY thing readable by anon)
--    Returns one object per user: public tag, lessons done, streak, and
--    % complete per ticked subject. No names, ids, notes, flags, events or papers.
-- ---------------------------------------------------------------------
create or replace function public.landing_stats()
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(jsonb_agg(u order by u.tag), '[]'::jsonb) from (
    select
      p.public_tag as tag,
      (select count(*) from lesson_progress lp where lp.user_id = p.id and lp.done) as lessons_done,
      -- streak: consecutive days (Africa/Johannesburg) ending today or yesterday with a completed lesson
      (
        with days as (
          select distinct (lp.updated_at at time zone 'Africa/Johannesburg')::date as d
          from lesson_progress lp where lp.user_id = p.id and lp.done
        ), grp as (
          select d, d - (row_number() over (order by d))::int as g from days
        ), runs as (
          select max(d) as last_day, count(*) as len from grp group by g
        )
        select coalesce(max(len), 0) from runs
        where last_day >= (now() at time zone 'Africa/Johannesburg')::date - 1
      ) as streak,
      (
        select coalesce(jsonb_agg(jsonb_build_object(
          'slug', s.slug, 'name', s.name, 'color', s.color,
          'done', coalesce(d.done, 0), 'total', coalesce(t.total, 0),
          'pct', case when coalesce(t.total,0) = 0 then 0
                      else round(100.0 * coalesce(d.done,0) / t.total) end
        ) order by s.sort), '[]'::jsonb)
        from user_subjects us
        join subjects s on s.id = us.subject_id
        left join lateral (
          select count(*) as total from lessons l join topics tp on tp.id = l.topic_id
          where tp.subject_id = s.id
        ) t on true
        left join lateral (
          select count(*) as done from lesson_progress lp
          join lessons l on l.id = lp.lesson_id join topics tp on tp.id = l.topic_id
          where lp.user_id = p.id and lp.done and tp.subject_id = s.id
        ) d on true
        where us.user_id = p.id
      ) as subjects
    from profiles p
  ) u;
$$;

revoke all on function public.landing_stats() from public;
grant execute on function public.landing_stats() to anon, authenticated;

-- Lock the default privileges: anon gets nothing on tables.
revoke all on all tables in schema public from anon;
