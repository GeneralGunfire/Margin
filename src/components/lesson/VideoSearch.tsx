import { useEffect, useRef, useState } from "react";
import { Check, Copy, ExternalLink, Search } from "lucide-react";
import { Btn } from "@/components/ui/btn";
import { youtubeSearchUrl } from "@/lib/content";

const TOOLTIP = "Paste this into YouTube search";

/**
 * "Find a video": a short search phrase to paste into YouTube, with Copy (primary) and an Open in YouTube link.
 * It only builds text and a link. Nothing is fetched from YouTube.
 */
export default function VideoSearch({ phrase, className }: { phrase: string; className?: string }) {
  const text = useRef<HTMLParagraphElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [status, setStatus] = useState<"idle" | "copied" | "selected">("idle");

  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => setStatus("idle"), [phrase]);

  const flash = (s: "copied" | "selected") => {
    setStatus(s);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2000);
  };

  /** Select the phrase so it can be copied by hand (long-press or Ctrl+C). */
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
      /* fall through to the manual fallback */
    }
    // Fallback for browsers without the clipboard API (or when it is blocked): select the text, try the old copy command.
    if (selectText()) {
      try {
        if (document.execCommand("copy")) return flash("copied");
      } catch {
        /* leave it selected */
      }
      flash("selected");
    }
  };

  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-2 rounded-lg border border-border bg-secondary/40 px-3 py-2 ${className ?? ""}`}
      title={TOOLTIP}
      role="group"
      aria-label="Find a video"
    >
      <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <Search className="size-3.5" aria-hidden="true" /> Find a video
      </span>

      <p
        ref={text}
        onClick={selectText}
        title={TOOLTIP}
        className="line-clamp-2 min-w-0 flex-1 basis-56 cursor-text select-all rounded-md border border-input bg-background px-2.5 py-1.5 text-[13px] leading-snug"
      >
        {phrase}
      </p>

      <div className="flex shrink-0 items-center gap-1">
        <Btn variant="primary" size="sm" onClick={copy} title={TOOLTIP} className="min-w-[4.75rem] max-sm:h-11 max-sm:min-w-[5.5rem]">
          {status === "copied" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          {status === "copied" ? "Copied" : "Copy"}
        </Btn>
        <Btn variant="ghost" size="sm" className="max-sm:h-11" asChild>
          <a href={youtubeSearchUrl(phrase)} target="_blank" rel="noopener noreferrer">
            Open in YouTube <ExternalLink aria-hidden="true" />
          </a>
        </Btn>
      </div>

      <span role="status" aria-live="polite" className="sr-only">
        {status === "copied" ? "Copied to clipboard" : status === "selected" ? "Text selected. Copy it with your device's copy command." : ""}
      </span>
      {status === "selected" && <span className="basis-full text-[11px] text-muted-foreground">Selected. Press and hold or use Ctrl+C to copy.</span>}
    </div>
  );
}
