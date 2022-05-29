import { Test, TestingModule } from '@nestjs/testing';
import { PaleontologyService } from './paleontology.service';

describe('PaleontologyService', () => {
  let service: PaleontologyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaleontologyService],
    }).compile();

    service = module.get<PaleontologyService>(PaleontologyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
