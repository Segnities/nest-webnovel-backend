import { Test, TestingModule } from '@nestjs/testing';
import { CommendableTypeController } from './commendable-type.controller';

describe('CommendableTypeController', () => {
  let controller: CommendableTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommendableTypeController],
    }).compile();

    controller = module.get<CommendableTypeController>(CommendableTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
