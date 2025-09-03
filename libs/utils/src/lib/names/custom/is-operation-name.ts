export const OPERATION_NAME_EXPRESSION = () =>
  new RegExp(
    /findOne|findMany|findAll|readOne|readMany|readAll|createOne|createMany|saveOne|saveMany|updateOne|updateMany|updateAll|editOne|editMany|editAll|changeOne|changeMany|changeAll|deleteOne|deleteMany|deleteAll|dropOne|dropMany|dropAll|removeOne|removeMany|removeAll|ById/,
    'gi'
  );

export function isOperationName(operationName: string) {
  return OPERATION_NAME_EXPRESSION().test(operationName);
}
