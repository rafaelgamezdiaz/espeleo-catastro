import { Test, TestingModule } from '@nestjs/testing';
import { LocationAreaService } from './location-area.service';

describe('LocationService', () => {
  let service: LocationAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationAreaService],
    }).compile();

    service = module.get<LocationAreaService>(LocationAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
