import { EmailListener } from './email.listener.js';

describe('EmailEventListener', () => {
  let eventListener: EmailListener;

  beforeAll(() => {
    eventListener = new EmailListener();
  });

  it('should be defined', () => {
    expect(eventListener).toBeDefined();
  });
});
