export const romanNumeralToDecimalNumberToConverter = (
  romanNumeral: string
): number => {
  let decimalNumber = 0;
  let arrayOfDecimalNumbers: number[] = [];

  for (let i = 0; i < romanNumeral.length; i++) {
    if (romanNumeral[i] === "I") {
      if (romanNumeral.hasOwnProperty(i + 1)) {
        if (romanNumeral[i + 1] === "V") {
          arrayOfDecimalNumbers.push(4);
          i = i + 2;
        } else if (romanNumeral[i + 1] === "X") {
          arrayOfDecimalNumbers.push(9);
          i = i + 2;
        } else {
          arrayOfDecimalNumbers.push(1);
        }
      } else {
        arrayOfDecimalNumbers.push(1);
      }
    } else if (romanNumeral[i] === "V") {
      arrayOfDecimalNumbers.push(5);
    }
  }

  decimalNumber = arrayOfDecimalNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return decimalNumber;
};
