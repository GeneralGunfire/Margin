import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { ArrowLeft, ArrowRight, Check, ChevronDown, Circle, Clock, Flag } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { lessonById, neighbours, outlineFor, slugify, type Lesson } from "@/lib/content";
import { useProgress } from "@/hooks/useProgress";
import { btn, btnPrimary, field, kicker } from "@/lib/styles";
import { Note } from "@/components/ui/note";
import { PageHead, Quiet } from "@/components/page";
import { cn } from "@/lib/utils";
import type { Progress } from "@/lib/supabase";

export default function LessonPage() {
  const { subject, topic, lesson: lessonSlug } = useParams();
  const { subjects, mySubjects } = useAuth();
  const { progress, update, error } = useProgress();
  const lesson = lessonById(`${subject}/${topic}/${lessonSlug}`);
  const p = lesson ? progress[lesson.id] : undefined;
  const [note, setNote] = useState("");
  useEffect(() => setNote(p?.note ?? ""), [p?.note]);

  if (!lesson) {
    return (
      <div>
        <PageHead kicker="Library" title="Lesson not found" />
        <div className="mt-6 border-t border-border pt-5">
          <Quiet icon={<Check className="size-4" />} title="That lesson doesn't exist" to="/library" action="Back to the library" />
        </div>
      </div>
    );
  }
  // Only subjects ticked in Settings are visible.
  if (!mySubjects.some((x) => x.slug === lesson.subject)) {
    return (
      <div>
        <PageHead kicker="Library" title="Subject not found" />
        <div className="mt-6 border-t border-border pt-5">
          <Quiet icon={<Check className="size-4" />} title="That subject isn't in your list" note="Tick it in Settings to see it here." to="/settings" action="Open settings" />
        </div>
      </div>
    );
  }

  const s = subjects.find((x) => x.slug === lesson.subject);
  const isStub = lesson.status === "stub";
  const { prev, next } = neighbours(lesson);
  const base = `/library/${lesson.subject}`;
  const crumbs: { label: string; to?: string }[] = [
    { label: "Library", to: "/library" },
    { label: s?.name ?? lesson.subject, to: base },
    ...(lesson.part ? [{ label: lesson.part, to: `${base}#part-${slugify(lesson.part)}` }] : []),
    ...(lesson.term ? [{ label: `Term ${lesson.term}`, to: `${base}#term-${slugify(lesson.part ?? "")}-${lesson.term}` }] : []),
    { label: lesson.topic, to: `${base}#topic-${lesson.topicId.split("/")[1]}` },
    ...(lesson.subtopic ? [{ label: lesson.subtopic, to: `${base}#sub-${lesson.topicId.split("/")[1]}-${slugify(lesson.subtopic)}` }] : []),
    { label: lesson.title },
  ];

  return (
    <article>
      <nav aria-label="Breadcrumb" className="mb-3">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] text-muted-foreground">
          {crumbs.map((c, i) => (
            <li key={i} className="flex min-w-0 items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {c.to ? (
                <Link to={c.to} className="hover:text-foreground">{c.label}</Link>
              ) : (
                <span aria-current="page" className="text-foreground/80">{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <PageHead
        title={lesson.title}
        sub={lesson.pages.length ? `Textbook ${lesson.pages.join(", ")}` : undefined}
      >
        {!isStub && (
          <>
            <button type="button" className={cn(p?.done ? btnPrimary : btn)} aria-pressed={!!p?.done} onClick={() => update(lesson.id, { done: !p?.done })}>
              <Check className="size-4" aria-hidden="true" /> {p?.done ? "Done" : "Mark as done"}
            </button>
            <button type="button" className={cn(p?.flagged ? btnPrimary : btn)} aria-pressed={!!p?.flagged} onClick={() => update(lesson.id, { flagged: !p?.flagged })}>
              <Flag className="size-4" aria-hidden="true" /> {p?.flagged ? "Flagged" : "Flag as struggling"}
            </button>
          </>
        )}
      </PageHead>

      {!isStub && (p?.flagged || error) && (
        <div className="mt-5 border-t border-border pt-4">
          {p?.flagged && (
            <form
              className="flex max-w-xl gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                update(lesson.id, { note: note.trim() || null });
              }}
            >
              <input className={field} value={note} maxLength={200} placeholder="Short note on what's hard (optional)" aria-label="Note" onChange={(e) => setNote(e.target.value)} />
              <button type="submit" className={btn}>Save note</button>
            </form>
          )}
          {error && <Note className="max-w-xl">{error}</Note>}
        </div>
      )}

      <div className="mt-6 lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-10">
        <div className="lg:order-1">
          <div className="lg:hidden">
            <Outline lesson={lesson} progress={progress} compact />
          </div>
          <div className="prose-lesson mt-6 max-w-3xl border-t border-border pt-6 lg:mt-0">
            {isStub ? (
              <Quiet icon={<Clock className="size-4" />} title="Coming soon" note="This lesson hasn't been written yet." to={base} action="Back to the topic list" />
            ) : (
              <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
                {lesson.body}
              </ReactMarkdown>
            )}
          </div>

          <nav aria-label="Previous and next lesson" className="mt-10 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:justify-between">
            {prev ? (
              <Link to={`/library/${prev.id}`} className={cn(btn, "h-auto min-w-0 justify-start py-2 text-left")}>
                <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
                <span className="min-w-0"><span className={cn(kicker, "block")}>Previous</span><span className="block truncate">{prev.title}</span></span>
              </Link>
            ) : <span />}
            {next ? (
              <Link to={`/library/${next.id}`} className={cn(btn, "h-auto min-w-0 justify-end py-2 text-right sm:ml-auto")}>
                <span className="min-w-0"><span className={cn(kicker, "block")}>Next</span><span className="block truncate">{next.title}</span></span>
                <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
              </Link>
            ) : <span />}
          </nav>
        </div>

        <aside className="hidden lg:order-2 lg:block">
          <div className="sticky top-6">
            <Outline lesson={lesson} progress={progress} />
          </div>
        </aside>
      </div>
    </article>
  );
}

/** Side outline of the current sub-topic (a collapsible bar on mobile). */
function Outline({ lesson, progress, compact }: { lesson: Lesson; progress: Record<string, Progress>; compact?: boolean }) {
  const items = outlineFor(lesson);
  const heading = lesson.subtopic ?? lesson.topic;
  const list = (
    <ol className="divide-y divide-border">
      {items.map((l) => {
        const here = l.id === lesson.id;
        if (l.status === "stub") {
          return (
            <li key={l.id} aria-disabled="true" className="flex cursor-not-allowed items-center gap-2.5 py-2 opacity-45">
              <Circle aria-hidden="true" className="size-3.5 shrink-0" />
              <span className="min-w-0 flex-1 truncate text-[13px]">{l.title}</span>
              <span className="shrink-0 text-[10px] uppercase tracking-[0.08em]">Soon</span>
            </li>
          );
        }
        return (
          <li key={l.id}>
            <Link to={`/library/${l.id}`} aria-current={here ? "page" : undefined} className={cn("flex items-center gap-2.5 py-2 text-[13px] hover:text-primary", here ? "font-semibold text-foreground" : "text-muted-foreground")}>
              {progress[l.id]?.done ? <Check aria-label="Done" className="size-3.5 shrink-0 text-primary" /> : <Circle aria-hidden="true" className="size-3.5 shrink-0" />}
              <span className="min-w-0 flex-1">{l.title}</span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
  if (compact) {
    return (
      <details className="group border-t border-border">
        <summary className="flex cursor-pointer list-none items-center gap-2 py-3 [&::-webkit-details-marker]:hidden">
          <ChevronDown aria-hidden="true" className="size-4 text-muted-foreground transition-transform group-not-open:-rotate-90" />
          <span className="min-w-0 flex-1"><span className={cn(kicker, "block")}>In this sub-topic</span><span className="block truncate text-sm font-medium">{heading}</span></span>
        </summary>
        <div className="pb-2 pl-6">{list}</div>
      </details>
    );
  }
  return (
    <nav aria-label="Sub-topic outline" className="border-t border-border pt-4">
      <p className={kicker}>In this sub-topic</p>
      <p className="mb-2 mt-1 text-sm font-medium">{heading}</p>
      {list}
    </nav>
  );
}
