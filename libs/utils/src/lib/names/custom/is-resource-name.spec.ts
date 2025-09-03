import { isResourceName } from './is-resource-name.js';

describe('isResourceName', () => {
  describe('returns', () => {
    it.each`
      operationName   | expected
      ${'Controller'} | ${true}
      ${'Service'}    | ${true}
      ${'Module'}     | ${true}
      ${'Dto'}        | ${true}
      ${'Model'}      | ${true}
      ${'Repository'} | ${true}
      ${'Query'}      | ${true}
      ${'Dto'}        | ${true}
      ${'Other'}      | ${false}
    `(
      `isResourceName($operationName) should return $expected`,
      ({ operationName, expected }) => {
        expect(isResourceName(operationName)).toEqual(expected);
      }
    );
  });
});
