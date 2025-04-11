import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: ['https://clickresume.vercel.app', 'http://localhost:5173'],
  methods: ["POST", "GET", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "token"],
}));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => console.error(err));

export default app;
