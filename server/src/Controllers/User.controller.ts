import type { User } from '@prisma/client'
import type { Request, Response, NextFunction } from 'express'
import { UserService } from '../Domain/Services'

export default class UserController {
  protected service: UserService

  constructor (private readonly req: Request, private readonly res: Response, private readonly next: NextFunction) {
    this.service = new UserService()
  }

  public async get (): Promise<Response | undefined> {
    try {
      const response = await this.service.get()

      return this.res.status(200).json(response)
    } catch (error) {
      this.next(error)
    }
  }

  public async signup (): Promise<Response | undefined> {
    const newUser: User = this.req.body
    try {
      const response = await this.service.create(newUser)

      return this.res.status(200).json(response)
    } catch (error) {
      this.next(error)
    }
  }

  public async getById (): Promise<Response | undefined> {
    const { id } = this.req.params

    try {
      const response = await this.service.getById(id)

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
}
