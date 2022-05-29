import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaleontologyService } from './paleontology.service';
import { CreatePaleontologyDto } from './dto/create-paleontology.dto';
import { UpdatePaleontologyDto } from './dto/update-paleontology.dto';

@Controller('paleontology')
export class PaleontologyController {
  constructor(private readonly paleontologyService: PaleontologyService) {}

  @Post()
  create(@Body() createPaleontologyDto: CreatePaleontologyDto) {
    return this.paleontologyService.create(createPaleontologyDto);
  }

  @Get()
  findAll() {
    return this.paleontologyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paleontologyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaleontologyDto: UpdatePaleontologyDto) {
    return this.paleontologyService.update(+id, updatePaleontologyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paleontologyService.remove(+id);
  }
}
