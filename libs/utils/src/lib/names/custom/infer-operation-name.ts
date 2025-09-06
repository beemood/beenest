import { InvalidNameError } from '../../errors/errors.js';
import { createContainsFunction } from '../../func/create-contains-function.js';

import { OPERATION_NAME_EXPRESSION } from './is-operation-name.js';
/**
 * Operation names enum
 *
 * @group Names
 *
 */
export enum OperationNames {
  READ_ONE = 'READ_ONE',
  WRITE_ONE = 'WRITE_ONE',
  UPDATE_ONE = 'UPDATE_ONE',
  DELETE_ONE = 'DELETE_ONE',
  READ_MANY = 'READ_MANY',
  WRITE_MANY = 'WRITE_MANY',
  UPDATE_MANY = 'UPDATE_MANY',
  DELETE_MANY = 'DELETE_MANY',
}

/**
 * Infer {@link OperationNames} from {@link operationName}
 *
 * @group Names
 * @param operationName Generally method name that {@link OperationNames} to be infered from
 * @returns Infered operation name {@link OperationNames}
 * @throws Error {@link InvalidNameError} if not infered any {@link OperationNames} from {@link operationName}
 *
 * @example
 * ```ts
 *    getOperationName('findOne')         // returns: OperationNames.READ_ONE
 *    getOperationName('findAll')         // returns: OperationNames.READ_MANY
 *    getOperationName('someFunction')    // throws: InvalidNameError
 *
 * ```
 */
export function inferOperationName(operationName: string): OperationNames {
  const cn = createContainsFunction(operationName);

  if (cn('findOne', 'readOne', 'getOne')) {
    return OperationNames.READ_ONE;
  } else if (cn('saveOne', 'createOne', 'postOne')) {
    return OperationNames.WRITE_ONE;
  } else if (cn('updateOne', 'editOne', 'changeOne')) {
    return OperationNames.UPDATE_ONE;
  } else if (cn('deleteOne', 'dropOne', 'removeOne')) {
    return OperationNames.DELETE_ONE;
  } else if (cn('findMany', 'readMany', 'findAll', 'getMany', 'getAll')) {
    return OperationNames.READ_MANY;
  } else if (cn('saveMany', 'createMany', 'postMany')) {
    return OperationNames.WRITE_MANY;
  } else if (cn('updateMany', 'editMany', 'changeMany')) {
    return OperationNames.UPDATE_MANY;
  } else if (cn('deleteMany', 'dropMany', 'removeMany')) {
    return OperationNames.DELETE_MANY;
  }

  throw new InvalidNameError(
    `The operation name, ${operationName}, is invalid. The operation name must match ${OPERATION_NAME_EXPRESSION()}`
  );
}
