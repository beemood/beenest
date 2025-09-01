import { getOperationName, OperationNames } from './get-operation-name.js';

describe('getOperationName', () => {
  it.each`
    value           | expected
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
    `getOperationName([value]) should return [expected]`,
    ({ value, expected }) => {
      expect(getOperationName(value)).toEqual(expected);
    }
  );
});
