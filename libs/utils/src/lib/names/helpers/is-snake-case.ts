/**
 * Check the given string value is snake case with at least 2 characters long
 * @param name string
 * @returns boolean
 */
export function isSnakeCase(name: string) {
  return /^[a-z_]{2,}$/.test(name);
}
