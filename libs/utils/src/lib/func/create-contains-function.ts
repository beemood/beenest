/**
 * Create a function that gets a list of string and check that the {@link mainString} contains one of them
 *
 * @param mainString main string value
 * @param caseSenstive boolean
 * @returns contains function that gets a list of string and check {@link mainString} contains one of them
 */
export function createContainsFunction(
  mainString: string,
  caseSenstive = false
) {
  return (...containsValues: string[]) => {
    if (caseSenstive == false) {
      mainString = mainString.toLowerCase();
    }
    for (let s of containsValues) {
      if (caseSenstive == false) {
        s = s.toLowerCase();
      }

      if (mainString.includes(s)) {
        return true;
      }
    }
    return false;
  };
}
