import { isOperationName } from './is-operation-name.js';

describe('isOperationName', () => {
  describe('returns', () => {
    it.each`
      operationName   | expected
      ${'findOne'}    | ${true}
      ${'findMany'}   | ${true}
      ${'findAll'}    | ${true}
      ${'readOne'}    | ${true}
      ${'readMany'}   | ${true}
      ${'readAll'}    | ${true}
      ${'createOne'}  | ${true}
      ${'createMany'} | ${true}
      ${'saveOne'}    | ${true}
      ${'saveMany'}   | ${true}
      ${'updateOne'}  | ${true}
      ${'updateMany'} | ${true}
      ${'updateAll'}  | ${true}
      ${'editOne'}    | ${true}
      ${'editMany'}   | ${true}
      ${'editAll'}    | ${true}
      ${'changeOne'}  | ${true}
      ${'changeMany'} | ${true}
      ${'changeAll'}  | ${true}
    `(
      `isOperationName($operationName) should return $expected`,
      ({ operationName, expected }) => {
        expect(isOperationName(operationName)).toEqual(expected);
      }
    );
  });
});
