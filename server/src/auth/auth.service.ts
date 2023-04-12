import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { UsersService } from '../users/users.service';
import { UserEntity } from 'src/users/entities/user.entity';

import 'dotenv/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<UserEntity | null> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async signIn(user: UserEntity) {
    const payload = { email: user.email, sub: user.id, role: user.role };

    return this.jwtService.signAsync(payload);
  }
}
