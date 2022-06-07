import { Test, TestingModule } from '@nestjs/testing';
import { OrigenNombreCuevaService } from './origen-nombre-cueva.service';

describe('NameOriginService', () => {
  let service: OrigenNombreCuevaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrigenNombreCuevaService],
    }).compile();

    service = module.get<OrigenNombreCuevaService>(OrigenNombreCuevaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
