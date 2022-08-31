import express from 'express';
import 'express-async-errors';
import CarRouter from './routes/CarRouter';
import MotorRouter from './routes/MotorcycleRouter';
import errorHandler from './errors/errorHandler';

const app = express();
app.use(express.json());
app.use(CarRouter);
app.use(MotorRouter);
app.use(errorHandler);

export default app;
