import { Test, TestingModule } from '@nestjs/testing';
import { ComplaintReasonController } from './complaint-reason.controller';

describe('ComplaintReasonController', () => {
  let controller: ComplaintReasonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplaintReasonController],
    }).compile();

    controller = module.get<ComplaintReasonController>(ComplaintReasonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
