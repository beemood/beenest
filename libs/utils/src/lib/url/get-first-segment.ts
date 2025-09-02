import { isUndefined } from '../common/is-undefined.js';
import { UndefinedError } from '../errors/errors.js';
import { segments } from './segments.js';

/**
 * Get the first segment of {@link filePath}
 *
 * @group url
 * @param filePath File path to get the first segment of {@link filePath}
 * @returns The first segment of {@link filePath}
 *
 * @example
 * ```ts
 *    getFirstSegment('some/.../path') // output: 'some'
 *    getFirstSegment('  ')            // throws: EmptyStringError
 *    getFirstSegment(undefined)       // throws: Error
 *    getFirstSegment(null)            // throws: Error
 *    getFirstSegment(1)               // throws: Error
 *    getFirstSegment({})              // throws: Error
 * ```
 */
export function getFirstSegment(filePath: string): string {
  const firstSegment = segments(filePath).shift();

  if (isUndefined(firstSegment)) {
    throw new UndefinedError(
      `First segment of the file path (${filePath}) is undefined`
    );
  }

  return firstSegment;
}
