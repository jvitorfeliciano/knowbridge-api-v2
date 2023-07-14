import { Test, TestingModule } from '@nestjs/testing';
import { TrailsRepository } from './trails.repository';

describe('TrailsRepository', () => {
  let provider: TrailsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrailsRepository],
    }).compile();

    provider = module.get<TrailsRepository>(TrailsRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
