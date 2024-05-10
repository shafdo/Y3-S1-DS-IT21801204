import express from 'express';
import { createUser } from '@/controllers/user.controller';
import { validateData } from '@/middleware/joiValidate';
import { userCreateSchema, userUpdateSchema } from '@/validations/user';

const userRouter = express.Router();

// Route definitions
userRouter.get('/', (req, res) => {
  return res.json({
    status: 200,
    msg: 'user management api running.',
  });
});
userRouter.post('/', validateData(userCreateSchema), createUser);
// Route definitions end

export default userRouter;
