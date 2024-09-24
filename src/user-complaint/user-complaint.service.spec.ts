import { Test, TestingModule } from '@nestjs/testing';
import { UserComplaintService } from './user-complaint.service';

describe('UserComplaintService', () => {
  let service: UserComplaintService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserComplaintService],
    }).compile();

    service = module.get<UserComplaintService>(UserComplaintService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
