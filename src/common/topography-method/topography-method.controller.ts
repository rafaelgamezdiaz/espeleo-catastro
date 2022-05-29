import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopographyMethodService } from './topography-method.service';
import { CreateTopographyMethodDto } from './dto/create-topography-method.dto';
import { UpdateTopographyMethodDto } from './dto/update-topography-method.dto';

@Controller('topography-method')
export class TopographyMethodController {
  constructor(private readonly topographyMethodService: TopographyMethodService) {}

  @Post()
  create(@Body() createTopographyMethodDto: CreateTopographyMethodDto) {
    return this.topographyMethodService.create(createTopographyMethodDto);
  }

  @Get()
  findAll() {
    return this.topographyMethodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topographyMethodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTopographyMethodDto: UpdateTopographyMethodDto) {
    return this.topographyMethodService.update(+id, updateTopographyMethodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.topographyMethodService.remove(+id);
  }
}
