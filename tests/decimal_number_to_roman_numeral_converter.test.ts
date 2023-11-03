import { decimalNumberToRomanNumeralConverter } from "../src/decimal_number_to_roman_numeral_converter";

describe("test decimalNumberToRomanNumeralConverter function", () => {
  it("should return I for decimalNumberToRomanNumeralConverter(1)", () => {
    expect(decimalNumberToRomanNumeralConverter(1)).toBe("I");
  });

  it("should return II for decimalNumberToRomanNumeralConverter(2)", () => {
    expect(decimalNumberToRomanNumeralConverter(2)).toBe("II");
  });
});
