import { HttpStatus, Injectable } from "@nestjs/common";
import { UsersService } from '../modules/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthDto } from "./dto/auth.dto";
import { UsersRepository } from "../modules/users/users.repository";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private userRepository: UsersRepository
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(email);
    if (!user) {
      return null;
    }
    const isValidPassword = await bcrypt.compare(pass, user[0].password);
    return isValidPassword ? user : null;
  }

  /**
   * User Login service
   * @param user
   */
  async login(user: any) {
    const payload = { email: user.email, sub: user.userId, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  /**
   * User Register service
   * @param authDTO
   * @param res
   */
  async register(authDTO: AuthDto, res): Promise<Response> {
    try {
      authDTO.password = await bcrypt.hash(authDTO.password, 10);

      const user = await this.userRepository.registerUser(authDTO);
      // user.verification_code = uuidv4();
      // user.role = "USER";
      //
      // // Se registra el usuario
      // await user.save();

      return res
        .status(HttpStatus.OK)
        .send({ message: 'Usuario registrado exitosamente.', data: user });

      // Se envía el correo para la verificación de la cuenta
      // (Mover este codigo a la parte del Alta de Worker)
      // await this.sendMail( authCredentialsDTO.email, verification_code);
    } catch (error) {
      return res
        .status(HttpStatus.CONFLICT)
        .send({ message: 'Ya existe un usuario con ese email.', error: error });
    }
  }
}
