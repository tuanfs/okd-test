import express from 'express';
import {startCronJobs} from './job.js';

const app = express();
const port = 6822;

app.get('/', (req, res) => {
  console.log(`Call form job ${new Date()}`);
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
