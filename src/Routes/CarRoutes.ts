import { Router, NextFunction, Request, Response } from 'express';
import CarController from '../Controllers/CarController.ts';

const routes = Router();

routes.post(
  '/',
  (req: Request, res:Response, next: NextFunction) => new CarController(req, res, next).create(),
);

export default routes;