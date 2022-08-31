import { Router } from 'express';
import CarsRoutes from './CarRouter';
import MotorcycleRoutes from './MotorcycleRouter';

const routes = Router();

routes.use('/cars', CarsRoutes);
routes.use('/motorcycles', MotorcycleRoutes);

export default routes;