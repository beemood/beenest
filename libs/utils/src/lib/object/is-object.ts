/**
 * Check the {@link objectValue} is a type of object
 *
 * @group Object
 * @param objectValue unkown value
 * @returns `true` if the {@link objectValue} is a type of object, `false` otherwise
 *
 * @example
 * ```ts
 *    isObject({})                // output: true
 *    isObject({   })             // output: true
 *    isObject({some:'some'})     // output: true
 *    isObject([{some:'some'}])   // output: false
 *    isObject(1)                 // output: false
 *    isObject(-1)                // output: false
 *    isObject(true)              // output: false
 *    isObject(false)             // output: false
 * ```
 */
export function isObject<T extends object>(
  objectValue: T | unknown
): objectValue is T {
  return (
    typeof objectValue == 'object' &&
    objectValue !== null &&
    !Array.isArray(objectValue)
  );
}
