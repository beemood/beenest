import { getLastSegment } from './get-last-segment.js';

/**
 * Get the file name (including file extention) from {@link filePath}
 *
 * @group Url
 * @param filePath File path to extract the file name from
 * @returns The file name ( the last segment of the {@link filePath})
 * @see {@link getLastSegment}
 * @example
 * ```ts
 *    getFileName('some/.../file.ext')  // output: file.ext
 *    getFileName('file.ext')           // output: file.ext
 *    getFileName('')                   // throws: EmptyStringError
 *    getFileName('  ')                 // throws: EmptyStringError
 * ```
 *
 */
export function getFileName(filePath: string): string {
  return getLastSegment(filePath);
}
