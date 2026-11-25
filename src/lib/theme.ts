import { useEffect } from "react";

/** Dark mode only. Kept as a hook so the call site in main/layout code does not change. */
export function useTheme() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return { dark: true };
}
