import express from 'express';
const app = express();

app.use(express.json());
const port = process.eventNames.PORT || 8000;

app.get('/', (req,res) => {
  res.send('Testing connection')
});

app.listen(port, ()=> {
  console.log('connected on port ', port);
});

export default app;
