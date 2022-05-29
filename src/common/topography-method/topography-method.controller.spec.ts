import { Test, TestingModule } from '@nestjs/testing';
import { TopographyMethodController } from './topography-method.controller';
import { TopographyMethodService } from './topography-method.service';

describe('TopographyMethodController', () => {
  let controller: TopographyMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TopographyMethodController],
      providers: [TopographyMethodService],
    }).compile();

    controller = module.get<TopographyMethodController>(TopographyMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
