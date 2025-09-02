export function isObject<T extends object>(value: T | unknown): value is T {
  return typeof value == 'object' && value !== null && !Array.isArray(value);
}
