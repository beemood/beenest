import { isScreamingUpperCase } from './is-screaming-upper-case.js';

describe('isScreamingUpperCase', () => {
  describe('screaming upper case', () => {
    it.each`
      value          | expected
      ${'SS'}         | ${true}
      ${'SO_'}       | ${true}
      ${'SOME'}      | ${true}
      ${'SOME_SOME'} | ${true}
    `(
      `isScreamingUpperCase($value) should return $expected`,
      ({ value, expected }) => {
        expect(isScreamingUpperCase(value)).toEqual(expected);
      }
    );
  });
});
