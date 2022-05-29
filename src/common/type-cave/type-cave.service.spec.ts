import { Test, TestingModule } from '@nestjs/testing';
import { TypeCaveService } from './type-cave.service';

describe('TypeCaveService', () => {
  let service: TypeCaveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeCaveService],
    }).compile();

    service = module.get<TypeCaveService>(TypeCaveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
