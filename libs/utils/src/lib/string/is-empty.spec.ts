import { isEmptyString } from './is-empty-string.js';

describe('isEmptyString', () => {
  describe('Valid', () => {
    it.each`
      value         | expected
      ${''}         | ${true}
      ${'     '}    | ${true}
      ${'        '} | ${true}
    `(
      `isEmptyString($value) should return $expected`,
      ({ value, expected }) => {
        expect(isEmptyString(value)).toEqual(expected);
      }
    );
  });

  describe('Invalid', () => {
    it.each`
      value
      ${1}
      ${null}
      ${undefined}
      ${NaN}
    `(`isEmptyString($value) should throw error`, ({ value }) => {
      expect(() => isEmptyString(value)).toThrowError();
    });
  });
});
