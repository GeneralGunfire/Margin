import { cn } from "@/lib/utils";

/**
 * Shared class strings for the app pages. Restyle the whole app from here and from src/components/page.tsx.
 * Buttons: one base, a variant and a size. The <Btn> component and the btn* strings below both use these.
 */
export const kicker = "text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground";

export const btnBase =
  "relative inline-flex shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent font-medium " +
  "transition-[background-color,border-color,color,transform,box-shadow] duration-150 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring " +
  "active:translate-y-px motion-reduce:transition-none motion-reduce:active:translate-y-0 " +
  "disabled:pointer-events-none disabled:opacity-50 aria-busy:cursor-progress " +
  "[&_svg]:shrink-0";

export const btnVariant = {
  /** The main action on a screen. */
  primary:
    "bg-primary text-primary-foreground shadow-[inset_0_1px_0_rgb(255_255_255/0.18),0_1px_2px_rgb(0_0_0/0.25)] hover:bg-primary/90",
  /** A normal action. */
  secondary: "border-border bg-secondary text-foreground hover:border-muted-foreground/40 hover:bg-muted",
  /** A quieter action with just an outline. */
  outline: "border-border bg-transparent text-foreground hover:bg-secondary",
  /** The quietest action: text until you hover. */
  ghost: "text-muted-foreground hover:bg-secondary hover:text-foreground",
  /** Deletes and other things that cannot be undone. Red only on hover and in the border. */
  destructive: "border-destructive/40 bg-destructive/10 text-destructive hover:border-destructive hover:bg-destructive hover:text-white",
  /** Looks like a link. */
  link: "h-auto px-0 text-primary underline-offset-4 hover:underline",
} as const;

export const btnSize = {
  sm: "h-8 px-2.5 text-xs [&_svg]:size-3.5",
  md: "h-9 px-3.5 text-sm [&_svg]:size-4",
  lg: "h-11 px-5 text-sm [&_svg]:size-4",
  icon: "size-9 text-sm [&_svg]:size-4",
  "icon-sm": "size-8 text-xs [&_svg]:size-3.5",
} as const;

export type BtnVariant = keyof typeof btnVariant;
export type BtnSize = keyof typeof btnSize;

/** Class string for anything that should look like a button (links, labels). */
export const buttonClass = (variant: BtnVariant = "secondary", size: BtnSize = "md", extra?: string) =>
  cn(btnBase, btnVariant[variant], btnSize[size], extra);

// Ready-made strings used across the pages.
export const btn = buttonClass("secondary");
export const btnPrimary = buttonClass("primary");
export const btnGhost = buttonClass("ghost");
export const chip = buttonClass("outline", "sm", "rounded-full text-muted-foreground");

export const field =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground transition-colors hover:border-muted-foreground/60 focus-visible:border-ring focus-visible:outline-2 focus-visible:outline-ring";
