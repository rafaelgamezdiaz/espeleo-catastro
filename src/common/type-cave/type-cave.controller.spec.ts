import { Test, TestingModule } from '@nestjs/testing';
import { TypeCaveController } from './type-cave.controller';
import { TypeCaveService } from './type-cave.service';

describe('TypeCaveController', () => {
  let controller: TypeCaveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeCaveController],
      providers: [TypeCaveService],
    }).compile();

    controller = module.get<TypeCaveController>(TypeCaveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
