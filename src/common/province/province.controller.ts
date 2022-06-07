import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor
} from "@nestjs/common";
import { ProvinceService } from './province.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { CurrentUserInterface } from '../../modules/users/interfaces/current-user.interface';
import { CurrentUser } from '../../modules/users/decorators/current-user.decorator';
import { Roles } from '../../modules/users/decorators/roles.decorator';
import { Role } from '../../modules/users/enums/roles.enum';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';

@Controller('/api/province')
@UseInterceptors(ClassSerializerInterceptor)
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  @Post('/create')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create(
    @Body() createProvinceDto: CreateProvinceDto,
    @CurrentUser() currentUser: CurrentUserInterface,
  ) {
    console.log('currentUser', currentUser);
    return await this.provinceService.create(createProvinceDto, currentUser);
  }

  @Get('all')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async findAll() {
    return await this.provinceService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async findOne(@Param('id') id: string) {
    return await this.provinceService.findById(+id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async update(
    @Param('id') id: string,
    @Body() updateProvinceDto: UpdateProvinceDto,
    @CurrentUser() currentUser: CurrentUserInterface,
  ) {
    return await this.provinceService.update(updateProvinceDto, currentUser);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async remove(@Param('id') id: string, @CurrentUser() currentUser: CurrentUserInterface) {
    return await this.provinceService.remove(+id, currentUser);
  }
}
