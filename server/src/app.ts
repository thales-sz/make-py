import express from 'express'
import type { Application, Request, RequestHandler, Response } from 'express'
import cors from 'cors'

import { UserRouter } from './Routers'
import ErrorHandler from './Middleware/error.middleware'

class App {
  public app: Application

  constructor () {
    this.app = express()
    this.config()
    this.app.get('/ping', (_req: Request, res: Response) => res.json({ message: 'pong' }))
    this.app.use('/user', UserRouter)
    this.app.use(new ErrorHandler().handle)
  }

  private config (): void {
    const accessControl: RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH')
      res.header('Access-Control-Allow-Headers', '*')
      next()
    }

    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(accessControl)
  }

  public start (PORT: string | number): void {
    this.app.listen(PORT, () => { console.log(`Running on port ${PORT}`) })
  }
}

export { App }
