import { segments } from './segments.js';

export function getFirstSegment(filePath: string) {
  return segments(filePath).shift();
}
