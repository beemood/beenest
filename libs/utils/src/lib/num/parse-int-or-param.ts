import { toParamFunction } from '../func/to-param-function.js';

export function parseIntOrParam(value: unknown) {
  return toParamFunction(parseInt)(value);
}
