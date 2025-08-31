import { normalizeName } from './helpers/normalize-name.js';
import { upperCaseFirst } from './helpers/upper-case-first.js';

export function toPascalCase(name: string): string {
  return normalizeName(name).split(' ').map(upperCaseFirst).join('');
}
