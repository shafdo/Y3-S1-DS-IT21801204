import { Request, Response } from 'express';
import { sendEmailUtil } from '@/utils/email';

export const sendEmail = (req: Request, res: Response) => {
  const isEmailSent = sendEmailUtil(req.body);
  if (!isEmailSent) {
    return res.status(500).json({
      status: 500,
      message: 'Failed to send email.',
    });
  }

  return res.status(200).json({
    status: 200,
    message: 'Email sent successfully.',
  });
};
