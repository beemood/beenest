import { normalizeName } from './helpers/normalize-name.js';
import { upperCaseFirst } from './helpers/upper-case-first.js';

/**
 * Convert the given string into sentence case
 * @param name string
 * @returns sentence case string
 */
export function toSentenceCase(name: string) {
  return upperCaseFirst(normalizeName(name));
}
