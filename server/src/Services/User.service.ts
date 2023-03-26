import { UserModel } from '../Models'
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

  public async getById (id: string): Promise<User | null> {
    return await this.model.getById(id)
  }
}
