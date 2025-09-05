import { Test } from '@nestjs/testing';
import { AppModule } from './app.module.js';
describe('AppModule', () => {
  it('should initialize', async () => {
    const app = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    expect(app).toBeDefined();
  });
});
