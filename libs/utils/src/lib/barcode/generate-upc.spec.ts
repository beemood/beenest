import { InvalidUpcError } from '../errors/errors.js';
import { generateUpc, validateUpc } from './generate-upc.js';

console.log([
  generateUpc('123456', '12345'),
  generateUpc('123456', '12345'),
  generateUpc('123456', '12345'),
]);

describe('generateUpc', () => {
  describe('generate', () => {
    it('should generate valid upc', () => {
      expect(validateUpc(generateUpc('123456', '12345'))).toBe(true);
    });
  });

  describe('validateUpc', () => {
    it('should return true for a valid UPC-A code with a correct checksum', () => {
      // A valid UPC-A code from a real product (Coca-Cola 12oz)
      expect(validateUpc('049000010411')).toBe(true);
      // Another valid UPC-A code (from example usage in the document)
      expect(validateUpc('012345678905')).toBe(true);
    });

    it('should throw InvaliUpcError for a UPC-A code with an incorrect checksum', () => {
      // The last digit '1' is the incorrect checksum, it should be '5'
      expect(() => validateUpc('012345678901')).toThrowError(InvalidUpcError);
      // Another invalid checksum
      expect(() => validateUpc('049000010412')).toThrowError(InvalidUpcError);
    });

    it('should throw InvaliUpcError for a UPC code that is not 12 digits long', () => {
      // Too short
      expect(() => validateUpc('1234567890')).toThrowError(InvalidUpcError);
      // Too long
      expect(() => validateUpc('1234567890123')).toThrowError(InvalidUpcError);
      // Empty string
      expect(() => validateUpc('')).toThrowError(InvalidUpcError);
    });

    it('should throw InvaliUpcError for a UPC code containing non-numeric characters', () => {
      // Contains a letter
      expect(() => validateUpc('01234567890A')).toThrowError(InvalidUpcError);
      // Contains a special character
      expect(() => validateUpc('01234567890-')).toThrowError(InvalidUpcError);
      // Contains a space
      expect(() => validateUpc('01234 567890')).toThrowError(InvalidUpcError);
    });
  });
});
