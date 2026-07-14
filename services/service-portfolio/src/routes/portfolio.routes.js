import { Router } from 'express';

export const buildPortfolioRoutes = (container) => {
  const router = Router();

  router.get('/projects', async (req, res, next) => {
    try {
      res.json(await container.listProjects());
    } catch (err) {
      next(err);
    }
  });

  router.get('/experiences', async (req, res, next) => {
    try {
      res.json(await container.listExperiences());
    } catch (err) {
      next(err);
    }
  });

  router.get('/skills', async (req, res, next) => {
    try {
      res.json(await container.listSkills());
    } catch (err) {
      next(err);
    }
  });

  router.post('/messages', async (req, res, next) => {
    try {
      const message = await container.createMessage(req.body);
      res.status(201).json(message);
    } catch (err) {
      next(err);
    }
  });

  return router;
};
