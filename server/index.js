import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import product from './routers/product.js';
import admin from './routers/admin.js';
import imgDemo from './routers/imgDemo.js';

import {connect} from './db/index.js';
// Connect to DB
connect();

const app = express();
const PORT = process.env.PORT || 5000;

const URI = process.env.DATABASE_URL;

app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

app.use('/api/product', product);
app.use('/api/admin', admin);
app.use('/api/imgdemo', imgDemo);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// mongoose
//   .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to DB');
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
// })
// .catch((err) => {
//     console.log('err', err);
// });