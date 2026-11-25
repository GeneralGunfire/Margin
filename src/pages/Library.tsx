import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { BookOpen, Check, ChevronDown, Circle, Flag } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { lessonsForSubject, slugify, subjectTree, type Lesson, type TopicNode } from "@/lib/content";
import { useProgress } from "@/hooks/useProgress";
import { kicker } from "@/lib/styles";
import { Loading } from "@/components/ui/loading";
import { Meter, PageHead, Quiet } from "@/components/page";
import { cn } from "@/lib/utils";
import type { Progress } from "@/lib/supabase";

export default function Library() {
  const { subject: slug } = useParams();
  const { mySubjects } = useAuth();
  const { progress, loading } = useProgress();
  const { hash } = useLocation();

  // Breadcrumb links land here with #anchors: open the topic that holds the target, then scroll to it.
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!el) return;
    el.closest("details")?.setAttribute("open", "");
    el.scrollIntoView({ block: "start" });
  }, [hash, slug, loading]);

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
            <ul className="grid gap-x-10 gap-y-6 md:grid-cols-2">
              {mySubjects.map((s) => {
                const ls = lessonsForSubject(s.slug);
                const done = ls.filter((l) => progress[l.id]?.done).length;
                const pct = ls.length ? Math.round((100 * done) / ls.length) : 0;
                return (
                  <li key={s.id} className="border-t border-border pt-4 first:border-t-0 first:pt-0 md:[&:nth-child(2)]:border-t-0 md:[&:nth-child(2)]:pt-0">
                    <Link to={`/library/${s.slug}`} className="group block">
                      <div className="mb-2 flex items-center gap-2.5">
                        <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full" style={{ background: s.color }} />
                        <span className="min-w-0 flex-1 truncate text-sm font-medium group-hover:text-primary">{s.name}</span>
                        <span className="text-xs tabular-nums text-muted-foreground">{done}/{ls.length}</span>
                      </div>
                      <Meter pct={pct} color={s.color} />
                      <p className="mt-1.5 text-[11px] text-muted-foreground">
                        {ls.length === 0 ? "No lessons added yet" : `${pct}% complete`}
                      </p>
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
  const all = lessonsForSubject(slug);
  const done = all.filter((l) => progress[l.id]?.done).length;
  const hasParts = tree.some((p) => p.part);

  return (
    <div>
      <PageHead
        kicker={<><Link to="/library" className="hover:text-foreground">Library</Link> / {subject.name}</>}
        title={subject.name}
        sub={all.length ? `${done} of ${all.length} lessons done` : undefined}
      />
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
                <h2 className="text-lg font-semibold tracking-tight">{p.part}</h2>
                <span className="text-xs tabular-nums text-muted-foreground">{partLessons.length ? `${partDone}/${partLessons.length} done` : "Coming soon"}</span>
              </div>
            )}
            {p.terms.map((tm) => {
              const tl = tm.topics.flatMap((x) => x.lessons).filter((l) => l.status === "live");
              const td = tl.filter((l) => progress[l.id]?.done).length;
              return (
                <div key={tm.term ?? "none"} id={tm.term ? `term-${slugify(p.part)}-${tm.term}` : undefined} className="mt-5 scroll-mt-6">
                  {tm.term && (
                    <div className="mb-2 flex items-baseline justify-between gap-3">
                      <h3 className={kicker}>Term {tm.term}</h3>
                      <span className="text-[11px] tabular-nums text-muted-foreground">{tl.length ? `${td}/${tl.length} done` : "Coming soon"}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 gap-x-10 lg:grid-cols-2">
                    {tm.topics.map((t) => <Topic key={t.id} t={t} progress={progress} />)}
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

const soon = (
  <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground">Coming soon</span>
);

function LessonRow({ l, p, indent }: { l: Lesson; p?: Progress; indent?: boolean }) {
  if (l.status === "stub") {
    return (
      <li aria-disabled="true" className={cn("flex cursor-not-allowed select-none items-center gap-3 py-2 opacity-45", indent && "pl-4")}>
        <Circle aria-hidden="true" className="size-4 shrink-0 text-muted-foreground/50" />
        <span className="min-w-0 flex-1 truncate text-[13px]">{l.title}</span>
        {soon}
      </li>
    );
  }
  return (
    <li className={indent ? "pl-4" : undefined}>
      <Link to={`/library/${l.id}`} className="group flex items-center gap-3 py-2.5">
        {p?.done ? <Check aria-label="Done" className="size-4 shrink-0 text-primary" /> : <Circle aria-hidden="true" className="size-4 shrink-0 text-muted-foreground/50" />}
        <span className="min-w-0 flex-1">
          <span className="block text-[13px] font-medium group-hover:text-primary">{l.title}</span>
          {l.pages.length > 0 && <span className="block truncate text-[11px] text-muted-foreground">{l.pages.join(", ")}</span>}
        </span>
        {p?.flagged && <Flag aria-label="Flagged as struggling" className="size-3.5 shrink-0 text-amber-500" />}
      </Link>
    </li>
  );
}

/** One topic: a native <details> that expands to its sub-topics (or to its lessons when it has none). */
function Topic({ t, progress }: { t: TopicNode; progress: Record<string, Progress> }) {
  const live = t.lessons.filter((l) => l.status === "live");
  const done = live.filter((l) => progress[l.id]?.done).length;
  const hasSubs = t.subtopics.some((s) => s.title);
  return (
    <details id={`topic-${t.dir}`} open={live.length > 0} className="group min-w-0 scroll-mt-6 border-t border-border">
      <summary className="flex cursor-pointer list-none items-center gap-3 py-3 [&::-webkit-details-marker]:hidden">
        <ChevronDown aria-hidden="true" className="size-4 shrink-0 text-muted-foreground transition-transform group-not-open:-rotate-90" />
        <span className={cn("min-w-0 flex-1 text-sm font-medium", live.length === 0 && "opacity-50")}>{t.title}</span>
        {live.length ? <span className="text-xs tabular-nums text-muted-foreground">{done}/{live.length}</span> : soon}
      </summary>
      <div className="pb-3 pl-7">
        {hasSubs ? (
          t.subtopics.map((s) => {
            const sl = s.lessons.filter((l) => l.status === "live");
            const sd = sl.filter((l) => progress[l.id]?.done).length;
            return (
              <div key={s.id} id={`sub-${s.id}`} className="scroll-mt-6 border-t border-border/60 py-2 first:border-t-0">
                <div className={cn("flex flex-wrap items-center gap-x-3 gap-y-0.5", sl.length === 0 && "opacity-45")}>
                  <span className="min-w-0 flex-1 basis-40 text-[13px] font-medium">{s.title}</span>
                  {sl.length ? (
                    <span className="shrink-0 text-[11px] tabular-nums text-muted-foreground">
                      {sl.length} {sl.length === 1 ? "lesson" : "lessons"} · {sd}/{sl.length} done
                    </span>
                  ) : (
                    soon
                  )}
                </div>
                {sl.length > 0 && (
                  <ul className="divide-y divide-border">
                    {s.lessons.map((l) => <LessonRow key={l.id} l={l} p={progress[l.id]} indent />)}
                  </ul>
                )}
              </div>
            );
          })
        ) : (
          <ul className="divide-y divide-border">{t.lessons.map((l) => <LessonRow key={l.id} l={l} p={progress[l.id]} />)}</ul>
        )}
      </div>
    </details>
  );
}
