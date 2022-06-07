import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrigenNombreCuevaService } from './origen-nombre-cueva.service';
import { CreateOrigenNombreCuevaDto } from './dto/create-origen-nombre-cueva.dto';
import { UpdateOrigenNombreCuevaDto } from './dto/update-origen-nombre-cueva.dto';

@Controller('name-origin')
export class OrigenNombreCuevaController {
  constructor(private readonly nameOriginService: OrigenNombreCuevaService) {}

  @Post()
  create(@Body() createNameOriginDto: CreateOrigenNombreCuevaDto) {
    return this.nameOriginService.create(createNameOriginDto);
  }

  @Get()
  findAll() {
    return this.nameOriginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nameOriginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNameOriginDto: UpdateOrigenNombreCuevaDto) {
    return this.nameOriginService.update(+id, updateNameOriginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nameOriginService.remove(+id);
  }
}
