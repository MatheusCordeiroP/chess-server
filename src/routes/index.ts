import express, { Router, Request, Response } from 'express';

// Routes
import game from './game';
import test from './test';
import user from './user';

const app = express();
const router = Router();

router.get('/', (request: Request, response: Response) => {
  response.json({
    message: 'Welcome to our API!',
    timestamp: Date.now(),
  });
});

app.use('/', router);
app.use('/api/game', game);
app.use('/api/test', test);
app.use('/api/user', user);

export default app;
