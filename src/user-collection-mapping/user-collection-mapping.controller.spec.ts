import { Test, TestingModule } from '@nestjs/testing';
import { UserCollectionMappingController } from './user-collection-mapping.controller';

describe('UserCollectionMappingController', () => {
  let controller: UserCollectionMappingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCollectionMappingController],
    }).compile();

    controller = module.get<UserCollectionMappingController>(UserCollectionMappingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
