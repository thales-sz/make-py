import type { Request, Response, NextFunction } from 'express'
import UserService from '../Services/User.service'

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
}
