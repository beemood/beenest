import { InvalidNameError } from '../../errors/errors.js';
import { getResourceName } from './get-resource-name.js';

describe('getResouceName', () => {
  describe('returns', () => {
    it.each`
      value                   | expected
      ${'ProductController'}  | ${'Product'}
      ${'CategoryService'}    | ${'Category'}
      ${'ProductModule'}      | ${'Product'}
      ${'findProduct'}        | ${'Product'}
      ${'deleteProduct'}      | ${'Product'}
      ${'findOneProductById'} | ${'Product'}
      ${'updateProduct'}      | ${'Product'}
    `(
      'getResourceName($value) should return $expected',
      ({ value, expected }) => {
        expect(getResourceName(value)).toEqual(expected);
      }
    );
  });
  
  describe('throws', () => {
    it.each`
      value              | error
      ${''}              | ${InvalidNameError}
      ${'SomeClassName'} | ${InvalidNameError}
      ${'   '}           | ${InvalidNameError}
    `('getResourceName($value) should throw $error', ({ value, error }) => {
      expect(() => getResourceName(value)).toThrow(error);
    });
  });
});
