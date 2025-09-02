/**
 * Get the values of {@link objectValue}
 *
 * @group Object
 * @param objectValue Object value
 * @returns List of values of othe {@link objectValue}
 *
 * @example
 * ```ts
 *    values({id:true}) // [true]
 * ```
 */
export function values<T extends object>(objectValue: T) {
  return Object.values(objectValue);
}
