import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { UsersService } from '../users/users.service';
import { User } from 'src/users/schema/user.schema';
import { Request } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findOne({ email });
    if (user && compareSync(pass, user.password)) {
      return user;
    }
    return null;
  }

  async signIn(user: User): Promise<string> {
    const payload = { email: user.email, role: user.role, _id: user._id };

    return this.jwtService.signAsync(payload);
  }

  async validateToken(req: Request): Promise<object> {
    const token = this.extractTokenFromHeader(req);
    return this.jwtService.verifyAsync(token);
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
