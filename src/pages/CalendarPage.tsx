import { useCallback, useEffect, useState, type FormEvent } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { supabase, type EventRow } from "@/lib/supabase";
import { useAuth } from "@/lib/auth";
import { textOn } from "@/lib/utils";
import { fromInput, toInput, todayKey } from "@/lib/cal";
import { Btn } from "@/components/ui/btn";
import { Input, Textarea } from "@/components/ui/ui";
import { Mod, PageHead, Quiet } from "@/components/page";
import { CalendarClock, Plus, Trash2 } from "lucide-react";
import { relativeDay } from "@/lib/stats";

import { Select } from "@/components/ui/select";
import { Dialog } from "@/components/ui/dialog";
import { DateTimeField } from "@/components/ui/datetime-field";
import { Note } from "@/components/ui/note";
import { Spinner } from "@/components/ui/loading";

const KINDS = [
  { value: "study", label: "Study session" },
  { value: "test", label: "Test" },
  { value: "exam", label: "Exam" },
  { value: "deadline", label: "Deadline" },
] as const;

type Draft = { id?: string; title: string; kind: EventRow["kind"]; subject_id: string; start: string; end: string; notes: string };

function Labelled({ label, htmlFor, children }: { label: string; htmlFor?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm text-muted-foreground">{label}</label>
      {children}
    </div>
  );
}

export default function CalendarPage() {
  const { mySubjects, subjects, session } = useAuth();
  const [events, setEvents] = useState<EventRow[]>([]);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const narrow = typeof window !== "undefined" && window.innerWidth < 640;

  const load = useCallback(async () => {
    const { data, error } = await supabase.from("events").select("*").order("starts_at");
    if (error) setErr(error.message);
    setEvents((data as EventRow[]) ?? []);
  }, []);
  useEffect(() => void load(), [load]);

  const color = (id: number | null) => subjects.find((s) => s.id === id)?.color ?? "#a0a0a0";
  const hidden = new Set(subjects.filter((s) => !mySubjects.includes(s)).map((s) => s.id));

  const blank = (day: string): Draft => ({ title: "", kind: "study", subject_id: "", start: `${day.slice(0, 10)}T16:00`, end: "", notes: "" });
  const close = () => {
    setDraft(null);
    setErr(null);
  };

  const save = async (e: FormEvent) => {
    e.preventDefault();
    if (!draft) return;
    setErr(null);
    if (!draft.title.trim()) return setErr("Give the event a title.");
    if (draft.end && draft.end <= draft.start) return setErr("The end time must be after the start.");
    setSaving(true);
    const row = {
      title: draft.title.trim(),
      kind: draft.kind,
      subject_id: draft.subject_id ? Number(draft.subject_id) : null,
      starts_at: fromInput(draft.start),
      ends_at: draft.end ? fromInput(draft.end) : null,
      notes: draft.notes || null,
    };
    const { error } = draft.id
      ? await supabase.from("events").update(row).eq("id", draft.id)
      : await supabase.from("events").insert({ ...row, user_id: session!.user.id });
    setSaving(false);
    if (error) return setErr(error.message);
    close();
    void load();
  };

  const del = async () => {
    if (!draft?.id) return;
    await supabase.from("events").delete().eq("id", draft.id);
    close();
    void load();
  };

  const visible = events.filter((e) => !e.subject_id || !hidden.has(e.subject_id));
  const now = new Date();
  const upcoming = visible.filter((e) => new Date(e.ends_at ?? e.starts_at) >= now).slice(0, 7);
  const thisMonth = visible.filter((e) => {
    const d = new Date(e.starts_at);
    return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
  });
  const count = (k: EventRow["kind"]) => thisMonth.filter((e) => e.kind === k).length;
  const edit = (e: EventRow) =>
    setDraft({
      id: e.id,
      title: e.title,
      kind: e.kind,
      subject_id: e.subject_id ? String(e.subject_id) : "",
      start: toInput(e.starts_at),
      end: e.ends_at ? toInput(e.ends_at) : "",
      notes: e.notes ?? "",
    });
  return (
    <>
      <PageHead kicker="Calendar" title="Your calendar" sub="Exams, tests, study sessions and deadlines. Only you see these.">
        <Btn variant="primary" onClick={() => setDraft(blank(todayKey()))}><Plus aria-hidden="true" /> Add event</Btn>
      </PageHead>
      <div className="mt-6 grid gap-x-10 gap-y-8 border-t border-border pt-5 lg:grid-cols-[minmax(0,1fr)_19rem]">
        <div className="min-w-0">
      {err && !draft && <Note className="mb-3 mt-0">{err}</Note>}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{ left: "prev,next today", center: "title", right: narrow ? "" : "dayGridMonth,timeGridWeek" }}
        height="auto"
        firstDay={1}
        events={events
          .filter((e) => !e.subject_id || !hidden.has(e.subject_id))
          .map((e) => {
            const c = color(e.subject_id);
            return {
              id: e.id,
              title: e.title,
              start: e.starts_at,
              end: e.ends_at ?? undefined,
              backgroundColor: c,
              textColor: textOn(c),
            };
          })}
        dateClick={(i) => setDraft(blank(i.dateStr))}
        eventClick={(i) => {
          const e = events.find((x) => x.id === i.event.id);
          if (e) edit(e);
        }}
      />
        </div>

        <aside className="flex flex-col gap-8">
          <Mod title="Coming up" className="border-t-0 pt-0">
            {upcoming.length === 0 ? (
              <Quiet icon={<CalendarClock className="size-4" />} title="Nothing coming up" note="Click a day to add a test, exam, study session or deadline." />
            ) : (
              <ul className="divide-y divide-border">
                {upcoming.map((e) => (
                  <li key={e.id} className="first:pt-0">
                    <button type="button" onClick={() => edit(e)} className="group flex w-full items-start gap-3 py-2.5 text-left">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full" style={{ background: color(e.subject_id) }} aria-hidden="true" />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[13px] font-medium group-hover:text-primary">{e.title}</span>
                        <span className="block text-[11px] text-muted-foreground">
                          {relativeDay(e.starts_at)}, {new Date(e.starts_at).toLocaleDateString(undefined, { day: "numeric", month: "short" })}
                          {!e.all_day && `, ${new Date(e.starts_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`}
                        </span>
                      </span>
                      <span className="shrink-0 text-[10px] capitalize text-muted-foreground">{e.kind}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </Mod>

          <Mod title="This month">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-4">
              {([["Exams", "exam"], ["Tests", "test"], ["Study sessions", "study"], ["Deadlines", "deadline"]] as const).map(([label, kind]) => (
                <div key={kind}>
                  <dt className="text-[11px] text-muted-foreground">{label}</dt>
                  <dd className="text-2xl font-semibold tabular-nums tracking-tight">{count(kind)}</dd>
                </div>
              ))}
            </dl>
          </Mod>

          <Mod title="Subjects" link="Edit" to="/settings">
            {mySubjects.length === 0 ? (
              <p className="text-xs text-muted-foreground">No subjects ticked.</p>
            ) : (
              <ul className="flex flex-col gap-2">
                {mySubjects.map((s) => (
                  <li key={s.id} className="flex items-center gap-2.5 text-[13px]">
                    <span className="size-2.5 shrink-0 rounded-full" style={{ background: s.color }} aria-hidden="true" />
                    <span className="min-w-0 flex-1 truncate">{s.name}</span>
                    <span className="tabular-nums text-muted-foreground">{visible.filter((e) => e.subject_id === s.id).length}</span>
                  </li>
                ))}
              </ul>
            )}
          </Mod>
        </aside>
      </div>

      <Dialog
        open={!!draft}
        onClose={close}
        title={draft?.id ? "Edit event" : "New event"}
        size="sm"
        notice={err}
        footer={
          draft && (
            <>
              {draft.id && <Btn variant="destructive" className="mr-auto" onClick={del}><Trash2 aria-hidden="true" /> Delete</Btn>}
              <Btn variant="ghost" onClick={close}>Cancel</Btn>
              <Btn type="submit" variant="primary" form="event-form" loading={saving}>Save</Btn>
            </>
          )
        }
      >
        {draft && (
          <form id="event-form" onSubmit={save} noValidate className="flex flex-col gap-4">
            <Labelled label="Title" htmlFor="ev-title">
              <Input id="ev-title" data-autofocus className="h-9 rounded-md" value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
            </Labelled>
            <div className="grid grid-cols-2 gap-3">
              <Labelled label="Type">
                <Select value={draft.kind} onChange={(v) => setDraft({ ...draft, kind: v })} options={[...KINDS]} aria-label="Type" />
              </Labelled>
              <Labelled label="Subject">
                <Select
                  value={draft.subject_id}
                  onChange={(v) => setDraft({ ...draft, subject_id: v })}
                  options={[{ value: "", label: "None" }, ...mySubjects.map((s) => ({ value: String(s.id), label: s.name }))]}
                  aria-label="Subject"
                />
              </Labelled>
            </div>
            <Labelled label="Starts">
              <DateTimeField label="Start" value={draft.start} onChange={(v) => setDraft({ ...draft, start: v })} />
            </Labelled>
            <Labelled label="Ends (optional)">
              <DateTimeField label="End" clearable value={draft.end} defaultTime="17:00" onChange={(v) => setDraft({ ...draft, end: v })} />
            </Labelled>
            <Labelled label="Notes (optional)" htmlFor="ev-notes">
              <Textarea id="ev-notes" rows={2} value={draft.notes} onChange={(e) => setDraft({ ...draft, notes: e.target.value })} />
            </Labelled>
          </form>
        )}
      </Dialog>
    </>
  );
}




