/**
 * Capitilize the first letter of the given string value
 * @param name string
 * @returns string whose first letter is capitilized
 */
export function upperCaseFirst(name: string) {
  return name[0].toUpperCase() + name.slice(1);
}
