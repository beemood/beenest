import { getLastSegment } from './get-last-segment.js';

/**
 * Extract the file-name from a file-path
 */
export function getFileName(filePath: string): string {
  return getLastSegment(filePath);
}
