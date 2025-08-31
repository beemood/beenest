/**
 * Check the given string/char is upper case only
 * @param value string
 * @returns boolean
 */
export function isUpperCase(value: string) {
  return /^[A-Z]{1,}$/.test(value);
}
