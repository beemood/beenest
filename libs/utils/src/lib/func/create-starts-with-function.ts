/**
 * Create a function that gets a list of string and check that the {@link mainString} starts with one of them
 *
 * @param mainString main string value
 * @param caseSenstive boolean
 * @returns Starts with function that gets a list of string and check {@link mainString} stats with one of them
 */
export function createStartsWithFunction(
  mainString: string,
  caseSenstive = false
) {
  return (...startWithValues: string[]) => {
    if (caseSenstive == false) {
      mainString = mainString.toLowerCase();
    }
    for (let s of startWithValues) {
      if (caseSenstive == false) {
        s = s.toLowerCase();
      }

      if (mainString.startsWith(s)) {
        return true;
      }
    }
    return false;
  };
}
