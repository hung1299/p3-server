import express from 'express';
import products from './data/Products.js';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDb.js';
import ImportData from './seed.js';
import productRoute from './Routes/ProductRoutes.js';
import { errorHandler, notFound } from './Middleware/Errors.js';

dotenv.config();
connectDatabase();
const app = express();

// API
app.use('/api/import', ImportData);
app.use('/api/products', productRoute);

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('API is Running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running at port ${PORT}...`));
