import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Request,
  Res,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthDto } from './dto/auth.dto';
import { AuthGuard } from "@nestjs/passport";

@Controller('api/auth/')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * User Register
   * @param res
   * @param authDTO
   */
  @Post('register')
  async register(
    @Res() res,
    @Body(ValidationPipe) authDTO: AuthDto,
  ): Promise<void> {
    try {
      await this.authService.register(authDTO, res);
    } catch (e) {
      return res.status(HttpStatus.CONFLICT).send({
        message: 'Ha ocurrido un error inesperado durante el registro.',
        error: e,
      });
    }
  }

  /**
   * User Login
   * @param req
   */
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }
}
