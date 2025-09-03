export const PUBLIC_NAME_EXPRESSION = () => new RegExp(/public/, 'gi');

/**
 * Check {@link name} includes `public` word or not (not case senstive)
 *
 * @group common
 * @param name string
 * @returns `true` if the {@link name} includes `public`, `false` otherwise
 *
 */
export function isPublicName(name: string) {
  return PUBLIC_NAME_EXPRESSION().test(name);
}
