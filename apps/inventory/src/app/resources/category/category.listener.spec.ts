import { CategoryListener } from './category.listener.js';

describe('CategoryEventListener', () => {
  let eventListener: CategoryListener;

  beforeAll(() => {
    eventListener = new CategoryListener();
  });
  it('should be defined', () => {
    expect(eventListener).toBeDefined();
  });
});
