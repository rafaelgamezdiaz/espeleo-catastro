import { Injectable } from '@nestjs/common';
import { CreateLocationAreaDto } from './dto/create-location-area.dto';
import { UpdateLocationAreaDto } from './dto/update-location-area.dto';

@Injectable()
export class LocationAreaService {
  create(createLocationAreaDto: CreateLocationAreaDto) {
    return 'This action adds a new location-area';
  }

  findAll() {
    return `This action returns all location`;
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  update(id: number, updateLocationAreaDto: UpdateLocationAreaDto) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
