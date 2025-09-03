export const OPERATION_NAME_EXPRESSION = () =>
  new RegExp(
    /findOne|findMany|findAll|readOne|readMany|readAll|createOne|createMany|saveOne|saveMany|updateOne|updateMany|updateAll|editOne|editMany|editAll|changeOne|changeMany|changeAll|deleteOne|deleteMany|deleteAll|dropOne|dropMany|dropAll|removeOne|removeMany|removeAll|ById/,
    'gi'
  );

/**
 * Check the {@link operationName} is a valid operation name {@link OPERATION_NAME_EXPRESSION}
 *
 * @group Names
 * @param operationName
 * @returns boolean
 */
export function isOperationName(operationName: string) {
  return OPERATION_NAME_EXPRESSION().test(operationName);
}
