import { ProductListener } from './product.listener.js';

describe('ProductEventListener', () => {
  let eventListener: ProductListener;

  beforeAll(() => {
    eventListener = new ProductListener();
  });

  it('should be defined', () => {
    expect(eventListener).toBeDefined();
  });
});
