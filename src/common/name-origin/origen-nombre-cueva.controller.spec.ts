import { Test, TestingModule } from '@nestjs/testing';
import { OrigenNombreCuevaController } from './origen-nombre-cueva.controller';
import { OrigenNombreCuevaService } from './origen-nombre-cueva.service';

describe('NameOriginController', () => {
  let controller: OrigenNombreCuevaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrigenNombreCuevaController],
      providers: [OrigenNombreCuevaService],
    }).compile();

    controller = module.get<OrigenNombreCuevaController>(OrigenNombreCuevaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
