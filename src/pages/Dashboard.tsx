import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Flag } from "lucide-react";
import { supabase, type EventRow, type Paper } from "@/lib/supabase";
import { useAuth } from "@/lib/auth";
import { liveLessons as lessons } from "@/lib/content";
import { useProgress } from "@/hooks/useProgress";
import { greeting, relativeDay, startOfDay, streak, weeklyCounts } from "@/lib/stats";
import { cn } from "@/lib/utils";
import { Loading } from "@/components/ui/loading";
import { Meter } from "@/components/page";
import { useWeeklyGoal } from "@/lib/prefs";

const time = (iso: string) => new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
const today = new Date().toLocaleDateString("en-ZA", { weekday: "long", day: "numeric", month: "long" });

export default function Dashboard() {
  const { profile, mySubjects, subjects } = useAuth();
  const { progress, loading: pLoading } = useProgress();
  const [events, setEvents] = useState<EventRow[] | null>(null);
  const [papers, setPapers] = useState<Paper[] | null>(null);
  const [goal] = useWeeklyGoal();

  useEffect(() => {
    const from = startOfDay();
    const to = new Date(from);
    to.setDate(to.getDate() + 30);
    supabase
      .from("events")
      .select("*")
      .gte("starts_at", from.toISOString())
      .lt("starts_at", to.toISOString())
      .order("starts_at")
      .then(({ data }) => setEvents((data as EventRow[]) ?? []));
    supabase
      .from("past_papers")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(3)
      .then(({ data }) => setPapers((data as Paper[]) ?? []));
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
    const lastDone = [...done].sort((a, b) => progress[b.id].updated_at.localeCompare(progress[a.id].updated_at))[0];
    const undone = (slug?: string) => mineLessons.find((l) => !progress[l.id]?.done && (!slug || l.subject === slug));
    const weeks = weeklyCounts(doneDates, 2);
    return {
      total: mineLessons.length,
      done: done.length,
      pct: mineLessons.length ? Math.round((100 * done.length) / mineLessons.length) : 0,
      streak: streak(doneDates),
      thisWeek: weeks[weeks.length - 1].n,
      next: undone(lastDone?.subject) ?? undone(),
      flagged: Object.values(progress)
        .filter((p) => p.flagged)
        .map((p) => ({ p, l: mineLessons.find((l) => l.id === p.lesson_id) }))
        .filter((x) => x.l),
      rows,
    };
  }, [progress, mySubjects]);

  const todayKey = startOfDay().toDateString();
  const upcomingEvents = (events ?? []).slice(0, 4);
  const firstName = profile?.display_name?.split(" ")[0];

  return (
    <div className="space-y-10">
      {/* Header */}
      <header>
        <p className="text-xs text-muted-foreground">{today}</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {greeting()}{firstName ? `, ${firstName}` : ""}.
        </h1>
        <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
          <span className="tabular-nums text-foreground/85">{d.done} of {d.total} lessons</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{d.thisWeek}/{goal} this week</span>
          {d.streak > 0 && (
            <>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{d.streak}-day streak</span>
            </>
          )}
        </p>
      </header>

      {/* Top workspace: Up Next + Schedule */}
      <div className="grid gap-10 border-t border-border pt-6 lg:grid-cols-12">
        <section className="lg:col-span-7">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">Up next</h2>
            <Link to="/library" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Browse library
            </Link>
          </div>

          {pLoading ? (
            <Loading rows={2} />
          ) : d.next ? (
            <Link
              to={`/library/${d.next.id}`}
              className="group block rounded-lg border border-border p-5 transition-colors hover:border-foreground/25 hover:bg-secondary/20"
            >
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="size-2 rounded-full" style={{ background: bySlug(d.next.subject)?.color }} aria-hidden="true" />
                <span>{bySlug(d.next.subject)?.name}</span>
              </span>
              <p className="mt-2 text-lg font-semibold tracking-tight text-foreground group-hover:text-primary">{d.next.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{d.next.topic}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary">
                Continue <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </span>
            </Link>
          ) : d.total === 0 ? (
            <p className="text-sm text-muted-foreground">
              No subjects selected.{" "}
              <Link to="/settings" className="text-primary hover:underline">Choose subjects</Link>
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">All available lessons completed.</p>
          )}
        </section>

        <section className="border-t border-border pt-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">Upcoming</h2>
            <Link to="/calendar" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Calendar
            </Link>
          </div>

          {events === null ? (
            <Loading rows={2} />
          ) : upcomingEvents.length === 0 ? (
            <p className="text-xs text-muted-foreground">
              Nothing scheduled in the next 30 days.{" "}
              <Link to="/calendar" className="text-primary hover:underline">Add event</Link>
            </p>
          ) : (
            <ul className="divide-y divide-border">
              {upcomingEvents.map((e) => {
                const isToday = startOfDay(new Date(e.starts_at)).toDateString() === todayKey;
                return (
                  <li key={e.id} className="flex items-baseline justify-between gap-3 py-2.5 first:pt-0">
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-medium text-foreground">{e.title}</p>
                      <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <span className="size-1.5 rounded-full" style={{ background: subjectOf(e.subject_id)?.color ?? "var(--border)" }} aria-hidden="true" />
                        <span className="capitalize">{e.kind}</span>
                        {subjectOf(e.subject_id) && <span>· {subjectOf(e.subject_id)!.name}</span>}
                      </p>
                    </div>
                    <span className={cn("shrink-0 text-[11px] tabular-nums", isToday ? "font-medium text-primary" : "text-muted-foreground")}>
                      {isToday ? time(e.starts_at) : relativeDay(e.starts_at)}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>

      {/* Subjects */}
      <section className="border-t border-border pt-6">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">Subjects</h2>
          <Link to="/library" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            All lessons
          </Link>
        </div>

        {pLoading ? (
          <Loading rows={2} />
        ) : d.rows.length === 0 ? (
          <p className="text-xs text-muted-foreground">
            No subjects selected. <Link to="/settings" className="text-primary hover:underline">Open settings</Link>
          </p>
        ) : (
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {d.rows.map((r) => (
              <li key={r.id}>
                <Link to={`/library/${r.slug}`} className="group block py-0.5">
                  <div className="mb-1.5 flex items-center gap-2 text-[13px]">
                    <span aria-hidden="true" className="size-2 shrink-0 rounded-full" style={{ background: r.color }} />
                    <span className="min-w-0 flex-1 truncate font-medium text-foreground group-hover:text-primary">{r.name}</span>
                    <span className="tabular-nums text-xs text-muted-foreground">{r.done}/{r.total}</span>
                  </div>
                  <Meter pct={r.pct} color={r.color} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Flagged & Recent Papers — quiet compact footer strip */}
      {(d.flagged.length > 0 || (papers && papers.length > 0)) && (
        <div className="grid gap-10 border-t border-border pt-6 lg:grid-cols-2">
          {d.flagged.length > 0 && (
            <section>
              <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                Flagged ({d.flagged.length})
              </h2>
              <ul className="divide-y divide-border">
                {d.flagged.map(({ p, l }) => (
                  <li key={p.lesson_id} className="first:pt-0">
                    <Link to={`/library/${l!.id}`} className="group flex items-start gap-2 py-2">
                      <Flag aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-amber-500" />
                      <span className="min-w-0 flex-1">
                        <span className="block text-[13px] font-medium group-hover:text-primary">{l!.title}</span>
                        {p.note && <span className="block truncate text-[11px] text-muted-foreground">{p.note}</span>}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {papers && papers.length > 0 && (
            <section>
              <div className="mb-3 flex items-baseline justify-between">
                <h2 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">Recent papers</h2>
                <Link to="/papers" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                  View all
                </Link>
              </div>
              <ul className="divide-y divide-border">
                {papers.map((p) => (
                  <li key={p.id} className="first:pt-0">
                    <Link to="/papers" className="group flex items-center justify-between gap-3 py-2">
                      <span className="flex min-w-0 items-center gap-2">
                        <span className="size-2 shrink-0 rounded-full" style={{ background: subjectOf(p.subject_id)?.color }} aria-hidden="true" />
                        <span className="truncate text-[13px] font-medium group-hover:text-primary">
                          {subjectOf(p.subject_id)?.name} {p.year}
                        </span>
                      </span>
                      <span className="shrink-0 text-[11px] text-muted-foreground">
                        Paper {p.paper}{p.type === "memo" ? " · Memo" : ""}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
