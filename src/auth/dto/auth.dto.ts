import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class AuthDto {
  @IsString()
  @IsEmail({},{ message: 'Email no válido' })
  @MinLength(8)
  @MaxLength(30)
  email: string;

  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  @MaxLength(30, { message: 'La contraseña no debe tener más de 30 caracteres' })
  password: string;
}