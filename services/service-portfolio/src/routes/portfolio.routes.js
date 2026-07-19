import { Router } from 'express';
import { NotFoundError } from '@personel/errors';

export const buildPortfolioRoutes = (container) => {
  const router = Router();

  router.get('/projects', async (req, res, next) => {
    try {
      res.json(await container.listProjects());
    } catch (err) {
      next(err);
    }
  });

  router.get('/projects/:projectId/images/:imageId', async (req, res, next) => {
    try {
      const projectId = Number(req.params.projectId);
      const imageId = Number(req.params.imageId);
      if (!Number.isInteger(projectId) || !Number.isInteger(imageId)) {
        throw new NotFoundError('Project image not found');
      }
      const { image, mime_type: mimeType } = await container.getProjectImage({ projectId, imageId });
      res.set({
        'Content-Type': mimeType,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Length': image.length,
      });
      res.send(image);
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
