import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';

import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'email', async: true })
@Injectable()
export class ValidateUniqueEmail implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) {}

  async validate(value: string): Promise<boolean> {
    return this.prisma.user
      .findFirst({ where: { email: value } })
      .then((user) => {
        if (user) {
          throw new UnprocessableEntityException('Email already exists');
        } else {
          return true;
        }
      });
  }
}
