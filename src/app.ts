import express from 'express';
import 'express-async-errors';
import CarRouter from './routes/CarRouter';
import errorHandler from './errors/errorHandler';

const app = express();
app.use(express.json());
app.use(CarRouter);
app.use(errorHandler);

export default app;
