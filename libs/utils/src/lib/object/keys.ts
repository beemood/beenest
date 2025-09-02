/**
 * Get the keys of {@link objectValue}
 *
 * @group Object
 * @param objectValue Object value
 * @returns List of keys of othe {@link objectValue}
 *
 * @example
 * ```ts
 *    keys({id:true}) // ['id']
 * ```
 */
export function keys<T extends object>(objectValue: T): (keyof T)[] {
  return Object.keys(objectValue) as (keyof T)[];
}
