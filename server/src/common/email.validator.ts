import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';

import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

export function IsEmailUnique(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: ValidateUniqueEmail,
    });
  };
}

@ValidatorConstraint({ name: 'email', async: true })
@Injectable()
export class ValidateUniqueEmail implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) {}

  async validate(email: string): Promise<boolean> {
    return this.prisma.user.findUnique({ where: { email } }).then((user) => {
      if (user) {
        throw new UnprocessableEntityException('Email already exists');
      } else {
        return true;
      }
    });
  }
}
