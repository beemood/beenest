import { toKebabCase } from './to-kebab-case.js';
import { toCamelCase } from './to-camel-case.js';
import { toPascalCase } from './to-pascal-case.js';
import { toSnakeCase } from './to-snake-case.js';
import { normalizeName } from './helpers/normalize-name.js';
import { toSentenceCase } from './to-sentence-case.js';
import { toTitleCase } from './to-title-case.js';

export type Names = {
  snakeCase: string;
  kebabCase: string;
  pascalCase: string;
  camelCase: string;
  screamingSnakeCase: string;
  titleCase: string;
  sentenceCase: string;
  uppercase: string;
  lowercase: string;
  className: string;
  propertyName: string;
  constantName: string;
  fileName: string;
};

/**
 * Create all case variants of the given string
 * @param name string
 * @returns names {@link Names}
 */
export function names(name: string): Names {
  name = normalizeName(name);
  const pascalCase = toPascalCase(name);
  const camelCase = toCamelCase(name);
  const kebabCase = toKebabCase(name);
  const screamingSnakeCase = toSnakeCase(name).toUpperCase();
  const snakeCase = toSnakeCase(name);
  return {
    pascalCase,
    className: pascalCase,
    kebabCase,
    fileName: kebabCase,
    camelCase,
    propertyName: camelCase,
    snakeCase,
    screamingSnakeCase,
    constantName: screamingSnakeCase,
    sentenceCase: toSentenceCase(name),
    titleCase: toTitleCase(name),
    lowercase: name.toLowerCase(),
    uppercase: name.toUpperCase(),
  };
}
