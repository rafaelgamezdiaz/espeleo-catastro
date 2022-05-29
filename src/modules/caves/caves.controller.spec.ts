import { Test, TestingModule } from '@nestjs/testing';
import { CavesController } from './caves.controller';
import { CavesService } from './caves.service';

describe('CavesController', () => {
  let controller: CavesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CavesController],
      providers: [CavesService],
    }).compile();

    controller = module.get<CavesController>(CavesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
