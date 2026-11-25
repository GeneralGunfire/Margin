/** Small date helpers for streaks and activity. Dates are grouped by the user's local day. */
const dayKey = (d: Date) => d.toLocaleDateString("en-CA"); // yyyy-mm-dd

/** Consecutive days with activity, ending today (or yesterday if nothing yet today). */
export function streak(isoDates: string[]): number {
  const days = new Set(isoDates.map((s) => dayKey(new Date(s))));
  const d = new Date();
  if (!days.has(dayKey(d))) d.setDate(d.getDate() - 1);
  let n = 0;
  while (days.has(dayKey(d))) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

/** Activity counts for the last `n` days, oldest first. */
export function lastDays(isoDates: string[], n: number) {
  const counts = new Map<string, number>();
  isoDates.forEach((s) => {
    const k = dayKey(new Date(s));
    counts.set(k, (counts.get(k) ?? 0) + 1);
  });
  return Array.from({ length: n }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (n - 1 - i));
    return {
      label: String(d.getDate()),
      full: d.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" }),
      count: counts.get(dayKey(d)) ?? 0,
    };
  });
}

export const startOfDay = (d = new Date()) => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

/** "Today", "Tomorrow" or "In 3 days". */
export function relativeDay(iso: string): string {
  const diff = Math.round((startOfDay(new Date(iso)).getTime() - startOfDay().getTime()) / 86_400_000);
  if (diff <= 0) return "Today";
  if (diff === 1) return "Tomorrow";
  return `In ${diff} days`;
}

export function greeting(): string {
  const h = new Date().getHours();
  return h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
}

const keyOf = (d: Date) => d.toLocaleDateString("en-CA");
const mondayOf = (d: Date) => {
  const x = startOfDay(d);
  x.setDate(x.getDate() - ((x.getDay() + 6) % 7));
  return x;
};

/** Activity per week for the last `n` weeks (Monday start), oldest first. */
export function weeklyCounts(isoDates: string[], n = 12) {
  const perDay = new Map<string, number>();
  isoDates.forEach((s) => perDay.set(keyOf(new Date(s)), (perDay.get(keyOf(new Date(s))) ?? 0) + 1));
  const thisMonday = mondayOf(new Date());
  return Array.from({ length: n }, (_, i) => {
    const start = new Date(thisMonday);
    start.setDate(start.getDate() - (n - 1 - i) * 7);
    let total = 0;
    for (let d = 0; d < 7; d++) {
      const day = new Date(start);
      day.setDate(day.getDate() + d);
      total += perDay.get(keyOf(day)) ?? 0;
    }
    return { start: keyOf(start), label: start.toLocaleDateString(undefined, { day: "numeric", month: "short" }), n: total };
  });
}

/** A grid of days (Monday first) covering the last `weeks` weeks up to the end of this week. */
export function dayGrid(isoDates: string[], weeks = 5) {
  const perDay = new Map<string, number>();
  isoDates.forEach((s) => perDay.set(keyOf(new Date(s)), (perDay.get(keyOf(new Date(s))) ?? 0) + 1));
  const first = mondayOf(new Date());
  first.setDate(first.getDate() - (weeks - 1) * 7);
  const today = keyOf(new Date());
  return Array.from({ length: weeks * 7 }, (_, i) => {
    const d = new Date(first);
    d.setDate(d.getDate() + i);
    const k = keyOf(d);
    return {
      key: k,
      n: perDay.get(k) ?? 0,
      future: k > today,
      today: k === today,
      title: d.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" }),
      initial: d.toLocaleDateString(undefined, { weekday: "narrow" }),
    };
  });
}
