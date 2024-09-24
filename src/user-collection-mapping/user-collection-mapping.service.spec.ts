import { Test, TestingModule } from '@nestjs/testing';
import { UserCollectionMappingService } from './user-collection-mapping.service';

describe('UserCollectionMappingService', () => {
  let service: UserCollectionMappingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCollectionMappingService],
    }).compile();

    service = module.get<UserCollectionMappingService>(UserCollectionMappingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
