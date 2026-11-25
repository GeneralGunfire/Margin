import { useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import katex from "katex";
import { AlertTriangle, ChevronDown, ChevronUp, Info } from "lucide-react";
import { Steps } from "@/components/Steps";
import { cn } from "@/lib/utils";

/**
 * Lesson blocks. Lessons stay plain Markdown; these fenced blocks add structure:
 *
 *   ```steps      step-by-step working with a "Next step" button (see Steps.tsx)
 *   ```rule       a boxed formula card: "title: ..." then one line of LaTeX per row
 *   ```questions  practice questions: "Q:" and "A:" sections separated by a line of ---
 *
 * Blockquotes become callouts; one that starts with "Common mistakes" gets the warning style.
 */

const plugins = { remarkPlugins: [remarkGfm, remarkMath], rehypePlugins: [rehypeKatex] };

/** Compact Markdown (with maths) for text inside a block. */
function Md({ children }: { children: string }) {
  return (
    <div className="lesson-md">
      <ReactMarkdown {...plugins}>{children}</ReactMarkdown>
    </div>
  );
}

const tex = (t: string) => katex.renderToString(String.raw`\displaystyle ${t}`, { throwOnError: false, strict: false });

function Rule({ source }: { source: string }) {
  let title = "Rule";
  const rows: string[] = [];
  for (const raw of source.split("\n")) {
    const l = raw.trim();
    if (!l) continue;
    if (/^title:/i.test(l)) title = l.replace(/^title:\s*/i, "");
    else rows.push(l);
  }
  return (
    <figure className="my-5 rounded-xl border border-primary/40 bg-primary/10 px-5 pt-3 pb-2">
      <figcaption className="text-[10px] font-bold uppercase tracking-[0.1em] text-primary">{title}</figcaption>
      {rows.map((r, i) => (
        <div key={i} className="overflow-x-auto py-1.5 text-center" style={{ fontSize: "1.1em" }} dangerouslySetInnerHTML={{ __html: tex(r) }} />
      ))}
    </figure>
  );
}

function parseQA(source: string) {
  return source
    .split(/^---\s*$/m)
    .map((chunk) => {
      const a = chunk.search(/^A:/m);
      const q = (a < 0 ? chunk : chunk.slice(0, a)).replace(/^\s*Q:\s*/, "").trim();
      const ans = a < 0 ? "" : chunk.slice(a).replace(/^A:\s*/, "").trim();
      return { q, a: ans };
    })
    .filter((x) => x.q);
}

function Questions({ source }: { source: string }) {
  const items = parseQA(source);
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="my-5 space-y-2">
      {items.map((it, i) => {
        const on = open === i;
        return (
          <div key={i} className={cn("overflow-hidden rounded-xl border transition-colors", on ? "border-foreground/30" : "border-border")}>
            <button
              type="button"
              aria-expanded={on}
              onClick={() => setOpen(on ? null : i)}
              className="flex w-full items-start gap-3 px-4 py-3.5 text-left hover:bg-secondary/60"
            >
              <span className={cn("mt-1 grid size-5 shrink-0 place-items-center rounded-full text-[10px] font-bold", on ? "bg-primary text-primary-foreground" : "bg-muted-foreground/60 text-background")}>{i + 1}</span>
              <span className="min-w-0 flex-1 text-[14px] font-medium"><Md>{it.q}</Md></span>
              {on ? <ChevronUp className="mt-1 size-4 shrink-0 text-muted-foreground" aria-hidden="true" /> : <ChevronDown className="mt-1 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />}
            </button>
            {on && (
              <div className="border-t border-border bg-secondary/40 px-4 py-3 pl-12">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">Worked answer</p>
                <Md>{it.a.replace(/\n(?=\()/g, "\n\n")}</Md>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

type HastNode = { type?: string; value?: string; children?: HastNode[] };
const textOf = (n?: HastNode): string => (n ? (n.value ?? "") + (n.children ?? []).map(textOf).join("") : "");

function Callout({ node, children }: { node?: HastNode; children?: ReactNode }) {
  const warn = /^\s*common mistakes/i.test(textOf(node));
  const Icon = warn ? AlertTriangle : Info;
  return (
    <aside className={cn("callout my-5 flex gap-3 rounded-xl border px-4 py-3", warn ? "border-amber-500/40 bg-amber-500/10" : "border-border bg-secondary/50")}>
      <Icon className={cn("mt-1 size-4 shrink-0", warn ? "text-amber-500" : "text-muted-foreground")} aria-hidden="true" />
      <div className="min-w-0 flex-1">{children}</div>
    </aside>
  );
}

export function LessonMarkdown({ body }: { body: string }) {
  return (
    <ReactMarkdown
      {...plugins}
      components={{
        pre: ({ children }) => <>{children}</>,
        code: ({ className, children }) => {
          const src = String(children);
          if (/language-steps/.test(className ?? "")) return <Steps source={src} />;
          if (/language-rule/.test(className ?? "")) return <Rule source={src} />;
          if (/language-questions/.test(className ?? "")) return <Questions source={src} />;
          return <code className={className}>{children}</code>;
        },
        blockquote: ({ node, children }) => <Callout node={node as HastNode}>{children}</Callout>,
      }}
    >
      {body}
    </ReactMarkdown>
  );
}
