export function changeDecimalFormat(number: number, digits: number) {
  const numStr = number.toString();

  if (numStr.length >= digits) return numStr;

  let result: string = numStr;

  for (let i = 0; i < digits - numStr.length; i++) {
    result = "0" + result;
  }

  return result;
}