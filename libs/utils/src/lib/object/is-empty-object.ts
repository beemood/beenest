import { keys } from './keys.js';

export function isEmptyObject(objectValue: object) {
  if (keys(objectValue).length == 0) {
    return true;
  }
  return false;
}
