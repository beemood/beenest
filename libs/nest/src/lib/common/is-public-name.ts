/**
 * Check the name contains `public` or not.
 * @param name string
 * @returns boolean
 */
export function isPublicName(name: string) {
  return name.toLowerCase().includes('public');
}
