import { normalizeName } from './helpers/normalize-name.js';
import { upperCaseFirst } from './helpers/upper-case-first.js';

/**
 * Convert the given string into camel case
 * @param name string
 * @returns camel case string
 */
export function toCamelCase(name: string): string {
  return normalizeName(name)
    .split(' ')
    .map((value, index) => {
      if (index > 0) {
        return upperCaseFirst(value);
      }
      return value;
    })
    .join('');
}
