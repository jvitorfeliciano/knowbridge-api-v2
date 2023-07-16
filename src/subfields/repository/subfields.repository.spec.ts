import { Test, TestingModule } from '@nestjs/testing';
import { SubfieldsRepository } from './subfields.repository';

describe('SubfieldsRepository', () => {
  let provider: SubfieldsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubfieldsRepository],
    }).compile();

    provider = module.get<SubfieldsRepository>(SubfieldsRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
