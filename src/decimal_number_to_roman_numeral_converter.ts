import { decimalToRomanNumeralTable } from "./decimal_to_roman_numeral_table";
export const decimalNumberToRomanNumeralConverter = (
  decimalNumber: number
): string => {
  if (decimalNumber <= 0) {
    throw new Error(
      `The decimal Number value provided is incorrect${decimalNumber}`
    );
  }
  let romanNumeral = "";

  decimalToRomanNumeralTable.forEach((innerArray: any[]) => {
    while (decimalNumber >= innerArray[0]) {
      romanNumeral = `${romanNumeral}${innerArray[1]}`;
      decimalNumber = decimalNumber - innerArray[0];
    }
  });

  return romanNumeral;
};
