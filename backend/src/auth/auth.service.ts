import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

interface AuthResponse {
    user: {
        id: number;
        email: string;
    };
    token: string;
}

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) { }

    async register(email: string, password: string): Promise<AuthResponse> {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.prisma.users.create({
            data: {
                email,
                password: hashedPassword,
            },
        });
        const token = this.jwtService.sign({ id: user.id });
        return { user: { id: user.id, email: user.email }, token };
    }

    async login(email: string, password: string): Promise<AuthResponse> {
        const user = await this.prisma.users.findUnique({ where: { email } });
        if (!user) {
            throw new HttpException('Utilisateur non trouvé', HttpStatus.NOT_FOUND);
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new HttpException('Mot de passe incorrect', HttpStatus.UNAUTHORIZED);
        }
        const token = this.jwtService.sign({ id: user.id });
        return { user: { id: user.id, email: user.email }, token };
    }

    async validateUser(userId: number) {
        return this.prisma.users.findUnique({ where: { id: userId } });
    }
}
