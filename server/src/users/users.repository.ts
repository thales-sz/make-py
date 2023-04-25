import { AbstractRepository } from 'src/database/abstract.repository';
import { User } from './schema/user.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository extends AbstractRepository<User> {
  constructor(
    @InjectModel(User.name) userModel: Model<User>,
    @InjectConnection() connection: Connection,
  ) {
    super(userModel, connection);
  }
}
