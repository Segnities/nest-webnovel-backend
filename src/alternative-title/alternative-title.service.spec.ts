import { Test, TestingModule } from '@nestjs/testing';
import { AlternativeTitleService } from './alternative-title.service';

describe('AlternativeTitleService', () => {
  let service: AlternativeTitleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlternativeTitleService],
    }).compile();

    service = module.get<AlternativeTitleService>(AlternativeTitleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
