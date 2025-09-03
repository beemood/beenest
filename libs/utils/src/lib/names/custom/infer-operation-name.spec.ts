import { InvalidNameError } from '../../errors/errors.js';
import { inferOperationName, OperationNames } from './infer-operation-name.js';

describe('inferOperationName', () => {
  describe('returns', () => {
    it.each`
      methodName      | operationName
      ${'findOne'}    | ${OperationNames.READ_ONE}
      ${'readOne'}    | ${OperationNames.READ_ONE}
      ${'createOne'}  | ${OperationNames.WRITE_ONE}
      ${'saveOne'}    | ${OperationNames.WRITE_ONE}
      ${'updateOne'}  | ${OperationNames.UPDATE_ONE}
      ${'editOne'}    | ${OperationNames.UPDATE_ONE}
      ${'changeOne'}  | ${OperationNames.UPDATE_ONE}
      ${'findMany'}   | ${OperationNames.READ_MANY}
      ${'readMany'}   | ${OperationNames.READ_MANY}
      ${'createMany'} | ${OperationNames.WRITE_MANY}
      ${'saveMany'}   | ${OperationNames.WRITE_MANY}
      ${'updateMany'} | ${OperationNames.UPDATE_MANY}
      ${'editMany'}   | ${OperationNames.UPDATE_MANY}
      ${'changeMany'} | ${OperationNames.UPDATE_MANY}
    `(
      `inferOperationName($methodName) should return $operationName`,
      ({ methodName, operationName }) => {
        expect(inferOperationName(methodName)).toEqual(operationName);
      }
    );
  });

  describe('throws', () => {
    it.each`
      methodName      | error
      ${'someMethod'} | ${InvalidNameError}
      ${''}           | ${InvalidNameError}
      ${'find'}       | ${InvalidNameError}
      ${'create'}     | ${InvalidNameError}
      ${'read'}       | ${InvalidNameError}
      ${'update'}     | ${InvalidNameError}
      ${'delete'}     | ${InvalidNameError}
      ${'put'}        | ${InvalidNameError}
    `(
      `inferOperationName($methodName) should throw $error`,
      ({ methodName, error }) => {
        expect(() => inferOperationName(methodName)).toThrow(error);
      }
    );
  });
});
