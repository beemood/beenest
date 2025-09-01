/**
 * Check the given value is an empty string
 * @param value string
 * @returns boolean
 */
export function isEmptyString(value: string) {
  return value.trim().length == 0;
}

/**
 * Check the given value is not an empty string
 * @param value string
 * @returns boolean
 */
export function isNotEmptyString(value: string) {
  return !isEmptyString(value);
}
