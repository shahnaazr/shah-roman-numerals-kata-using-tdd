import { decimalToRomanNumeralTable } from "./decimal_to_roman_numeral_table";
export const decimalNumberToRomanNumeralConverter = (
  decimalNumber: number
): string => {
  let romanNumeral = "";

  while (decimalNumber >= 9) {
    romanNumeral = `${romanNumeral}IX`;
    decimalNumber = decimalNumber - 9;
  }

  while (decimalNumber >= 5) {
    romanNumeral = `${romanNumeral}V`;
    decimalNumber = decimalNumber - 5;
  }

  while (decimalNumber >= 4) {
    romanNumeral = `${romanNumeral}IV`;
    decimalNumber = decimalNumber - 4;
  }
  while (decimalNumber >= 1) {
    romanNumeral = `${romanNumeral}I`;
    decimalNumber = decimalNumber - 1;
  }

  return romanNumeral;
};
