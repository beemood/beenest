import { isEmptyString } from './is-empty-string.js';

describe('isEmptyString', () => {
  describe('returns', () => {
    it.each`
      stringValue          | returnValue
      ${''}                | ${true}
      ${'     '}           | ${true}
      ${'        '}        | ${true}
      ${'\t'}              | ${true}
      ${'\n'}              | ${true}
      ${'\f'}              | ${true}
      ${'100'}             | ${false}
      ${'0'}               | ${false}
      ${'_'}               | ${false}
      ${'-'}               | ${false}
      ${'/'}               | ${false}
      ${'s'}               | ${false}
      ${'som'}             | ${false}
      ${'som   '}          | ${false}
      ${'som   '}          | ${false}
      ${'   s   o   m   '} | ${false}
    `(
      `isEmptyString($stringValue) should return $returnValue`,
      ({ stringValue, returnValue }) => {
        expect(isEmptyString(stringValue)).toEqual(returnValue);
      }
    );
  });

  describe('throws', () => {
    it.each`
      stringValue   | error
      ${new Date()} | ${TypeError}
      ${true}       | ${TypeError}
      ${false}      | ${TypeError}
      ${0}          | ${TypeError}
      ${1}          | ${TypeError}
      ${{}}         | ${TypeError}
      ${null}       | ${TypeError}
      ${undefined}  | ${TypeError}
      ${NaN}        | ${TypeError}
    `(
      `isEmptyString($stringValue) should throw error`,
      ({ stringValue, error }) => {
        expect(() => isEmptyString(stringValue)).toThrow(error);
      }
    );
  });
});
