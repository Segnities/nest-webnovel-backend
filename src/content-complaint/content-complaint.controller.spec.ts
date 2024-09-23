import { Test, TestingModule } from '@nestjs/testing';
import { ContentComplaintController } from './content-complaint.controller';

describe('ContentComplaintController', () => {
  let controller: ContentComplaintController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentComplaintController],
    }).compile();

    controller = module.get<ContentComplaintController>(ContentComplaintController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
