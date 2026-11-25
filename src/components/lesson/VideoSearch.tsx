import { useEffect, useRef, useState } from "react";
import { Check, Copy, ExternalLink, Search } from "lucide-react";
import { youtubeSearchUrl } from "@/lib/content";
import { cn } from "@/lib/utils";

const TOOLTIP = "Paste this into YouTube search";

/**
 * Quiet inline "Find a video" bar: shows the search phrase with subtle Copy and Open in YouTube actions.
 */
export default function VideoSearch({ phrase, className }: { phrase: string; className?: string }) {
  const text = useRef<HTMLSpanElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [status, setStatus] = useState<"idle" | "copied" | "selected">("idle");

  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => setStatus("idle"), [phrase]);

  const flash = (s: "copied" | "selected") => {
    setStatus(s);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2000);
  };

  const selectText = () => {
    const node = text.current;
    const sel = window.getSelection();
    if (!node || !sel) return false;
    const range = document.createRange();
    range.selectNodeContents(node);
    sel.removeAllRanges();
    sel.addRange(range);
    return true;
  };

  const copy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(phrase);
        return flash("copied");
      }
    } catch {
      /* fall through */
    }
    if (selectText()) {
      try {
        if (document.execCommand("copy")) return flash("copied");
      } catch {
        /* leave selected */
      }
      flash("selected");
    }
  };

  return (
    <div
      className={cn("flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-muted-foreground", className)}
      title={TOOLTIP}
      role="group"
      aria-label="Find a video"
    >
      <span className="inline-flex shrink-0 items-center gap-1.5">
        <Search className="size-3.5" aria-hidden="true" />
        <span>Video search:</span>
      </span>

      <span
        ref={text}
        onClick={selectText}
        title={TOOLTIP}
        className="cursor-text select-all text-foreground/90 underline decoration-border underline-offset-4"
      >
        {phrase}
      </span>

      <span className="inline-flex items-center gap-2">
        <button
          type="button"
          onClick={copy}
          title={TOOLTIP}
          className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          {status === "copied" ? <Check className="size-3 text-primary" aria-hidden="true" /> : <Copy className="size-3" aria-hidden="true" />}
          {status === "copied" ? "Copied" : "Copy"}
        </button>
        <a
          href={youtubeSearchUrl(phrase)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] font-medium text-primary transition-colors hover:bg-secondary"
        >
          YouTube <ExternalLink className="size-3" aria-hidden="true" />
        </a>
      </span>

      <span role="status" aria-live="polite" className="sr-only">
        {status === "copied" ? "Copied to clipboard" : status === "selected" ? "Text selected." : ""}
      </span>
    </div>
  );
}
