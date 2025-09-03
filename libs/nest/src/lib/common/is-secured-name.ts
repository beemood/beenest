export const SECURED_NAME_EXPRESSION = () => new RegExp(/secured/, 'gi');

/**
 * Check {@link name} includes `secured` word or not (not case senstive)
 *
 * @group Names
 * @param name string
 * @returns `true` if the {@link name} includes `secured`, `false` otherwise
 *
 */
export function isSecuredName(name: string) {
  return SECURED_NAME_EXPRESSION().test(name);
}
