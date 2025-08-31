/**
 * Check the given string value is a screaming upper case with at least 2 characters long.
 * @param value string value
 * @returns boolean
 */
export function isScreamingUpperCase(value: string) {
  return /^[A-Z_]{2,}$/.test(value);
}
