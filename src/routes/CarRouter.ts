import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarService from '../services/CarService';
import CarModel from '../models/CarModel';

const route = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

route
  .get('/', (_req, res) => carController.read(_req, res))
  .get('/:id', (req, res) => carController.readOne(req, res))
  .post('/', (req, res) => carController.create(req, res))
  .put('/:id', (req, res) => carController.update(req, res))
  .delete('/:id', (req, res) => carController.delete(req, res));

export default route;