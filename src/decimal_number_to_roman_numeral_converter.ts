import { decimalToRomanNumeralTable } from "./decimal_to_roman_numeral_table";
export const decimalNumberToRomanNumeralConverter = (
  decimalNumber: number
): string => {
  let romanNumeral = "";

  while (decimalNumber >= 1000) {
    romanNumeral = `${romanNumeral}M`;
    decimalNumber = decimalNumber - 1000;
  }

  while (decimalNumber >= 900) {
    romanNumeral = `${romanNumeral}CM`;
    decimalNumber = decimalNumber - 900;
  }

  while (decimalNumber >= 500) {
    romanNumeral = `${romanNumeral}D`;
    decimalNumber = decimalNumber - 500;
  }

  while (decimalNumber >= 400) {
    romanNumeral = `${romanNumeral}CD`;
    decimalNumber = decimalNumber - 400;
  }

  while (decimalNumber >= 100) {
    romanNumeral = `${romanNumeral}C`;
    decimalNumber = decimalNumber - 100;
  }

  while (decimalNumber >= 90) {
    romanNumeral = `${romanNumeral}XC`;
    decimalNumber = decimalNumber - 90;
  }

  while (decimalNumber >= 50) {
    romanNumeral = `${romanNumeral}L`;
    decimalNumber = decimalNumber - 50;
  }

  while (decimalNumber >= 40) {
    romanNumeral = `${romanNumeral}XL`;
    decimalNumber = decimalNumber - 40;
  }

  while (decimalNumber >= 10) {
    romanNumeral = `${romanNumeral}X`;
    decimalNumber = decimalNumber - 10;
  }

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
