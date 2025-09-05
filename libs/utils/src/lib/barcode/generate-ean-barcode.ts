/**
 * @fileoverview This script provides a function to generate a valid 13-digit EAN-13 barcode.
 * The EAN-13 barcode is a standard used worldwide for retail product identification.
 */

import { InvalidBarcodeError } from '../errors/errors.js';

/**
 * Calculates the checksum digit for an EAN-13 barcode.
 * The checksum is the 13th digit and is used to validate the barcode.
 * @param barcode12 The first 12 digits of the EAN-13 barcode as a string.
 * @returns The single-digit checksum as a number.
 */
export function calculateEan13Checksum(barcode12: string): number {
  if (barcode12.length !== 12) {
    throw new InvalidBarcodeError('Input must be a 12-digit string.');
  }

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    const digit = parseInt(barcode12[i], 10);
    if (i % 2 === 0) {
      // Odd-positioned digits (1st, 3rd, etc.) are multiplied by 1
      sum += digit;
    } else {
      // Even-positioned digits (2nd, 4th, etc.) are multiplied by 3
      sum += digit * 3;
    }
  }

  const remainder = sum % 10;
  return remainder === 0 ? 0 : 10 - remainder;
}

/**
 * Generates a random, valid 13-digit EAN-13 barcode.
 * The function generates a random 12-digit number and then calculates the checksum.
 * @returns A valid 13-digit EAN-13 barcode as a string.
 */
export function generateEanBarcode(): string {
  // Generate a random 12-digit number string.
  // We use a fixed-length string to ensure it's always 12 digits.
  let random12Digits = '';
  for (let i = 0; i < 12; i++) {
    random12Digits += Math.floor(Math.random() * 10).toString();
  }

  // Calculate the checksum based on the first 12 digits.
  const checksum = calculateEan13Checksum(random12Digits);

  // Return the full 13-digit barcode.
  return random12Digits + checksum.toString();
}

/**
 * Validates an EAN-13 barcode by checking its checksum.
 * This function is used to test the barcode generation.
 * @param barcode The 13-digit EAN-13 barcode string.
 * @returns True if the barcode is valid, false otherwise.
 */
export function validateEan(barcode: string): boolean {
  if (!/^\d{13}$/.test(barcode)) {
    throw new InvalidBarcodeError('Must be a 13-digit string.');
  }

  const checksum = calculateEan13Checksum(barcode.substring(0, 12));
  if (checksum.toString() === barcode[12]) {
    return true;
  }

  throw new InvalidBarcodeError(`The barcode, ${barcode}, is invalid!`);
}
