import { Test, TestingModule } from '@nestjs/testing';
import { CaveRegisterService } from './cave-register.service';

describe('CaveRegisterService', () => {
  let service: CaveRegisterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaveRegisterService],
    }).compile();

    service = module.get<CaveRegisterService>(CaveRegisterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
