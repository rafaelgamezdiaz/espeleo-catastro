import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { MembershipService } from './membership.service';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';
import { Roles } from "../../modules/users/decorators/roles.decorator";
import { Role } from "../../modules/users/enums/roles.enum";
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";
import { RolesGuard } from "../../auth/guards/roles.guard";

@Controller('/api/membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Post()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create(@Body() createMembershipDto: CreateMembershipDto) {
    return await this.membershipService.create(createMembershipDto);
  }

  @Get()
  async findAll() {
    return await this.membershipService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.membershipService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async update(@Param('id') id: string, @Body() updateMembershipDto: UpdateMembershipDto) {
    return await this.membershipService.update(+id, updateMembershipDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async remove(@Param('id') id: string) {
    return await this.membershipService.remove(+id);
  }
}
