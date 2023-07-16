import { Test, TestingModule } from '@nestjs/testing';
import { VideosRepository } from './videos.repository';

describe('VideosRepository', () => {
  let provider: VideosRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideosRepository],
    }).compile();

    provider = module.get<VideosRepository>(VideosRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
