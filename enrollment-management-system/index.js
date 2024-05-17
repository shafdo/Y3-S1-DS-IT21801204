import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import enrollmentRoute from './routes/enrollments.js';
import cors from 'cors';

const app = express();
dotenv.config();

app.disable('x-powered-by'); //less hackers know about our stack
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to mongoDB.');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected');
});

mongoose.connection.on('connected', () => {
  console.log('mongoDB connected');
});

//middlwares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: 'http://localhost:4000',
    credentials: true,
  })
);

app.use('/api/enrollments', enrollmentRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!!!';

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8888, () => {
  connect();
  console.log('Enrollment Backend is connected!!!');
});
