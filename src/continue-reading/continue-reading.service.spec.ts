import { Test, TestingModule } from '@nestjs/testing';
import { ContinueReadingService } from './continue-reading.service';

describe('ContinueReadingService', () => {
  let service: ContinueReadingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContinueReadingService],
    }).compile();

    service = module.get<ContinueReadingService>(ContinueReadingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
