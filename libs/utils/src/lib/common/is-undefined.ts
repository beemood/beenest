/**
 * Check {@link someValue} is equal to `undefined` ( someValue === `undefined` )
 *
 * @group Common
 * @param someValue optional value
 * @returns `true` when {@link someValue} is equal to `undefined` (`someValue === undefined`), `false` otherwise
 *
 * @example
 * ```ts
 *    isUndefined(true)       // output: false
 *    isUndefined(false)      // output: false
 *    isUndefined(1)          // output: false
 *    isUndefined(0)          // output: false
 *    isUndefined('')         // output: false
 *    isUndefined(null)       // output: false
 *    isUndefined(undefined)  // output: true
 * ```
 */
export function isUndefined<T>(value: T | undefined): value is undefined {
  return value === undefined;
}
