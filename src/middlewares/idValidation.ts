import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';

const validateId = (
  req: Request & { params: { id: string } },
  _res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) throw new Error(ErrorTypes.InvalidMongoId);

  next();
};

export default validateId;