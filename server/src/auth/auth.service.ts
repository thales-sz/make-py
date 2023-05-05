import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { UsersService } from '../users/users.service';
import { User } from 'src/users/schema/user.schema';

import 'dotenv/config';

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

  async signIn(user: User) {
    const payload = { email: user.email, role: user.role, _id: user._id };

    return this.jwtService.signAsync(payload);
  }
}
