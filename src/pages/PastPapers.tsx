import { useCallback, useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Download, Eye, FileText, Trash2 } from "lucide-react";
import { supabase, type Paper, type Profile } from "@/lib/supabase";
import { useAuth } from "@/lib/auth";
import { field, kicker } from "@/lib/styles";
import { Btn } from "@/components/ui/btn";
import { Select } from "@/components/ui/select";
import { FileField } from "@/components/ui/file-field";
import { Note } from "@/components/ui/note";
import { Loading, Spinner } from "@/components/ui/loading";
import { Mod, PageHead, Quiet } from "@/components/page";

const thisYear = new Date().getFullYear();
const TERMS = [{ value: "", label: "No term" }, ...[1, 2, 3, 4].map((t) => ({ value: String(t), label: `Term ${t}` }))];
const TYPES = [
  { value: "paper", label: "Paper" },
  { value: "memo", label: "Memo" },
];

function Labelled({ label, htmlFor, children }: { label: string; htmlFor?: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className={kicker}>{label}</label>
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
    if (!myIds.has(p.subject_id)) return false; // unticked subjects are hidden
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
    void load();
  };

  return (
    <div>
      <PageHead kicker="Past papers" title="Papers and memos" sub="Both of us can upload. Everything is private to the two of us." />

      <div className="mt-8 grid gap-x-10 gap-y-8 lg:grid-cols-12">
        <Mod title="Upload" span="lg:col-span-5">
          <form onSubmit={upload} className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <FileField file={up.file} onChange={(file) => setUp({ ...up, file })} accept="application/pdf" hint="PDF, up to 30 MB" />
            </div>
            <div className="col-span-2">
              <Labelled label="Subject">
                <Select value={up.subject} onChange={(v) => setUp({ ...up, subject: v })} options={subjectOptions} placeholder="Choose a subject" aria-label="Subject" />
              </Labelled>
            </div>
            <Labelled label="Year" htmlFor="up-year">
              <input id="up-year" type="number" min={2000} max={thisYear + 1} value={up.year} onChange={(e) => setUp({ ...up, year: e.target.value })} className={`${field} h-9`} required />
            </Labelled>
            <Labelled label="Paper" htmlFor="up-paper">
              <input id="up-paper" type="number" min={1} max={9} value={up.paper} onChange={(e) => setUp({ ...up, paper: e.target.value })} className={`${field} h-9`} required />
            </Labelled>
            <Labelled label="Term">
              <Select value={up.term} onChange={(v) => setUp({ ...up, term: v })} options={TERMS} aria-label="Term" />
            </Labelled>
            <Labelled label="Type">
              <Select value={up.type} onChange={(v) => setUp({ ...up, type: v })} options={TYPES} aria-label="Type" />
            </Labelled>
            <div className="col-span-2">
              <Btn type="submit" variant="primary" className="w-full" loading={busy}>{busy ? "Uploading" : "Upload"}</Btn>
              {err && <Note>{err}</Note>}
            </div>
          </form>
        </Mod>

        <Mod title="All papers" span="lg:col-span-7">
          <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <input type="search" className={`${field} col-span-2 h-9 sm:col-span-4`} placeholder="Search by subject, year or who uploaded" aria-label="Search papers" value={f.q} onChange={(e) => setF({ ...f, q: e.target.value })} />
            <Select value={f.subject} onChange={(v) => setF({ ...f, subject: v })} aria-label="Subject" options={[{ value: "", label: "All subjects" }, ...subjectOptions]} />
            <Select value={f.year} onChange={(v) => setF({ ...f, year: v })} aria-label="Year" options={[{ value: "", label: "All years" }, ...years.map((y) => ({ value: String(y), label: String(y) }))]} />
            <Select value={f.term} onChange={(v) => setF({ ...f, term: v })} aria-label="Term" options={[{ value: "", label: "All terms" }, ...TERMS.slice(1)]} />
            <Select value={f.type} onChange={(v) => setF({ ...f, type: v })} aria-label="Type" options={[{ value: "", label: "Papers and memos" }, { value: "paper", label: "Papers" }, { value: "memo", label: "Memos" }]} />
          </div>

          {papers === null ? (
            <Loading variant="rows" rows={4} />
          ) : shown.length === 0 ? (
            <Quiet icon={<FileText className="size-4" />} title={papers.length ? "No papers match" : "No papers yet"} note={papers.length ? "Try clearing a filter." : "Upload the first one on the left."} />
          ) : (
            <ul className="divide-y divide-border">
              {shown.map((p) => {
                const s = subj(p.subject_id);
                return (
                  <li key={p.id} className="flex flex-wrap items-center gap-3 py-3 first:pt-0">
                    <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full" style={{ background: s?.color }} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] font-medium">
                        {s?.name} {p.year}, paper {p.paper}{p.term ? `, term ${p.term}` : ""}
                        <span className="ml-2 rounded-full border border-border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">{p.type === "memo" ? "Memo" : "Paper"}</span>
                      </p>
                      <p className="truncate text-[11px] text-muted-foreground">
                        {people[p.uploaded_by]?.display_name || "Unknown"}, {new Date(p.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <Btn size="sm" onClick={() => open(p, false)}><Eye aria-hidden="true" /> View</Btn>
                      <Btn size="sm" onClick={() => open(p, true)}><Download aria-hidden="true" /> Download</Btn>
                      {p.uploaded_by === uid && (
                        <Btn variant="destructive" size="icon-sm" onClick={() => remove(p)} aria-label="Delete paper"><Trash2 aria-hidden="true" /></Btn>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </Mod>
      </div>
    </div>
  );
}

