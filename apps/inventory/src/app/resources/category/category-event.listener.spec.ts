import { CategoryEventListener } from './category-event.listener.js';

describe('CategoryEventListener', () => {
  let eventListener: CategoryEventListener;

  beforeAll(() => {
    eventListener = new CategoryEventListener();
  });
  it('should be defined', () => {
    expect(eventListener).toBeDefined();
  });
});
