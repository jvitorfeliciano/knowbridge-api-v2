import { Test, TestingModule } from '@nestjs/testing';
import { SubfieldsController } from './subfields.controller';

describe('SubfieldsController', () => {
  let controller: SubfieldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubfieldsController],
    }).compile();

    controller = module.get<SubfieldsController>(SubfieldsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
