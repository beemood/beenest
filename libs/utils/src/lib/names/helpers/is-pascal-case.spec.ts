import { isPascalCase } from './is-pascal-case.js';

describe('isPascalCase', () => {
  describe('Not pascal case', () => {
    it.each`
      value        | expected
      ${''}        | ${false}
      ${'someGo'}  | ${false}
      ${'Some Go'} | ${false}
      ${'  o '}    | ${false}
      ${'  SSSS'}  | ${false}
    `('isPascalCase($value) should return $expected', ({ value, expected }) => {
      expect(isPascalCase(value)).toEqual(expected);
    });
  });

  describe('Pascal Case', () => {
    it.each`
      value        | expected
      ${'Some'}    | ${true}
      ${'SomeOne'} | ${true}
    `('isPascalCase($value) should return $expected', ({ value, expected }) => {
      expect(isPascalCase(value)).toEqual(expected);
    });
  });
});
