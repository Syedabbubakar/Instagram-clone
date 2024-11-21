import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRoute from './routes/postRoute.js';
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const _dirname = path.resolve()

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use('/posts', postRoute);

app.use(express.static(path.join(_dirname, '/client/dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(_dirname, 'client', 'dist', 'index.html'))
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
console.log(process.env.MONGO_URI);
// MongoDB connection
mongoose.connect(process.env.MONGO_URI + process.env.MONGO_NAME)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
