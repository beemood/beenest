import { isOperationNameOrThrow } from '@beenest/utils';
import { DeleteMany } from './delete-many.js';
import { DeleteOneById } from './delete-one-by-id.js';
import { FindMany } from './find-many.js';
import { FindOneById } from './find-one-by-id.js';
import { SaveMany } from './save-many.js';
import { SaveOne } from './save-one.js';
import { UpdateMany } from './update-many.js';
import { UpdateOneById } from './update-one-by-id.js';

/**
 * Infer method decorator and all configurations from resource name and method name
 *
 * @group Method Decorators
 * @returns MethodDecorator
 */
export function AutoMethod(): MethodDecorator {
  return (...args) => {
    const methodName = args[1].toString();

    isOperationNameOrThrow(methodName);

    const sw = (...values: string[]) => {
      for (const v of values) {
        if (methodName.startsWith(v)) {
          return true;
        }
      }
      return false;
    };

    if (sw('saveOne', 'createOne')) {
      SaveOne()(...args);
    } else if (sw('findOneById', 'readOneById')) {
      FindOneById()(...args);
    } else if (sw('updateOneById', 'editOneById', 'changeOneById')) {
      UpdateOneById()(...args);
    } else if (sw('deleteOneById', 'dropOneById', 'removeOneById')) {
      DeleteOneById()(...args);
    } else if (sw('saveMany', 'createMany')) {
      SaveMany()(...args);
    } else if (sw('findAll', 'findMany', 'readMany')) {
      FindMany()(...args);
    } else if (sw('updateMany', 'editMany', 'changeMany')) {
      UpdateMany()(...args);
    } else if (sw('deleteMany', 'dropMany', 'removeMany')) {
      DeleteMany()(...args);
    }
  };
}
