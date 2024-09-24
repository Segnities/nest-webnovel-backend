import { Test, TestingModule } from '@nestjs/testing';
import { NotificationGroupService } from './notification-group.service';

describe('NotificationGroupService', () => {
  let service: NotificationGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationGroupService],
    }).compile();

    service = module.get<NotificationGroupService>(NotificationGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
