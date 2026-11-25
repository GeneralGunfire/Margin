/**
 * Lesson content loader. Lessons are Markdown files in /content/<subject>/<topic>/<lesson>.md
 * and are bundled at build time. The database only stores an index (run `npm run sync-content`).
 */
export type Lesson = {
  id: string; // "<subject>/<topic>/<lesson>"
  subject: string; // subject slug
  topicId: string; // "<subject>/<topic>"
  topic: string; // topic title
  part?: string; // optional grouping, e.g. "Algebra" / "Calculus"
  title: string;
  order: number;
  term?: number; // 1-4, optional
  subtopic?: string; // optional grouping inside a topic
  status: "live" | "stub"; // stubs are placeholders: shown greyed out, not counted, not clickable
  pages: string[]; // textbook page references
  body: string;
};

const files = import.meta.glob("/content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

/** Minimal frontmatter parser: `key: value` lines and `[a, b]` lists. */
export function parseFrontmatter(raw: string): { data: Record<string, string | string[]>; body: string } {
  const m = raw.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const data: Record<string, string | string[]> = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if (v.startsWith("[") && v.endsWith("]")) {
      data[kv[1]] = v
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      data[kv[1]] = v.replace(/^["']|["']$/g, "");
    }
  }
  return { data, body: m[2] };
}

function build(): Lesson[] {
  const out: Lesson[] = [];
  for (const [path, raw] of Object.entries(files)) {
    const parts = path.replace(/^\/content\//, "").replace(/\.md$/, "").split("/");
    if (parts.length !== 3) {
      console.warn(`[content] ${path}: expected content/<subject>/<topic>/<lesson>.md, skipped`);
      continue;
    }
    const [subjectDir, topicDir] = parts;
    const { data, body } = parseFrontmatter(raw);
    const pages = Array.isArray(data.pages) ? data.pages : data.pages ? [String(data.pages)] : [];
    out.push({
      id: parts.join("/"),
      subject: String(data.subject || subjectDir),
      topicId: `${subjectDir}/${topicDir}`,
      topic: String(data.topic || topicDir.replace(/-/g, " ")),
      part: data.part ? String(data.part) : undefined,
      title: String(data.title || parts[2]),
      order: Number(data.order ?? 0),
      term: data.term ? Number(data.term) : undefined,
      subtopic: data.subtopic ? String(data.subtopic) : undefined,
      status: String(data.status) === "stub" ? "stub" : "live",
      pages,
      body,
    });
  }
  return out.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export const lessons: Lesson[] = build();
export const lessonById = (id: string) => lessons.find((l) => l.id === id);
/** Real lessons only. Stubs never count toward totals or progress. */
export const liveLessons: Lesson[] = lessons.filter((l) => l.status === "live");
export const lessonsForSubject = (slug: string) => liveLessons.filter((l) => l.subject === slug);
export const allLessonsForSubject = (slug: string) => lessons.filter((l) => l.subject === slug);

export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Navigation tree: part > term > topic > sub-topic > lessons (stubs included; callers filter). */
export type SubGroup = { id: string; title: string; lessons: Lesson[] }; // title "" = lessons sit directly under the topic
export type TopicNode = { id: string; dir: string; title: string; part: string; term?: number; subtopics: SubGroup[]; lessons: Lesson[] };
export type TermNode = { term?: number; topics: TopicNode[] };
export type PartNode = { part: string; terms: TermNode[] };

export function subjectTree(slug: string): PartNode[] {
  const topics = new Map<string, TopicNode>();
  for (const l of allLessonsForSubject(slug)) {
    let t = topics.get(l.topicId);
    if (!t) {
      t = { id: l.topicId, dir: l.topicId.split("/")[1], title: l.topic, part: l.part ?? "", term: l.term, subtopics: [], lessons: [] };
      topics.set(l.topicId, t);
    }
    t.lessons.push(l);
    const title = l.subtopic ?? "";
    let sg = t.subtopics.find((x) => x.title === title);
    if (!sg) t.subtopics.push((sg = { id: `${t.dir}-${slugify(title)}`, title, lessons: [] }));
    sg.lessons.push(l);
  }
  const parts = new Map<string, Map<string, TermNode>>();
  for (const t of [...topics.values()].sort((a, b) => a.lessons[0].order - b.lessons[0].order)) {
    const termKey = String(t.term ?? "");
    const byTerm = parts.get(t.part) ?? new Map<string, TermNode>();
    const node = byTerm.get(termKey) ?? { term: t.term, topics: [] };
    node.topics.push(t);
    byTerm.set(termKey, node);
    parts.set(t.part, byTerm);
  }
  return [...parts.entries()].map(([part, terms]) => ({
    part,
    terms: [...terms.values()].sort((a, b) => (a.term ?? 99) - (b.term ?? 99)),
  }));
}

/** Previous and next real lesson in the subject, skipping stubs. */
export function neighbours(lesson: Lesson): { prev?: Lesson; next?: Lesson } {
  const seq = lessonsForSubject(lesson.subject);
  const i = seq.findIndex((l) => l.id === lesson.id);
  return i < 0 ? {} : { prev: seq[i - 1], next: seq[i + 1] };
}

/** The lessons beside this one: same sub-topic, or the whole topic when it has no sub-topics. */
export function outlineFor(lesson: Lesson): Lesson[] {
  return lessons.filter((l) => l.topicId === lesson.topicId && (l.subtopic ?? "") === (lesson.subtopic ?? ""));
}
