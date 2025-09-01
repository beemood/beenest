/**
 * Check the name contains `secured` or not.
 * @param name string
 * @returns boolean
 */
export function isSecuredName(name: string) {
  return name.toLowerCase().includes('secured');
}
