import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CaveConditionsService } from './cave-conditions.service';
import { CreateCaveConditionDto } from './dto/create-cave-condition.dto';
import { UpdateCaveConditionDto } from './dto/update-cave-condition.dto';

@Controller('cave-conditions')
export class CaveConditionsController {
  constructor(private readonly caveConditionsService: CaveConditionsService) {}

  @Post()
  create(@Body() createCaveConditionDto: CreateCaveConditionDto) {
    return this.caveConditionsService.create(createCaveConditionDto);
  }

  @Get()
  findAll() {
    return this.caveConditionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caveConditionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaveConditionDto: UpdateCaveConditionDto) {
    return this.caveConditionsService.update(+id, updateCaveConditionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caveConditionsService.remove(+id);
  }
}
