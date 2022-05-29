import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeCaveService } from './type-cave.service';
import { CreateTypeCaveDto } from './dto/create-type-cave.dto';
import { UpdateTypeCaveDto } from './dto/update-type-cave.dto';

@Controller('type-cave')
export class TypeCaveController {
  constructor(private readonly typeCaveService: TypeCaveService) {}

  @Post()
  create(@Body() createTypeCaveDto: CreateTypeCaveDto) {
    return this.typeCaveService.create(createTypeCaveDto);
  }

  @Get()
  findAll() {
    return this.typeCaveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeCaveService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeCaveDto: UpdateTypeCaveDto) {
    return this.typeCaveService.update(+id, updateTypeCaveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeCaveService.remove(+id);
  }
}
