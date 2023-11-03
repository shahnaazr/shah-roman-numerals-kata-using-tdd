import { romanNumeralToDecimalNumberToConverter } from "../src/roman_numeral_to_decimal_number_converter";

describe("test romanNumeralToDecimalNumberToConverter function", () => {
  it('should return 1 for romanNumeralToDecimalNumberToConverter("I")', () => {
    expect(romanNumeralToDecimalNumberToConverter("I")).toBe(1);
  });

  it('should return 2 for romanNumeralToDecimalNumberToConverter("II")', () => {
    expect(romanNumeralToDecimalNumberToConverter("II")).toBe(2);
  });

  it('should return 3 for romanNumeralToDecimalNumberToConverter("III")', () => {
    expect(romanNumeralToDecimalNumberToConverter("III")).toBe(3);
  });

  it('should return 4 for romanNumeralToDecimalNumberToConverter("IV")', () => {
    expect(romanNumeralToDecimalNumberToConverter("IV")).toBe(4);
  });

  it('should return 5 for romanNumeralToDecimalNumberToConverter("V")', () => {
    expect(romanNumeralToDecimalNumberToConverter("V")).toBe(5);
  });
});
