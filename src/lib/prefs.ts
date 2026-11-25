import { useCallback, useEffect, useState } from "react";

/** Small per-browser preferences kept in localStorage, shared across components. */
const GOAL_KEY = "margin-weekly-goal";
const EVENT = "margin-prefs";
export const DEFAULT_GOAL = 5;

const read = () => {
  try {
    const n = Number(localStorage.getItem(GOAL_KEY));
    return n >= 1 && n <= 50 ? n : DEFAULT_GOAL;
  } catch {
    return DEFAULT_GOAL;
  }
};

/** Lessons to finish per week. Drives the goal ring on the dashboard. */
export function useWeeklyGoal(): [number, (n: number) => void] {
  const [goal, setGoalState] = useState(read);
  useEffect(() => {
    const sync = () => setGoalState(read());
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  const setGoal = useCallback((n: number) => {
    const v = Math.min(50, Math.max(1, Math.round(n)));
    try {
      localStorage.setItem(GOAL_KEY, String(v));
    } catch {
      /* storage blocked */
    }
    window.dispatchEvent(new Event(EVENT));
  }, []);
  return [goal, setGoal];
}
