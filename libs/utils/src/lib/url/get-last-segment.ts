import { segments } from './segments.js';

/**
 * Get the last segment of file path
 * @param filePath file path
 * @returns last segment of the path
 */
export function getLastSegment(filePath: string): string {
  const result = segments(filePath).pop();

  if (!result) {
    throw new Error(`Invalid path :${filePath}`);
  }

  return result;
}
