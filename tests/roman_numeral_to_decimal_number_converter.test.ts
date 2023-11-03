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

  it('should return 7 for romanNumeralToDecimalNumberToConverter("VII")', () => {
    expect(romanNumeralToDecimalNumberToConverter("VII")).toBe(7);
  });

  it('should return 10 for romanNumeralToDecimalNumberToConverter("X")', () => {
    expect(romanNumeralToDecimalNumberToConverter("X")).toBe(10);
  });

  it('should return 12 for romanNumeralToDecimalNumberToConverter("XII")', () => {
    expect(romanNumeralToDecimalNumberToConverter("XII")).toBe(12);
  });

  it('should return 36 for romanNumeralToDecimalNumberToConverter("XXXVI")', () => {
    expect(romanNumeralToDecimalNumberToConverter("XXXVI")).toBe(36);
  });

  it('should return 40 for romanNumeralToDecimalNumberToConverter("XL")', () => {
    expect(romanNumeralToDecimalNumberToConverter("XL")).toBe(40);
  });

  it('should return 46 for romanNumeralToDecimalNumberToConverter("XLVI")', () => {
    expect(romanNumeralToDecimalNumberToConverter("XLVI")).toBe(46);
  });

  it('should return 50 for romanNumeralToDecimalNumberToConverter("L")', () => {
    expect(romanNumeralToDecimalNumberToConverter("L")).toBe(50);
  });

  it('should return 62 for romanNumeralToDecimalNumberToConverter("LXII")', () => {
    expect(romanNumeralToDecimalNumberToConverter("LXII")).toBe(62);
  });

  it('should return 90 for romanNumeralToDecimalNumberToConverter("XC")', () => {
    expect(romanNumeralToDecimalNumberToConverter("XC")).toBe(90);
  });

  it('should return 98 for romanNumeralToDecimalNumberToConverter("XCVIII")', () => {
    expect(romanNumeralToDecimalNumberToConverter("XCVIII")).toBe(98);
  });

  it('should return 100 for romanNumeralToDecimalNumberToConverter("C")', () => {
    expect(romanNumeralToDecimalNumberToConverter("C")).toBe(100);
  });

  it('should return 353 for romanNumeralToDecimalNumberToConverter("CCCLIII")', () => {
    expect(romanNumeralToDecimalNumberToConverter("CCCLIII")).toBe(353);
  });

  it('should return 400 for romanNumeralToDecimalNumberToConverter("CD")', () => {
    expect(romanNumeralToDecimalNumberToConverter("CD")).toBe(400);
  });

  it('should return 404 for romanNumeralToDecimalNumberToConverter("CDIV")', () => {
    expect(romanNumeralToDecimalNumberToConverter("CDIV")).toBe(404);
  });

  it('should return 500 for romanNumeralToDecimalNumberToConverter("D")', () => {
    expect(romanNumeralToDecimalNumberToConverter("D")).toBe(500);
  });

  it('should return 746 for romanNumeralToDecimalNumberToConverter("DCCXLVI")', () => {
    expect(romanNumeralToDecimalNumberToConverter("DCCXLVI")).toBe(746);
  });

  it('should return 900 for romanNumeralToDecimalNumberToConverter("CM")', () => {
    expect(romanNumeralToDecimalNumberToConverter("CM")).toBe(900);
  });

  it('should return 931 for romanNumeralToDecimalNumberToConverter("CMXXXI")', () => {
    expect(romanNumeralToDecimalNumberToConverter("CMXXXI")).toBe(931);
  });

  it('should return 1000 for romanNumeralToDecimalNumberToConverter("M")', () => {
    expect(romanNumeralToDecimalNumberToConverter("M")).toBe(1000);
  });

  it('should return 1996 for romanNumeralToDecimalNumberToConverter("MCMXCVI")', () => {
    expect(romanNumeralToDecimalNumberToConverter("MCMXCVI")).toBe(1996);
  });

  it('should return 2012 for romanNumeralToDecimalNumberToConverter("MMXII")', () => {
    expect(romanNumeralToDecimalNumberToConverter("MMXII")).toBe(2012);
  });
});
