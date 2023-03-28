import { UserModel } from '../Models'
import { type User } from '@prisma/client'
import bcrypt from 'bcrypt'
import generateJWT from '../Auth/generateJWT'

interface ControllerReturn {
  token: string
  result: User
}

export default class UserService {
  protected model: UserModel

  constructor () {
    this.model = new UserModel()
  };

  public async get (): Promise<User[]> {
    return await this.model.get()
  }

  public async create (user: User): Promise<ControllerReturn> {
    const oldUser = await this.model.getByEmail(user.email)

    if (oldUser != null) throw new Error('UserExists')

    user.password = await bcrypt.hash(user.password, 12)

    const result = await this.model.create(user)

    const token = generateJWT(result)

    return { token, result }
  }

  public async getById (id: string): Promise<User | null> {
    return await this.model.getById(id)
  }

  public async signin ({ email, password }: User): Promise<ControllerReturn> {
    const oldUser = await this.model.getByEmail(email)

    if (oldUser == null) throw new Error('UserNotFound')

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

    if (!isPasswordCorrect) throw new Error('IncorrectCre')

    const token = generateJWT(oldUser)

    return { token, result: oldUser }
  }
}
