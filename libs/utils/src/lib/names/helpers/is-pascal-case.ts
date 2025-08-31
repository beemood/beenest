/**
 * Check the given string is  a pascal case with at least 2 characters long
 * @param name string
 * @returns boolean
 */
export function isPascalCase(name: string): boolean {
  return /^[A-Z]{1}[a-z]{1,}[a-zA-Z]{0,}$/.test(name);
}
