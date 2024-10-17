import { Test, TestingModule } from '@nestjs/testing';
import { ItemsProcessingService } from './items-processing.service';

describe('ItemsProcessingService', () => {
  let service: ItemsProcessingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemsProcessingService],
    }).compile();

    service = module.get<ItemsProcessingService>(ItemsProcessingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
