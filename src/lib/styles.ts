import { cn } from "@/lib/utils";

/**
 * Shared class strings for Margin. Inspired by the Login screen:
 * light editorial typography, spaced-capital kickers, sculptural pill buttons, and calm dark surfaces.
 */
export const kicker = "text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground";

export const btnBase =
  "relative inline-flex shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent font-medium " +
  "transition-[background-color,border-color,color,opacity,transform] duration-150 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring " +
  "active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 " +
  "disabled:pointer-events-none disabled:opacity-45 aria-busy:cursor-progress " +
  "[&_svg]:shrink-0";

export const btnVariant = {
  /** Primary action: monochrome high-contrast pill matching the Sign In button. */
  primary:
    "bg-foreground text-background hover:opacity-90",
  /** Secondary action: subtle surface pill. */
  secondary: "border-border bg-secondary text-foreground hover:border-muted-foreground/40 hover:bg-muted",
  /** Outlined pill. */
  outline: "border-border bg-transparent text-foreground hover:bg-secondary",
  /** Quietest action: text until hovered. */
  ghost: "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
  /** Destructive actions: red only here. */
  destructive: "border-destructive/40 bg-destructive/10 text-destructive hover:border-destructive hover:bg-destructive hover:text-white",
  /** Inline link action. */
  link: "h-auto rounded-none px-0 text-primary underline-offset-4 hover:underline",
} as const;

export const btnSize = {
  sm: "h-8 px-3.5 text-xs [&_svg]:size-3.5",
  md: "h-9 px-4 text-sm [&_svg]:size-4",
  lg: "h-11 px-6 text-xs font-semibold uppercase tracking-[0.18em] [&_svg]:size-4",
  icon: "size-9 text-sm [&_svg]:size-4",
  "icon-sm": "size-8 text-xs [&_svg]:size-3.5",
} as const;

export type BtnVariant = keyof typeof btnVariant;
export type BtnSize = keyof typeof btnSize;

/** Class string for anything that should look like a button (links, labels). */
export const buttonClass = (variant: BtnVariant = "secondary", size: BtnSize = "md", extra?: string) =>
  cn(btnBase, btnVariant[variant], btnSize[size], extra);

export const btn = buttonClass("secondary");
export const btnPrimary = buttonClass("primary");
export const btnGhost = buttonClass("ghost");
export const chip = buttonClass("outline", "sm", "text-muted-foreground");

export const field =
  "w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground transition-colors hover:border-muted-foreground/60 focus-visible:border-ring focus-visible:outline-2 focus-visible:outline-ring";
