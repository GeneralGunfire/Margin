import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { BookOpen, Check, ChevronLeft, ChevronRight, Clock, Flag, Lock } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { lessonMinutes, lessonsForSubject, slugify, subjectTree, type Lesson, type TopicNode } from "@/lib/content";
import { useProgress } from "@/hooks/useProgress";
import { kicker } from "@/lib/styles";
import { Loading } from "@/components/ui/loading";
import { Meter, PageHead, Quiet } from "@/components/page";
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

  if (!slug) {
    return (
      <div>
        <PageHead kicker="Library" title="Your subjects" sub="Pick a subject to see its topics and lessons." />
        <div className="mt-6 border-t border-border pt-5">
          {loading ? (
            <Loading variant="rows" rows={4} />
          ) : mySubjects.length === 0 ? (
            <Quiet icon={<BookOpen className="size-4" />} title="No subjects ticked" note="Choose the subjects you take in Settings." to="/settings" action="Open settings" />
          ) : (
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {mySubjects.map((s) => {
                const ls = lessonsForSubject(s.slug);
                const done = ls.filter((l) => progress[l.id]?.done).length;
                const pct = ls.length ? Math.round((100 * done) / ls.length) : 0;
                return (
                  <li key={s.id}>
                    <Link to={`/library/${s.slug}`} className="card card-interactive group flex items-center gap-4 px-5 py-4">
                      <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-lg" style={{ background: `color-mix(in srgb, ${s.color} 16%, transparent)` }}>
                        <BookOpen className="size-5" style={{ color: s.color }} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold group-hover:text-primary">{s.name}</span>
                        <span className="mt-0.5 block text-[11.5px] text-muted-foreground">
                          {ls.length === 0 ? "Coming soon" : `${ls.length} ${ls.length === 1 ? "lesson" : "lessons"} · ${pct}% complete`}
                        </span>
                        {ls.length > 0 && <Meter pct={pct} color={s.color} className="mt-2 max-w-40" />}
                      </span>
                      <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }

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

  /* ---- Topic page: sub-topics with their lesson cards ---- */
  if (topicDir) {
    const topic = tree.flatMap((p) => p.terms.flatMap((tm) => tm.topics)).find((t) => t.dir === topicDir);
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
    return (
      <div>
        <Link to={`/library/${slug}`} className="mb-4 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
          <ChevronLeft className="size-4" aria-hidden="true" /> {subject.name}
        </Link>
        <PageHead
          kicker={[topic.part, topic.term ? `Term ${topic.term}` : ""].filter(Boolean).join(" · ") || "Topic"}
          title={`${n}. ${topic.title}`}
          sub={live.length ? `${done} of ${live.length} lessons done` : "Coming soon"}
        />
        {live.length > 0 && <div className="mt-4 max-w-md"><Meter pct={Math.round((100 * done) / live.length)} color={subject.color} /></div>}
        <div className="mt-8 space-y-8">
          {hasSubs ? (
            topic.subtopics.map((s, si) => {
              const sl = s.lessons.filter((l) => l.status === "live");
              const sd = sl.filter((l) => progress[l.id]?.done).length;
              return (
                <section key={s.id} id={`sub-${s.id}`} className="scroll-mt-6">
                  <div className={cn("mb-3 flex flex-wrap items-center gap-x-3 gap-y-1", sl.length === 0 && "opacity-50")}>
                    <h2 className={cn(kicker, "flex min-w-0 flex-1 basis-48 items-center gap-2.5")}>
                      <span className="label-rule" aria-hidden="true" />
                      <span className="tabular-nums">{n}.{si + 1}</span>
                      {s.title}
                    </h2>
                    {sl.length ? (
                      <span className="shrink-0 text-[11px] tabular-nums text-muted-foreground">{sl.length} {sl.length === 1 ? "lesson" : "lessons"} · {sd}/{sl.length} done</span>
                    ) : (
                      <ComingSoon />
                    )}
                  </div>
                  <ul className="space-y-2">{s.lessons.map((l, i) => <LessonCard key={l.id} l={l} i={i} p={progress[l.id]} />)}</ul>
                </section>
              );
            })
          ) : (
            <ul className="space-y-2">{topic.lessons.map((l, i) => <LessonCard key={l.id} l={l} i={i} p={progress[l.id]} />)}</ul>
          )}
        </div>
      </div>
    );
  }

  /* ---- Subject page: Part > Term > topic cards ---- */
  const all = lessonsForSubject(slug);
  const done = all.filter((l) => progress[l.id]?.done).length;
  const hasParts = tree.some((p) => p.part);

  return (
    <div>
      <Link to="/library" className="mb-4 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        <ChevronLeft className="size-4" aria-hidden="true" /> Library
      </Link>
      <PageHead kicker="Subject" title={subject.name} sub={all.length ? `${done} of ${all.length} lessons done` : undefined} />
      {all.length > 0 && <div className="mt-4 max-w-md"><Meter pct={Math.round((100 * done) / all.length)} color={subject.color} /></div>}

      {tree.length === 0 && (
        <div className="mt-6 border-t border-border pt-5">
          <Quiet icon={<BookOpen className="size-4" />} title="No lessons yet" note={`Add Markdown files to content/${slug}/ (see the README).`} />
        </div>
      )}

      {hasParts && (
        <nav aria-label="Jump to section" className="mt-5 flex flex-wrap gap-1.5">
          {tree.filter((p) => p.part).map((p) => (
            <a key={p.part} href={`#part-${slugify(p.part)}`} className="inline-flex h-8 items-center rounded-md border border-border px-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              {p.part}
            </a>
          ))}
        </nav>
      )}

      {tree.map((p) => {
        const partLessons = p.terms.flatMap((t) => t.topics.flatMap((x) => x.lessons)).filter((l) => l.status === "live");
        const partDone = partLessons.filter((l) => progress[l.id]?.done).length;
        return (
          <section key={p.part} id={p.part ? `part-${slugify(p.part)}` : undefined} className="mt-10 scroll-mt-6">
            {p.part && (
              <div className="mb-1 flex items-baseline justify-between gap-3 border-b border-border pb-2">
                <h2 className="flex items-center gap-2.5 text-lg font-semibold tracking-tight"><span className="label-rule" aria-hidden="true" />{p.part}</h2>
                <span className="text-xs tabular-nums text-muted-foreground">{partLessons.length ? `${partDone}/${partLessons.length} done` : "Coming soon"}</span>
              </div>
            )}
            {p.terms.map((tm) => {
              const tl = tm.topics.flatMap((x) => x.lessons).filter((l) => l.status === "live");
              const td = tl.filter((l) => progress[l.id]?.done).length;
              return (
                <div key={tm.term ?? "none"} id={tm.term ? `term-${slugify(p.part)}-${tm.term}` : undefined} className="mt-6 scroll-mt-6">
                  {tm.term && (
                    <div className="mb-3 flex items-baseline justify-between gap-3">
                      <h3 className={kicker}>Term {tm.term}</h3>
                      <span className="text-[11px] tabular-nums text-muted-foreground">{tl.length ? `${td}/${tl.length} done` : "Coming soon"}</span>
                    </div>
                  )}
                  <div className="space-y-2">
                    {tm.topics.map((t) => <TopicCard key={t.id} t={t} n={numbered.get(t.id) ?? 0} slug={slug} color={subject.color} progress={progress} />)}
                  </div>
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );
}

function ComingSoon() {
  return <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground">Coming soon</span>;
}

/** A topic as a numbered card with progress. Stubs-only topics are greyed and not clickable. */
function TopicCard({ t, n, slug, color, progress }: { t: TopicNode; n: number; slug: string; color: string; progress: Record<string, Progress> }) {
  const live = t.lessons.filter((l) => l.status === "live");
  const done = live.filter((l) => progress[l.id]?.done).length;
  const subs = t.subtopics.filter((s) => s.title).length;
  const off = live.length === 0;
  const body = (
    <>
      <span
        aria-hidden="true"
        className={cn("grid size-9 shrink-0 place-items-center rounded-lg text-[12px] font-bold tabular-nums", off ? "bg-secondary text-muted-foreground" : "text-white")}
        style={off ? undefined : { background: color }}
      >
        {n}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className="truncate text-[13.5px] font-semibold">{t.title}</span>
          {!off && done === live.length && <span className="shrink-0 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary">Complete</span>}
        </span>
        {off ? (
          <span className="mt-0.5 block text-[11px] text-muted-foreground">{subs > 0 ? `${subs} sub-topics planned` : "Planned"}</span>
        ) : (
          <span className="mt-1.5 flex items-center gap-2">
            <Meter pct={Math.round((100 * done) / live.length)} color={color} className="w-40 shrink-0" />
            <span className="shrink-0 text-[10.5px] font-medium tabular-nums text-muted-foreground">{done}/{live.length} lessons</span>
          </span>
        )}
      </span>
      {off ? <ComingSoon /> : <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />}
    </>
  );
  return off ? (
    <div id={`topic-${t.dir}`} aria-disabled="true" className="card flex cursor-not-allowed select-none items-center gap-4 px-5 py-4 opacity-50">{body}</div>
  ) : (
    <Link id={`topic-${t.dir}`} to={`/library/${slug}/${t.dir}`} className="card card-interactive group flex items-center gap-4 px-5 py-4">{body}</Link>
  );
}

/** A lesson as a card: number, title, reading time, status. Stubs are inert and greyed. */
function LessonCard({ l, i, p }: { l: Lesson; i: number; p?: Progress }) {
  if (l.status === "stub") {
    return (
      <li aria-disabled="true" className="card flex cursor-not-allowed select-none items-center gap-4 px-5 py-3 opacity-45">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground"><Lock className="size-4" aria-hidden="true" /></span>
        <span className="min-w-0 flex-1 truncate text-[13.5px]">{l.title}</span>
        <ComingSoon />
      </li>
    );
  }
  return (
    <li>
      <Link to={`/library/${l.id}`} className="card card-interactive group flex items-center gap-4 px-5 py-4">
        <span className={cn("grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-secondary text-[11.75px] font-semibold tabular-nums", p?.done ? "text-primary" : "text-muted-foreground")}>
          {p?.done ? <Check aria-label="Done" className="size-4" strokeWidth={2.5} /> : i + 1}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[13.5px] font-semibold group-hover:text-primary">{l.title}</span>
          <span className="mt-1 flex items-center gap-1.5 text-[11px] text-muted-foreground"><Clock className="size-3" aria-hidden="true" /> ~{lessonMinutes(l)} min</span>
        </span>
        {p?.flagged && (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-medium text-amber-500">
            <Flag aria-label="Flagged as struggling" className="size-3" /> Struggling
          </span>
        )}
        {p?.done && <span className="shrink-0 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary">Done</span>}
        <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </li>
  );
}
