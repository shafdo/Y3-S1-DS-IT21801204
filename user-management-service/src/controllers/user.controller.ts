import response from '@/utils/response';
import { createUserRepo } from '@/repository/user.repository';
import { Request, Response } from 'express';
import { hashText } from '@/utils/bcrypt';

export const createUser = async (req: Request, res: Response) => {
  // Hash password
  req.body.password = hashText(req.body.password);
  const info = await createUserRepo({ ...req.body });

  // Remove password
  if (info.data?.password) {
    delete info.data.password;
  }

  return response({
    res,
    status: info.status,
    message: info.message,
    data: info.data,
  });
};
