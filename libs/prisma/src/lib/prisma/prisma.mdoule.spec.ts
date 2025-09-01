import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from './prisma.module.js';
import { getClientToken } from './providers/client.js';
import { getRepositoryToken } from './providers/repository.js';

describe('PrismaModule', () => {
  let module: TestingModule;

  const clientInstance = { some: true, other: true };
  const datasourceName = '';
  const resourceNames = ['some', 'other'];

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        PrismaModule.forRoot({ clientInstance, datasourceName }),
        PrismaModule.forFeature({
          resourceNames,
          datasourceName,
        }),
      ],
    }).compile();
  });

  it('should provide client', () => {
    expect(module.get(getClientToken(datasourceName))).toEqual(clientInstance);
  });

  it('should provide repositories', () => {
    expect(module.get(getRepositoryToken('some', datasourceName))).toEqual(
      true
    );
    expect(module.get(getRepositoryToken('other', datasourceName))).toEqual(
      true
    );
  });
});
