import { Injectable } from '@nestjs/common';
import { CreateOrigenNombreCuevaDto } from './dto/create-origen-nombre-cueva.dto';
import { UpdateOrigenNombreCuevaDto } from './dto/update-origen-nombre-cueva.dto';

@Injectable()
export class OrigenNombreCuevaService {
  create(createOrigenNombreCuevaDto: CreateOrigenNombreCuevaDto) {
    return 'This action adds a new nameOrigin';
  }

  findAll() {
    return `This action returns all nameOrigin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nameOrigin`;
  }

  update(id: number, updateOrigenNombreCuevaDto: UpdateOrigenNombreCuevaDto) {
    return `This action updates a #${id} nameOrigin`;
  }

  remove(id: number) {
    return `This action removes a #${id} nameOrigin`;
  }
}
