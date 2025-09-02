import { InvalidNameError } from '../../errors/errors.js';
import { trim } from '../../string/trim.js';
import { isCamelCase } from './is-camel-case.js';
import { isPascalCase } from './is-pascal-case.js';
import { isUpperCase } from './is-upper-case.js';

/**
 * Trim {@link name}, replace all types of **delimeters** with a **single space**, and lowercase.
 *
 * @group name
 * @param name name string
 * @returns Trimmed and normalized string value
 * @throws Error {@link InvalidNameError} if{@link name} length is out of the range of 2 to 30 characters
 *
 *
 *
 */
export function normalizeName(name: string): string {
  name = trim(name);

  if (name.length < 2) {
    throw new InvalidNameError('Name length must have at least 2 characters');
  }

  if (name.length > 30) {
    throw new InvalidNameError(`Name length must have at most 30 characters`);
  }

  if (isPascalCase(name) || isCamelCase(name)) {
    return name
      .split('')
      .map((letter, index) => {
        if (index > 0) {
          if (isUpperCase(letter)) {
            return ` ${letter}`;
          }
        }
        return letter;
      })
      .join('')
      .toLowerCase();
  }

  return name.replace(/[.\-_\s]{1,}/g, ' ').toLowerCase();
}
