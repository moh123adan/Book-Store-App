import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes'

dotenv.config();

const app: Application = express();

// Middleware to parse JSON requests
app.use(express.json());


//Routes

// Basic error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});

// app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectDB();
