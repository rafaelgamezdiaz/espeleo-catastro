import { Test, TestingModule } from '@nestjs/testing';
import { GeologyController } from './geology.controller';
import { GeologyService } from './geology.service';

describe('GeologyController', () => {
  let controller: GeologyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeologyController],
      providers: [GeologyService],
    }).compile();

    controller = module.get<GeologyController>(GeologyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
