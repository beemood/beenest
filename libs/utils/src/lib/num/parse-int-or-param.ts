import { toParamFunction } from '../func/to-param-function.js';

/**
 * Parse the {@link unkownValue} into integer or return it
 *
 * @group Number
 * @param unkownValue unkown value
 * @returns Integer value or the {@link unkownValue itself}
 *
 * @example
 * ```ts
 *    parseIntOrParam('some')  // returns: 'some'
 *    parseIntOrParam('1')     // returns: 1
 * ```
 */
export function parseIntOrParam(unkownValue: unknown) {
  return toParamFunction(parseInt)(unkownValue);
}
