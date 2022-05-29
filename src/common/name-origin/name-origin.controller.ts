import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NameOriginService } from './name-origin.service';
import { CreateNameOriginDto } from './dto/create-name-origin.dto';
import { UpdateNameOriginDto } from './dto/update-name-origin.dto';

@Controller('name-origin')
export class NameOriginController {
  constructor(private readonly nameOriginService: NameOriginService) {}

  @Post()
  create(@Body() createNameOriginDto: CreateNameOriginDto) {
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
  update(@Param('id') id: string, @Body() updateNameOriginDto: UpdateNameOriginDto) {
    return this.nameOriginService.update(+id, updateNameOriginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nameOriginService.remove(+id);
  }
}
