import { toPluralName } from './to-plural-name.js';

// --- Test Cases ---
describe('toPluralName', () => {
  // Test cases for regular nouns
  it('should add "s" to most regular nouns', () => {
    expect(toPluralName('cat')).toBe('cats');
    expect(toPluralName('apple')).toBe('apples');
  });

  // Test cases for words ending in "s", "x", "z", "sh", "ch"
  it('should add "es" to words ending in s, x, z, sh, or ch', () => {
    expect(toPluralName('bus')).toBe('buses');
    expect(toPluralName('box')).toBe('boxes');
    expect(toPluralName('waltz')).toBe('waltzes');
    expect(toPluralName('dish')).toBe('dishes');
    expect(toPluralName('church')).toBe('churches');
  });

  // Test cases for words ending in "y"
  it('should change "y" to "ies" for words ending in a consonant + y', () => {
    expect(toPluralName('spy')).toBe('spies');
    expect(toPluralName('city')).toBe('cities');
  });

  // Test cases for words ending in "f" or "fe"
  it('should change "f" or "fe" to "ves"', () => {
    expect(toPluralName('wolf')).toBe('wolves');
    expect(toPluralName('knife')).toBe('knives');
  });

  // Test cases for words ending in "o"
  it('should add "es" to words ending in a consonant + o', () => {
    expect(toPluralName('hero')).toBe('heroes');
    expect(toPluralName('potato')).toBe('potatoes');
  });

  // Test cases for irregular nouns
  it('should handle common irregular nouns', () => {
    expect(toPluralName('man')).toBe('men');
    expect(toPluralName('woman')).toBe('women');
    expect(toPluralName('child')).toBe('children');
    expect(toPluralName('foot')).toBe('feet');
    expect(toPluralName('mouse')).toBe('mice');
    expect(toPluralName('phenomenon')).toBe('phenomena');
  });

  // Test cases for same-in-singular-and-plural nouns
  it('should not change nouns that are the same in singular and plural', () => {
    expect(toPluralName('sheep')).toBe('sheep');
    expect(toPluralName('deer')).toBe('deer');
    expect(toPluralName('species')).toBe('species');
  });

  // Test cases for edge cases
  it('should handle words ending in a vowel + y', () => {
    expect(toPluralName('day')).toBe('days');
    expect(toPluralName('toy')).toBe('toys');
  });

  it('should handle words ending in a vowel + o', () => {
    // NOTE: The current function adds "es" to all words ending in 'o'.
    // This test case will fail with the current implementation.
    expect(toPluralName('radio')).toBe('radios');
    expect(toPluralName('stereo')).toBe('stereos');
  });
});
