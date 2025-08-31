/**
 * Removes leading and trailing whitespace from a string, and replaces
 * multiple consecutive spaces with a single space.
 * @param name The input string to trim.
 * @returns The cleaned string with normalized whitespace.
 */
export function trim(name: string) {
  return name.trim().replace(/\s{1,}/g, ' ');
}
