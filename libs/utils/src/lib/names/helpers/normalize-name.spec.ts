import { normalizeName } from './normalize-name.js';

describe('normalizeName', () => {
  describe('sentence case', () => {
    it.each`
      value     | expected
      ${'some'} | ${'some'}
    `(
      `normalizeName($value) should return $expected`,
      ({ value, expected }) => {
        expect(normalizeName(value)).toEqual(expected);
      }
    );
  });
});
