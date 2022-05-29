import { Test, TestingModule } from '@nestjs/testing';
import { GeologyService } from './geology.service';

describe('GeologyService', () => {
  let service: GeologyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeologyService],
    }).compile();

    service = module.get<GeologyService>(GeologyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
