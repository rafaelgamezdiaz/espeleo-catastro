import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  Res,
  Response, UseGuards, UseInterceptors, ClassSerializerInterceptor
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersStatus } from './enums/users-status.enum';
import { UserStatusValidationPipe } from './pipes/user-status-validation.pipe';
import { BaseResponse } from "../../common/base.response";
import { Roles } from "./decorators/roles.decorator";
import { Role } from "./enums/roles.enum";
import { RolesGuard } from "../../auth/guards/roles.guard";
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";

@Controller('/api/users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Create user
   * @param createUserDto
   */
  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  /**
   * List all users
   */
  @Get()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  findAll(): Promise<BaseResponse<User[]>> {
    return this.usersService.findAll();
  }

  /**
   * Get user by ID
   * @param id
   */
  @Get('/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number): Promise<any> { // : Promise<User>
    return  await this.usersService.findUserById(id);
  }

  /**
   * Update user
   * @param id
   * @param updateUserDto
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<any> {
    return this.usersService.update(id, updateUserDto);
  }

  /**
   * Update user status
   * @param id
   * @param status
   */
  @Patch('/:id/status')
  updateUserStatus(
    @Param('id') id: number,
    @Body('status', UserStatusValidationPipe) status: UsersStatus,
  ) {
    return this.usersService.updateUserStatus(id, status);
  }

  /**
   * Remove user (status: DELETED)
   * @param id
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
