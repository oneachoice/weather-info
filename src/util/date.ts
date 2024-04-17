import { changeDecimalFormat } from "./format";

export function getFullDate(date: Date) {
  const year = date.getFullYear();
  const month = changeDecimalFormat(date.getMonth() + 1, 2);
  const day = changeDecimalFormat(date.getDay(), 2);

  return `${year}-${month}-${day}`;
}

export function getFullTime(date: Date) {
  const meridiem = date.getHours() >= 12 ? "오후" : "오전";
  const hours = changeDecimalFormat(
    meridiem === "오후" ? date.getHours() - 12 : date.getHours(),
    2
  );
  const minutes = changeDecimalFormat(date.getMinutes(), 2);

  return `${meridiem} ${hours}:${minutes}`;
}
