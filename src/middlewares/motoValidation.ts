import { NextFunction, Request, Response } from 'express';
import { motorcycleSchema } from '../interfaces/IMotorcycle';

const validateMotorcycle = (
  req: Request,
  _res: Response, 
  next: NextFunction,
) => {
  const parsed = motorcycleSchema.safeParse(req.body);
  if (!parsed.success) throw parsed.error;

  next();
};

export default validateMotorcycle;