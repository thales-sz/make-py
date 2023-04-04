import type { Request, Response, NextFunction } from 'express'
import { UserService } from '../Domain/Services'
import type { Address, User } from '@prisma/client'
import type { IUser } from '../Domain/Interface/User.interface'

export default class UserController {
  protected service: UserService

  constructor (private readonly req: Request, private readonly res: Response, private readonly next: NextFunction) {
    this.service = new UserService()
  }

  public async getAll (): Promise<Response | undefined> {
    try {
      const response = await this.service.getAll()

      return this.res.status(200).json(response)
    } catch (error) {
      this.next(error)
    }
  }

  public async signup (): Promise<Response | undefined> {
    const user: IUser = this.req.body
    const address: Address = user.address
    try {
      const { token, result } = await this.service.create(user, address)

      return this.res.status(201).json({ token, result })
    } catch (error) {
      this.next(error)
    }
  }

  public async getById (): Promise<Response | undefined> {
    const { id } = this.req.params

    try {
      const response = await this.service.getById(id)

      if (response == null) return this.res.status(404).json({ message: `User not found to id: ${id}` })

      return this.res.status(200).json(response)
    } catch (error) {
      this.next(error)
    }
  }

  public async signin (): Promise<Response | undefined> {
    const user: User = this.req.body

    try {
      const { token, result } = await this.service.signin(user)

      return this.res.status(200).json({ token, result })
    } catch (error) {
      this.next(error)
    }
  }

  public async delete (): Promise<Response | undefined> {
    const { id } = this.req.params

    try {
      const response = await this.service.delete(id)

      return this.res.status(200).json(response)
    } catch (error) {
      this.next(error)
    }
  }
}
