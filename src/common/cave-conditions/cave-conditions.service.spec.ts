import { Test, TestingModule } from '@nestjs/testing';
import { CaveConditionsService } from './cave-conditions.service';

describe('CaveConditionsService', () => {
  let service: CaveConditionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaveConditionsService],
    }).compile();

    service = module.get<CaveConditionsService>(CaveConditionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
