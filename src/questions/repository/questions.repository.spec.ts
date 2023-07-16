import { Test, TestingModule } from '@nestjs/testing';
import { QuestionsRepository } from './questions.repository';

describe('QuestionsRepository', () => {
  let provider: QuestionsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionsRepository],
    }).compile();

    provider = module.get<QuestionsRepository>(QuestionsRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
