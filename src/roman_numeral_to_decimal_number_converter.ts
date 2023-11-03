export const romanNumeralToDecimalNumberToConverter = (
  romanNumeral: string
): number => {
  const arrayOfDecimalNumbers: number[] = [];

  const ONE = 1;
  const FOUR = 4;
  const FIVE = 5;
  const NINE = 9;
  const TEN = 10;
  const FOURTY = 40;
  const FIFTY = 50;
  const NINETY = 90;
  const HUNDRED = 100;
  const FOUR_HUNDRED = 400;
  const FIVE_HUNDRED = 500;
  const NINE_HUNDRED = 900;
  const THOUSAND = 1000;

  for (let i = 0; i < romanNumeral.length; i++) {
    switch (romanNumeral[i]) {
      case "I":
        if (romanNumeral[i + 1] === "V") {
          arrayOfDecimalNumbers.push(FOUR);
          i++;
        } else if (romanNumeral[i + 1] === "X") {
          arrayOfDecimalNumbers.push(NINE);
          i++;
        } else {
          arrayOfDecimalNumbers.push(ONE);
        }
        break;
      case "V":
        arrayOfDecimalNumbers.push(FIVE);
        break;
      case "X":
        if (romanNumeral[i + 1] === "L") {
          arrayOfDecimalNumbers.push(FOURTY);
          i++;
        } else if (romanNumeral[i + 1] === "C") {
          arrayOfDecimalNumbers.push(NINETY);
          i++;
        } else {
          arrayOfDecimalNumbers.push(TEN);
        }
        break;
      case "L":
        arrayOfDecimalNumbers.push(FIFTY);
        break;
      case "C":
        if (romanNumeral[i + 1] === "D") {
          arrayOfDecimalNumbers.push(FOUR_HUNDRED);
          i++;
        } else if (romanNumeral[i + 1] === "M") {
          arrayOfDecimalNumbers.push(NINE_HUNDRED);
          i++;
        } else {
          arrayOfDecimalNumbers.push(HUNDRED);
        }
        break;
      case "D":
        arrayOfDecimalNumbers.push(FIVE_HUNDRED);
        break;
      case "M":
        arrayOfDecimalNumbers.push(THOUSAND);
        break;
      default:
        throw new Error(
          `The roman numeral value provided is incorrect${romanNumeral}`
        );
    }
  }

  return arrayOfDecimalNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};
