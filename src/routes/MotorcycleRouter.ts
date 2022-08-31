import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';
import MotorcycleService from '../services/MotorcycleService';
import MotorcycleModel from '../models/MotorcycleModel';

const route = Router();

const motorcycle = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

route
  .get('/', (_req, res) => motorcycleController.read(_req, res))
  .get(':id', (req, res) => motorcycleController.readOne(req, res))
  .post('/motor', (req, res) => motorcycleController.create(req, res))
  .put('/motor/:id', (req, res) => motorcycleController.update(req, res))
  .delete('/motor/:id', (req, res) => motorcycleController.delete(req, res));

export default route;