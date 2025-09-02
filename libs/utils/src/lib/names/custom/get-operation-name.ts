import { InvalidNameError } from '../../errors/errors.js';

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
 * Infer {@link OperationNames} from {@link methodName}
 *
 * @group names
 * @param methodName Generally method name that {@link OperationNames} to be infered from
 * @returns Infered operation name {@link OperationNames}
 * @throws Error {@link InvalidNameError} if not infered any {@link OperationNames} from {@link methodName}
 *
 * @example
 * ```ts
 *    getOperationName('findOne')         // returns: OperationNames.READ_ONE
 *    getOperationName('findAll')         // returns: OperationNames.READ_MANY
 *    getOperationName('someFunction')    // throws: InvalidNameError
 *
 * ```
 */
export function getOperationName(methodName: string): OperationNames {
  // Check the method name starts with the prefix
  const sw = (...prefixes: string[]) => {
    for (const p of prefixes) {
      if (methodName.toLowerCase().startsWith(p.toLowerCase())) {
        return true;
      }
    }
    return false;
  };

  if (sw('findOne', 'readOne')) {
    return OperationNames.READ_ONE;
  } else if (sw('saveOne', 'createOne')) {
    return OperationNames.WRITE_ONE;
  } else if (sw('updateOne', 'editOne', 'changeOne')) {
    return OperationNames.UPDATE_ONE;
  } else if (sw('deleteOne', 'dropOne', 'removeOne')) {
    return OperationNames.DELETE_ONE;
  } else if (sw('findMany', 'readMany')) {
    return OperationNames.READ_MANY;
  } else if (sw('saveMany', 'createMany')) {
    return OperationNames.WRITE_MANY;
  } else if (sw('updateMany', 'editMany', 'changeMany')) {
    return OperationNames.UPDATE_MANY;
  } else if (sw('deleteMany', 'dropMany', 'removeMany')) {
    return OperationNames.DELETE_MANY;
  }

  throw new InvalidNameError(
    `The method name, ${methodName}, does not match any operation name pattern!`
  );
}
