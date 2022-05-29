import { Test, TestingModule } from '@nestjs/testing';
import { LocationAreaController } from './location-area.controller';
import { LocationAreaService } from './location-area.service';

describe('LocationController', () => {
  let controller: LocationAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationAreaController],
      providers: [LocationAreaService],
    }).compile();

    controller = module.get<LocationAreaController>(LocationAreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
