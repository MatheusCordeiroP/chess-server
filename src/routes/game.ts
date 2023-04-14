import { Router, Request, Response } from 'express';
import { models } from '../models';
const router = Router();

router.get('/room/find-all', async (request: Request, response: Response) => {
  await models().UserAccount.findOne();
  return response.json({ user: 'USER API', ok: true });
});

router.get(`/room/find/:id`, async (request: Request, response: Response) => {
  await models().UserAccount.findOne();
  return response.json({ user: 'USER API', ok: true });
});

router.post('/room/create', async (request: Request, response: Response) => {
  await models().UserAccount.findOne();
  return response.json({ user: 'USER API', ok: true });
});

router.post('/room/update', async (request: Request, response: Response) => {
  await models().UserAccount.findOne();
  return response.json({ user: 'USER API', ok: true });
});

router.post('/room/delete', async (request: Request, response: Response) => {
  await models().UserAccount.findOne();
  return response.json({ user: 'USER API', ok: true });
});

router.get('/notation/get', async (request: Request, response: Response) => {
  await models().UserAccount.findOne();
  return response.json({ user: 'USER API', ok: true });
});

router.post('/move-piece', async (request: Request, response: Response) => {
  await models().UserAccount.findOne();
  return response.json({ user: 'USER API', ok: true });
});

export default router;
