import { changeDecimalFormat } from "./format";

export function getFullDate(date: Date) {
  return `${getWeekDay(date)}요일, ${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDay()}일`;
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

export function getWeekDay(date: Date) {
  switch (date.getDay()) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
    default:
      return "?";
  }
}
