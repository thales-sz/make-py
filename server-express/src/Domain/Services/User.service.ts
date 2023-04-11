import { UserModel } from '../../Database/Models'
import type { User, Address } from '@prisma/client'
import bcrypt from 'bcrypt'
import generateJWT from '../../Auth/generateJWT'
import type { IUserReturn } from '../Interface/User.interface'

export default class UserService {
  protected model: UserModel

  constructor () {
    this.model = new UserModel()
  };

  public async getAll (): Promise<User[]> {
    return await this.model.getAll()
  }

  public async create (user: User, address: Address): Promise<IUserReturn> {
    const oldUser = await this.model.getByEmail(user.email)

    if (oldUser != null) throw new Error('UserExists')

    user.password = await bcrypt.hash(user.password, 12)

    const result = await this.model.create(user, address)

    const token = generateJWT(result)

    return { token, result: result.id }
  }

  public async getById (id: string): Promise<User | null> {
    return await this.model.getById(id)
  }

  public async signin ({ email, password }: User): Promise<IUserReturn> {
    const oldUser = await this.model.getByEmail(email)

    if (oldUser == null) throw new Error('UserNotFound')

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

    if (!isPasswordCorrect) throw new Error('IncorrectCredentials')

    const token = generateJWT(oldUser)

    return { token, result: oldUser.id }
  }

  public async delete (id: string): Promise<User> {
    const oldUser = await this.model.getById(id)

    if (oldUser == null) throw new Error('UserNotFound')

    return await this.model.delete(id)
  }

  public async update (id: string, user: User, address: Address): Promise<User | null> {
    const oldUser = await this.model.getById(id)

    if (oldUser == null) throw new Error('UserNotFound')

    return await this.model.update(id, user, address)
  }
}
