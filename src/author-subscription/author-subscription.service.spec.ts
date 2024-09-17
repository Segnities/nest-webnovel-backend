import { Test, TestingModule } from '@nestjs/testing';
import { AuthorSubscriptionService } from './author-subscription.service';

describe('AuthorSubscriptionService', () => {
  let service: AuthorSubscriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorSubscriptionService],
    }).compile();

    service = module.get<AuthorSubscriptionService>(AuthorSubscriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
