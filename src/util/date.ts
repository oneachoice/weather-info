import { changeDecimalFormat } from "./format";

export function getFullDate(date: Date) {
  return `${getWeekDay(date)}요일, ${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;
}

export function getFullTime(date: Date) {
  const { meridiem, hours } = getMeridiem(date);
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

export function getMeridiem(date: Date, lang: string = "KR") {
  const result: {
    meridiem: string;
    hours: Number;
  } = {
    meridiem: "",
    hours: -1,
  };

  switch (lang) {
    case "EN":
      result.meridiem = date.getHours() >= 12 ? "PM" : "AM";
      break;
    case "KR":
    default:
      result.meridiem = date.getHours() >= 12 ? "오후" : "오전";
      break;
  }

  result.hours = date.getHours() >= 12 ? date.getHours() - 12 : date.getHours();

  return result;
}
