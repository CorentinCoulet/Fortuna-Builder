import { Test, TestingModule } from '@nestjs/testing';
import { ItemsProcessingController } from './items-processing.controller';

describe('ItemsProcessingController', () => {
  let controller: ItemsProcessingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsProcessingController],
    }).compile();

    controller = module.get<ItemsProcessingController>(ItemsProcessingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
