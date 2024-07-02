import express from 'express';
import userRoutes from './routes/userRoutes';
import connectDB from './config/db';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
