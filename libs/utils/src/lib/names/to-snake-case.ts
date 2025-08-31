import { normalizeName } from './helpers/normalize-name.js';

/**
 * Convert any given name into snake-case
 * @param name string
 * @returns snake-case string
 */
export function toSnakeCase(name: string) {
  return normalizeName(name).replace(/\s{1,}/g, '_');
}
