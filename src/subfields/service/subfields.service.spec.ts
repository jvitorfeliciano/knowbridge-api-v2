import { Test, TestingModule } from '@nestjs/testing';
import { SubfieldsService } from './subfields.service';

describe('SubfieldsService', () => {
  let service: SubfieldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubfieldsService],
    }).compile();

    service = module.get<SubfieldsService>(SubfieldsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
