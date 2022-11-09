import express, { Router, Request, Response } from 'express';

// Routes
import test from './test';

const app = express();
const router = Router();

router.get('/', (request: Request, response: Response) => {
  response.json({
    message: 'Welcome to our API!',
    timestamp: Date.now(),
  });
});

app.use('/', router);
app.use('/api/v1/test', test);

export default app;
