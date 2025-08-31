import { isSnakeCase } from './is-snake-case.js';

describe('isSnakeCase', () => {
  describe('snake-case', () => {
    it.each`
      value            | expected
      ${'some'}        | ${true}
      ${'some_'}       | ${true}
      ${'some_goes'}   | ${true}
      ${'other_goles'} | ${true}
    `('isSnakeCase($value) should return $expected', ({ value, expected }) => {
      expect(isSnakeCase(value)).toEqual(expected);
    });
  });

  describe('not-snake-case', () => {
    it.each`
      value           | expected
      ${' some'}      | ${false}
      ${'.some'}      | ${false}
      ${'-some-goes'} | ${false}
      ${'otherGoles'} | ${false}
    `('isSnakeCase($value) should return $expected', ({ value, expected }) => {
      expect(isSnakeCase(value)).toEqual(expected);
    });
  });
});
