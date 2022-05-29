import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeologyService } from './geology.service';
import { CreateGeologyDto } from './dto/create-geology.dto';
import { UpdateGeologyDto } from './dto/update-geology.dto';

@Controller('geology')
export class GeologyController {
  constructor(private readonly geologyService: GeologyService) {}

  @Post()
  create(@Body() createGeologyDto: CreateGeologyDto) {
    return this.geologyService.create(createGeologyDto);
  }

  @Get()
  findAll() {
    return this.geologyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.geologyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeologyDto: UpdateGeologyDto) {
    return this.geologyService.update(+id, updateGeologyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.geologyService.remove(+id);
  }
}
