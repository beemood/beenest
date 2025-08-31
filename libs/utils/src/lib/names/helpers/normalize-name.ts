import { InvalidNameError } from '../../errors/errors.js';
import { isCamelCase } from './is-camel-case.js';
import { isPascalCase } from './is-pascal-case.js';
import { isUpperCase } from './is-upper-case.js';
import { trim } from './trim.js';

/**
 * Normalize the given string by transforming it into a lower case single space seperated string by replace all posibble delimeters and extra spaces.
 * @param name string value (at least 2 characters long)
 * @returns string (sentence case string)
 */
export function normalizeName(name: string): string {
  name = trim(name);

  // If the string value is empty, then throw error
  if (name.length < 2) {
    throw new InvalidNameError(
      'name must contain at least 2 alphabetic characters'
    );
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
