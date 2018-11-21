import express from 'express';
import bodyParser from 'body-parser';
import '@babel/polyfill';

import user from './routes/user';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my Home page')
});


app.use('/api/v1/users', user);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});

export default app;