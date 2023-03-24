import UserModel from '../Models/User.model'
import { type User } from '@prisma/client'
export default class UserService {
  protected model: UserModel

  constructor () {
    this.model = new UserModel()
  };

  public async get (): Promise<User[]> {
    return await this.model.get()
  }

  public async create (user: User): Promise<User> {
    return await this.model.create(user)
  }
}
