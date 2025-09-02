import { EmptyStringError } from '../errors/errors.js';
import { isEmptyString } from './is-empty-string.js';

/**
 * Determines if a string contains a specified substring, ignoring case.
 *
 * @group string
 * @param mainString The string to search within.
 * @param subString The substring to search for.
 * @returns `true` if {@link mainString} includes {@link subString}, `false` otherwise.
 * @throws Error {@link EmptyStringError} if {@link mainString} or {@link subString} is empty
 *
 * @example
 * ```ts
 *    includes('Some', 's')   // output: true
 *    includes('Some', 'e')   // output: true
 *    includes('Some', 'me')  // output: true
 *    includes('Some', 'z')   // output: false
 *    includes('Some', 'sa')  // output: false
 *    includes('Some', 'ma')  // output: false
 *    includes('Some', '')    // throws: EmtptyStringError
 *    includes('', 'some')    // throws: EmtptyStringError
 *    includes()              // throws: Error
 * ```
 *
 */
export function includes(mainString: string, subString: string): boolean {
  if (isEmptyString(mainString))
    throw new EmptyStringError(`mainString is empty`);

  if (isEmptyString(subString))
    throw new EmptyStringError(`subString is empty`);

  return mainString.toLowerCase().includes(subString.toLowerCase());
}
