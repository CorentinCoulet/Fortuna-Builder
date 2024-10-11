import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

interface AuthResponse {
    user: {
        id: number;
        email: string;
    };
    token: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body('email') email: string, @Body('password') password: string): Promise<AuthResponse> {
    return this.authService.register(email, password);
  }

  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string): Promise<AuthResponse> {
    return this.authService.login(email, password);
  }
}
