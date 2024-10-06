import { Test, TestingModule } from '@nestjs/testing';
import { CommendableTypeService } from './commendable-type.service';

describe('CommendableTypeService', () => {
  let service: CommendableTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommendableTypeService],
    }).compile();

    service = module.get<CommendableTypeService>(CommendableTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
