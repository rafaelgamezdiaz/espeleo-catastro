import { Test, TestingModule } from '@nestjs/testing';
import { CaveConditionsController } from './cave-conditions.controller';
import { CaveConditionsService } from './cave-conditions.service';

describe('CaveConditionsController', () => {
  let controller: CaveConditionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaveConditionsController],
      providers: [CaveConditionsService],
    }).compile();

    controller = module.get<CaveConditionsController>(CaveConditionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
