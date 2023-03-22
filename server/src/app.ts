import express, { RequestHandler, Application, Request, Response } from 'express';
import cors from 'cors';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.app.get('/', (req: Request, res: Response) => res.json({ message: 'Hello, World!' }));
  }

  private config():void {
    const accessControl: RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };
