import { getRepositoryToken } from '@beenest/prisma';
import { generateUpc } from '@beenest/utils';
import { Test, type TestingModule } from '@nestjs/testing';
import { vi } from 'vitest';
import { ProductController } from './product.controller.js';

describe('ProductController', () => {
  let controller: ProductController;
  // Mock the Prisma ProductDelegate using vi.fn()
  const mockPrismaDelegate = {
    create: vi.fn(),
    findMany: vi.fn(),
    findUnique: vi.fn(),
    delete: vi.fn(),
    update: vi.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: getRepositoryToken('product'),
          useValue: mockPrismaDelegate,
        },
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Test for the saveOne method
  describe('saveOne', () => {
    it('should create and return a new product', async () => {
      const createData = { name: 'Test Product', upc: generateUpc('123456', '12345') };
      const select = { select: { id: true, name: true } };
      const expectedResult = {
        id: 1,
        name: 'Test Product',
        upc: createData.upc,
      };

      // Mock the Prisma create method
      mockPrismaDelegate.create.mockResolvedValue(expectedResult);

      const result = await controller.saveOne(createData, select);

      expect(mockPrismaDelegate.create).toHaveBeenCalledWith({
        data: createData,
        ...select,
      });
      expect(result).toEqual(expectedResult);
    });
  });

  // Test for the findAll method
  describe('findAll', () => {
    it('should return a list of categories', async () => {
      const page = { skip: 0, take: 10 };
      const select = { select: { id: true, name: true } };
      const orderBy = {
        orderBy: { name: 'asc' } as Record<string, 'asc' | 'desc'>,
      };
      const where = { where: { name: { contains: 'Test' } } };
      const expectedResult = [{ id: 1, name: 'Test Product' }];

      // Mock the Prisma findMany method
      mockPrismaDelegate.findMany.mockResolvedValue(expectedResult);

      const result = await controller.findAll(page, select, orderBy, where);

      expect(mockPrismaDelegate.findMany).toHaveBeenCalledWith({
        ...page,
        ...select,
        ...orderBy,
        ...where,
      });
      expect(result).toEqual(expectedResult);
    });
  });

  // Test for the findOneById method
  describe('findOneById', () => {
    it('should return a single product by its ID', async () => {
      const id = 1;
      const select = { select: { id: true, name: true } };
      const expectedResult = { id: 1, name: 'Test Product' };

      // Mock the Prisma findUnique method
      mockPrismaDelegate.findUnique.mockResolvedValue(expectedResult);

      const result = await controller.findOneById(id, select);

      expect(mockPrismaDelegate.findUnique).toHaveBeenCalledWith({
        where: { id },
        ...select,
      });
      expect(result).toEqual(expectedResult);
    });
  });

  // Test for the deleteOneById method
  describe('deleteOneById', () => {
    it('should delete a product by its ID', async () => {
      const id = 1;
      const expectedResult = { id: 1, name: 'Deleted Product' };

      // Mock the Prisma delete method
      mockPrismaDelegate.delete.mockResolvedValue(expectedResult);

      const result = await controller.deleteOneById(id);

      expect(mockPrismaDelegate.delete).toHaveBeenCalledWith({
        where: { id },
      });
      expect(result).toEqual(expectedResult);
    });
  });

  // Test for the updateOneByID method
  describe('updateOneByID', () => {
    it('should update a product by its ID', async () => {
      const id = 1;
      const select = { select: { id: true, name: true } };
      const expectedResult = { id: 1, name: 'Updated Product' };

      // Mock the Prisma update method
      mockPrismaDelegate.update.mockResolvedValue(expectedResult);

      // Note: The original controller method calls `repo.delete`. This test assumes
      // the intent was to update, and mocks the `update` method accordingly.
      // If the original code is correct and should delete, the mock should be `mockPrismaDelegate.delete`.
      const result = await controller.updateOneByID(id, {}, select);

      expect(mockPrismaDelegate.update).toHaveBeenCalledWith({
        where: { id },
        data: {},
        ...select,
      });
      expect(result).toEqual(expectedResult);
    });
  });
});
