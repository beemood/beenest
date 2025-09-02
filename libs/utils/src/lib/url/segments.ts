import { EmptyStringError } from '../errors/errors.js';
import { isEmptyString } from '../string/is-empty-string.js';

/**
 * Get the segments of {@link filePath}
 *
 * @group url
 * @param filePath File path to split into segments
 * @returns List of segments of the {@link filePath}
 * @throws Error {@link EmptyStringError} if the {@link filePath} is empty
 *
 * @example
 * ```ts
 *    segments('some/path/file-name.json') // output: ['some', 'path', 'file-name.json']
 *    segments('file-name.json')           // output: ['file-name.json']
 *    segments('')                         // throws: EmptyStringError
 *    segments('  ')                       // throws: EmptyStringError
 * ```
 *
 */
export function segments(filePath: string) {
  if (isEmptyString(filePath)) {
    throw new EmptyStringError(`The filePath is empty`);
  }
  return filePath.split(/[/\\]{1,}/);
}
