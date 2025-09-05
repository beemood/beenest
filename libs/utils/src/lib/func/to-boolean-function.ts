/**
 * Wrap {@link throwingFunction} with try-catch block and supress any error and returns `false` instead of throwing error
 *
 * @param throwingFunction Function that might throw error
 * @returns Function that returns `false` instead of throwing any error
 *
 * @example
 *
 * ```ts
 *    const throwingFunction    = (someValue)=> throw Error();
 *    const wrappedthrowingFunction = toBooleanFunction(throwingFunction)
 *    wrappedthrowingFunction('some param')     // output: false
 *    wrappedthrowingFunction('some', 'param')  // output: false
 * ```
 */
export function toBooleanFunction<T extends (...params: any[]) => any>(
  throwingFunction: T
): (...params: Parameters<T>) => boolean {
  return (...params: Parameters<T>) => {
    try {
      throwingFunction(...params);
      return true;
    } catch {
      return false;
    }
  };
}
