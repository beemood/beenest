import { names, Names } from './names.js';

/**
 * Transforms a given word into its plural form in American English.
 *
 * This function handles the most common irregular nouns and general
 * pluralization rules. It is not an exhaustive list but covers
 * the majority of cases.
 * @param name string
 * @returns plural string
 */
export function toPluralName(name: string) {
  // Convert to lowercase to ensure consistent matching
  const lowerWord = name.toLowerCase();

  // --- 1. Handle irregular nouns ---
  // This object maps singular irregular nouns to their plural forms.
  const irregularPlurals: Record<string, string> = {
    man: 'men',
    woman: 'women',
    child: 'children',
    tooth: 'teeth',
    foot: 'feet',
    goose: 'geese',
    mouse: 'mice',
    louse: 'lice',
    person: 'people',
    ox: 'oxen',
    cortex: 'cortices',
    appendix: 'appendices',
    criterion: 'criteria',
    phenomenon: 'phenomena',
    datum: 'data',
    alumnus: 'alumni',
    fungus: 'fungi',
    nucleus: 'nuclei',
    cactus: 'cacti',
    syllabus: 'syllabi',
  };

  if (irregularPlurals[lowerWord]) {
    return irregularPlurals[lowerWord];
  }

  // --- 2. Handle nouns that are the same in singular and plural form ---
  const sameSingularPlural = new Set<string>([
    'sheep',
    'fish',
    'deer',
    'moose',
    'species',
    'series',
    'salmon',
    'trout',
    'bison',
    'aircraft',
    'offspring',
  ]);

  if (sameSingularPlural.has(lowerWord)) {
    return name;
  }

  // --- 3. Apply general pluralization rules ---

  // Rule 1: Words ending in 's', 'x', 'z', 'sh', 'ch' get 'es'
  if (
    lowerWord.endsWith('s') ||
    lowerWord.endsWith('x') ||
    lowerWord.endsWith('z') ||
    lowerWord.endsWith('sh') ||
    lowerWord.endsWith('ch')
  ) {
    return name + 'es';
  }

  // Rule 2: Words ending in 'y' preceded by a consonant change 'y' to 'ies'
  const vowels = 'aeiou';
  if (
    lowerWord.endsWith('y') &&
    !vowels.includes(lowerWord.charAt(lowerWord.length - 2))
  ) {
    return name.slice(0, -1) + 'ies';
  }

  // Rule 3: Words ending in 'f' or 'fe' often change to 'ves'
  if (lowerWord.endsWith('fe')) {
    return name.slice(0, -2) + 'ves';
  }
  if (lowerWord.endsWith('f')) {
    return name.slice(0, -1) + 'ves';
  }

  // Rule 4: Words ending in 'o' preceded by a consonant get 'es'
  // There are exceptions, but this covers most cases like 'potato' and 'tomato'
  if (
    lowerWord.endsWith('o') &&
    !vowels.includes(lowerWord.charAt(lowerWord.length - 2))
  ) {
    return name + 'es';
  }

  // Rule 5: Default rule - add 's' to the end of the word
  return name + 's';
}

export function pluralNames(name: string): Names {
  return names(toPluralName(name));
}
