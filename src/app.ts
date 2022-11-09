import express from 'express';
import initEnvironment from './config/environment';
import routes from './routes';

async function initApp() {
  await initEnvironment();

  const app = express();
  app.use(routes);

  return app;
}

export default initApp;
