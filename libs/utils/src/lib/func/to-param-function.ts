/**
 * Wrap {@link throwingFunction} with try-catch block and supress any error and return the parameters
 *
 * @param throwingFunction Function that might throw error
 * @returns Function that returns `params` instead of throwing any error
 *
 * @example
 *
 * ```ts
 *    const throwingFunction    = (someValue)=> throw Error();
 *    const wrappedthrowingFunction = toParamFunction(throwingFunction)
 *    wrappedthrowingFunction('some param')     // output: 'some param'
 *    wrappedthrowingFunction('some', 'param')  // output: ['some', 'param']
 * ```
 */
export function toParamFunction<T extends (...params: any[]) => any>(
  throwingFunction: T
): (...params: Parameters<T>) => ReturnType<T> | Parameters<T> {
  return (...params: Parameters<T>) => {
    const isMultipleParam = params.length > 1;
    try {
      return throwingFunction(...params);
    } catch {
      if (isMultipleParam) {
        return params;
      }
      return params[0];
    }
  };
}
