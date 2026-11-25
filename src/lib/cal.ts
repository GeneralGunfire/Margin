// Date helpers for the date and time pickers. All dates are plain YYYY-MM-DD keys in Africa/Johannesburg,
// which is UTC+2 all year (no daylight saving).

export const TZ = "Africa/Johannesburg";

const partsFmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: TZ,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export function parts(d: Date | string) {
  const o: Record<string, string> = {};
  for (const p of partsFmt.formatToParts(typeof d === "string" ? new Date(d) : d)) o[p.type] = p.value;
  return { y: +o.year, m: +o.month, d: +o.day, h: +o.hour % 24, mi: +o.minute };
}

const two = (n: number) => String(n).padStart(2, "0");
export const dayKey = (d: Date | string) => {
  const p = parts(d);
  return `${p.y}-${two(p.m)}-${two(p.d)}`;
};
export const todayKey = () => dayKey(new Date());
export const timeLabel = (d: Date | string) => {
  const p = parts(d);
  return `${two(p.h)}:${two(p.mi)}`;
};

const utc = (key: string) => new Date(key + "T00:00:00Z");
export const addDays = (key: string, n: number) => {
  const d = utc(key);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
};
/** Monday = 0 ... Sunday = 6 */
export const weekday = (key: string) => (utc(key).getUTCDay() + 6) % 7;
export const startOfWeek = (key: string) => addDays(key, -weekday(key));
export const monthStart = (key: string) => key.slice(0, 8) + "01";
export const addMonths = (key: string, n: number) => {
  const d = utc(monthStart(key));
  d.setUTCMonth(d.getUTCMonth() + n);
  return d.toISOString().slice(0, 10);
};

const dayFmt = (o: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat("en-ZA", { timeZone: "UTC", ...o });
export const monthLabel = (key: string) => dayFmt({ month: "long", year: "numeric" }).format(utc(key));
export const weekdayShort = (key: string) => dayFmt({ weekday: "short" }).format(utc(key));

/** Value for the date-time field (Johannesburg wall time) from an ISO instant, and back. */
export const toInput = (iso: string) => `${dayKey(iso)}T${timeLabel(iso)}`;
export const fromInput = (v: string) => new Date(v + ":00+02:00").toISOString();
