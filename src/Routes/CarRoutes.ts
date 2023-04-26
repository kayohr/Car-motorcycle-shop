import { NextFunction, Request, Response, Router } from 'express';
import CarController from '../Controllers/CarController.ts';

const routes = Router();

routes.post(
  '/',
  (req: Request, res:Response, next: NextFunction) => new CarController(req, res, next).create(),
);

routes.get(
  '/',
  (req: Request, res:Response, next: NextFunction) => new CarController(req, res, next).getAll(),
);

routes.get(
  '/:id',
  (req: Request, res:Response, next: NextFunction) => new CarController(req, res, next).getCarId(),
);
routes.put(
  '/:id',
  (req: Request, res:Response, next: NextFunction) => new CarController(req, res, next).getUpdate(),
);

export default routes;