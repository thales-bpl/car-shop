import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';
import MotorcycleService from '../services/MotorcycleService';
import MotorcycleModel from '../models/MotorcycleModel';
import validateMotorcycle from '../middlewares/motoValidation';
import validateId from '../middlewares/idValidation';

const route = Router();

const motorcycle = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

route.get('/', (_req, res) => motorcycleController.read(_req, res));

route.get('/:id', validateId, (req, res) =>
  motorcycleController.readOne(req, res));  

route.post('/', validateMotorcycle, (req, res) =>
  motorcycleController.create(req, res));

route.put('/:id', validateId, validateMotorcycle, (req, res) =>
  motorcycleController.update(req, res));

route.delete('/:id', validateId, (req, res) =>
  motorcycleController.delete(req, res));

export default route;
