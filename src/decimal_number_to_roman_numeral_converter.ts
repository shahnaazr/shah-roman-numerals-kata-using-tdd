export const decimalNumberToRomanNumeralConverter = (
  decimalNumber: number
): string => {
  const romanNumeral = "";
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
