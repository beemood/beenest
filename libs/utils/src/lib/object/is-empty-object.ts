import { keys } from './keys.js';

/**
 * Check the {@link objectValue} is an empty object ({})
 *
 * @group Object
 * @param objectValue Any object value
 * @returns `true` if the {@link objectValue} is equal to empty object ({}), `false` otherwise
 *
 * @example
 * ```ts
 *    isEmptyObject({})             // output: true
 *    isEmptyObject({   })          // output: true
 *    isEmptyObject({some:'some'})  // output: false
 * ```
 */
export function isEmptyObject<T extends object>(
  objectValue: T
): objectValue is T {
  if (keys(objectValue).length == 0) {
    return true;
  }
  return false;
}
