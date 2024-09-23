import { Test, TestingModule } from '@nestjs/testing';
import { ContinueReadingController } from './continue-reading.controller';

describe('ContinueReadingController', () => {
  let controller: ContinueReadingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContinueReadingController],
    }).compile();

    controller = module.get<ContinueReadingController>(ContinueReadingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
