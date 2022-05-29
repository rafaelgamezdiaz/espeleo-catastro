import { Test, TestingModule } from '@nestjs/testing';
import { TopographyMethodService } from './topography-method.service';

describe('TopographyMethodService', () => {
  let service: TopographyMethodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopographyMethodService],
    }).compile();

    service = module.get<TopographyMethodService>(TopographyMethodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
