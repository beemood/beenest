import { isEmptyString } from '../string/is-empty-string.js';
/**
 * Parse json if the given value is json string or empty string
 * @param value any value
 * @returns
 */
export function parseJson(value: any) {
  if (value == undefined) {
    return value;
  }

  if (typeof value === 'string') {
    if (isEmptyString(value)) {
      return {};
    }
    return JSON.parse(value);
  }

  return value;
}
