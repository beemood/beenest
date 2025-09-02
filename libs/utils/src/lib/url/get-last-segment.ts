import { isUndefined } from '../common/is-undefined.js';
import { UndefinedError } from '../errors/errors.js';
import { segments } from './segments.js';

/**
 * Get the last segment of {@link filePath}
 *
 * @group url
 * @param filePath File path that to get the last segment from
 * @returns The last segment of the {@link filePath}
 * @throws Error {@link UndefinedError} if the file path is empty or the return-value is undefined
 * @see {@link segments}
 *
 * @example
 * ```ts
 *    getLastSegment('some/.../file.ext') // output: 'file.ext'
 *    getLastSegment('/file.ext')         // output: 'file.ext'
 * ```
 */
export function getLastSegment(filePath: string): string {
  const lastSegment = segments(filePath).pop();

  if (isUndefined(lastSegment)) {
    throw new UndefinedError(
      `Last segment of the file path (${filePath}) is undefined`
    );
  }

  return lastSegment;
}
