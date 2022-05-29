import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsAlpha } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {

  @IsAlpha()
  name: string;

  @IsAlpha()
  surname: string;

  @IsAlpha()
  lastname: string;

  @IsAlpha()
  gender: string;

  phone: string;

  address: string;

  age: number;

  group: string;

}
