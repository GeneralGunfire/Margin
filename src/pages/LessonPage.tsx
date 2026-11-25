import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Check, ChevronDown, ChevronLeft, ChevronRight, Flag } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { lessonById, lessonMinutes, neighbours, outlineFor, videoSearchPhrase, type Lesson } from "@/lib/content";
import VideoSearch from "@/components/lesson/VideoSearch";
import { useProgress } from "@/hooks/useProgress";
import { btn, btnPrimary, field, kicker } from "@/lib/styles";
import { Note } from "@/components/ui/note";
import { Quiet } from "@/components/page";
import { Btn } from "@/components/ui/btn";
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

  // Left and right arrow keys move to the previous and next lesson (not while typing).
  const navigate = useNavigate();
  useEffect(() => {
    if (!lesson) return;
    const { prev, next } = neighbours(lesson);
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      if (e.key === "ArrowLeft" && prev) navigate(`/library/${prev.id}`);
      else if (e.key === "ArrowRight" && next) navigate(`/library/${next.id}`);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lesson, navigate]);

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
  const crumbs: { label: string; to: string }[] = [
    { label: "Library", to: "/library" },
    { label: s?.name ?? lesson.subject, to: base },
    { label: lesson.topic, to: `${base}/${topicDir}` },
  ];
  const siblings = outlineFor(lesson);
  const pos = siblings.findIndex((l) => l.id === lesson.id) + 1;

  const metaParts: string[] = [];
  if (lesson.term) metaParts.push(`Term ${lesson.term}`);
  if (lesson.part) metaParts.push(lesson.part);
  if (!isStub) metaParts.push(`${lessonMinutes(lesson)} min read`);
  if (pos > 0 && siblings.length > 1) metaParts.push(`Lesson ${pos} of ${siblings.length}`);

  return (
    <article className="mx-auto w-full max-w-2xl">
      <ReadProgress />

        <nav aria-label="Breadcrumb" className="mb-3 mt-3">
          <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-muted-foreground">
            {crumbs.map((c, i) => (
              <li key={c.to} className="flex min-w-0 items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3 opacity-60" aria-hidden="true" />}
                <Link to={c.to} className="transition-colors hover:text-foreground">{c.label}</Link>
              </li>
            ))}
          </ol>
        </nav>

        <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
          <div className="min-w-0 flex-1 basis-72">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{lesson.title}</h1>
            <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
              {metaParts.map((part, i) => (
                <span key={part} className="inline-flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">·</span>}
                  <span>{part}</span>
                </span>
              ))}
              {p?.done && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-primary">Completed</span>
                </>
              )}
              {p?.flagged && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-amber-500">Flagged</span>
                </>
              )}
            </p>
          </div>

          {!isStub && (
            <div className="flex shrink-0 items-center gap-1.5">
              <Btn
                size="sm"
                variant={p?.flagged ? "primary" : "ghost"}
                aria-pressed={!!p?.flagged}
                aria-label={p?.flagged ? "Remove struggling flag" : "Flag as struggling"}
                onClick={() => update(lesson.id, { flagged: !p?.flagged })}
              >
                <Flag aria-hidden="true" />
                <span className="hidden sm:inline">{p?.flagged ? "Flagged" : "Flag"}</span>
              </Btn>
              <Btn
                size="sm"
                variant={p?.done ? "primary" : "secondary"}
                aria-pressed={!!p?.done}
                onClick={() => update(lesson.id, { done: !p?.done })}
              >
                <Check aria-hidden="true" />
                {p?.done ? "Done" : "Mark done"}
              </Btn>
            </div>
          )}
        </header>

        {!isStub && <VideoSearch phrase={videoSearchPhrase(lesson, s?.name ?? lesson.subject)} className="mt-4" />}

        {siblings.length > 1 && (
          <div className="mt-5">
            <Outline lesson={lesson} progress={progress} compact />
          </div>
        )}

        <div className="prose-lesson mt-6 border-t border-border pt-6">
          {isStub ? (
            <Quiet icon={<Check className="size-4" />} title="Coming soon" note="This lesson hasn't been written yet." to={base} action="Back to the topic list" />
          ) : (
            <LessonMarkdown body={lesson.body} />
          )}
        </div>

        {!isStub && (
          <section className="mt-12 border-t border-border pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium">{p?.done ? "Lesson completed" : "Finished this lesson?"}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Save your progress or flag it to revisit later.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button type="button" className={cn(p?.flagged ? btnPrimary : btn)} aria-pressed={!!p?.flagged} onClick={() => update(lesson.id, { flagged: !p?.flagged })}>
                  <Flag className="size-3.5" aria-hidden="true" /> {p?.flagged ? "Flagged" : "Flag"}
                </button>
                <button type="button" className={cn(p?.done ? btnPrimary : btn)} aria-pressed={!!p?.done} onClick={() => update(lesson.id, { done: !p?.done })}>
                  <Check className="size-3.5" aria-hidden="true" /> {p?.done ? "Done" : "Mark done"}
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
                <input className={field} value={note} maxLength={200} placeholder="Note on what's tricky (optional)" aria-label="Note" onChange={(e) => setNote(e.target.value)} />
                <button type="submit" className={btn}>Save note</button>
              </form>
            )}
            {error && <Note className="mt-4 max-w-xl">{error}</Note>}
          </section>
        )}

        <nav aria-label="Previous and next lesson" className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-5">
          {prev ? (
            <Link to={`/library/${prev.id}`} className="group flex min-w-0 items-center gap-2 text-left text-muted-foreground transition-colors hover:text-foreground">
              <ChevronLeft className="size-4 shrink-0 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-[10px] uppercase tracking-[0.08em]">Previous</span>
                <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary">{prev.title}</span>
              </span>
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/library/${next.id}`} className="group flex min-w-0 items-center gap-2 text-right text-muted-foreground transition-colors hover:text-foreground">
              <span className="min-w-0">
                <span className="block text-[10px] uppercase tracking-[0.08em]">Next</span>
                <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary">{next.title}</span>
              </span>
              <ChevronRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ) : (
            <Link to={`${base}/${topicDir}`} className="group flex min-w-0 items-center gap-2 text-right text-muted-foreground transition-colors hover:text-foreground">
              <span className="min-w-0">
                <span className="block text-[10px] uppercase tracking-[0.08em]">End of topic</span>
                <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary">Back to {lesson.topic}</span>
              </span>
              <ChevronRight className="size-4 shrink-0" aria-hidden="true" />
            </Link>
          )}
        </nav>
      </article>
  );
}

/** Calm, unboxed outline of lessons in the current sub-topic. */
function Outline({ lesson, progress, compact }: { lesson: Lesson; progress: Record<string, Progress>; compact?: boolean }) {
  const items = outlineFor(lesson);
  const heading = lesson.subtopic ?? lesson.topic;
  const live = items.filter((l) => l.status === "live");
  const doneCount = live.filter((l) => progress[l.id]?.done).length;

  const list = (
    <ol className="space-y-1">
      {items.map((l) => {
        const here = l.id === lesson.id;
        const isDone = progress[l.id]?.done;
        if (l.status === "stub") {
          return (
            <li key={l.id} aria-disabled="true" className="flex cursor-not-allowed items-center gap-2 py-1 text-xs text-muted-foreground/45">
              <span className="size-1.5 shrink-0 rounded-full bg-border" aria-hidden="true" />
              <span className="min-w-0 flex-1 truncate">{l.title}</span>
            </li>
          );
        }
        return (
          <li key={l.id}>
            <Link
              to={`/library/${l.id}`}
              aria-current={here ? "page" : undefined}
              className={cn(
                "flex items-center gap-2 rounded-md py-1 text-xs transition-colors",
                here ? "font-medium text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {isDone ? (
                <Check className="size-3.5 shrink-0 text-primary" aria-label="Done" />
              ) : (
                <span className={cn("size-1.5 shrink-0 rounded-full", here ? "bg-primary" : "bg-muted-foreground/40")} aria-hidden="true" />
              )}
              <span className="min-w-0 flex-1 leading-snug">{l.title}</span>
            </Link>
          </li>
        );
      })}
    </ol>
  );

  return (
    <details className="group rounded-lg border border-border">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3.5 py-2.5 text-xs [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 truncate font-medium text-foreground">{heading}</span>
        <span className="flex shrink-0 items-center gap-2 text-muted-foreground">
          {live.length > 0 && <span className="tabular-nums">{doneCount}/{live.length}</span>}
          <ChevronDown aria-hidden="true" className="size-4 transition-transform group-open:rotate-180" />
        </span>
      </summary>
      <div className="border-t border-border px-3.5 py-2">{list}</div>
    </details>
  );
}

function ReadProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  return (
    <div aria-hidden="true" className="sticky top-14 z-10 h-0.5 rounded-full bg-border/50">
      <div className="h-full rounded-full bg-primary transition-[width] duration-100 motion-reduce:transition-none" style={{ width: `${pct}%` }} />
    </div>
  );
}
