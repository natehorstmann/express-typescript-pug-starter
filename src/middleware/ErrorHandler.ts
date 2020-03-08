import { NextFunction, Request, Response } from 'express';
import { pErr } from '@shared/functions';

export const ErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  pErr(err.message);

  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};
