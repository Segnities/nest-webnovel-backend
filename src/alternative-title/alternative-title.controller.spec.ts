import { Test, TestingModule } from '@nestjs/testing';
import { AlternativeTitleController } from './alternative-title.controller';

describe('AlternativeTitleController', () => {
  let controller: AlternativeTitleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlternativeTitleController],
    }).compile();

    controller = module.get<AlternativeTitleController>(AlternativeTitleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
