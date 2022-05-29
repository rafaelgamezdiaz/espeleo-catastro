import { IsAlpha, IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {

  @IsNotEmpty()
  @IsAlpha()
  name: string;

  @IsAlpha()
  surname: string;

  @IsAlpha()
  lastname: string;

  @IsAlpha()
  gender: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  phone: string;

  address: string;

  age: number;

  group: string; // speleological group

  @IsNotEmpty()
  @IsAlpha()
  role: string;
}
