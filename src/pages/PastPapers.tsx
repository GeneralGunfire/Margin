import { useCallback, useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Download, Eye, FileText, Plus, Search, Trash2, X } from "lucide-react";
import { supabase, type Paper, type Profile } from "@/lib/supabase";
import { useAuth } from "@/lib/auth";
import { Btn } from "@/components/ui/btn";
import { Select } from "@/components/ui/select";
import { FileField } from "@/components/ui/file-field";
import { Note } from "@/components/ui/note";
import { Loading } from "@/components/ui/loading";
import { PageHead, Quiet } from "@/components/page";

const thisYear = new Date().getFullYear();
const TERMS = [{ value: "", label: "No term" }, ...[1, 2, 3, 4].map((t) => ({ value: String(t), label: `Term ${t}` }))];
const TYPES = [
  { value: "paper", label: "Paper" },
  { value: "memo", label: "Memo" },
];

function Labelled({ label, htmlFor, children }: { label: string; htmlFor?: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-xs font-medium text-muted-foreground">{label}</label>
      {children}
    </div>
  );
}

export default function PastPapers() {
  const { mySubjects, subjects, session } = useAuth();
  const uid = session!.user.id;
  const [papers, setPapers] = useState<Paper[] | null>(null);
  const [people, setPeople] = useState<Record<string, Profile>>({});
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [f, setF] = useState({ subject: "", year: "", type: "", term: "", q: "" });
  const [up, setUp] = useState({ file: null as File | null, subject: "", year: String(thisYear - 1), paper: "1", term: "", type: "paper" });

  const load = useCallback(async () => {
    const [p, pr] = await Promise.all([
      supabase.from("past_papers").select("*").order("created_at", { ascending: false }),
      supabase.from("profiles").select("*"),
    ]);
    if (p.error) setErr(p.error.message);
    setPapers((p.data as Paper[]) ?? []);
    setPeople(Object.fromEntries(((pr.data as Profile[]) ?? []).map((x) => [x.id, x])));
  }, []);
  useEffect(() => void load(), [load]);

  const subj = (id: number) => subjects.find((s) => s.id === id);
  const myIds = useMemo(() => new Set(mySubjects.map((s) => s.id)), [mySubjects]);

  const shown = (papers ?? []).filter((p) => {
    if (!myIds.has(p.subject_id)) return false;
    if (f.subject && p.subject_id !== Number(f.subject)) return false;
    if (f.year && p.year !== Number(f.year)) return false;
    if (f.type && p.type !== f.type) return false;
    if (f.term && p.term !== Number(f.term)) return false;
    if (f.q) {
      const hay = `${subj(p.subject_id)?.name} ${p.year} paper ${p.paper} ${p.title ?? ""} ${people[p.uploaded_by]?.display_name ?? ""}`.toLowerCase();
      if (!hay.includes(f.q.toLowerCase())) return false;
    }
    return true;
  });

  const years = [...new Set((papers ?? []).map((p) => p.year))].sort((a, b) => b - a);
  const subjectOptions = mySubjects.map((s) => ({ value: String(s.id), label: s.name }));
  const hasFilters = !!(f.subject || f.year || f.type || f.term || f.q);

  const open = async (p: Paper, download: boolean) => {
    const { data, error } = await supabase.storage
      .from("papers")
      .createSignedUrl(p.file_path, 300, download ? { download: p.title ?? true } : undefined);
    if (error || !data) return setErr(error?.message ?? "Could not create link");
    window.open(data.signedUrl, "_blank", "noopener");
  };

  const remove = async (p: Paper) => {
    if (!confirm("Delete this paper?")) return;
    await supabase.storage.from("papers").remove([p.file_path]);
    const { error } = await supabase.from("past_papers").delete().eq("id", p.id);
    if (error) setErr(error.message);
    void load();
  };

  const upload = async (e: FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (!up.file) return setErr("Choose a PDF to upload.");
    if (up.file.type !== "application/pdf") return setErr("That file isn't a PDF.");
    if (!up.subject) return setErr("Choose a subject.");
    setBusy(true);
    const path = `${uid}/${crypto.randomUUID()}.pdf`;
    const put = await supabase.storage.from("papers").upload(path, up.file, { contentType: "application/pdf" });
    if (put.error) {
      setBusy(false);
      return setErr(put.error.message);
    }
    const { error } = await supabase.from("past_papers").insert({
      file_path: path,
      title: up.file.name,
      subject_id: Number(up.subject),
      year: Number(up.year),
      paper: Number(up.paper),
      term: up.term ? Number(up.term) : null,
      type: up.type,
    });
    setBusy(false);
    if (error) {
      await supabase.storage.from("papers").remove([path]);
      return setErr(error.message);
    }
    setUp({ ...up, file: null });
    setShowUpload(false);
    void load();
  };

  return (
    <div className="space-y-8">
      <PageHead kicker="Past papers" title="Papers and memos" sub="Shared privately between you. Upload PDFs or filter by subject and year.">
        <Btn size="sm" variant={showUpload ? "secondary" : "primary"} onClick={() => setShowUpload((v) => !v)} aria-expanded={showUpload}>
          {showUpload ? <X aria-hidden="true" /> : <Plus aria-hidden="true" />}
          {showUpload ? "Close" : "Upload paper"}
        </Btn>
      </PageHead>

      {showUpload && (
        <section aria-label="Upload paper" className="rounded-lg border border-border p-5">
          <form onSubmit={upload} className="grid gap-4 sm:grid-cols-4">
            <div className="sm:col-span-4">
              <FileField file={up.file} onChange={(file) => setUp({ ...up, file })} accept="application/pdf" hint="PDF, up to 30 MB" />
            </div>
            <div className="sm:col-span-2">
              <Labelled label="Subject">
                <Select value={up.subject} onChange={(v) => setUp({ ...up, subject: v })} options={subjectOptions} placeholder="Choose a subject" aria-label="Subject" />
              </Labelled>
            </div>
            <Labelled label="Year" htmlFor="up-year">
              <input
                id="up-year"
                type="number"
                min={2000}
                max={thisYear + 1}
                value={up.year}
                onChange={(e) => setUp({ ...up, year: e.target.value })}
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm transition-colors hover:border-muted-foreground/60 focus-visible:border-ring focus-visible:outline-2 focus-visible:outline-ring"
                required
              />
            </Labelled>
            <Labelled label="Paper" htmlFor="up-paper">
              <input
                id="up-paper"
                type="number"
                min={1}
                max={9}
                value={up.paper}
                onChange={(e) => setUp({ ...up, paper: e.target.value })}
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm transition-colors hover:border-muted-foreground/60 focus-visible:border-ring focus-visible:outline-2 focus-visible:outline-ring"
                required
              />
            </Labelled>
            <Labelled label="Term">
              <Select value={up.term} onChange={(v) => setUp({ ...up, term: v })} options={TERMS} aria-label="Term" />
            </Labelled>
            <Labelled label="Type">
              <Select value={up.type} onChange={(v) => setUp({ ...up, type: v })} options={TYPES} aria-label="Type" />
            </Labelled>
            <div className="flex items-end sm:col-span-2">
              <Btn type="submit" variant="primary" size="sm" loading={busy}>
                {busy ? "Uploading" : "Upload PDF"}
              </Btn>
            </div>
          </form>
          {err && <Note className="mt-4">{err}</Note>}
        </section>
      )}

      {!showUpload && err && <Note>{err}</Note>}

      <section className="space-y-5 border-t border-border pt-5">
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative min-w-52 flex-1 sm:max-w-xs">
            <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search papers"
              aria-label="Search papers"
              value={f.q}
              onChange={(e) => setF({ ...f, q: e.target.value })}
              className="h-9 w-full rounded-md border border-input bg-background pl-8 pr-3 text-xs placeholder:text-muted-foreground transition-colors hover:border-muted-foreground/60 focus-visible:border-ring focus-visible:outline-2 focus-visible:outline-ring"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="w-40">
              <Select value={f.subject} onChange={(v) => setF({ ...f, subject: v })} aria-label="Subject" options={[{ value: "", label: "All subjects" }, ...subjectOptions]} />
            </div>
            <div className="w-28">
              <Select value={f.year} onChange={(v) => setF({ ...f, year: v })} aria-label="Year" options={[{ value: "", label: "All years" }, ...years.map((y) => ({ value: String(y), label: String(y) }))]} />
            </div>
            <div className="w-28">
              <Select value={f.term} onChange={(v) => setF({ ...f, term: v })} aria-label="Term" options={[{ value: "", label: "All terms" }, ...TERMS.slice(1)]} />
            </div>
            <div className="w-36">
              <Select value={f.type} onChange={(v) => setF({ ...f, type: v })} aria-label="Type" options={[{ value: "", label: "Papers & memos" }, { value: "paper", label: "Papers" }, { value: "memo", label: "Memos" }]} />
            </div>
            {hasFilters && (
              <button
                type="button"
                onClick={() => setF({ subject: "", year: "", type: "", term: "", q: "" })}
                className="px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {papers === null ? (
          <Loading variant="rows" rows={4} />
        ) : shown.length === 0 ? (
          <div className="border-t border-border pt-6">
            <Quiet
              icon={<FileText className="size-4" />}
              title={papers.length ? "No papers match" : "No papers yet"}
              note={papers.length ? "Try clearing a filter." : "Upload your first paper or memo to keep it here."}
            />
          </div>
        ) : (
          <ul className="divide-y divide-border border-y border-border">
            {shown.map((p) => {
              const s = subj(p.subject_id);
              return (
                <li key={p.id} className="flex flex-wrap items-center gap-3 py-3">
                  <span aria-hidden="true" className="size-2 shrink-0 rounded-full" style={{ background: s?.color }} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">
                      {s?.name} {p.year} · Paper {p.paper}
                      {p.term ? ` · Term ${p.term}` : ""}
                      <span className="font-normal text-muted-foreground"> · {p.type === "memo" ? "Memo" : "Paper"}</span>
                    </p>
                    <p className="mt-0.5 truncate text-[11px] text-muted-foreground">
                      {people[p.uploaded_by]?.display_name || "Unknown"} · {new Date(p.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Btn size="sm" variant="ghost" onClick={() => open(p, false)}>
                      <Eye aria-hidden="true" /> View
                    </Btn>
                    <Btn size="sm" variant="ghost" onClick={() => open(p, true)}>
                      <Download aria-hidden="true" /> Download
                    </Btn>
                    {p.uploaded_by === uid && (
                      <Btn variant="destructive" size="icon-sm" onClick={() => remove(p)} aria-label="Delete paper">
                        <Trash2 aria-hidden="true" />
                      </Btn>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
