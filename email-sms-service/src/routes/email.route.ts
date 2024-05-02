import { sendEmail } from '@/controllers/email.controller';
import express from 'express';

const emailRouter = express.Router();

// Route definitions
emailRouter.get('/', (req, res) => {
  return res.json({
    status: 200,
    msg: 'Email api running.',
  });
});

emailRouter.post('/send', sendEmail);
// Route definitions end

export default emailRouter;
