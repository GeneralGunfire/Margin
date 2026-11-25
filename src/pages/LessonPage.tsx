import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight, Circle, Clock, Flag, List } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { lessonById, lessonMinutes, neighbours, outlineFor, slugify, type Lesson } from "@/lib/content";
import { useProgress } from "@/hooks/useProgress";
import { btn, btnPrimary, field, kicker } from "@/lib/styles";
import { Note } from "@/components/ui/note";
import { Quiet } from "@/components/page";
import { LessonMarkdown } from "@/components/lesson/blocks";
import { cn } from "@/lib/utils";
import type { Progress } from "@/lib/supabase";

export default function LessonPage() {
  const { subject, topic, lesson: lessonSlug } = useParams();
  const { subjects, mySubjects } = useAuth();
  const { progress, update, error } = useProgress();
  const lesson = lessonById(`${subject}/${topic}/${lessonSlug}`);
  const p = lesson ? progress[lesson.id] : undefined;
  const [note, setNote] = useState("");
  useEffect(() => {
    setNote(p?.note ?? "");
  }, [p?.note]);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [lesson?.id]);

  if (!lesson || !mySubjects.some((x) => x.slug === lesson.subject)) {
    return (
      <div>
        <p className={kicker}>Library</p>
        <h1 className="mt-1.5 text-2xl font-semibold tracking-tight">{lesson ? "Subject not found" : "Lesson not found"}</h1>
        <div className="mt-6 border-t border-border pt-5">
          <Quiet
            icon={<Check className="size-4" />}
            title={lesson ? "That subject isn't in your list" : "That lesson doesn't exist"}
            note={lesson ? "Tick it in Settings to see it here." : undefined}
            to={lesson ? "/settings" : "/library"}
            action={lesson ? "Open settings" : "Back to the library"}
          />
        </div>
      </div>
    );
  }

  const s = subjects.find((x) => x.slug === lesson.subject);
  const isStub = lesson.status === "stub";
  const { prev, next } = neighbours(lesson);
  const base = `/library/${lesson.subject}`;
  const topicDir = lesson.topicId.split("/")[1];
  const headings = [...lesson.body.matchAll(/^## (.+)$/gm)].map((m) => m[1].replace(/\$[^$]*\$/g, "").trim());
  const crumbs: { label: string; to?: string }[] = [
    { label: "Library", to: "/library" },
    { label: s?.name ?? lesson.subject, to: base },
    ...(lesson.part ? [{ label: lesson.part, to: `${base}#part-${slugify(lesson.part)}` }] : []),
    ...(lesson.term ? [{ label: `Term ${lesson.term}`, to: `${base}#term-${slugify(lesson.part ?? "")}-${lesson.term}` }] : []),
    { label: lesson.topic, to: `${base}/${topicDir}` },
    ...(lesson.subtopic ? [{ label: lesson.subtopic, to: `${base}/${topicDir}#sub-${topicDir}-${slugify(lesson.subtopic)}` }] : []),
    { label: lesson.title },
  ];

  return (
    <div className="mx-auto flex w-full justify-center gap-12">
      <article className="min-w-0 max-w-3xl flex-1">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] text-muted-foreground">
            {crumbs.map((c, i) => (
              <li key={i} className="flex min-w-0 items-center gap-1.5">
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.to ? <Link to={c.to} className="hover:text-foreground">{c.label}</Link> : <span aria-current="page" className="text-foreground/80">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>

        <header>
          <p className={cn(kicker, "flex items-center gap-2.5")}>
            <span className="label-rule" aria-hidden="true" />
            {lesson.subtopic ?? lesson.topic}
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{lesson.title}</h1>
          <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            {lesson.term && <span>Term {lesson.term}</span>}
            {lesson.part && <span>{lesson.part}</span>}
            {!isStub && <span className="inline-flex items-center gap-1"><Clock className="size-3" aria-hidden="true" /> About {lessonMinutes(lesson)} min</span>}
            {p?.done && <span className="inline-flex items-center gap-1 text-primary"><Check className="size-3" aria-hidden="true" /> Done</span>}
            {p?.flagged && <span className="inline-flex items-center gap-1 text-amber-500"><Flag className="size-3" aria-hidden="true" /> Struggling</span>}
          </p>
        </header>

        <div className="mt-5 xl:hidden"><Outline lesson={lesson} progress={progress} compact /></div>

        <div className="prose-lesson mt-6 border-t border-border pt-6">
          {isStub ? (
            <Quiet icon={<Clock className="size-4" />} title="Coming soon" note="This lesson hasn't been written yet." to={base} action="Back to the topic list" />
          ) : (
            <LessonMarkdown body={lesson.body} />
          )}
        </div>

        {!isStub && (
          <section className="mt-12 border-t border-border pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-[13px] font-semibold">{p?.done ? "Marked as done." : "Finished this lesson?"}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Updates your progress. Flag it if you want to come back to it.</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button type="button" className={cn(p?.flagged ? btnPrimary : btn)} aria-pressed={!!p?.flagged} onClick={() => update(lesson.id, { flagged: !p?.flagged })}>
                  <Flag className="size-4" aria-hidden="true" /> {p?.flagged ? "Flagged" : "Flag as struggling"}
                </button>
                <button type="button" className={cn(p?.done ? btnPrimary : btn)} aria-pressed={!!p?.done} onClick={() => update(lesson.id, { done: !p?.done })}>
                  <Check className="size-4" aria-hidden="true" /> {p?.done ? "Done" : "Mark as done"}
                </button>
              </div>
            </div>
            {p?.flagged && (
              <form
                className="mt-4 flex max-w-xl gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  update(lesson.id, { note: note.trim() || null });
                }}
              >
                <input className={field} value={note} maxLength={200} placeholder="Short note on what's hard (optional)" aria-label="Note" onChange={(e) => setNote(e.target.value)} />
                <button type="submit" className={btn}>Save note</button>
              </form>
            )}
            {error && <Note className="mt-4 max-w-xl">{error}</Note>}
          </section>
        )}

        <nav aria-label="Previous and next lesson" className="mt-6 flex flex-col gap-3 sm:flex-row">
          {prev ? (
            <Link to={`/library/${prev.id}`} className="card card-interactive flex min-w-0 flex-1 items-center gap-2 px-4 py-3 text-left">
              <ChevronLeft className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span className="min-w-0"><span className={cn(kicker, "block text-[9.5px]")}>Previous</span><span className="block truncate text-[13px] font-medium">{prev.title}</span></span>
            </Link>
          ) : <span className="hidden flex-1 sm:block" />}
          {next ? (
            <Link to={`/library/${next.id}`} className="card card-interactive flex min-w-0 flex-1 items-center justify-end gap-2 px-4 py-3 text-right">
              <span className="min-w-0"><span className={cn(kicker, "block text-[9.5px]")}>Next</span><span className="block truncate text-[13px] font-medium">{next.title}</span></span>
              <ChevronRight className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            </Link>
          ) : <span className="hidden flex-1 sm:block" />}
        </nav>
      </article>

      <aside className="sticky top-6 hidden h-fit w-[220px] shrink-0 xl:block">
        <Outline lesson={lesson} progress={progress} />
        {headings.length > 1 && !isStub && (
          <nav aria-label="On this page" className="mt-6">
            <p className={cn(kicker, "flex items-center gap-1.5 text-[9.5px]")}><List className="size-3" aria-hidden="true" /> Contents</p>
            <ul className="mt-2 border-l border-border">
              {headings.map((h, i) => (
                <li key={h}>
                  <button
                    type="button"
                    className="-ml-px block w-full border-l-2 border-transparent py-1.5 pl-3 text-left text-[12px] text-muted-foreground transition-colors hover:border-muted-foreground hover:text-foreground"
                    onClick={() => document.querySelectorAll(".prose-lesson h2")[i]?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  >
                    {h}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </aside>
    </div>
  );
}

/** The lessons beside this one (same sub-topic). A collapsible bar on small screens. */
function Outline({ lesson, progress, compact }: { lesson: Lesson; progress: Record<string, Progress>; compact?: boolean }) {
  const items = outlineFor(lesson);
  const heading = lesson.subtopic ?? lesson.topic;
  const list = (
    <ol className="divide-y divide-border">
      {items.map((l, i) => {
        const here = l.id === lesson.id;
        const badge = (
          <span className={cn("grid size-5 shrink-0 place-items-center rounded-md border border-border text-[10px] font-semibold tabular-nums", here ? "bg-primary text-primary-foreground" : "text-muted-foreground")}>
            {progress[l.id]?.done ? <Check className="size-3" aria-label="Done" /> : i + 1}
          </span>
        );
        if (l.status === "stub") {
          return (
            <li key={l.id} aria-disabled="true" className="flex cursor-not-allowed items-center gap-2.5 py-2 opacity-45">
              <Circle aria-hidden="true" className="size-4 shrink-0" />
              <span className="min-w-0 flex-1 truncate text-[13px]">{l.title}</span>
              <span className="shrink-0 text-[10px] uppercase tracking-[0.08em]">Soon</span>
            </li>
          );
        }
        return (
          <li key={l.id}>
            <Link to={`/library/${l.id}`} aria-current={here ? "page" : undefined} className={cn("flex items-center gap-2.5 py-2 text-[13px] hover:text-primary", here ? "font-semibold text-foreground" : "text-muted-foreground")}>
              {badge}
              <span className="min-w-0 flex-1">{l.title}</span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
  if (compact) {
    return (
      <details className="group card">
        <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3 [&::-webkit-details-marker]:hidden">
          <span className="min-w-0 flex-1"><span className={cn(kicker, "block text-[9.5px]")}>In this sub-topic</span><span className="block truncate text-sm font-medium">{heading}</span></span>
          <ChevronDown aria-hidden="true" className="size-4 text-muted-foreground transition-transform group-open:rotate-180" />
        </summary>
        <div className="px-4 pb-2">{list}</div>
      </details>
    );
  }
  return (
    <nav aria-label="Sub-topic outline">
      <p className={cn(kicker, "text-[9.5px]")}>In this sub-topic</p>
      <p className="mb-2 mt-1 flex items-center gap-1 text-sm font-medium"><ArrowRight className="size-3 text-muted-foreground" aria-hidden="true" />{heading}</p>
      {list}
    </nav>
  );
}
