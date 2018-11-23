import express from 'express';
import bodyParser from 'body-parser';
import '@babel/polyfill';

import parcel from './routes/parcel';
import user from './routes/user';
import authUser from './routes/auth';
import Model from './models/parcels';

// Create tables automatically
if(Model.createUsersTable()){
  Model.createParcelsTable();
}

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my Home page')
});

app.use('/api/v1/parcels', parcel);
app.use('/api/v1/users', user);
app.use('/api/v1/', authUser);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});

export default app;