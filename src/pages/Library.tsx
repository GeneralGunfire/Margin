import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowRight, BookOpen, Check, ChevronLeft, ChevronRight, Clock, Flag, Lock, Search } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { lessonById, lessonMinutes, lessonsForSubject, slugify, subjectTree, type Lesson, type TopicNode } from "@/lib/content";
import { useProgress } from "@/hooks/useProgress";
import { kicker } from "@/lib/styles";
import { Loading } from "@/components/ui/loading";
import { Meter, PageHead, Quiet, Ring } from "@/components/page";
import { Btn } from "@/components/ui/btn";
import type { Subject } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import type { Progress } from "@/lib/supabase";

/**
 * Library, organised as a drill-down (as in the Scholar app):
 *   /library                      subject cards
 *   /library/:subject             Part > Term > numbered topic cards with progress
 *   /library/:subject/:topic      sub-topics, each with its lesson cards
 *   /library/:subject/:topic/:lesson   the lesson (LessonPage)
 */
export default function Library() {
  const { subject: slug, topic: topicDir } = useParams();
  const { mySubjects } = useAuth();
  const { progress, loading } = useProgress();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ block: "start" });
  }, [hash, slug, topicDir, loading]);

  if (!slug) return <SubjectIndex subjects={mySubjects} progress={progress} loading={loading} />;

  const subject = mySubjects.find((s) => s.slug === slug);
  if (!subject) {
    return (
      <div>
        <PageHead kicker="Library" title="Subject not found" />
        <div className="mt-6 border-t border-border pt-5">
          <Quiet icon={<BookOpen className="size-4" />} title="That subject isn't in your list" note="Tick it in Settings to see it here." to="/settings" action="Open settings" />
        </div>
      </div>
    );
  }

  const tree = subjectTree(slug);
  const numbered = new Map<string, number>(); // topic id -> number, in ATP order across the subject
  tree.forEach((p) => p.terms.forEach((tm) => tm.topics.forEach((t) => numbered.set(t.id, numbered.size + 1))));

  /* ---- Topic page: lesson rows grouped by sub-topic + overview sidebar ---- */
  if (topicDir) {
    const flat = tree.flatMap((p) => p.terms.flatMap((tm) => tm.topics));
    const topic = flat.find((t) => t.dir === topicDir);
    if (!topic) {
      return (
        <div>
          <PageHead kicker="Library" title="Topic not found" />
          <div className="mt-6 border-t border-border pt-5">
            <Quiet icon={<BookOpen className="size-4" />} title="That topic doesn't exist" to={`/library/${slug}`} action={`Back to ${subject.name}`} />
          </div>
        </div>
      );
    }
    const n = numbered.get(topic.id) ?? 1;
    const live = topic.lessons.filter((l) => l.status === "live");
    const done = live.filter((l) => progress[l.id]?.done).length;
    const pct = live.length ? Math.round((100 * done) / live.length) : 0;
    const hasSubs = topic.subtopics.some((s) => s.title);
    const next = live.find((l) => !progress[l.id]?.done);
    const flagged = live.filter((l) => progress[l.id]?.flagged);
    const minsLeft = live.filter((l) => !progress[l.id]?.done).reduce((m, l) => m + lessonMinutes(l), 0);
    const left = minsLeft >= 60 ? `${Math.floor(minsLeft / 60)} h ${minsLeft % 60} min` : `${minsLeft} min`;
    const at = flat.findIndex((x) => x.id === topic.id);
    const hasLive = (x: TopicNode) => x.lessons.some((l) => l.status === "live");
    const prevTopic = flat.slice(0, at).reverse().find(hasLive);
    const nextTopic = flat.slice(at + 1).find(hasLive);
    const groups = hasSubs ? topic.subtopics : [{ id: "all", title: "", lessons: topic.lessons }];

    return (
      <div>
        <Link to={`/library/${slug}`} className="mb-4 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
          <ChevronLeft className="size-4" aria-hidden="true" /> {subject.name}
        </Link>
        <PageHead
          kicker={[topic.part, topic.term ? `Term ${topic.term}` : ""].filter(Boolean).join(", ") || "Topic"}
          title={`${n}. ${topic.title}`}
          sub={live.length ? `${live.length} ${live.length === 1 ? "lesson" : "lessons"}, ${done} done` : "Coming soon"}
        >
          {next && (
            <Btn variant="primary" asChild>
              <Link to={`/library/${next.id}`}>{done > 0 ? "Continue" : "Start"} <ArrowRight aria-hidden="true" /></Link>
            </Btn>
          )}
        </PageHead>

        <div className="mt-6 border-t border-border pt-6 lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-10">
          <div className="min-w-0 space-y-8">
            {groups.map((s, si) => {
              const sl = s.lessons.filter((l) => l.status === "live");
              const sd = sl.filter((l) => progress[l.id]?.done).length;
              return (
                <section key={s.id} id={s.title ? `sub-${s.id}` : undefined} className="scroll-mt-20">
                  {s.title && (
                    <div className={cn("mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 px-1", sl.length === 0 && "opacity-50")}>
                      <h2 className="text-sm font-semibold tracking-tight"><span className="mr-2 tabular-nums text-muted-foreground">{n}.{si + 1}</span>{s.title}</h2>
                      {sl.length ? <span className="text-[11px] tabular-nums text-muted-foreground">{sd}/{sl.length} done</span> : <ComingSoon />}
                    </div>
                  )}
                  <ul className="card divide-y divide-border overflow-hidden">
                    {s.lessons.map((l, i) => <LessonCard key={l.id} l={l} i={i} p={progress[l.id]} />)}
                  </ul>
                </section>
              );
            })}
          </div>

          <aside className="mt-10 lg:mt-0">
            <div className="space-y-6 lg:sticky lg:top-20">
              <div className="card flex items-center gap-4 p-4">
                <Ring value={done} max={live.length} size={84} stroke={7}>
                  <span className="text-lg font-semibold tabular-nums">{pct}%</span>
                </Ring>
                <div className="min-w-0 text-xs text-muted-foreground">
                  <p className="text-sm font-medium text-foreground tabular-nums">{done} of {live.length}</p>
                  <p>lessons done</p>
                  {next && <p className="mt-1.5">About {left} left</p>}
                </div>
              </div>

              {hasSubs && topic.subtopics.length > 1 && (
                <nav aria-label="Jump to sub-topic">
                  <h2 className={cn(kicker, "mb-2 px-1")}>In this topic</h2>
                  <ul className="divide-y divide-border">
                    {topic.subtopics.map((s, si) => {
                      const sl = s.lessons.filter((l) => l.status === "live");
                      return (
                        <li key={s.id}>
                          <a href={`#sub-${s.id}`} className="flex items-center justify-between gap-3 px-1 py-2 text-[13px] transition-colors hover:text-primary">
                            <span className="truncate"><span className="mr-2 tabular-nums text-muted-foreground">{n}.{si + 1}</span>{s.title}</span>
                            <span className="shrink-0 text-[11px] tabular-nums text-muted-foreground">{sl.length ? `${sl.filter((l) => progress[l.id]?.done).length}/${sl.length}` : "Soon"}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              )}

              {flagged.length > 0 && (
                <div>
                  <h2 className={cn(kicker, "mb-2 px-1")}>Struggling</h2>
                  <ul className="divide-y divide-border">
                    {flagged.map((l) => (
                      <li key={l.id}>
                        <Link to={`/library/${l.id}`} className="flex items-center gap-2 px-1 py-2 text-[13px] transition-colors hover:text-primary">
                          <Flag className="size-3.5 shrink-0 text-amber-500" aria-hidden="true" />
                          <span className="truncate">{l.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(prevTopic || nextTopic) && (
                <nav aria-label="Other topics" className="flex flex-col gap-2">
                  {prevTopic && (
                    <Link to={`/library/${slug}/${prevTopic.dir}`} className="card card-interactive group flex items-center gap-3 px-3.5 py-3">
                      <ChevronLeft className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                      <span className="min-w-0"><span className={cn(kicker, "block")}>Previous topic</span><span className="block truncate text-[13px] font-medium group-hover:text-primary">{prevTopic.title}</span></span>
                    </Link>
                  )}
                  {nextTopic && (
                    <Link to={`/library/${slug}/${nextTopic.dir}`} className="card card-interactive group flex items-center gap-3 px-3.5 py-3">
                      <span className="min-w-0 flex-1"><span className={cn(kicker, "block")}>Next topic</span><span className="block truncate text-[13px] font-medium group-hover:text-primary">{nextTopic.title}</span></span>
                      <ChevronRight className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    </Link>
                  )}
                </nav>
              )}
            </div>
          </aside>
        </div>
      </div>
    );
  }
  /* ---- Subject page: overview sidebar + Part > Term > topic rows ---- */
  const all = lessonsForSubject(slug);
  const done = all.filter((l) => progress[l.id]?.done).length;
  const pct = all.length ? Math.round((100 * done) / all.length) : 0;
  const hasParts = tree.some((p) => p.part);
  const topicCount = tree.flatMap((p) => p.terms.flatMap((tm) => tm.topics)).filter((t) => t.lessons.some((l) => l.status === "live")).length;
  const next = all.find((l) => !progress[l.id]?.done);
  const flagged = all.filter((l) => progress[l.id]?.flagged);
  const minsLeft = all.filter((l) => !progress[l.id]?.done).reduce((n, l) => n + lessonMinutes(l), 0);
  const left = minsLeft >= 60 ? `${Math.floor(minsLeft / 60)} h ${minsLeft % 60} min` : `${minsLeft} min`;

  // Jump links for the sidebar: parts when there are any, otherwise terms.
  const sections = hasParts
    ? tree.filter((p) => p.part).map((p) => {
        const ls = p.terms.flatMap((tm) => tm.topics.flatMap((x) => x.lessons)).filter((l) => l.status === "live");
        return { key: p.part, label: p.part, href: `#part-${slugify(p.part)}`, done: ls.filter((l) => progress[l.id]?.done).length, total: ls.length };
      })
    : tree.flatMap((p) => p.terms).filter((tm) => tm.term).map((tm) => {
        const ls = tm.topics.flatMap((x) => x.lessons).filter((l) => l.status === "live");
        return { key: String(tm.term), label: `Term ${tm.term}`, href: `#term--${tm.term}`, done: ls.filter((l) => progress[l.id]?.done).length, total: ls.length };
      });

  return (
    <div>
      <Link to="/library" className="mb-4 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        <ChevronLeft className="size-4" aria-hidden="true" /> Library
      </Link>
      <PageHead
        kicker={<span className="inline-flex items-center gap-2"><span aria-hidden="true" className="size-2 rounded-full" style={{ background: subject.color }} />Subject</span>}
        title={subject.name}
        sub={all.length ? `${topicCount} ${topicCount === 1 ? "topic" : "topics"}, ${done} of ${all.length} lessons done` : undefined}
      >
        {next && (
          <Btn variant="primary" asChild>
            <Link to={`/library/${next.id}`}>{done > 0 ? "Continue" : "Start"} <ArrowRight aria-hidden="true" /></Link>
          </Btn>
        )}
      </PageHead>

      {tree.length === 0 ? (
        <div className="mt-6 border-t border-border pt-5">
          <Quiet icon={<BookOpen className="size-4" />} title="No lessons yet" note={`Add Markdown files to content/${slug}/ (see the README).`} />
        </div>
      ) : (
        <div className="mt-6 border-t border-border pt-6 lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-10">
          <div className="min-w-0 space-y-10">
            {tree.map((p) => {
              const partLessons = p.terms.flatMap((t) => t.topics.flatMap((x) => x.lessons)).filter((l) => l.status === "live");
              const partDone = partLessons.filter((l) => progress[l.id]?.done).length;
              return (
                <section key={p.part} id={p.part ? `part-${slugify(p.part)}` : undefined} className="scroll-mt-20">
                  {p.part && (
                    <div className="mb-4 flex items-baseline justify-between gap-3">
                      <h2 className="text-lg font-semibold tracking-tight">{p.part}</h2>
                      <span className="text-xs tabular-nums text-muted-foreground">{partLessons.length ? `${partDone}/${partLessons.length} done` : "Coming soon"}</span>
                    </div>
                  )}
                  <div className="space-y-6">
                    {p.terms.map((tm) => {
                      const tl = tm.topics.flatMap((x) => x.lessons).filter((l) => l.status === "live");
                      const td = tl.filter((l) => progress[l.id]?.done).length;
                      return (
                        <div key={tm.term ?? "none"} id={tm.term ? `term-${slugify(p.part)}-${tm.term}` : undefined} className="scroll-mt-20">
                          {tm.term && (
                            <div className="mb-2 flex items-baseline justify-between gap-3 px-1">
                              <h3 className={kicker}>Term {tm.term}</h3>
                              <span className="text-[11px] tabular-nums text-muted-foreground">{tl.length ? `${td}/${tl.length} done` : "Coming soon"}</span>
                            </div>
                          )}
                          <div className="card divide-y divide-border overflow-hidden">
                            {tm.topics.map((tp) => <TopicCard key={tp.id} t={tp} n={numbered.get(tp.id) ?? 0} slug={slug} progress={progress} />)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          <aside className="mt-10 lg:mt-0">
            <div className="space-y-6 lg:sticky lg:top-20">
              <div className="card flex items-center gap-4 p-4">
                <Ring value={done} max={all.length} size={84} stroke={7}>
                  <span className="text-lg font-semibold tabular-nums">{pct}%</span>
                </Ring>
                <div className="min-w-0 text-xs text-muted-foreground">
                  <p className="text-sm font-medium text-foreground tabular-nums">{done} of {all.length}</p>
                  <p>lessons done</p>
                  {next && <p className="mt-1.5">About {left} of reading left</p>}
                </div>
              </div>

              {sections.length > 1 && (
                <nav aria-label="Jump to section">
                  <h2 className={cn(kicker, "mb-2 px-1")}>Sections</h2>
                  <ul className="divide-y divide-border">
                    {sections.map((s) => (
                      <li key={s.key}>
                        <a href={s.href} className="flex items-center justify-between gap-3 px-1 py-2 text-[13px] transition-colors hover:text-primary">
                          <span className="truncate">{s.label}</span>
                          <span className="shrink-0 text-[11px] tabular-nums text-muted-foreground">{s.done}/{s.total}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              {flagged.length > 0 && (
                <div>
                  <h2 className={cn(kicker, "mb-2 px-1")}>Struggling</h2>
                  <ul className="divide-y divide-border">
                    {flagged.map((l) => (
                      <li key={l.id}>
                        <Link to={`/library/${l.id}`} className="flex items-center gap-2 px-1 py-2 text-[13px] transition-colors hover:text-primary">
                          <Flag className="size-3.5 shrink-0 text-amber-500" aria-hidden="true" />
                          <span className="truncate">{l.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

function ComingSoon() {
  return <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground">Coming soon</span>;
}

/** A topic as a row: number, title, progress. Stub-only topics are greyed and not clickable. */
function TopicCard({ t, n, slug, progress }: { t: TopicNode; n: number; slug: string; progress: Record<string, Progress> }) {
  const live = t.lessons.filter((l) => l.status === "live");
  const done = live.filter((l) => progress[l.id]?.done).length;
  const subs = t.subtopics.filter((s) => s.title).length;
  const off = live.length === 0;
  const complete = !off && done === live.length;
  const body = (
    <>
      <span
        aria-hidden="true"
        className={cn("grid size-8 shrink-0 place-items-center rounded-lg text-xs font-semibold tabular-nums", complete ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground")}
      >
        {complete ? <Check className="size-4" strokeWidth={2.5} /> : n}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium group-hover:text-primary">{t.title}</span>
        <span className="mt-0.5 block text-[11px] text-muted-foreground">
          {off ? (subs > 0 ? `${subs} sub-topics planned` : "Planned") : `${live.length} ${live.length === 1 ? "lesson" : "lessons"}${subs > 0 ? `, ${subs} sub-topics` : ""}`}
        </span>
      </span>
      {off ? (
        <ComingSoon />
      ) : (
        <>
          <span className="hidden w-28 shrink-0 sm:block"><Meter pct={Math.round((100 * done) / live.length)} /></span>
          <span className="w-10 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground">{done}/{live.length}</span>
          <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </>
      )}
    </>
  );
  return off ? (
    <div id={`topic-${t.dir}`} aria-disabled="true" className="flex cursor-not-allowed select-none items-center gap-3.5 px-4 py-3.5 opacity-50">{body}</div>
  ) : (
    <Link id={`topic-${t.dir}`} to={`/library/${slug}/${t.dir}`} className="group flex items-center gap-3.5 px-4 py-3.5 transition-colors hover:bg-secondary/50">{body}</Link>
  );
}
/** A lesson as a row: number or tick, title, reading time, status. Stubs are inert and greyed. */
function LessonCard({ l, i, p }: { l: Lesson; i: number; p?: Progress }) {
  if (l.status === "stub") {
    return (
      <li aria-disabled="true" className="flex cursor-not-allowed select-none items-center gap-3.5 px-4 py-3 opacity-45">
        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-secondary text-muted-foreground"><Lock className="size-3.5" aria-hidden="true" /></span>
        <span className="min-w-0 flex-1 truncate text-sm">{l.title}</span>
        <ComingSoon />
      </li>
    );
  }
  return (
    <li>
      <Link to={`/library/${l.id}`} className="group flex items-center gap-3.5 px-4 py-3.5 transition-colors hover:bg-secondary/50">
        <span className={cn("grid size-8 shrink-0 place-items-center rounded-lg text-xs font-semibold tabular-nums", p?.done ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground")}>
          {p?.done ? <Check aria-label="Done" className="size-4" strokeWidth={2.5} /> : i + 1}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-medium group-hover:text-primary">{l.title}</span>
          <span className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground"><Clock className="size-3" aria-hidden="true" /> About {lessonMinutes(l)} min</span>
        </span>
        {p?.flagged && (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-medium text-amber-500">
            <Flag aria-label="Flagged as struggling" className="size-3" /> Struggling
          </span>
        )}
        <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </li>
  );
}
/* ---------- First page: the subjects overview ---------- */

type Filter = "all" | "progress" | "new" | "done";
const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "progress", label: "In progress" },
  { id: "new", label: "Not started" },
  { id: "done", label: "Completed" },
];

function SubjectIndex({ subjects, progress, loading }: { subjects: Subject[]; progress: Record<string, Progress>; loading: boolean }) {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const rows = useMemo(
    () =>
      subjects.map((s) => {
        const ls = lessonsForSubject(s.slug);
        const done = ls.filter((l) => progress[l.id]?.done).length;
        const topics = subjectTree(s.slug).flatMap((p) => p.terms.flatMap((t) => t.topics)).filter((t) => t.lessons.some((l) => l.status === "live")).length;
        return {
          s,
          total: ls.length,
          done,
          topics,
          pct: ls.length ? Math.round((100 * done) / ls.length) : 0,
          flagged: ls.filter((l) => progress[l.id]?.flagged).length,
          next: ls.find((l) => !progress[l.id]?.done),
        };
      }),
    [subjects, progress],
  );

  const totalLessons = rows.reduce((n, r) => n + r.total, 0);
  const totalDone = rows.reduce((n, r) => n + r.done, 0);

  // Resume: the subject you last finished a lesson in, and its next lesson.
  const resume = useMemo(() => {
    const last = Object.values(progress).filter((p) => p.done).sort((a, b) => b.updated_at.localeCompare(a.updated_at))[0];
    const lesson = last ? lessonById(last.lesson_id) : undefined;
    const row = lesson ? rows.find((r) => r.s.slug === lesson.subject) : undefined;
    return row?.next ? { row, lesson: row.next } : null;
  }, [progress, rows]);

  const shown = rows.filter((r) => {
    if (q && !r.s.name.toLowerCase().includes(q.trim().toLowerCase())) return false;
    if (filter === "progress") return r.done > 0 && r.done < r.total;
    if (filter === "new") return r.total > 0 && r.done === 0;
    if (filter === "done") return r.total > 0 && r.done === r.total;
    return true;
  });

  return (
    <div>
      <PageHead
        kicker="Library"
        title="Your subjects"
        sub={loading || subjects.length === 0 ? "Pick a subject to see its topics and lessons." : `${subjects.length} subjects, ${totalDone} of ${totalLessons} lessons done`}
      />

      {loading ? (
        <div className="mt-6 border-t border-border pt-5"><Loading variant="cards" rows={6} /></div>
      ) : subjects.length === 0 ? (
        <div className="mt-6 border-t border-border pt-5">
          <Quiet icon={<BookOpen className="size-4" />} title="No subjects ticked" note="Choose the subjects you take in Settings." to="/settings" action="Open settings" />
        </div>
      ) : (
        <>
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5">
            <div className="relative min-w-52 flex-1 sm:max-w-xs">
              <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search subjects"
                aria-label="Search subjects"
                className="h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm placeholder:text-muted-foreground transition-colors hover:border-muted-foreground/60 focus-visible:border-ring focus-visible:outline-2 focus-visible:outline-ring"
              />
            </div>
            <div className="flex flex-wrap gap-1.5 sm:ml-auto" role="group" aria-label="Filter subjects">
              {FILTERS.map((f) => (
                <Btn key={f.id} size="sm" variant={filter === f.id ? "secondary" : "ghost"} aria-pressed={filter === f.id} className={cn("rounded-full", filter === f.id && "text-foreground")} onClick={() => setFilter(f.id)}>
                  {f.label}
                </Btn>
              ))}
            </div>
          </div>

          {resume && (
            <Link to={`/library/${resume.lesson.id}`} className="card card-interactive group mt-5 flex items-center gap-4 px-5 py-3.5">
              <span className="min-w-0 flex-1">
                <span className={kicker}>Continue</span>
                <span className="mt-0.5 block truncate text-sm font-semibold group-hover:text-primary">{resume.lesson.title}</span>
                <span className="block truncate text-xs text-muted-foreground">{resume.row.s.name}, {resume.lesson.topic}</span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          )}

          {shown.length === 0 ? (
            <div className="mt-6 border-t border-border pt-5">
              <Quiet icon={<Search className="size-4" />} title="No subjects match" note="Try a different search or filter." />
            </div>
          ) : (
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {shown.map(({ s, total, done, topics, pct, flagged, next }) => {
                const off = total === 0;
                const body = (
                  <>
                    <span className="flex items-center gap-3">
                      <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-muted-foreground">
                        <BookOpen className="size-[18px]" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2">
                          <span aria-hidden="true" className="size-2 shrink-0 rounded-full" style={{ background: s.color }} />
                          <span className="truncate text-sm font-semibold group-hover:text-primary">{s.name}</span>
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {off ? "Lessons are on the way" : `${topics} ${topics === 1 ? "topic" : "topics"}, ${total} ${total === 1 ? "lesson" : "lessons"}`}
                        </span>
                      </span>
                      {off ? (
                        <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-[10px] font-medium text-muted-foreground">Coming soon</span>
                      ) : (
                        <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      )}
                    </span>

                    {!off && (
                      <span className="block">
                        <span className="flex items-center gap-3">
                          <Meter pct={pct} />
                          <span className="w-9 shrink-0 text-right text-xs font-medium tabular-nums">{pct}%</span>
                        </span>
                        <span className="mt-2 flex items-center justify-between gap-3 text-[11px] text-muted-foreground">
                          <span className="min-w-0 truncate">{next ? <>Next: {next.title}</> : <span className="inline-flex items-center gap-1 text-primary"><Check className="size-3" aria-hidden="true" /> All done</span>}</span>
                          <span className="shrink-0 tabular-nums">
                            {flagged > 0 && <span className="mr-2 inline-flex items-center gap-1 text-amber-500"><Flag className="size-3" aria-hidden="true" />{flagged}</span>}
                            {done}/{total}
                          </span>
                        </span>
                      </span>
                    )}
                  </>
                );
                return (
                  <li key={s.id} className="flex">
                    {off ? (
                      <div aria-disabled="true" className="card flex w-full cursor-not-allowed select-none flex-col gap-4 p-5 opacity-55">{body}</div>
                    ) : (
                      <Link to={`/library/${s.slug}`} className="card card-interactive group flex w-full flex-col gap-4 p-5">{body}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
}