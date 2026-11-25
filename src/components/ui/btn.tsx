import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { buttonClass, type BtnSize, type BtnVariant } from "@/lib/styles";
import { Spinner } from "@/components/ui/loading";
import { cn } from "@/lib/utils";

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariant;
  size?: BtnSize;
  /** Shows a spinner and blocks clicks while something is saving. */
  loading?: boolean;
  /** Render as the child element (for example a router Link) with the same look. */
  asChild?: boolean;
}

/**
 * The app button. Variants: primary, secondary, outline, ghost, destructive, link.
 * Sizes: sm, md, lg, icon, icon-sm. Icon-only buttons need an aria-label.
 */
export const Btn = forwardRef<HTMLButtonElement, BtnProps>(function Btn(
  { variant = "secondary", size = "md", loading = false, asChild = false, type = "button", disabled, className, children, ...props },
  ref,
) {
  const classes = buttonClass(variant, size, className);
  if (asChild) {
    return (
      <Slot ref={ref} className={classes} {...props}>
        {children}
      </Slot>
    );
  }
  return (
    <button ref={ref} type={type} disabled={disabled || loading} aria-busy={loading || undefined} className={classes} {...props}>
      {loading && <Spinner className={cn("border-current/25 border-t-current")} />}
      {children}
    </button>
  );
});
