import { useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import katex from "katex";
import { AlertTriangle, ChevronDown, ChevronUp, Info } from "lucide-react";
import { Steps } from "@/components/Steps";
import { DiagramBlock } from "@/components/diagram";
import { cn } from "@/lib/utils";

/**
 * Lesson blocks. Lessons stay plain Markdown; these fenced blocks add structure:
 *
 *   ```steps      step-by-step working with a "Next step" button (see Steps.tsx)
 *   ```rule       a boxed formula card: "title: ..." then one line of LaTeX per row
 *   ```questions  practice questions: "Q:" and "A:" sections separated by a line of ---
 *
 *   ```definition  a highlighted definition to memorise: "title: ..." then the wording
 *   ```formula     KaTeX formula(s) ("formula: ..."), a legend ("sym | name | unit | scalar or vector") and "use: ..."
 *   ```worked      Physics-style worked example: lines "Given:", "Unknown:", "Equation:", "Substitution:", "Answer:"
 *   ```diagram     an SVG diagram from src/components/diagram ("name: ..." plus options)
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
    <figure className="my-6 rounded-lg border border-primary/30 bg-primary/5 px-5 py-3.5">
      <figcaption className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-primary">{title}</figcaption>
      {rows.map((r, i) => (
        <div key={i} className="overflow-x-auto py-1 text-center" style={{ fontSize: "1.06em" }} dangerouslySetInnerHTML={{ __html: tex(r) }} />
      ))}
    </figure>
  );
}

const NL = "\n";

function Definition({ source }: { source: string }) {
  let title = "Definition";
  const body: string[] = [];
  for (const raw of source.split(NL)) {
    if (/^title:/i.test(raw.trim())) title = raw.trim().replace(/^title:\s*/i, "");
    else body.push(raw);
  }
  return (
    <aside className="def-box my-5 rounded-xl border border-primary/40 border-l-primary bg-primary/10 px-5 py-3">
      <p className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-primary">
        <span>Definition: {title}</span>
        <span className="rounded-full border border-primary/40 px-2 py-0.5 normal-case tracking-normal">Memorise word for word</span>
      </p>
      <div className="mt-1.5 text-[15px] font-medium"><Md>{body.join(NL).trim()}</Md></div>
    </aside>
  );
}

function Formula({ source }: { source: string }) {
  let title = "Formula";
  let use = "";
  const formulas: string[] = [];
  const legend: string[][] = [];
  for (const raw of source.split(NL)) {
    const l = raw.trim();
    if (!l) continue;
    if (/^title:/i.test(l)) title = l.replace(/^title:\s*/i, "");
    else if (/^formula:/i.test(l)) formulas.push(l.replace(/^formula:\s*/i, ""));
    else if (/^use:/i.test(l)) use = l.replace(/^use:\s*/i, "");
    else if (l.includes("|")) legend.push(l.split("|").map((c) => c.trim()));
  }
  return (
    <figure className="my-5 rounded-xl border border-primary/40 bg-primary/10 px-5 pt-3 pb-4">
      <figcaption className="text-[10px] font-bold uppercase tracking-[0.1em] text-primary">Formula: {title}</figcaption>
      {formulas.map((f, i) => (
        <div key={i} className="overflow-x-auto py-1.5 text-center" style={{ fontSize: "1.15em" }} dangerouslySetInnerHTML={{ __html: tex(f) }} />
      ))}
      {legend.length > 0 && (
        <div className="mt-2 overflow-x-auto">
          <table className="formula-legend text-[12.5px]">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
                <th className="py-1 pr-3 font-semibold">Symbol</th><th className="py-1 pr-3 font-semibold">Quantity</th><th className="py-1 pr-3 font-semibold">SI unit</th><th className="py-1 font-semibold">Type</th>
              </tr>
            </thead>
            <tbody>
              {legend.map((r, i) => (
                <tr key={i} className="border-t border-border/60 align-top">
                  <td className="py-1.5 pr-3" dangerouslySetInnerHTML={{ __html: katex.renderToString(r[0] ?? "", { throwOnError: false }) }} />
                  <td className="py-1.5 pr-3">{r[1]}</td>
                  <td className="py-1.5 pr-3">{r[2]}</td>
                  <td className="py-1.5">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {use && <p className="mt-3 text-[13px]"><span className="font-semibold">When to use it: </span><span className="text-muted-foreground">{use}</span></p>}
    </figure>
  );
}

const WORKED_LABELS = ["Given", "Unknown", "Equation", "Substitution", "Answer"];

function Worked({ source }: { source: string }) {
  let title = "Worked example";
  const rows: { label: string; text: string }[] = [];
  for (const raw of source.split(NL)) {
    const l = raw.trim();
    if (!l) continue;
    if (/^title:/i.test(l)) { title = l.replace(/^title:\s*/i, ""); continue; }
    const m = l.match(/^([A-Za-z]+):\s*(.*)$/);
    if (m && WORKED_LABELS.includes(m[1])) rows.push({ label: m[1], text: m[2] });
    else rows.push({ label: "", text: l });
  }
  return (
    <figure className="my-6 overflow-hidden rounded-lg border border-border">
      <figcaption className="border-b border-border bg-secondary px-4 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground"><Md>{title}</Md></figcaption>
      <dl className="divide-y divide-border/60">
        {rows.map((r, i) => (
          <div key={i} className={cn("grid gap-x-4 px-4 py-2 sm:grid-cols-[7.5rem_1fr]", r.label === "Answer" && "bg-primary/10")}>
            <dt className={cn("text-[10px] font-bold uppercase tracking-[0.1em] pt-1.5", r.label === "Answer" ? "text-primary" : "text-muted-foreground")}>{r.label}</dt>
            <dd className="min-w-0 overflow-x-auto"><Md>{r.text}</Md></dd>
          </div>
        ))}
      </dl>
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
    <div className="my-5 divide-y divide-border rounded-lg border border-border">
      {items.map((it, i) => {
        const on = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              aria-expanded={on}
              onClick={() => setOpen(on ? null : i)}
              className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-secondary/40"
            >
              <span className={cn("mt-1 text-xs font-semibold tabular-nums", on ? "text-primary" : "text-muted-foreground")}>{i + 1}.</span>
              <span className="min-w-0 flex-1 text-[14px] font-medium"><Md>{it.q}</Md></span>
              {on ? <ChevronUp className="mt-1 size-4 shrink-0 text-muted-foreground" aria-hidden="true" /> : <ChevronDown className="mt-1 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />}
            </button>
            {on && (
              <div className="border-t border-border/60 bg-secondary/30 px-4 py-3 pl-9">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">Worked answer</p>
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
    <aside className={cn("callout my-5 flex gap-3 rounded-lg border px-4 py-3", warn ? "border-amber-500/30 bg-amber-500/5" : "border-border bg-secondary/30")}>
      <Icon className={cn("mt-1 size-4 shrink-0", warn ? "text-amber-500" : "text-muted-foreground")} aria-hidden="true" />
      <div className="min-w-0 flex-1">{children}</div>
    </aside>
  );
}

function TryIt({ source }: { source: string }) {
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  let title = "Try it first";
  let prompt = "";
  let hint = "";
  let answer = "";
  let mode: "prompt" | "hint" | "answer" = "prompt";

  for (const raw of source.split(NL)) {
    const trimmed = raw.trim();
    if (/^title:/i.test(trimmed)) {
      title = trimmed.replace(/^title:\s*/i, "");
    } else if (/^hint:/i.test(trimmed)) {
      mode = "hint";
      hint = trimmed.replace(/^hint:\s*/i, "");
    } else if (/^answer:/i.test(trimmed)) {
      mode = "answer";
      answer = trimmed.replace(/^answer:\s*/i, "");
    } else if (/^prompt:/i.test(trimmed)) {
      mode = "prompt";
      prompt = trimmed.replace(/^prompt:\s*/i, "");
    } else {
      if (mode === "hint") hint += (hint ? NL : "") + raw;
      else if (mode === "answer") answer += (answer ? NL : "") + raw;
      else prompt += (prompt ? NL : "") + raw;
    }
  }

  return (
    <aside className="not-prose my-5 rounded-lg border border-border bg-secondary/20 px-4 py-3.5">
      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-primary">{title}</p>
      <div className="text-[14px]"><Md>{prompt.trim()}</Md></div>
      <div className="mt-3 flex flex-wrap gap-2">
        {hint.trim() && (
          <button
            type="button"
            onClick={() => setShowHint((v) => !v)}
            className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {showHint ? "Hide hint" : "Hint"}
          </button>
        )}
        <button
          type="button"
          onClick={() => setShowAnswer((v) => !v)}
          className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-secondary/80"
        >
          {showAnswer ? "Hide answer" : "Check answer"}
        </button>
      </div>
      {showHint && hint.trim() && (
        <div className="mt-3 border-t border-border pt-2.5 text-[13px] text-muted-foreground">
          <Md>{hint.trim()}</Md>
        </div>
      )}
      {showAnswer && answer.trim() && (
        <div className="mt-3 border-t border-border pt-2.5 text-[13.5px]">
          <Md>{answer.trim()}</Md>
        </div>
      )}
    </aside>
  );
}

function Compare({ source }: { source: string }) {
  let title = "Compare";
  let leftTitle = "Option A";
  let rightTitle = "Option B";
  let left = "";
  let right = "";
  let side: "left" | "right" | null = null;

  for (const raw of source.split(NL)) {
    const trimmed = raw.trim();
    if (/^title:/i.test(trimmed)) {
      title = trimmed.replace(/^title:\s*/i, "");
    } else if (/^left_title:/i.test(trimmed)) {
      leftTitle = trimmed.replace(/^left_title:\s*/i, "");
      side = "left";
    } else if (/^right_title:/i.test(trimmed)) {
      rightTitle = trimmed.replace(/^right_title:\s*/i, "");
      side = "right";
    } else if (/^left:/i.test(trimmed)) {
      side = "left";
      const rest = trimmed.replace(/^left:\s*/i, "");
      if (rest) left += (left ? NL : "") + rest;
    } else if (/^right:/i.test(trimmed)) {
      side = "right";
      const rest = trimmed.replace(/^right:\s*/i, "");
      if (rest) right += (right ? NL : "") + rest;
    } else if (side === "left") {
      left += (left ? NL : "") + raw;
    } else if (side === "right") {
      right += (right ? NL : "") + raw;
    }
  }

  return (
    <figure className="not-prose my-5 overflow-hidden rounded-lg border border-border">
      <figcaption className="border-b border-border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
        {title}
      </figcaption>
      <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <div className="p-4">
          <p className="mb-1.5 text-xs font-semibold text-primary">{leftTitle}</p>
          <div className="text-[13.5px]"><Md>{left.trim()}</Md></div>
        </div>
        <div className="p-4">
          <p className="mb-1.5 text-xs font-semibold text-amber-500">{rightTitle}</p>
          <div className="text-[13.5px]"><Md>{right.trim()}</Md></div>
        </div>
      </div>
    </figure>
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
          if (/language-definition/.test(className ?? "")) return <Definition source={src} />;
          if (/language-formula/.test(className ?? "")) return <Formula source={src} />;
          if (/language-worked/.test(className ?? "")) return <Worked source={src} />;
          if (/language-diagram/.test(className ?? "")) return <DiagramBlock source={src} />;
          if (/language-questions/.test(className ?? "")) return <Questions source={src} />;
          if (/language-tryit/.test(className ?? "")) return <TryIt source={src} />;
          if (/language-compare/.test(className ?? "")) return <Compare source={src} />;
          return <code className={className}>{children}</code>;
        },
        blockquote: ({ node, children }) => <Callout node={node as HastNode}>{children}</Callout>,
      }}
    >
      {body}
    </ReactMarkdown>
  );
}
