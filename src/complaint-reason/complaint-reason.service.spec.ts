import { Test, TestingModule } from '@nestjs/testing';
import { ComplaintReasonService } from './complaint-reason.service';

describe('ComplaintReasonService', () => {
  let service: ComplaintReasonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplaintReasonService],
    }).compile();

    service = module.get<ComplaintReasonService>(ComplaintReasonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
