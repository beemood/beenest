import { getResourceName } from './get-resource-name.js';

describe('getResouceName', () => {
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
