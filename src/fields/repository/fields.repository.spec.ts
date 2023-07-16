import { Test, TestingModule } from '@nestjs/testing';
import { FieldsRepository } from './fields.repository';

describe('FieldsRepository', () => {
  let provider: FieldsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldsRepository],
    }).compile();

    provider = module.get<FieldsRepository>(FieldsRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
