// import ErrorFactory from './errorFactory';

// const errorHandler = (
//   err: ErrorFactory,
//   _req: Request,
//   res: Response,
//   _next: NextFunction,
// ) => {
//   console.error(err.stack);

//   if (err.status) return res.status(err.status).json({ message: err.message });
//   return res.status(500).json({ message: 'Internal Server Error' });
// };

// export default errorHandler;
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { ErrorTypes, errorCatalog } from './catalog';

const errorHandler: ErrorRequestHandler = (
  err: Error | ZodError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues });
  }

  const messageAsErrorType = err.message as keyof typeof ErrorTypes;
  const mappedError = errorCatalog[messageAsErrorType];

  if (mappedError) {
    const { httpStatus, message } = mappedError;
    return res.status(httpStatus).json({ message });
  }

  return res.status(500).json({ message: err.message });
};

export default errorHandler;
