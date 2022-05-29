import { Test, TestingModule } from '@nestjs/testing';
import { PaleontologyController } from './paleontology.controller';
import { PaleontologyService } from './paleontology.service';

describe('PaleontologyController', () => {
  let controller: PaleontologyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaleontologyController],
      providers: [PaleontologyService],
    }).compile();

    controller = module.get<PaleontologyController>(PaleontologyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
