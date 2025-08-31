import { isCamelCase } from './is-camel-case.js';

describe('isCamelCase', () => {
  describe('camel case', () => {
    it.each`
      value         | expected
      ${'sC'}       | ${true}
      ${'someCase'} | ${true}
    `('isCamelCase($value) should return $expected', ({ value, expected }) => {
      expect(isCamelCase(value)).toEqual(expected);
    });
  });

  describe('not camel case', () => {
    it.each`
      value         | expected
      ${'SomeCase'} | ${false}
      ${'Some'}     | ${false}
      ${' Some'}    | ${false}
      ${'Some.'}    | ${false}
      ${'Some-'}    | ${false}
      ${'Some_'}    | ${false}
    `('isCamelCase($value) should return $expected', ({ value, expected }) => {
      expect(isCamelCase(value)).toEqual(expected);
    });
  });
});
