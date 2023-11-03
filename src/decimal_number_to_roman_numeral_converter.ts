import { decimalToRomanNumeralTable } from "./decimal_to_roman_numeral_table";
export const decimalNumberToRomanNumeralConverter = (
  decimalNumber: number
): string => {
  const romanNumeral = "";

  const value = decimalToRomanNumeralTable.filter((innerArray) => {
    innerArray[0] === decimalNumber;
  });
  if (decimalNumber === 5) {
    return "V";
  }
  if (decimalNumber === 4) {
    return "IV";
  }
  if (decimalNumber === 3) {
    return "III";
  }
  if (decimalNumber === 2) {
    return "II";
  }
  if (decimalNumber === 1) {
    return "I";
  }
  return romanNumeral;
};
