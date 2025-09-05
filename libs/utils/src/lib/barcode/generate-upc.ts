import { InvalidUpcError } from '../errors/errors.js';

/**
 * Calculates the checksum digit for a UPC-A code.
 *
 * @param upc11 The first 11 digits of the UPC-A code (manufacturer prefix + product code).
 * @returns The single-digit checksum.
 */
function calculateUpcChecksum(upc11: string): number {
  // A UPC-A code must have exactly 11 digits to calculate the checksum.
  if (upc11.length !== 11 || !/^\d+$/.test(upc11)) {
    throw new InvalidUpcError(
      'Input for checksum calculation must be an 11-digit number string.'
    );
  }

  let oddSum = 0;
  let evenSum = 0;

  // Sum the digits in the odd positions (1st, 3rd, 5th, etc., which are at indices 0, 2, 4...)
  for (let i = 0; i < 11; i += 2) {
    oddSum += parseInt(upc11[i], 10);
  }

  // Sum the digits in the even positions (2nd, 4th, 6th, etc., which are at indices 1, 3, 5...)
  for (let i = 1; i < 11; i += 2) {
    evenSum += parseInt(upc11[i], 10);
  }

  // Apply the UPC-A checksum algorithm: (oddSum * 3) + evenSum
  const totalSum = oddSum * 3 + evenSum;

  // Find the remainder when divided by 10
  const remainder = totalSum % 10;

  // The checksum digit is 10 minus the remainder. If the remainder is 0, the checksum is 0.
  return remainder === 0 ? 0 : 10 - remainder;
}

/**
 * Generates a full 12-digit UPC-A code from a 6-digit manufacturer prefix and a 5-digit product code.
 *
 * @param manufacturerPrefix The 6-digit manufacturer code.
 * @param productCode The 5-digit product code.
 * @returns The full 12-digit UPC-A code as a string.
 */
export function generateUpc(
  manufacturerPrefix: string,
  productCode: string
): string {
  // Validate the input formats
  if (manufacturerPrefix.length !== 6 || !/^\d+$/.test(manufacturerPrefix)) {
    throw new InvalidUpcError(
      'Manufacturer prefix must be a 6-digit number string.'
    );
  }
  if (productCode.length !== 5 || !/^\d+$/.test(productCode)) {
    throw new InvalidUpcError('Product code must be a 5-digit number string.');
  }

  const upc11 = manufacturerPrefix + productCode;
  const checksum = calculateUpcChecksum(upc11);

  return upc11 + checksum.toString();
}

/**
 * Validates a 12-digit UPC-A code by recalculating its checksum.
 *
 * @param upcCode The 12-digit UPC-A code as a string.
 * @returns True if the code is numerically valid, false otherwise.
 */
export function validateUpc(upcCode: string): boolean {
  // A UPC-A code must be exactly 12 digits.
  if (upcCode.length !== 12 || !/^\d+$/.test(upcCode)) {
    throw new InvalidUpcError('must be a 12-digit number string.');
  }

  // Extract the first 11 digits to calculate the checksum.
  const upc11 = upcCode.substring(0, 11);

  // Get the last digit of the input code, which is the provided checksum.
  const providedChecksum = parseInt(upcCode.substring(11), 10);

  // Calculate the checksum using the same function.
  const calculatedChecksum = calculateUpcChecksum(upc11);

  // Compare the calculated checksum with the provided one.
  if (providedChecksum === calculatedChecksum) {
    return true;
  }

  throw new InvalidUpcError();
}
