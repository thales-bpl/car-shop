import { Router } from 'express';
import CarController from '../controllers/CarController';
import Car from '../models/CarModel';
import CarService from '../services/CarService';

const route = Router();

const car = new Car();
const carService = new CarService(car);
const carController = new CarController(carService);

route
  .get('/cars', carController.read)
  .get('/cars/:id', carController.readOne)
  .post('/cars', carController.create)
  .put('/cars/:id', carController.update)
  .delete('/cars/:id', carController.delete);

export default route;