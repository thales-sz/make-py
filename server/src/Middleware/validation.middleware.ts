import type { Request, Response, NextFunction } from 'express'
import { userSchema, userSignIn } from '../Schemas/User.schema'

export default class ValidationMiddleware {
  public userSignUp (req: Request, res: Response, next: NextFunction): void {
    const user = req.body
    try {
      userSchema.parse(user)
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
