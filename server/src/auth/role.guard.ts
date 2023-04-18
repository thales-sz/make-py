import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_ADMIN_KEY } from 'src/common/metadata';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isAdmin = this.reflector.getAllAndOverride<boolean>(IS_ADMIN_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isAdmin) return true;

    const request = context.switchToHttp().getRequest();

    const user = request.user;

    console.log(request);

    return this.isAdmin(user);
  }

  isAdmin(user: User): boolean {
    if (user.role === 'ADMIN') {
      return true;
    }
    return null;
  }
}
