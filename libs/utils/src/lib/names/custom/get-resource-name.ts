import { InvalidNameError } from '../../errors/errors.js';

/**
 * Infer the resource name, such as Product, Category, from {@link name} that might be class or method name such as ProductController, CategoryService etc..
 *
 * @group names
 * @param name Class or method name
 * @returns Infered resource name
 *
 * @example
 * ```tss
 *    getResourceName('SomeController')   // returns: Some
 *    getResourceName('ProductService')   // returns: Product
 *    getResourceName('SomeClass')        // throws: InvalidNameError
 * ```
 *
 */
export function getResourceName(name: string) {
  const replaceExp =
    /Controller|Service|Module|Repository|findOne|findMany|findAll|find|Query|Dto|create|save|delete|update|byId/gi;

  if (replaceExp.test(name)) {
    const resouceName = name.replace(replaceExp, '');
    return resouceName;
  }

  throw new InvalidNameError(`name value is invalid`);
}
