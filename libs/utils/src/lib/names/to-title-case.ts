import { normalizeName } from './helpers/normalize-name.js';
import { upperCaseFirst } from './helpers/upper-case-first.js';
/**
 * Convert the given string value into title case
 * @param name string
 * @returns title case string
 */
export function toTitleCase(name: string): string {
  return normalizeName(name)
    .split(' ')
    .map((e) => upperCaseFirst(e))
    .join(' ');
}
