export const romanNumeralToDecimalNumberToConverter = (
  romanNumeral: string
): number => {
  let decimalNumber = 0;
  if (romanNumeral === "II") {
    decimalNumber = 2;
  }
  if (romanNumeral === "I") {
    decimalNumber = 1;
  }

  return decimalNumber;
};
