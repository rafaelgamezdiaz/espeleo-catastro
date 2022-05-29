import { Test, TestingModule } from '@nestjs/testing';
import { NameOriginController } from './name-origin.controller';
import { NameOriginService } from './name-origin.service';

describe('NameOriginController', () => {
  let controller: NameOriginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NameOriginController],
      providers: [NameOriginService],
    }).compile();

    controller = module.get<NameOriginController>(NameOriginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
