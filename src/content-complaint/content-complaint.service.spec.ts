import { Test, TestingModule } from '@nestjs/testing';
import { ContentComplaintService } from './content-complaint.service';

describe('ContentComplaintService', () => {
  let service: ContentComplaintService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentComplaintService],
    }).compile();

    service = module.get<ContentComplaintService>(ContentComplaintService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
