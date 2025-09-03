import { InvalidNameError } from '../../errors/errors.js';
import { inferResourceName } from './infer-resource-name.js';

describe('inferResourceName', () => {
  describe('returns', () => {
    it.each`
      value                   | expected
      ${'ProductController'}  | ${'Product'}
      ${'CategoryService'}    | ${'Category'}
      ${'ProductModule'}      | ${'Product'}
      ${'findManyProduct'}        | ${'Product'}
      ${'deleteOneProduct'}      | ${'Product'}
      ${'findOneProductById'} | ${'Product'}
      ${'updateOneProduct'}      | ${'Product'}
    `(
      'getResourceName($value) should return $expected',
      ({ value, expected }) => {
        expect(inferResourceName(value)).toEqual(expected);
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
      expect(() => inferResourceName(value)).toThrow(error);
    });
  });
});
