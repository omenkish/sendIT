import express from 'express';
import bodyParser from 'body-parser';
import '@babel/polyfill';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import parcel from './routes/parcel';
import user from './routes/user';
import authUser from './routes/auth';
import ParcelModel from './models/parcels';
dotenv.config();

// Create tables automatically

ParcelModel.createUsersTable();
ParcelModel.createParcelsTable();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname+ '../client'));

app.use('/api/v1/parcels', parcel);
app.use('/api/v1/users', user);
app.use('/api/v1/', authUser);

app.get('/', (req, res) => {
  res.status(200).sendFile('../client/index.html')
})
app.get('/api', (req, res) => {
  res.status(200).send('Welcome to my App API')
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});

export default app;