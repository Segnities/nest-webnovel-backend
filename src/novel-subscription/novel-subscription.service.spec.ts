import { Test, TestingModule } from '@nestjs/testing';
import { NovelSubscriptionService } from './novel-subscription.service';

describe('NovelSubscriptionService', () => {
  let service: NovelSubscriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NovelSubscriptionService],
    }).compile();

    service = module.get<NovelSubscriptionService>(NovelSubscriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
