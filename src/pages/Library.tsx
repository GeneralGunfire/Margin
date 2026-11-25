import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowUpRight, BookOpen, Check, ChevronLeft, ChevronRight, Flag, Lock, Search } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { lessonById, lessonMinutes, lessonsForSubject, slugify, subjectTree, type Lesson, type TopicNode } from "@/lib/content";
import { useProgress } from "@/hooks/useProgress";
import { Loading } from "@/components/ui/loading";
import { Meter, PageHead, Quiet } from "@/components/page";
import { Btn } from "@/components/ui/btn";
import type { Progress, Subject } from "@/lib/supabase";
import { cn } from "@/lib/utils";

/**
 * Library, organised as a clean drill-down:
 *   /library                         subject list
 *   /library/:subject                Part > Term > numbered topic rows
 *   /library/:subject/:topic         sub-topics with lesson rows
 *   /library/:subject/:topic/:lesson lesson view (LessonPage)
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
  const numbered = new Map<string, number>();
  tree.forEach((p) => p.terms.forEach((tm) => tm.topics.forEach((t) => numbered.set(t.id, numbered.size + 1))));

  /* ---- Topic view: sub-topics + lesson rows + unboxed right rail ---- */
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
    const hasSubs = topic.subtopics.some((s) => s.title);
    const next = live.find((l) => !progress[l.id]?.done);
    const minsLeft = live.filter((l) => !progress[l.id]?.done).reduce((m, l) => m + lessonMinutes(l), 0);
    const left = minsLeft >= 60 ? `${Math.floor(minsLeft / 60)} h ${minsLeft % 60} min` : `${minsLeft} min`;
    const at = flat.findIndex((x) => x.id === topic.id);
    const hasLive = (x: TopicNode) => x.lessons.some((l) => l.status === "live");
    const prevTopic = flat.slice(0, at).reverse().find(hasLive);
    const nextTopic = flat.slice(at + 1).find(hasLive);
    const groups = hasSubs ? topic.subtopics : [{ id: "all", title: "", lessons: topic.lessons }];

    return (
      <div>
        <nav aria-label="Breadcrumb" className="mb-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            <li><Link to="/library" className="transition-colors hover:text-foreground">Library</Link></li>
            <li aria-hidden="true"><ChevronRight className="size-3 opacity-60" /></li>
            <li><Link to={`/library/${slug}`} className="transition-colors hover:text-foreground">{subject.name}</Link></li>
          </ol>
        </nav>

        <PageHead
          kicker={[topic.part, topic.term ? `Term ${topic.term}` : ""].filter(Boolean).join(" · ") || "Topic"}
          title={`${n}. ${topic.title}`}
          sub={
            live.length
              ? `${live.length} ${live.length === 1 ? "lesson" : "lessons"} · ${done} done${next ? ` · ${left} left` : ""}`
              : "Coming soon"
          }
        >
          {next && (
            <Btn size="sm" variant="primary" asChild>
              <Link to={`/library/${next.id}`}>
                {done > 0 ? "Continue" : "Start"} <ArrowUpRight aria-hidden="true" />
              </Link>
            </Btn>
          )}
        </PageHead>

        <div className="mt-6 space-y-8 border-t border-border pt-6">
          {groups.map((s, si) => {
            const sl = s.lessons.filter((l) => l.status === "live");
            const sd = sl.filter((l) => progress[l.id]?.done).length;
            return (
              <section key={s.id} id={s.title ? `sub-${s.id}` : undefined} className="scroll-mt-20">
                {s.title && (
                  <div className={cn("mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1", sl.length === 0 && "opacity-50")}>
                    <h2 className="text-sm font-semibold tracking-tight text-foreground">
                      <span className="mr-2 tabular-nums text-muted-foreground">{n}.{si + 1}</span>
                      {s.title}
                    </h2>
                    <span className="text-[11px] tabular-nums text-muted-foreground">
                      {sl.length ? `${sd}/${sl.length} done` : "Coming soon"}
                    </span>
                  </div>
                )}
                <ul className="divide-y divide-border border-y border-border">
                  {s.lessons.map((l, i) => <LessonRow key={l.id} l={l} i={i} p={progress[l.id]} />)}
                </ul>
              </section>
            );
          })}

          {(prevTopic || nextTopic) && (
            <nav aria-label="Other topics" className="flex items-center justify-between gap-4 border-t border-border pt-5">
              {prevTopic ? (
                <Link to={`/library/${slug}/${prevTopic.dir}`} className="group flex min-w-0 items-center gap-2 text-left text-muted-foreground transition-colors hover:text-foreground">
                  <ChevronLeft className="size-4 shrink-0 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.08em]">Previous topic</span>
                    <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary">{prevTopic.title}</span>
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {nextTopic ? (
                <Link to={`/library/${slug}/${nextTopic.dir}`} className="group flex min-w-0 items-center gap-2 text-right text-muted-foreground transition-colors hover:text-foreground">
                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.08em]">Next topic</span>
                    <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary">{nextTopic.title}</span>
                  </span>
                  <ChevronRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              ) : (
                <span />
              )}
            </nav>
          )}
        </div>
      </div>
    );
  }

  /* ---- Subject view: Part > Term > hairline topic rows ---- */
  const all = lessonsForSubject(slug);
  const done = all.filter((l) => progress[l.id]?.done).length;
  const hasParts = tree.some((p) => p.part);
  const topicCount = tree.flatMap((p) => p.terms.flatMap((tm) => tm.topics)).filter((t) => t.lessons.some((l) => l.status === "live")).length;
  const next = all.find((l) => !progress[l.id]?.done);
  const minsLeft = all.filter((l) => !progress[l.id]?.done).reduce((n, l) => n + lessonMinutes(l), 0);
  const left = minsLeft >= 60 ? `${Math.floor(minsLeft / 60)} h ${minsLeft % 60} min` : `${minsLeft} min`;

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
      <Link to="/library" className="mb-3 inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground">
        <ChevronLeft className="size-3.5" aria-hidden="true" /> Library
      </Link>

      <PageHead
        kicker={
          <span className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="size-2 rounded-full" style={{ background: subject.color }} />
            <span>Subject</span>
          </span>
        }
        title={subject.name}
        sub={
          all.length
            ? `${topicCount} ${topicCount === 1 ? "topic" : "topics"} · ${done} of ${all.length} lessons done${next ? ` · ${left} left` : ""}`
            : "Lessons are on the way"
        }
      >
        {next && (
          <Btn size="sm" variant="primary" asChild>
            <Link to={`/library/${next.id}`}>
              {done > 0 ? "Continue" : "Start"} <ArrowUpRight aria-hidden="true" />
            </Link>
          </Btn>
        )}
      </PageHead>

      {tree.length === 0 ? (
        <div className="mt-6 border-t border-border pt-5">
          <Quiet icon={<BookOpen className="size-4" />} title="No lessons yet" note={`Add Markdown files to content/${slug}/ (see the README).`} />
        </div>
      ) : (
        <div className="mt-6 space-y-10 border-t border-border pt-6">
          {sections.length > 1 && (
            <nav aria-label="Jump to section" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              {sections.map((s) => (
                <a key={s.key} href={s.href} className="inline-flex items-baseline gap-1.5 transition-colors hover:text-foreground">
                  <span>{s.label}</span>
                  <span className="text-[11px] tabular-nums opacity-70">{s.done}/{s.total}</span>
                </a>
              ))}
            </nav>
          )}

          {tree.map((p) => {
            const partLessons = p.terms.flatMap((t) => t.topics.flatMap((x) => x.lessons)).filter((l) => l.status === "live");
            const partDone = partLessons.filter((l) => progress[l.id]?.done).length;
            return (
              <section key={p.part} id={p.part ? `part-${slugify(p.part)}` : undefined} className="scroll-mt-20">
                {p.part && (
                  <div className="mb-4 flex items-baseline justify-between gap-3">
                    <h2 className="text-base font-semibold tracking-tight text-foreground">{p.part}</h2>
                    <span className="text-xs tabular-nums text-muted-foreground">
                      {partLessons.length ? `${partDone}/${partLessons.length} done` : "Coming soon"}
                    </span>
                  </div>
                )}
                <div className="space-y-6">
                  {p.terms.map((tm) => {
                    const tl = tm.topics.flatMap((x) => x.lessons).filter((l) => l.status === "live");
                    const td = tl.filter((l) => progress[l.id]?.done).length;
                    return (
                      <div key={tm.term ?? "none"} id={tm.term ? `term-${slugify(p.part)}-${tm.term}` : undefined} className="scroll-mt-20">
                        {tm.term && (
                          <div className="mb-2 flex items-baseline justify-between gap-3">
                            <h3 className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">Term {tm.term}</h3>
                            <span className="text-[11px] tabular-nums text-muted-foreground">
                              {tl.length ? `${td}/${tl.length} done` : "Coming soon"}
                            </span>
                          </div>
                        )}
                        <div className="divide-y divide-border border-y border-border">
                          {tm.topics.map((tp) => (
                            <TopicRow key={tp.id} t={tp} n={numbered.get(tp.id) ?? 0} slug={slug} color={subject.color} progress={progress} />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

/** A topic row: clean index/check, title, subtitle, slim progress, no outer card or pills. */
function TopicRow({ t, n, slug, color, progress }: { t: TopicNode; n: number; slug: string; color: string; progress: Record<string, Progress> }) {
  const live = t.lessons.filter((l) => l.status === "live");
  const done = live.filter((l) => progress[l.id]?.done).length;
  const subs = t.subtopics.filter((s) => s.title).length;
  const off = live.length === 0;
  const complete = !off && done === live.length;

  const content = (
    <>
      <span className={cn("grid w-6 shrink-0 place-items-center text-xs tabular-nums", complete ? "text-primary" : "text-muted-foreground")}>
        {complete ? <Check className="size-4" strokeWidth={2.25} aria-label="Done" /> : String(n).padStart(2, "0")}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary">{t.title}</span>
        <span className="mt-0.5 block text-[11px] text-muted-foreground">
          {off
            ? subs > 0
              ? `${subs} sub-topics planned`
              : "Planned"
            : `${live.length} ${live.length === 1 ? "lesson" : "lessons"}${subs > 0 ? ` · ${subs} sub-topics` : ""}`}
        </span>
      </span>
      {off ? (
        <span className="shrink-0 text-[11px] text-muted-foreground">Coming soon</span>
      ) : (
        <>
          <span className="hidden w-24 shrink-0 sm:block">
            <Meter pct={Math.round((100 * done) / live.length)} color={color} />
          </span>
          <span className="w-10 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground">
            {done}/{live.length}
          </span>
          <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </>
      )}
    </>
  );

  return off ? (
    <div id={`topic-${t.dir}`} aria-disabled="true" className="flex cursor-not-allowed select-none items-center gap-3.5 py-3 opacity-45">
      {content}
    </div>
  ) : (
    <Link id={`topic-${t.dir}`} to={`/library/${slug}/${t.dir}`} className="group flex items-center gap-3.5 py-3 transition-colors hover:bg-secondary/25">
      {content}
    </Link>
  );
}

/** A lesson row: check or index, title, reading time, subtle flag text, no pills or icon boxes. */
function LessonRow({ l, i, p }: { l: Lesson; i: number; p?: Progress }) {
  if (l.status === "stub") {
    return (
      <li aria-disabled="true" className="flex cursor-not-allowed select-none items-center gap-3.5 py-3 opacity-45">
        <span className="grid w-6 shrink-0 place-items-center text-muted-foreground">
          <Lock className="size-3.5" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1 truncate text-sm text-foreground">{l.title}</span>
        <span className="shrink-0 text-[11px] text-muted-foreground">Coming soon</span>
      </li>
    );
  }
  return (
    <li>
      <Link to={`/library/${l.id}`} className="group flex items-center gap-3.5 py-3 transition-colors hover:bg-secondary/25">
        <span className={cn("grid w-6 shrink-0 place-items-center text-xs tabular-nums", p?.done ? "text-primary" : "text-muted-foreground")}>
          {p?.done ? <Check aria-label="Done" className="size-4" strokeWidth={2.25} /> : i + 1}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary">{l.title}</span>
          <span className="mt-0.5 block text-[11px] text-muted-foreground">About {lessonMinutes(l)} min</span>
        </span>
        {p?.flagged && (
          <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-amber-500">
            <Flag aria-label="Flagged" className="size-3" /> Flagged
          </span>
        )}
        <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </li>
  );
}

/* ---------- Subjects overview (/library) ---------- */

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
        const topics = subjectTree(s.slug)
          .flatMap((p) => p.terms.flatMap((t) => t.topics))
          .filter((t) => t.lessons.some((l) => l.status === "live")).length;
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

  const resume = useMemo(() => {
    const last = Object.values(progress)
      .filter((p) => p.done)
      .sort((a, b) => b.updated_at.localeCompare(a.updated_at))[0];
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
    <div className="space-y-8">
      <PageHead
        kicker="Library"
        title="Your subjects"
        sub={
          loading || subjects.length === 0
            ? "Pick a subject to browse its topics and lessons."
            : `${subjects.length} subjects · ${totalDone} of ${totalLessons} lessons done`
        }
      />

      {loading ? (
        <div className="border-t border-border pt-6">
          <Loading variant="rows" rows={5} />
        </div>
      ) : subjects.length === 0 ? (
        <div className="border-t border-border pt-6">
          <Quiet icon={<BookOpen className="size-4" />} title="No subjects ticked" note="Choose the subjects you take in Settings." to="/settings" action="Open settings" />
        </div>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
            <div className="relative min-w-52 flex-1 sm:max-w-xs">
              <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search subjects"
                aria-label="Search subjects"
                className="h-8 w-full rounded-md border border-input bg-background pl-8 pr-3 text-xs placeholder:text-muted-foreground transition-colors hover:border-muted-foreground/60 focus-visible:border-ring focus-visible:outline-2 focus-visible:outline-ring"
              />
            </div>

            <div className="flex items-center gap-1" role="group" aria-label="Filter subjects">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={filter === f.id}
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "rounded-md px-2.5 py-1 text-xs transition-colors",
                    filter === f.id
                      ? "bg-secondary font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {resume && (
            <Link
              to={`/library/${resume.lesson.id}`}
              className="group flex items-center justify-between gap-4 rounded-lg border border-border px-4 py-3 transition-colors hover:border-foreground/25 hover:bg-secondary/20"
            >
              <span className="min-w-0">
                <span className="block text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground">Continue</span>
                <span className="mt-0.5 block truncate text-sm font-medium text-foreground group-hover:text-primary">{resume.lesson.title}</span>
                <span className="block truncate text-xs text-muted-foreground">
                  {resume.row.s.name} · {resume.lesson.topic}
                </span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-primary">
                Resume <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </span>
            </Link>
          )}

          {shown.length === 0 ? (
            <div className="border-t border-border pt-6">
              <Quiet icon={<Search className="size-4" />} title="No subjects match" note="Try a different search or filter." />
            </div>
          ) : (
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {shown.map(({ s, total, done, topics, pct, flagged, next }) => {
                const off = total === 0;
                const inner = (
                  <>
                    <div className="flex items-center gap-2.5">
                      <span aria-hidden="true" className="size-2 shrink-0 rounded-full" style={{ background: s.color }} />
                      <span className={cn("min-w-0 flex-1 truncate text-sm font-medium", !off && "text-foreground group-hover:text-primary")}>
                        {s.name}
                      </span>
                      {off ? (
                        <span className="shrink-0 text-[11px] text-muted-foreground">Coming soon</span>
                      ) : (
                        <span className="flex shrink-0 items-center gap-1.5 text-xs tabular-nums text-muted-foreground">
                          <span>{done}/{total}</span>
                          <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                        </span>
                      )}
                    </div>

                    <Meter pct={off ? 0 : pct} color={s.color} className="mt-2" />

                    <p className="mt-1.5 flex items-center justify-between gap-3 text-[11px] text-muted-foreground">
                      <span className="min-w-0 truncate">
                        {off
                          ? "Lessons are on the way"
                          : next
                            ? `${topics} ${topics === 1 ? "topic" : "topics"} · Next: ${next.title}`
                            : `${topics} ${topics === 1 ? "topic" : "topics"} · All done`}
                      </span>
                      {flagged > 0 && (
                        <span className="inline-flex shrink-0 items-center gap-1 text-amber-500 tabular-nums">
                          <Flag className="size-3" aria-hidden="true" />
                          {flagged}
                        </span>
                      )}
                    </p>
                  </>
                );

                return (
                  <li key={s.id} className="border-b border-border pb-4">
                    {off ? (
                      <div aria-disabled="true" className="cursor-not-allowed select-none opacity-45">
                        {inner}
                      </div>
                    ) : (
                      <Link to={`/library/${s.slug}`} className="group block">
                        {inner}
                      </Link>
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