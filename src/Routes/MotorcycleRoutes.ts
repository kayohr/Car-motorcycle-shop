import { NextFunction, Request, Response, Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcycleController';

const routesMoto = Router();

routesMoto.post(
  '/',
  (req: Request, res:Response, next: NextFunction) => 
    new MotorcyclesController(req, res, next).create(),
);

routesMoto.get(
  '/',
  (req: Request, res:Response, next: NextFunction) => 
    new MotorcyclesController(req, res, next).getAll(),
);

routesMoto.get(
  '/:id',
  (req: Request, res:Response, next: NextFunction) => 
    new MotorcyclesController(req, res, next).getMotoId(),
);
routesMoto.put(
  '/:id',
  (req: Request, res:Response, next: NextFunction) => 
    new MotorcyclesController(req, res, next).getUpdate(),
);

export default routesMoto;