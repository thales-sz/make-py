import type { Request, Response, NextFunction } from 'express'
import { addressSchema, userSchema, userSignIn } from '../Schemas/User.schema'
import type { IUser, IAddress } from '../Domain/Interface/User.interface'

export default class ValidationMiddleware {
  public userSignUp (req: Request, res: Response, next: NextFunction): void {
    const user: IUser = req.body
    const address: IAddress = user.address
    try {
      userSchema.parse(user)
      addressSchema.parse(address)
      next()
    } catch (err) {
      next(err)
    }
  }

  public userSignIn (req: Request, res: Response, next: NextFunction): void {
    const user = req.body
    try {
      userSignIn.parse(user)
      next()
    } catch (err) {
      next(err)
    }
  }
}
