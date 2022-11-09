import express, { Router, Request, Response } from 'express';

const router = express.Router();

router.get('/', (request: Request, response: Response) =>
  response.json({ ok: true })
);

export default router;
