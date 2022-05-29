import { Test, TestingModule } from '@nestjs/testing';
import { TypeExcavationService } from './type-excavation.service';

describe('TypeExcavationService', () => {
  let service: TypeExcavationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeExcavationService],
    }).compile();

    service = module.get<TypeExcavationService>(TypeExcavationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
