import { normalizeName } from './helpers/normalize-name.js';
import { toCamelCase } from './to-camel-case.js';
import { toKebabCase } from './to-kebab-case.js';
import { toPascalCase } from './to-pascal-case.js';
import { toSentenceCase } from './to-sentence-case.js';
import { toSnakeCase } from './to-snake-case.js';
import { toTitleCase } from './to-title-case.js';

/**
 * @group names
 */
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
 *
 * @group Names
 * @param name String value between 2 to 30 charcters long
 * @returns names {@link Names}
 *
 * @example
 * ```ts
 *    names("someName");
 *    // Function return the following result
 *    const output = {
 *        camelCase: 'someName',
 *        kebabCase: 'some-name',
 *        lowercase: 'some name',
 *        pascalCase: 'SomeName',
 *        screamingSnakeCase: 'SOME_NAME',
 *        sentenceCase: 'Some name',
 *        snakeCase: 'some_name',
 *        titleCase: 'Some Name',
 *        uppercase: 'SOME NAME',
 *        propertyName: 'someName',
 *        className: 'SomeName',
 *        constantName: 'SOME_NAME',
 *        fileName: 'some-name',
 *    }
 *
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
