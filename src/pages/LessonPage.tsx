import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight, Circle, Clock, Flag, List } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { lessonById, lessonMinutes, neighbours, outlineFor, slugify, type Lesson } from "@/lib/content";
import { useProgress } from "@/hooks/useProgress";
import { btn, btnPrimary, field, kicker } from "@/lib/styles";
import { Note } from "@/components/ui/note";
import { Meter, Quiet } from "@/components/page";
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
  const active = useActiveHeading(lesson?.id);
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
  const headings = [...lesson.body.matchAll(/^## (.+)$/gm)].map((m) => m[1].replace(/\$[^$]*\$/g, "").trim());
  // Shorter trail: where you are in the library, without repeating the lesson title (it is the heading below).
  const crumbs: { label: string; to: string }[] = [
    { label: "Library", to: "/library" },
    { label: s?.name ?? lesson.subject, to: base },
    { label: lesson.topic, to: `${base}/${topicDir}` },
  ];
  const siblings = outlineFor(lesson);
  const pos = siblings.findIndex((l) => l.id === lesson.id) + 1;
  const siblingLive = siblings.filter((l) => l.status === "live");
  const siblingDone = siblingLive.filter((l) => progress[l.id]?.done).length;
  const chip = "inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground";

  return (
    <div className="mx-auto flex w-full justify-center gap-12">
      <article className="min-w-0 max-w-3xl flex-1">
        <ReadProgress />
        <nav aria-label="Breadcrumb" className="mb-4 mt-3">
          <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] text-muted-foreground">
            {crumbs.map((c, i) => (
              <li key={c.to} className="flex min-w-0 items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3" aria-hidden="true" />}
                <Link to={c.to} className="hover:text-foreground">{c.label}</Link>
              </li>
            ))}
          </ol>
        </nav>

        <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
          <div className="min-w-0 flex-1 basis-80">
            <p className={cn(kicker, "flex items-center gap-2.5")}>
              <span className="label-rule" aria-hidden="true" />
              {lesson.subtopic ?? lesson.topic}
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{lesson.title}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {pos > 0 && siblings.length > 1 && <span className={chip}>Lesson {pos} of {siblings.length}</span>}
              {lesson.term && <span className={chip}>Term {lesson.term}</span>}
              {lesson.part && <span className={chip}>{lesson.part}</span>}
              {!isStub && <span className={chip}><Clock className="size-3" aria-hidden="true" /> About {lessonMinutes(lesson)} min</span>}
              {p?.done && <span className={cn(chip, "border-primary/40 bg-primary/10 text-primary")}><Check className="size-3" aria-hidden="true" /> Done</span>}
              {p?.flagged && <span className={cn(chip, "border-amber-500/40 bg-amber-500/10 text-amber-500")}><Flag className="size-3" aria-hidden="true" /> Struggling</span>}
            </div>
          </div>
          {!isStub && (
            <div className="flex shrink-0 gap-1.5">
              <Btn size="sm" variant={p?.flagged ? "primary" : "secondary"} aria-pressed={!!p?.flagged} aria-label={p?.flagged ? "Remove struggling flag" : "Flag as struggling"} onClick={() => update(lesson.id, { flagged: !p?.flagged })}>
                <Flag aria-hidden="true" /> <span className="hidden sm:inline">{p?.flagged ? "Flagged" : "Flag"}</span>
              </Btn>
              <Btn size="sm" variant={p?.done ? "primary" : "secondary"} aria-pressed={!!p?.done} onClick={() => update(lesson.id, { done: !p?.done })}>
                <Check aria-hidden="true" /> {p?.done ? "Done" : "Mark as done"}
              </Btn>
            </div>
          )}
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

        <nav aria-label="Previous and next lesson" className="mt-6 grid gap-3 sm:grid-cols-2">
          {prev ? (
            <Link to={`/library/${prev.id}`} className="card card-interactive group flex min-w-0 items-center gap-3 px-4 py-3.5 text-left">
              <ChevronLeft className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
              <span className="min-w-0"><span className={cn(kicker, "block text-[9.5px]")}>Previous lesson</span><span className="block truncate text-[13px] font-medium group-hover:text-primary">{prev.title}</span></span>
            </Link>
          ) : <span className="hidden sm:block" />}
          {next ? (
            <Link to={`/library/${next.id}`} className={cn("card card-interactive group flex min-w-0 items-center justify-end gap-3 px-4 py-3.5 text-right", p?.done && "border-primary/50")}>
              <span className="min-w-0"><span className={cn(kicker, "block text-[9.5px]")}>Next lesson</span><span className="block truncate text-[13px] font-medium group-hover:text-primary">{next.title}</span></span>
              <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ) : (
            <Link to={`${base}/${topicDir}`} className="card card-interactive group flex min-w-0 items-center justify-end gap-3 px-4 py-3.5 text-right">
              <span className="min-w-0"><span className={cn(kicker, "block text-[9.5px]")}>That's the last one</span><span className="block truncate text-[13px] font-medium group-hover:text-primary">Back to {lesson.topic}</span></span>
              <ChevronRight className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            </Link>
          )}
        </nav>
        <p className="mt-3 hidden text-center text-[11px] text-muted-foreground sm:block">Tip: press the left and right arrow keys to move between lessons.</p>
      </article>

      <aside className="sticky top-20 hidden h-fit max-h-[calc(100svh-6rem)] w-[232px] shrink-0 space-y-6 overflow-y-auto xl:block">
        {siblingLive.length > 0 && (
          <div className="card p-3.5">
            <div className="flex items-baseline justify-between gap-2">
              <p className={cn(kicker, "text-[9.5px]")}>Your progress</p>
              <p className="text-[11px] tabular-nums text-muted-foreground">{siblingDone}/{siblingLive.length}</p>
            </div>
            <Meter pct={Math.round((100 * siblingDone) / siblingLive.length)} className="mt-2.5" />
            <p className="mt-2 text-[11px] text-muted-foreground">{siblingDone === siblingLive.length ? "Everything here is done." : `${siblingLive.length - siblingDone} to go in ${lesson.subtopic ?? lesson.topic}`}</p>
          </div>
        )}

        <Outline lesson={lesson} progress={progress} />

        {headings.length > 1 && !isStub && (
          <nav aria-label="On this page">
            <p className={cn(kicker, "flex items-center gap-1.5 text-[9.5px]")}><List className="size-3" aria-hidden="true" /> On this page</p>
            <ul className="mt-2 border-l border-border">
              {headings.map((h, i) => (
                <li key={h}>
                  <button
                    type="button"
                    aria-current={active === i ? "location" : undefined}
                    className={cn(
                      "-ml-px block w-full border-l-2 py-1.5 pl-3 text-left text-[12px] transition-colors",
                      active === i ? "border-primary font-medium text-foreground" : "border-transparent text-muted-foreground hover:border-muted-foreground hover:text-foreground",
                    )}
                    onClick={() => document.querySelectorAll(".prose-lesson h2")[i]?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  >
                    {h}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <Link to={`${base}/${topicDir}`} className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground">
          <ChevronLeft className="size-4" aria-hidden="true" /> Back to {lesson.topic}
        </Link>
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

/** Index of the "##" section the reader is currently in, for highlighting the contents list. */
function useActiveHeading(key?: string) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    setActive(0);
    let off = () => {};
    const t = setTimeout(() => {
      const heads = Array.from(document.querySelectorAll<HTMLElement>(".prose-lesson h2"));
      if (!heads.length) return;
      const onScroll = () => {
        let idx = 0;
        heads.forEach((h, i) => {
          if (h.getBoundingClientRect().top < 140) idx = i;
        });
        setActive(idx);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      off = () => window.removeEventListener("scroll", onScroll);
    }, 0);
    return () => {
      clearTimeout(t);
      off();
    };
  }, [key]);
  return active;
}

/** A thin bar under the top bar that fills as you read down the page. */
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
