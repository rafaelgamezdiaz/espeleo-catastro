import { Injectable } from '@nestjs/common';
import { CreateGeologyDto } from './dto/create-geology.dto';
import { UpdateGeologyDto } from './dto/update-geology.dto';

@Injectable()
export class GeologyService {
  create(createGeologyDto: CreateGeologyDto) {
    return 'This action adds a new geology';
  }

  findAll() {
    return `This action returns all geology`;
  }

  findOne(id: number) {
    return `This action returns a #${id} geology`;
  }

  update(id: number, updateGeologyDto: UpdateGeologyDto) {
    return `This action updates a #${id} geology`;
  }

  remove(id: number) {
    return `This action removes a #${id} geology`;
  }
}
