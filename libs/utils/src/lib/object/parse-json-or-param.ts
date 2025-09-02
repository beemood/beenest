import { toParamFunction } from '../func/to-param-function.js';

/**
 * Parse {@link jsonValue} or return it
 * @param jsonValue json string or any value
 * @returns If {@link jsonValue} is parsed, return the parsed json value or {@link jsonValue} itself
 */
export function parseJsonOrParam(jsonValue: unknown) {
  return toParamFunction(JSON.parse)(jsonValue);
}
