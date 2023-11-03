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
          i = i + 1;
        } else if (romanNumeral[i + 1] === "X") {
          arrayOfDecimalNumbers.push(9);
          i = i + 1;
        } else {
          arrayOfDecimalNumbers.push(1);
        }
      } else {
        arrayOfDecimalNumbers.push(1);
      }
    } else if (romanNumeral[i] === "V") {
      arrayOfDecimalNumbers.push(5);
    } else if (romanNumeral[i] === "X") {
      if (romanNumeral.hasOwnProperty(i + 1)) {
        if (romanNumeral[i + 1] === "L") {
          arrayOfDecimalNumbers.push(40);
          i = i + 1;
        } else if (romanNumeral[i + 1] === "C") {
          arrayOfDecimalNumbers.push(90);
          i = i + 1;
        } else {
          arrayOfDecimalNumbers.push(10);
        }
      } else {
        arrayOfDecimalNumbers.push(10);
      }
    } else if (romanNumeral[i] === "L") {
      arrayOfDecimalNumbers.push(50);
    } else if (romanNumeral[i] === "C") {
      if (romanNumeral.hasOwnProperty(i + 1)) {
        if (romanNumeral[i + 1] === "D") {
          arrayOfDecimalNumbers.push(400);
          i = i + 1;
        } else if (romanNumeral[i + 1] === "M") {
          arrayOfDecimalNumbers.push(900);
          i = i + 1;
        } else {
          arrayOfDecimalNumbers.push(100);
        }
      } else {
        arrayOfDecimalNumbers.push(100);
      }
    } else if (romanNumeral[i] === "D") {
      arrayOfDecimalNumbers.push(500);
    } else if (romanNumeral[i] === "M") {
      arrayOfDecimalNumbers.push(1000);
    }
  }

  decimalNumber = arrayOfDecimalNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return decimalNumber;
};
