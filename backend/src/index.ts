import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { fetchData } from './services/fetchData';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://agryukta:vebLIU5YDcKJqi8N@cluster0.5k1elon.mongodb.net/');

app.use('/api/data', require('./routes/data'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  fetchData(); // Start fetching data on server start
});
