export const romanNumeralToDecimalNumberToConverter = (
  romanNumeral: string
): number => {
  let decimalNumber = 0;

  if (romanNumeral === "V") {
    decimalNumber = 5;
  }

  if (romanNumeral === "IV") {
    decimalNumber = 4;
  }

  if (romanNumeral === "III") {
    decimalNumber = 3;
  }
  if (romanNumeral === "II") {
    decimalNumber = 2;
  }
  if (romanNumeral === "I") {
    decimalNumber = 1;
  }

  return decimalNumber;
};
