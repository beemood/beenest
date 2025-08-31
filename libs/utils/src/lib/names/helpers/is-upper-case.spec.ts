import { isUpperCase } from './is-upper-case.js';

describe('isUpperCase', () => {
  describe('upper case', () => {
    it.each`
      value   | expected
      ${'A'}  | ${true}
      ${'AA'} | ${true}
      ${'AB'} | ${true}
    `('isUpperCase($value) should return $expected', ({ value, expected }) => {
      expect(isUpperCase(value)).toEqual(expected);
    });
  });
  describe('not upper case', () => {
    it.each`
      value   | expected
      ${'a'}  | ${false}
      ${'aa'} | ${false}
      ${'Ab'} | ${false}
    `('isUpperCase($value) should return $expected', ({ value, expected }) => {
      expect(isUpperCase(value)).toEqual(expected);
    });
  });
});
