import { Test, TestingModule } from '@nestjs/testing';
import { TypeExcavationController } from './type-excavation.controller';
import { TypeExcavationService } from './type-excavation.service';

describe('TypeExcavationController', () => {
  let controller: TypeExcavationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeExcavationController],
      providers: [TypeExcavationService],
    }).compile();

    controller = module.get<TypeExcavationController>(TypeExcavationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
