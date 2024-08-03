import express from 'express';
import {startCronJobs} from './job.js';

const app = express();
const port = 3200;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

startCronJobs();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
