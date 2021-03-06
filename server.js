import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from './swagger.json'
import parcel from './server/routes/parcel';
import user from './server/routes/user';
import authUser from './server/routes/auth';
import ParcelModel from './server/models/parcels';
dotenv.config();

// Create tables automatically

ParcelModel.createUsersTable();
ParcelModel.createParcelsTable();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('client'));

app.use('/api/v1/parcels', parcel);
app.use('/api/v1/users', user);
app.use('/api/v1/', authUser);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname});
})
app.get('/api', (req, res) => {
  res.status(200).send('Welcome to my App API')
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});

export default app;