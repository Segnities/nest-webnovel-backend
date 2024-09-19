import { Test, TestingModule } from '@nestjs/testing';
import { NovelSubscriptionController } from './novel-subscription.controller';

describe('NovelSubscriptionController', () => {
  let controller: NovelSubscriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NovelSubscriptionController],
    }).compile();

    controller = module.get<NovelSubscriptionController>(NovelSubscriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
