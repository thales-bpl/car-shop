import express from 'express';
import 'express-async-errors';
import router from './routes';
import errorHandler from './errors/errorHandler';

const app = express();
app.use(express.json());
app.use(router);
app.use(errorHandler);

export default app;
