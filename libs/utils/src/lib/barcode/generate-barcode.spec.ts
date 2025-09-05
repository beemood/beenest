/**
 * @fileoverview This file contains extensive test cases for the EAN-13 barcode generation and validation functions
 * from `generateBarcode.ts`, using the Vitest framework.
 */

import { describe, expect, test } from 'vitest';
import { InvalidBarcodeError } from '../errors/errors.js';
import { generateEanBarcode, validateEan } from './generate-ean-barcode.js';

// Note: The calculateEan13Checksum function is not exported, so we will test its
// behavior indirectly via the public `validateEan13Barcode` function.

describe('generateValidEan13Barcode', () => {
  test('should generate a 13-digit barcode string', () => {
    const barcode = generateEanBarcode();
    expect(barcode).toBeTypeOf('string');
    expect(barcode.length).toBe(13);
  });

  test('should generate a valid EAN-13 barcode', () => {
    const barcode = generateEanBarcode();
    expect(validateEan(barcode)).toBe(true);
  });

  test('should generate 100 valid barcodes consecutively', () => {
    for (let i = 0; i < 100; i++) {
      const barcode = generateEanBarcode();
      expect(validateEan(barcode)).toBe(true);
    }
  });
});

describe('validateEan13Barcode', () => {
  test('should return true for a known valid EAN-13 barcode', () => {
    // Manually verified valid barcode: 4006381333931
    // Sum = (4+0+6+8+3+9) + 3*(0+6+8+1+3+1) = 30 + 3*19 = 87
    // Checksum = 10 - (87 % 10) = 10 - 7 = 3.
    // The barcode's last digit is 1. Let's find a correct valid barcode.
    // Let's use 9780306406157.
    // (9+8+0+6+0+1) + 3*(7+0+6+4+6+5) = 24 + 3*28 = 24+84=108
    // Checksum = 10 - (108 % 10) = 10 - 8 = 2. It is not 7, something is wrong with my example.
    // Let's use a simple example for checksum
    // barcode: 706246180325
    // sum = (7+6+4+1+0+2) + 3*(0+2+6+8+3+5) = 20 + 3*24 = 20+72=92
    // checksum = 10 - (92%10) = 10 - 2 = 8
    // So valid barcode is 7062461803258
    const knownValidBarcode = '7062461803258';
    expect(validateEan(knownValidBarcode)).toBe(true);
  });

  test('should return false for a known invalid EAN-13 barcode (incorrect checksum)', () => {
    // The first 12 digits are from the previous test, but the last digit is incorrect.
    const knownInvalidBarcode = '7062461803250'; // Checksum should be 8, not 0
    expect(() => validateEan(knownInvalidBarcode)).toThrowError(
      InvalidBarcodeError
    );
  });

  test('should return false for a barcode with incorrect length', () => {
    const shortBarcode = '12345';
    const longBarcode = '12345678901234';
    expect(() => validateEan(shortBarcode)).toThrowError(InvalidBarcodeError);
    expect(() => validateEan(longBarcode)).toThrowError(InvalidBarcodeError);
  });

  test('should return false for a non-numeric barcode', () => {
    const alphaBarcode = '12345abcde678';
    expect(() => validateEan(alphaBarcode)).toThrow(InvalidBarcodeError);
  });
});
