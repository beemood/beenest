/**
 * Check {@link stringValue} is empty or not.
 *
 * @group string
 * @param stringValue The string to check
 * @returns `true` if the {@link stringValue} is **empty** or only includes **space characters**, `false` otherwise
 *
 * @example
 * ```ts
 *    isEmptyString('')       // output: true
 *    isEmptyString('   ')    // output: true
 *    isEmptyString('some')   // output: false
 * ```
 *
 */
export function isEmptyString(stringValue: string): stringValue is '' {
  return stringValue.trim().length == 0;
}

/**
 * Check {@link stringValue} is **empty** or only include **space characters**.
 *
 * @group string
 * @param stringValue The string value to check
 * @returns `false` if the {@link stringValue} is **empty** or only includes **space characters**, `true` otherwise
 *
 * @example
 * ```ts
 *    isNotEmptyString('')          // output: false
 *    isNotEmptyString('   ')       // output: false
 *    isNotEmptyString('some')      // output: true
 *    isNotEmptyString(undefined)   // throws: Error
 *    isNotEmptyString(null)        // throws: Error
 * ```
 *
 *
 */
export function isNotEmptyString(stringValue: string): boolean {
  return !isEmptyString(stringValue);
}
