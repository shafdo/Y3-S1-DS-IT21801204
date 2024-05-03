import nodemailer from 'nodemailer';
import mailgen from 'mailgen';

type SendEmailType = {
  from: string;
  recipient: string;
  subject: string;
  greeting: string;
  emailBody: string;
};

let mailGenerator = new mailgen({
  theme: 'default',
  product: {
    name: 'DS-Assignment-1',
    link: 'https://sliit.lk',
  },
});

export const sendEmailUtil = async (emailPayload: SendEmailType) => {
  console.log(emailPayload);

  const { from, recipient, subject, emailBody } = emailPayload;

  const config = {
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_APP_PWD,
    },
  };

  const transporter = nodemailer.createTransport(config);

  const email = {
    from: from, // Sender address
    to: recipient, // Receiver
    subject: subject, // Subject line
    html: emailBody, // Custom generated HTML
  };

  const info = await transporter.sendMail(email);

  if (info.response.includes('OK')) {
    return 1;
  }

  return 0;
};
