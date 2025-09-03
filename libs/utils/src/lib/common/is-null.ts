/**
 * Check {@link someValue} is euqal to `null` ( someValue === `null` )
 *
 * @group Common
 * @param someValue optional value
 * @returns `true` when {@link someValue} is `null` (`someValue === null`), `false` otherwise
 *
 * @example
 * ```ts
 *    isNull(true)       // output: false
 *    isNull(false)      // output: false
 *    isNull(1)          // output: false
 *    isNull(0)          // output: false
 *    isNull('')         // output: false
 *    isNull(undefined)  // output: false
 *    isNull(null)       // output: true
 * ```
 */
export function isNull<T>(someValue: T | null): someValue is null {
  return someValue === null;
}
