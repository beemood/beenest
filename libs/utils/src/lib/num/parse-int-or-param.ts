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
 *    parseIntOrParam('some')  // returns: 'some'
 *    parseIntOrParam('1')     // returns: 1
 * ```
 */
export function parseIntOrParam(value: any) {
  return toParamFunction(parseInt)(value);
}

/**
 * @see {@link parseIntOrParam}
 */
export const parseIntOrReturn = parseIntOrParam;
