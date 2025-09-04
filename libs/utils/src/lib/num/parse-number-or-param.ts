import { toParamFunction } from '../func/to-param-function.js';

/**
 * Parse {@link value} into integer or return it
 *
 * @group Number
 * @param value any value
 * @returns Integer value or the {@link value itself}
 *
 * @example
 * ```ts
 *    parseNumberOrReturn('some')  // returns: 'some'
 *    parseNumberOrReturn('1')     // returns: 1
 * ```
 */
export function parseNumberOrReturn(value: any) {
  return toParamFunction(parseFloat)(value);
}
