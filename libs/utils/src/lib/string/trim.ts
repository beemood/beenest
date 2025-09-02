import { EmptyStringError } from '../errors/errors.js';
import { isEmptyString } from './is-empty-string.js';

/**
 * Trim {@link stringValue} and remove all extrate space characters
 *
 * @group string
 * @param stringValue String value to trim and replace all extra spaces in the text
 * @returns Trimmed string value
 * @throws Error {@link EmptyStringError} if the {@link stringValue} is empty
 *
 * @example
 * ```ts
 *    trim('  some    text  ') // output: 'some text'
 *    trim('               a') // output: 'a'
 *    trim('s               ') // output: 's'
 *    trim('')                 // throws: EmptyStringError
 *    trim('             ')    // throws: EmptyStringError
 * ```
 */
export function trim(stringValue: string): string {
  if (isEmptyString(stringValue)) {
    throw new EmptyStringError(`The stringValue is empty`);
  }
  return stringValue.trim().replace(/\s{1,}/g, ' ');
}
