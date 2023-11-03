import { decimalNumberToRomanNumeralConverter } from "../src/decimal_number_to_roman_numeral_converter";

describe("test decimalNumberToRomanNumeralConverter function", () => {
  it("should return I for decimalNumberToRomanNumeralConverter(1)", () => {
    expect(decimalNumberToRomanNumeralConverter(1)).toBe("I");
  });

  it("should return II for decimalNumberToRomanNumeralConverter(2)", () => {
    expect(decimalNumberToRomanNumeralConverter(2)).toBe("II");
  });

  it("should return III for decimalNumberToRomanNumeralConverter(3)", () => {
    expect(decimalNumberToRomanNumeralConverter(3)).toBe("III");
  });

  it("should return IV for decimalNumberToRomanNumeralConverter(4)", () => {
    expect(decimalNumberToRomanNumeralConverter(4)).toBe("IV");
  });

  it("should return V for decimalNumberToRomanNumeralConverter(5)", () => {
    expect(decimalNumberToRomanNumeralConverter(5)).toBe("V");
  });
});
