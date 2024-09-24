import { Test, TestingModule } from '@nestjs/testing';
import { NotificationGroupController } from './notification-group.controller';

describe('NotificationGroupController', () => {
  let controller: NotificationGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationGroupController],
    }).compile();

    controller = module.get<NotificationGroupController>(NotificationGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
