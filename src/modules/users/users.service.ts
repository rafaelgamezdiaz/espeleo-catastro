import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersStatus } from './enums/users-status.enum';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseResponse, successResponse } from '../../common/base.response';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  /**
   * Creates new user
   * @param createUserDto
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.createUser(createUserDto);
  }

  /**
   * List all users
   */
  async findAll(): Promise<BaseResponse<User[]>> {
    //Promise<User[]>
    try {
      const users = await this.usersRepository.findAll();
     // return users;
      return successResponse(
        users,
        HttpStatus.OK,
        `Lista de usuarios`,
      );
    } catch (error) {}
  }

  /**
   * Get user by field
   * @param email
   */
  async findUserByEmail(email: string): Promise<any> {
    try {
      return await this.usersRepository.find({ email });
    } catch (error) {
      return error;
    }
  }

  /**
   * Get user by id
   * @param id
   */
  async findUserById(id: number): Promise<any> {
    try {
      const user = await this.usersRepository.findUserById(id);
      // return {
      //   ...user,
      //   statusCode: HttpStatus.OK,
      //   message: `Datos del usuario: ${user.name} ${user.surname}`,
      // };
      successResponse(
        user,
        HttpStatus.OK,
        `Datos del usuario: ${user.name} ${user.surname}`,
      );
    } catch (error) {
      return error;
    }
  }

  /**
   * Updates user status (ACTIVE/INACTIVE)
   * @param id
   * @param status
   */
  async updateUserStatus(id: number, status: UsersStatus): Promise<User> {
    return this.usersRepository.updateUserStatus(id, status);
  }

  /**
   * Update user
   * @param id
   * @param updateUserDto
   */
  async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    return await this.usersRepository.updateUser(id, updateUserDto);
  }

  /**
   * Remove user (status: DELETED)
   * @param id
   */
  async remove(id: number) {
    return await this.usersRepository.removeUser(id);
  }
}
