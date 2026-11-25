import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarClock, CheckCircle2, Flag, GraduationCap, Sparkles } from "lucide-react";
import { supabase, type EventRow, type Paper, type Profile } from "@/lib/supabase";
import { useAuth } from "@/lib/auth";
import { liveLessons as lessons } from "@/lib/content";
import { useProgress } from "@/hooks/useProgress";
import { dayGrid, greeting, relativeDay, startOfDay, streak, weeklyCounts } from "@/lib/stats";
import { chip } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { Loading } from "@/components/ui/loading";
import { Meter, Mod, PageHead, Quiet, Ring, Stat, useCount, useReady } from "@/components/page";
import { useWeeklyGoal } from "@/lib/prefs";

const time = (iso: string) => new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
const today = new Date().toLocaleDateString("en-ZA", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

export default function Dashboard() {
  const { profile, mySubjects, subjects } = useAuth();
  const { progress, loading: pLoading } = useProgress();
  const [events, setEvents] = useState<EventRow[] | null>(null);
  const [papers, setPapers] = useState<Paper[] | null>(null);
  const [paperCount, setPaperCount] = useState(0);
  const [people, setPeople] = useState<Record<string, Profile>>({});
  const ready = useReady();
  const [goal] = useWeeklyGoal();

  useEffect(() => {
    const from = startOfDay();
    const to = new Date(from);
    to.setDate(to.getDate() + 30);
    supabase.from("events").select("*").gte("starts_at", from.toISOString()).lt("starts_at", to.toISOString()).order("starts_at")
      .then(({ data }) => setEvents((data as EventRow[]) ?? []));
    supabase.from("past_papers").select("*").order("created_at", { ascending: false }).limit(5)
      .then(({ data }) => setPapers((data as Paper[]) ?? []));
    supabase.from("past_papers").select("id", { count: "exact", head: true }).then(({ count }) => setPaperCount(count ?? 0));
    supabase.from("profiles").select("*")
      .then(({ data }) => setPeople(Object.fromEntries(((data as Profile[]) ?? []).map((p) => [p.id, p]))));
  }, []);

  const subjectOf = (id: number | null) => subjects.find((s) => s.id === id);
  const bySlug = (slug: string) => subjects.find((s) => s.slug === slug);

  const d = useMemo(() => {
    const mine = new Set(mySubjects.map((s) => s.slug));
    const mineLessons = lessons.filter((l) => mine.has(l.subject));
    const done = mineLessons.filter((l) => progress[l.id]?.done);
    const doneDates = Object.values(progress).filter((p) => p.done).map((p) => p.updated_at);
    const rows = mySubjects.map((s) => {
      const ls = lessons.filter((l) => l.subject === s.slug);
      const n = ls.filter((l) => progress[l.id]?.done).length;
      return { ...s, done: n, total: ls.length, pct: ls.length ? Math.round((100 * n) / ls.length) : 0 };
    });
    // Resume where you last worked; otherwise the first lesson you haven't done.
    const lastDone = [...done].sort((a, b) => progress[b.id].updated_at.localeCompare(progress[a.id].updated_at))[0];
    const undone = (slug?: string) => mineLessons.find((l) => !progress[l.id]?.done && (!slug || l.subject === slug));
    const weeks = weeklyCounts(doneDates, 12);
    const grid = dayGrid(doneDates, 5);
    return {
      total: mineLessons.length,
      done: done.length,
      pct: mineLessons.length ? Math.round((100 * done.length) / mineLessons.length) : 0,
      streak: streak(doneDates),
      next: undone(lastDone?.subject) ?? undone(),
      flagged: Object.values(progress)
        .filter((p) => p.flagged)
        .map((p) => ({ p, l: mineLessons.find((l) => l.id === p.lesson_id) }))
        .filter((x) => x.l),
      rows,
      weeks,
      grid,
      maxWeek: Math.max(1, ...weeks.map((w) => w.n)),
      maxDay: Math.max(1, ...grid.map((g) => g.n)),
      month: grid.reduce((a, g) => a + g.n, 0),
    };
  }, [progress, mySubjects]);

  const todayKey = startOfDay().toDateString();
  const todays = (events ?? []).filter((e) => startOfDay(new Date(e.starts_at)).toDateString() === todayKey);
  const upcoming = (events ?? []).filter((e) => startOfDay(new Date(e.starts_at)).toDateString() !== todayKey).slice(0, 5);
  const thisWeek = d.weeks[d.weeks.length - 1].n;
  const lastWeek = d.weeks[d.weeks.length - 2].n;
  const headline = useCount(thisWeek);
  const nextExam = (events ?? []).find((e) => (e.kind === "exam" || e.kind === "test") && new Date(e.starts_at) >= new Date());
  const examDays = nextExam ? Math.max(0, Math.round((startOfDay(new Date(nextExam.starts_at)).getTime() - startOfDay().getTime()) / 86_400_000)) : 0;
  const delta = thisWeek - lastWeek;
  const firstName = profile?.display_name?.split(" ")[0];

  return (
    <div>
      <PageHead kicker={today} title={`${greeting()}${firstName ? `, ${firstName}` : ""}.`} sub="CAPS Grade 11, 2027">
        {[["Calendar", "/calendar"], ["Library", "/library"], ["Past papers", "/papers"]].map(([t, to]) => (
          <Link key={to} to={to} className={chip}>{t}</Link>
        ))}
      </PageHead>

      <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-5 sm:grid-cols-3 lg:grid-cols-6">
        <Stat k="Progress" value={d.pct} suffix="%" to="/library" note={`${d.done} of ${d.total} lessons`} />
        <Stat k="Lessons done" value={d.done} to="/library" note={d.total ? `${d.total - d.done} to go` : "none added yet"} />
        <Stat k="Study streak" value={d.streak} note={d.streak === 1 ? "day in a row" : "days in a row"} />
        <Stat k="Flagged" value={d.flagged.length} to="/library" note={d.flagged.length ? "worth another look" : "nothing flagged"} />
        <Stat k="Today" value={todays.length} to="/calendar" note={todays.length === 1 ? "event" : "events"} />
        <Stat k="Papers" value={paperCount} to="/papers" note="shared so far" />
      </dl>

      <div className="mt-8 grid gap-x-10 gap-y-8 lg:grid-cols-12">
        <Mod title="Activity, last 12 weeks" span="lg:col-span-6">
          <p className="flex flex-wrap items-baseline gap-x-2.5">
            <span className="text-2xl font-semibold tabular-nums tracking-tight">{pLoading ? "-" : headline}</span>
            <span className="text-xs text-muted-foreground">
              lessons this week{!pLoading && delta !== 0 ? `, ${delta > 0 ? "+" : ""}${delta} on last week` : ""}
            </span>
          </p>
          <div className="mt-4 flex h-28 items-end gap-1 sm:h-32" role="img" aria-label={`Lessons completed per week: ${d.weeks.map((w) => w.n).join(", ")}`}>
            {d.weeks.map((w, i) => (
              <div key={w.start} className="group flex h-full flex-1 flex-col justify-end" title={`Week of ${w.label}: ${w.n} ${w.n === 1 ? "lesson" : "lessons"}`}>
                <div
                  className={cn("w-full rounded-t-[3px] transition-[height,background-color] duration-700 ease-out motion-reduce:transition-none", i === d.weeks.length - 1 ? "bg-primary" : "bg-accent group-hover:bg-primary/80")}
                  style={{ height: ready && !pLoading ? `${Math.max(w.n ? 4 : 1, (w.n / d.maxWeek) * 100)}%` : "1%", transitionDelay: `${i * 40}ms` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-1.5 flex gap-1 text-[10px] text-muted-foreground">
            {d.weeks.map((w, i) => <span key={w.start} className="flex-1 truncate text-center">{i % 3 === 0 ? w.label : ""}</span>)}
          </div>
        </Mod>

        <Mod title="Last five weeks" span="lg:col-span-3">
          <p className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold tabular-nums tracking-tight">{pLoading ? "-" : d.month}</span>
            <span className="text-xs text-muted-foreground">lessons done</span>
          </p>
          <div className="mt-4 grid grid-cols-7 gap-1 text-[9px] text-muted-foreground">
            {d.grid.slice(0, 7).map((g) => <span key={g.key} className="text-center uppercase">{g.initial}</span>)}
            {d.grid.map((g, i) => (
              <div
                key={g.key}
                title={`${g.title}: ${g.n} ${g.n === 1 ? "lesson" : "lessons"}`}
                className={cn("aspect-square rounded-[3px] border transition-opacity duration-500 motion-reduce:transition-none", g.today ? "border-foreground" : "border-transparent", g.future ? "bg-muted/40" : g.n === 0 ? "bg-secondary" : "bg-primary")}
                style={{ opacity: ready ? (g.future ? 0.5 : g.n === 0 ? 1 : 0.3 + 0.7 * (g.n / d.maxDay)) : 0, transitionDelay: `${i * 10}ms` }}
              />
            ))}
          </div>
        </Mod>

        <Mod title="Weekly goal" link="Change" to="/settings" span="lg:col-span-3">
          <div className="flex items-center gap-5">
            <Ring value={thisWeek} max={goal}>
              <span>
                <span className="block text-2xl font-semibold tabular-nums leading-none">{pLoading ? "-" : thisWeek}</span>
                <span className="block text-[10px] text-muted-foreground">of {goal}</span>
              </span>
            </Ring>
            <p className="text-xs leading-5 text-muted-foreground">
              {thisWeek >= goal ? "Goal reached. Nice work." : `${goal - thisWeek} more ${goal - thisWeek === 1 ? "lesson" : "lessons"} to hit this week's goal.`}
            </p>
          </div>
        </Mod>
        <Mod title="Progress by subject" link="Library" to="/library" span="lg:col-span-6">
          {pLoading ? (
            <Loading rows={4} />
          ) : d.rows.length === 0 ? (
            <Quiet icon={<Sparkles className="size-4" />} title="No subjects ticked" to="/settings" action="Choose subjects" />
          ) : (
            <ul className="divide-y divide-border">
              {d.rows.map((r) => (
                <li key={r.id} className="first:pt-0">
                  <Link to={`/library/${r.slug}`} className="group block py-2.5">
                    <div className="mb-1.5 flex items-center gap-2.5 text-[13px]">
                      <span aria-hidden="true" className="size-2 shrink-0 rounded-full" style={{ background: r.color }} />
                      <span className="min-w-0 flex-1 truncate font-medium group-hover:text-primary">{r.name}</span>
                      <span className="tabular-nums text-muted-foreground">{r.done}/{r.total}</span>
                      <span className="w-9 text-right tabular-nums">{r.pct}%</span>
                    </div>
                    <Meter pct={r.pct} color={r.color} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Mod>

        <Mod title="Up next" link="Library" to="/library" span="lg:col-span-3">
          {pLoading ? (
            <Loading rows={1} />
          ) : d.next ? (
            <Link to={`/library/${d.next.id}`} className="group block">
              <span className="flex items-center gap-2 text-[11px] text-muted-foreground">
                <span className="size-2 rounded-full" style={{ background: bySlug(d.next.subject)?.color }} aria-hidden="true" />
                {bySlug(d.next.subject)?.name}{d.next.part ? `, ${d.next.part}` : ""}
              </span>
              <p className="mt-1.5 text-base font-semibold leading-snug tracking-tight group-hover:text-primary">{d.next.title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{d.next.topic}{d.next.pages.length ? `. ${d.next.pages.join(", ")}` : ""}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">Open lesson <ArrowUpRight className="size-3" aria-hidden="true" /></span>
            </Link>
          ) : d.total === 0 ? (
            <Quiet icon={<Sparkles className="size-4" />} title="No lessons yet" note="Tick your subjects in Settings, or add lesson files." to="/settings" action="Open settings" />
          ) : (
            <Quiet icon={<CheckCircle2 className="size-4" />} title="All caught up" note="You've finished every lesson in your subjects." />
          )}
        </Mod>

        <Mod title="Next exam or test" link="Calendar" to="/calendar" span="lg:col-span-3">
          {events === null ? (
            <Loading rows={1} />
          ) : !nextExam ? (
            <Quiet icon={<GraduationCap className="size-4" />} title="No exams or tests booked" note="Add one to the calendar and the countdown starts here." to="/calendar" action="Add an event" />
          ) : (
            <div>
              <p className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold tabular-nums tracking-tight">{examDays}</span>
                <span className="text-sm text-muted-foreground">{examDays === 1 ? "day" : "days"} to go</span>
              </p>
              <p className="mt-2 text-[13px] font-medium leading-snug">{nextExam.title}</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="size-1.5 rounded-full" style={{ background: subjectOf(nextExam.subject_id)?.color ?? "var(--border)" }} aria-hidden="true" />
                {new Date(nextExam.starts_at).toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" })}
              </p>
            </div>
          )}
        </Mod>
        <Mod title="Today" link="Calendar" to="/calendar" span="lg:col-span-3">
          {events === null ? (
            <Loading rows={2} />
          ) : todays.length === 0 ? (
            <Quiet icon={<CalendarClock className="size-4" />} title="Nothing scheduled" note="Plan a study session or a test." to="/calendar" action="Open calendar" />
          ) : (
            <ul className="divide-y divide-border">
              {todays.map((e) => (
                <li key={e.id} className="py-2.5 first:pt-0">
                  <p className="text-[13px] font-medium leading-snug">{e.title}</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-[11px] tabular-nums text-muted-foreground">
                    <span className="size-1.5 rounded-full" style={{ background: subjectOf(e.subject_id)?.color ?? "var(--border)" }} aria-hidden="true" />
                    {time(e.starts_at)}, {e.kind}{subjectOf(e.subject_id) ? `, ${subjectOf(e.subject_id)!.name}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </Mod>

        <Mod title="Coming up" span="lg:col-span-3">
          {events === null ? (
            <Loading rows={2} />
          ) : upcoming.length === 0 ? (
            <Quiet icon={<CalendarClock className="size-4" />} title="Nothing in 30 days" note="Upcoming tests and deadlines show here." />
          ) : (
            <ul className="divide-y divide-border">
              {upcoming.map((e) => (
                <li key={e.id} className="py-2.5 first:pt-0">
                  <p className="text-[13px] font-medium leading-snug">{e.title}</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <span className="size-1.5 rounded-full" style={{ background: subjectOf(e.subject_id)?.color ?? "var(--border)" }} aria-hidden="true" />
                    {relativeDay(e.starts_at)}, {new Date(e.starts_at).toLocaleDateString(undefined, { day: "numeric", month: "short" })}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </Mod>

        <Mod title="Flagged as struggling" span="lg:col-span-6">
          {pLoading ? (
            <Loading rows={2} />
          ) : d.flagged.length === 0 ? (
            <Quiet icon={<Flag className="size-4" />} title="Nothing flagged" note="Flag a lesson you find hard and it shows up here." />
          ) : (
            <ul className="divide-y divide-border">
              {d.flagged.map(({ p, l }) => (
                <li key={p.lesson_id} className="first:pt-0">
                  <Link to={`/library/${l!.id}`} className="group flex items-start gap-3 py-2.5">
                    <Flag aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-amber-500" />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[13px] font-medium group-hover:text-primary">{l!.title}</span>
                      <span className="block truncate text-[11px] text-muted-foreground">{[bySlug(l!.subject)?.name, p.note].filter(Boolean).join(". ")}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Mod>

        <Mod title="Recent papers" link="Past papers" to="/papers" span="lg:col-span-6">
          {papers === null ? (
            <Loading rows={3} />
          ) : papers.length === 0 ? (
            <Quiet icon={<Sparkles className="size-4" />} title="No papers yet" note="Upload one and it appears for both of you." to="/papers" action="Upload a paper" />
          ) : (
            <ul className="divide-y divide-border">
              {papers.map((p) => (
                <li key={p.id} className="first:pt-0">
                  <Link to="/papers" className="group flex items-center gap-3 py-2.5">
                    <span className="size-2 shrink-0 rounded-full" style={{ background: subjectOf(p.subject_id)?.color }} aria-hidden="true" />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[13px] font-medium group-hover:text-primary">{subjectOf(p.subject_id)?.name} {p.year}</span>
                      <span className="block text-[11px] text-muted-foreground">Paper {p.paper}{p.term ? `, term ${p.term}` : ""}{p.type === "memo" ? ", memo" : ""}</span>
                    </span>
                    <span className="shrink-0 text-[11px] text-muted-foreground">{people[p.uploaded_by]?.display_name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Mod>

        <Mod title="This week" span="lg:col-span-6">
          <ul className="grid grid-cols-7 gap-2" aria-label="Lessons done each day this week">
            {d.grid.slice(-7).map((g) => (
              <li key={g.key} className="flex flex-col items-center gap-1.5" title={`${g.title}: ${g.n} ${g.n === 1 ? "lesson" : "lessons"}`}>
                <span className="text-[10px] uppercase text-muted-foreground">{g.initial}</span>
                <span className={cn("grid size-9 place-items-center rounded-full border text-xs tabular-nums", g.n > 0 ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground", g.today && g.n === 0 && "border-foreground text-foreground", g.future && "opacity-40")}>
                  {g.n > 0 ? g.n : ""}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            {d.streak > 0 ? `${d.streak}-day study streak. Finish a lesson today to keep it going.` : "Finish a lesson today to start a streak."}
          </p>
        </Mod>      </div>
    </div>
  );
}

