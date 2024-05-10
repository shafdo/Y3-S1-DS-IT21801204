import { Request, Response } from 'express';

export const registerUser = (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: 'Hello User.',
  });
};
