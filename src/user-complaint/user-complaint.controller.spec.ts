import { Test, TestingModule } from '@nestjs/testing';
import { UserComplaintController } from './user-complaint.controller';

describe('UserComplaintController', () => {
  let controller: UserComplaintController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserComplaintController],
    }).compile();

    controller = module.get<UserComplaintController>(UserComplaintController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
