import { toParamFunction } from '../func/to-param-function.js';

/**
 * Parse {@link jsonValue} or return it. The regular `JSON.parse` throw error for invalid json inputs but this function return the provided value itself if it is not parsed.
 *
 * @group Object
 * @param jsonValue json string or any value
 * @returns If {@link jsonValue} is parsed, return the parsed json value or {@link jsonValue} itself
 *
 * @example
 * ```ts
 *    parseJsonOrParam({})      // output: {}
 *    parseJsonOrParam('{}')    // output: {}
 *    parseJsonOrParam('1')     // output: 1
 *    parseJsonOrParam('')      // output: ''
 * ```
 */
export function parseJsonOrParam(jsonValue: unknown) {
  return toParamFunction(JSON.parse)(jsonValue);
}
