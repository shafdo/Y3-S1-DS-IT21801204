import { registerUser } from '@/controllers/user.controller';
import express from 'express';

const userRouter = express.Router();

// Route definitions
userRouter.get('/', (req, res) => {
  return res.json({
    status: 200,
    msg: 'user management api running.',
  });
});
// Route definitions end

export default userRouter;
