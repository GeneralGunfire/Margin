import { Fragment, useMemo, useState } from "react";
import katex from "katex";
import { motion } from "motion/react";
import { Eye, RotateCcw, StepForward } from "lucide-react";
import { btn, btnPrimary, kicker } from "@/lib/styles";

const html = (tex: string, display: boolean) =>
  katex.renderToString(display ? String.raw`\displaystyle ${tex}` : tex, { throwOnError: false, strict: false });

function Rich({ text }: { text: string }) {
  const parts = text.split(/(\$[^$]+\$)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.length > 2 && p.startsWith("$") && p.endsWith("$") ? (
          <span key={i} dangerouslySetInnerHTML={{ __html: html(p.slice(1, -1), false) }} />
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

export function parseSteps(src: string) {
  let title = "Worked solution";
  const steps: { note: string; tex: string }[] = [];
  for (const raw of src.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (/^title:/i.test(line)) {
      title = line.replace(/^title:\s*/i, "");
      continue;
    }
    const i = line.indexOf("::");
    steps.push(i < 0 ? { note: "", tex: line } : { note: line.slice(0, i).trim(), tex: line.slice(i + 2).trim() });
  }
  return { title, steps };
}

export function Steps({ source }: { source: string }) {
  const { title, steps } = useMemo(() => parseSteps(source), [source]);
  const [shown, setShown] = useState(1);
  const done = shown >= steps.length;
  return (
    <figure className="not-prose my-6 overflow-hidden rounded-2xl border border-border/80 bg-card/45">
      <figcaption className="flex items-center justify-between gap-3 border-b border-border/70 px-5 py-3">
        <span className={kicker}><Rich text={title} /></span>
        <span className="text-[11px] tabular-nums text-muted-foreground">Step {Math.min(shown, steps.length)} of {steps.length}</span>
      </figcaption>
      <ol aria-live="polite" className="m-0 list-none divide-y divide-border/60 p-0">
        {steps.slice(0, shown).map((s, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{ lineHeight: 1.5, marginBottom: 0 }}
            className="grid gap-x-6 gap-y-1.5 px-5 py-3.5 sm:grid-cols-[minmax(0,13.5rem)_minmax(0,1fr)]"
          >
            <p style={{ lineHeight: 1.5, margin: 0 }} className="self-center text-[13px] text-muted-foreground">
              <span className="mr-2 font-semibold text-foreground/75">{i + 1}.</span>
              <Rich text={s.note} />
            </p>
            <div className="min-w-0 self-center overflow-x-auto text-[1.05em]" dangerouslySetInnerHTML={{ __html: html(s.tex, true) }} />
          </motion.li>
        ))}
      </ol>
      <div className="flex flex-wrap items-center gap-2 border-t border-border/70 px-5 py-3">
        {!done && (
          <button type="button" className={btnPrimary} onClick={() => setShown((n) => n + 1)}>
            <StepForward className="size-4" aria-hidden="true" /> Next step
          </button>
        )}
        {!done && (
          <button type="button" className={btn} onClick={() => setShown(steps.length)}>
            <Eye className="size-4" aria-hidden="true" /> Show all
          </button>
        )}
        {shown > 1 && (
          <button type="button" className={btn} onClick={() => setShown(1)}>
            <RotateCcw className="size-4" aria-hidden="true" /> Restart
          </button>
        )}
        {done && <span className="text-xs text-muted-foreground">All steps shown.</span>}
      </div>
    </figure>
  );
}
