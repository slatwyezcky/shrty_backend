import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import linkRouter from './routes/link.routes.js';

dotenv.config();

const PORT = process.env.PORT || 4999;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', linkRouter);

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () => console.log('Server is online on port: ' + PORT));
  } catch (error) {
    console.error(error.message);
  }
}

start();
