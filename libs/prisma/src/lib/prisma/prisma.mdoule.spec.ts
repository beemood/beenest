import { PrismaModule } from './prisma.module.js';

describe('PrismaModule', () => {
  it('should initialize', () => {
    expect(new PrismaModule()).toBeDefined();
  });
});
