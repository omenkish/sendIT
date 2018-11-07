import express from 'express';
import bodyParser from 'body-parser';

import parcel from './src/routes/parcel';
import user from './src/routes/user';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/parcels', parcel);
app.use('/api/v1/users', user);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});

export default app;