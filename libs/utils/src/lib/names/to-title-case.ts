import { normalizeName } from './helpers/normalize-name.js';
import { upperCaseFirst } from './helpers/upper-case-first.js';
/**
 * Convert {@link name} into title case
 * @param name string value
 * @returns Title case of {@link name}
 *
 */
export function toTitleCase(name: string): string {
  return normalizeName(name)
    .split(' ')
    .map((e) => upperCaseFirst(e))
    .join(' ');
}
