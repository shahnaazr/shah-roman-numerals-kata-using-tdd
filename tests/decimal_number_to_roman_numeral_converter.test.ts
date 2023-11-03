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

  it("should return VII for decimalNumberToRomanNumeralConverter(7)", () => {
    expect(decimalNumberToRomanNumeralConverter(7)).toBe("VII");
  });

  it("should return IX for decimalNumberToRomanNumeralConverter(9)", () => {
    expect(decimalNumberToRomanNumeralConverter(9)).toBe("IX");
  });

  it("should return X for decimalNumberToRomanNumeralConverter(10)", () => {
    expect(decimalNumberToRomanNumeralConverter(10)).toBe("X");
  });

  it("should return XXXIX for decimalNumberToRomanNumeralConverter(39)", () => {
    expect(decimalNumberToRomanNumeralConverter(39)).toBe("XXXIX");
  });

  it("should return XL for decimalNumberToRomanNumeralConverter(40)", () => {
    expect(decimalNumberToRomanNumeralConverter(40)).toBe("XL");
  });

  it("should return XLVI for decimalNumberToRomanNumeralConverter(46)", () => {
    expect(decimalNumberToRomanNumeralConverter(46)).toBe("XLVI");
  });

  it("should return L for decimalNumberToRomanNumeralConverter(50)", () => {
    expect(decimalNumberToRomanNumeralConverter(50)).toBe("L");
  });

  it("should return LXXVII for decimalNumberToRomanNumeralConverter(77)", () => {
    expect(decimalNumberToRomanNumeralConverter(77)).toBe("LXXVII");
  });

  it("should return XC for decimalNumberToRomanNumeralConverter(90)", () => {
    expect(decimalNumberToRomanNumeralConverter(90)).toBe("XC");
  });

  it("should return XCIX for decimalNumberToRomanNumeralConverter(99)", () => {
    expect(decimalNumberToRomanNumeralConverter(99)).toBe("XCIX");
  });

  it("should return C for decimalNumberToRomanNumeralConverter(100)", () => {
    expect(decimalNumberToRomanNumeralConverter(100)).toBe("C");
  });

  it("should return CCCXLVIII for decimalNumberToRomanNumeralConverter(348)", () => {
    expect(decimalNumberToRomanNumeralConverter(348)).toBe("CCCXLVIII");
  });

  it("should return CD for decimalNumberToRomanNumeralConverter(400)", () => {
    expect(decimalNumberToRomanNumeralConverter(400)).toBe("CD");
  });

  it("should return CDXIII for decimalNumberToRomanNumeralConverter(413)", () => {
    expect(decimalNumberToRomanNumeralConverter(413)).toBe("CDXIII");
  });

  it("should return D for decimalNumberToRomanNumeralConverter(500)", () => {
    expect(decimalNumberToRomanNumeralConverter(500)).toBe("D");
  });

  it("should return DCXCIV for decimalNumberToRomanNumeralConverter(694)", () => {
    expect(decimalNumberToRomanNumeralConverter(694)).toBe("DCXCIV");
  });

  it("should return CM for decimalNumberToRomanNumeralConverter(900)", () => {
    expect(decimalNumberToRomanNumeralConverter(900)).toBe("CM");
  });

  it("should return CMXXI for decimalNumberToRomanNumeralConverter(921)", () => {
    expect(decimalNumberToRomanNumeralConverter(921)).toBe("CMXXI");
  });

  it("should return M for decimalNumberToRomanNumeralConverter(1000)", () => {
    expect(decimalNumberToRomanNumeralConverter(1000)).toBe("M");
  });

  it("should return MMMX for decimalNumberToRomanNumeralConverter(3010)", () => {
    expect(decimalNumberToRomanNumeralConverter(3010)).toBe("MMMX");
  });
});
