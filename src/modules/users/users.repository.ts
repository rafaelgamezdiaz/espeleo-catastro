import { EntityRepository, Not, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersStatus } from './enums/users-status.enum';
import {
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthDto } from '../../auth/dto/auth.dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  /**
   * Find all
   */
  async findAll(): Promise<User[]> {
    return await this.find({ where: { status: Not(UsersStatus.DELETED) } });
  }

  /**
   * Register User
   *  - user register from the App or WebPage (this endpoint could be not available)
   * @param authDto
   */
  async registerUser(authDto: AuthDto): Promise<User> {
    const user = this.create(authDto);
    return await user.save();
  }

  /**
   * Create user
   *  - creates user from the Admin-Panel
   * @param createUserDto
   */
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.create(createUserDto);
    return await user.save();
  }

  /**
   * Find user by ID
   * @param id
   */
  async findUserById(id: number): Promise<User> {
    const user = await this.findOne(id);
    if (!user || user.status === UsersStatus.DELETED) {
      throw new NotFoundException(`No existe un usuario con ID = ${id}`);
    }
    return user;
  }

  /**
   * Update user
   * @param id
   * @param updateUserDto
   */
  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`No existe un usuario con ID = ${id}`);
    }
    const userUpdated = await this.update(id, updateUserDto);
    if (!userUpdated) {
      throw new ConflictException(
        `Ha ocurrido un error al intentar actualizar los datos del usuario.`,
      );
    }
    return {
      message: `Se han actualizado los datos del usuario: ${user.name} ${user.surname}`,
    };
  }

  /**
   * Update user status
   * @param id
   * @param status
   */
  async updateUserStatus(id: number, status: UsersStatus): Promise<User> {
    const user = await this.findUserById(id);
    user.status = status;
    return await user.save();
  }

  /**
   * Remove user
   * @param id
   */
  async removeUser(id: number) {
    const user = await this.findUserById(id);
    user.status = UsersStatus.DELETED;
    if (await user.save()) {
      return {
        message: `Se ha eliminado el usuario exitosamente`,
      };
    } else {
      return {
        message: `Error al intentar eliminar el usuario`,
      };
    }
  }
}
