import { InvalidNameError } from '../../errors/errors.js';
import {
  isOperationName,
  OPERATION_NAME_EXPRESSION,
} from './is-operation-name.js';
import {
  isResourceName,
  RESOURCE_NAME_EXPRESSION,
} from './is-resource-name.js';

/**
 * Infer the resource name, such as Product, Category, from {@link targetName} which might be class or method name such as ProductController, CategoryService, or findManyProduct etc..
 *
 * @group names
 * @param targetName Class or method name
 * @returns Infered resource name
 * @throws Error {@link InvalidNameError} if {@link targetName } does not match neiter of {@link RESOURCE_NAME_EXPRESSION} or {@link OPERATION_NAME_EXPRESSION}
 *
 * @example
 * ```tss
 *    inferResourceName('SomeController')   // returns: Some
 *    inferResourceName('ProductService')   // returns: Product
 *    inferResourceName('findProduct')      // returns: Product
 *    inferResourceName('SomeClass')        // throws: InvalidNameError
 * ```
 *
 */
export function inferResourceName(targetName: string) {
  if (isResourceName(targetName) || isOperationName(targetName)) {
    const resouceName = targetName
      .replace(OPERATION_NAME_EXPRESSION(), '')
      .replace(RESOURCE_NAME_EXPRESSION(), '');
    return resouceName;
  }

  throw new InvalidNameError(
    `The resource name or operation name, ${targetName}, is invalid. Resource name must match ${RESOURCE_NAME_EXPRESSION()} or ${OPERATION_NAME_EXPRESSION()}`
  );
}
