import { Router, Request, Response } from 'express';
import { models } from '../models';
const router = Router();

router.post('/create', async (request: Request, response: Response) => {
  await models().UserAccount.findOne();
  return response.json({ user: 'USER API', ok: true });
});

router.get('/find', async (request: Request, response: Response) => {
  await models().UserAccount.findOne();
  return response.json({ user: 'USER API', ok: true });
});

router.post('/update', async (request: Request, response: Response) => {
  await models().UserAccount.findOne();
  return response.json({ user: 'USER API', ok: true });
});

router.post('/delete', async (request: Request, response: Response) => {
  await models().UserAccount.findOne();
  return response.json({ user: 'USER API', ok: true });
});

router.post('/score/update', async (request: Request, response: Response) => {
  await models().UserAccount.findOne();
  return response.json({ user: 'USER API', ok: true });
});

export default router;
