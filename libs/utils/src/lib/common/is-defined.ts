/**
 * Check {@link someValue} is not euqal to `undefined` ( someValue !== `undefined` )
 *
 * @group common
 * @param someValue optional value
 * @returns `true` when {@link someValue} is not `undefined` (`someValue !== undefined`), `false` otherwise
 *
 * @example
 * ```ts
 *    isDefined(true)       // output: true
 *    isDefined(false)      // output: true
 *    isDefined(1)          // output: true
 *    isDefined(0)          // output: true
 *    isDefined('')         // output: true
 *    isDefined(null)       // output: true
 *    isDefined(undefined)  // output: true
 * ```
 */
export function isDefined<T>(someValue: T | undefined): someValue is T {
  return someValue !== undefined;
}
