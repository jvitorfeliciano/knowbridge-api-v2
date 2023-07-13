import { Test, TestingModule } from '@nestjs/testing';
import { DisciplinesRepository } from './disciplines.repository';

describe('DisciplinesRepository', () => {
  let provider: DisciplinesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisciplinesRepository],
    }).compile();

    provider = module.get<DisciplinesRepository>(DisciplinesRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
