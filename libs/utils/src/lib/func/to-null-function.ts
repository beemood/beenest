/**
 * Wrap {@link anyFunction} with try-catch block and supress any error returns `null`
 *
 * @param anyFunction Function that might throw error
 * @param defaultReturnValue The default return value if {@link anyFunction} throws an error
 * @returns Function that returns `null` instead of throwing any error
 *
 * @example
 *
 * ```ts
 *    const anyFunction  = ()=>throw Error("Sample error");
 *    toNullFunction(anyFunction)   // output: null
 * ```
 */
export function toNullFunction<T extends (...args: any[]) => any>(
  anyFunction: T
) {
  return (param: Parameters<T>) => {
    try {
      return anyFunction(param);
    } catch {
      return null;
    }
  };
}
