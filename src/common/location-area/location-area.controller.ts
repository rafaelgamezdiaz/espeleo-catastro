import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocationAreaService } from './location-area.service';
import { CreateLocationAreaDto } from './dto/create-location-area.dto';
import { UpdateLocationAreaDto } from './dto/update-location-area.dto';

@Controller('location')
export class LocationAreaController {
  constructor(private readonly locationService: LocationAreaService) {}

  @Post()
  create(@Body() createLocationDto: CreateLocationAreaDto) {
    return this.locationService.create(createLocationDto);
  }

  @Get()
  findAll() {
    return this.locationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocationDto: UpdateLocationAreaDto) {
    return this.locationService.update(+id, updateLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationService.remove(+id);
  }
}
