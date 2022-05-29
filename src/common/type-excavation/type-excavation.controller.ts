import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeExcavationService } from './type-excavation.service';
import { CreateTypeExcavationDto } from './dto/create-type-excavation.dto';
import { UpdateTypeExcavationDto } from './dto/update-type-excavation.dto';

@Controller('type-excavation')
export class TypeExcavationController {
  constructor(private readonly typeExcavationService: TypeExcavationService) {}

  @Post()
  create(@Body() createTypeExcavationDto: CreateTypeExcavationDto) {
    return this.typeExcavationService.create(createTypeExcavationDto);
  }

  @Get()
  findAll() {
    return this.typeExcavationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeExcavationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeExcavationDto: UpdateTypeExcavationDto) {
    return this.typeExcavationService.update(+id, updateTypeExcavationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeExcavationService.remove(+id);
  }
}
