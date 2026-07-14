import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { handleErrors } from '@personel/errors';
import { logger } from '@personel/helper';
import { appConfig } from '../configs/app-config.js';
import { buildContainer } from './container.js';
import { buildPortfolioRoutes } from './routes/portfolio.routes.js';

const messageLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10 });

export const boot = ({ container = buildContainer() } = {}) => {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: appConfig.corsOrigin }));
  app.use(express.json());

  app.get('/health', (req, res) => res.json({ status: 'ok' }));
  app.use('/api/messages', messageLimiter);
  app.use('/api', buildPortfolioRoutes(container));

  app.use(handleErrors);

  const server = app.listen(appConfig.port, () => {
    logger.info(`service-portfolio listening on port ${appConfig.port}`);
  });

  return { app, server, container };
};
