/**
 * Wrap {@link anyFunction} with try-catch block and supress any error and return the parameters
 *
 * @param anyFunction Function that might throw error
 * @param defaultReturnValue The default return value if {@link anyFunction} throws an error
 * @returns Function that returns `null` instead of throwing any error
 *
 * @example
 *
 * ```ts
 *    const anyFunction  = (someValue)=>throw Error("Sample error");
 *    toParamFunction(anyFunction)   // output: someValue
 * ```
 */
export function toParamFunction<T extends (param: any) => any>(anyFunction: T) {
  return (param: any) => {
    try {
      return anyFunction(param);
    } catch {
      return param;
    }
  };
}
