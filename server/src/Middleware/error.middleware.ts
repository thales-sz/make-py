import type { NextFunction, Request, Response } from 'express'

export default class ErrorHandler {
  public handle (error: Error, _req: Request, res: Response, next: NextFunction): void {
    switch (error.message) {
      case 'UserNotFound':
        res.status(404).json({ message: "User doesn't exist!" })
        next()
        break
      case 'IncorrectCredentials':
        res.status(401).json({ message: 'Incorrect credentials!' })
        next()
        break
      case 'UserExists':
        res.status(400).json({ message: 'User already exists!' })
        next()
        break
      default:
        res.status(500).json({ message: error.message })
        next()
        break
    }
    next()
  }
}
