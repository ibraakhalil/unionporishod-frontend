// utils/numberConverter.ts

const englishToBanglaDigits: { [key: string]: string } = {
  "0": "০",
  "1": "১",
  "2": "২",
  "3": "৩",
  "4": "৪",
  "5": "৫",
  "6": "৬",
  "7": "৭",
  "8": "৮",
  "9": "৯",
  march: "মার্চ",
};

export function convertToBanglaDigits(number: number | string): string {
  return number
    .toString()
    .replace(/[0-9]/g, (digit) => englishToBanglaDigits[digit] || digit);
}
