import express from 'express';
import routes from './Routes/CarRoutes';
import ErrorHandler from './Middlewares/ErrorHandler';
import routesMoto from './Routes/MotorcycleRoutes';

const app = express();
app.use(express.json());
app.use('/cars', routes);
app.use('/Motorcycles', routesMoto);
app.use(ErrorHandler.handle);

export default app;
