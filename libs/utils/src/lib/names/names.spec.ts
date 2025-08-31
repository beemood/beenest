import { Names, names } from './names.js';

describe('names', () => {
  it('should transform name into all variants', () => {
    expect(names('SomeName')).toEqual({
      camelCase: 'someName',
      kebabCase: 'some-name',
      lowercase: 'some name',
      pascalCase: 'SomeName',
      screamingSnakeCase: 'SOME_NAME',
      sentenceCase: 'Some name',
      snakeCase: 'some_name',
      titleCase: 'Some Name',
      uppercase: 'SOME NAME',
      propertyName: 'someName',
      className: 'SomeName',
      constantName: 'SOME_NAME',
      fileName: 'some-name',
    } as Names);
  });
});
