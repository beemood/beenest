/**
 * Check the given string value is camel case with at least 2 characters
 * 
 * @param name string
 * @returns boolean
 */
export function isCamelCase(name: string) {
  return /^[a-z]{1,}[A-Z]{1,}[A-Za-z]{0,}$/.test(name);
}
