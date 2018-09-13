import { DATA_ENDPOINT, Data } from '@nodeproj/schema';
import { Application, Request, Response } from 'express';

export function dataController(app: Application) {
  app.get('/api' + DATA_ENDPOINT, (req: Request, res: Response) => {
    res.json(getData(req));
  });
}

export function getData(req: Request): Data {
  return {
    data: 'express data'
  };
}
