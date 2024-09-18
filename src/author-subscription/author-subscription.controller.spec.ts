import { Test, TestingModule } from '@nestjs/testing';
import { AuthorSubscriptionController } from './author-subscription.controller';

describe('AuthorSubscriptionController', () => {
  let controller: AuthorSubscriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorSubscriptionController],
    }).compile();

    controller = module.get<AuthorSubscriptionController>(AuthorSubscriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
