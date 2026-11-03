import type { YearMonth } from "@/types";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatYearMonth(value: YearMonth | null) {
  if (!value) return "Present";
  const [year, month] = value.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

export function formatRange(start: YearMonth, end: YearMonth | null) {
  return `${formatYearMonth(start)} — ${formatYearMonth(end)}`;
}

/**
 * Human duration between two year-months, inclusive of both months
 * (LinkedIn convention). `now` is injected so static builds stay deterministic.
 */
export function formatDuration(start: YearMonth, end: YearMonth | null, now = new Date()) {
  const [sy, sm] = start.split("-").map(Number);
  const [ey, em] = end ? end.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
  const total = (ey - sy) * 12 + (em - sm) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [
    years ? `${years} yr${years > 1 ? "s" : ""}` : "",
    months ? `${months} mo${months > 1 ? "s" : ""}` : "",
  ].filter(Boolean);
  return parts.join(" ");
}
