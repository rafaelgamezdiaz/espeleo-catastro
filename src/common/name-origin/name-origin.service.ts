import { Injectable } from '@nestjs/common';
import { CreateNameOriginDto } from './dto/create-name-origin.dto';
import { UpdateNameOriginDto } from './dto/update-name-origin.dto';

@Injectable()
export class NameOriginService {
  create(createNameOriginDto: CreateNameOriginDto) {
    return 'This action adds a new nameOrigin';
  }

  findAll() {
    return `This action returns all nameOrigin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nameOrigin`;
  }

  update(id: number, updateNameOriginDto: UpdateNameOriginDto) {
    return `This action updates a #${id} nameOrigin`;
  }

  remove(id: number) {
    return `This action removes a #${id} nameOrigin`;
  }
}
