import { NextFunction, Request, Response } from 'express';
import InvalidError from './ParamError';

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    // if (error.statusCode) {
    //   return res.status(error.statusCode).json({ message: error.message });
    // }
    const { message, statusCode } = error as InvalidError;

    res.status(statusCode || 500).json({ message });
    next();
  }
}

export default ErrorHandler;