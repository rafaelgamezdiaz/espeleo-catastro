import { Test, TestingModule } from '@nestjs/testing';
import { NameOriginService } from './name-origin.service';

describe('NameOriginService', () => {
  let service: NameOriginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NameOriginService],
    }).compile();

    service = module.get<NameOriginService>(NameOriginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
