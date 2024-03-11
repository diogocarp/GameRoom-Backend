
import express from 'express';
import { connectDB } from './config/db';
import userRoutes from './routes/users';
import gameboardRoutes from './routes/gameboards';
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);
app.use('/gameboards', gameboardRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
