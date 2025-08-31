import { normalizeName } from './helpers/normalize-name.js';

/**
 * Convert the given name into kebab case
 * @param name string
 * @returns kebab case string
 */
export function toKebabCase(name: string) {
  return normalizeName(name).replace(/\s{1,}/g, '-');
}
