import { NotFoundError } from '@personel/errors';

export const makeGetProjectImage = ({ projectImageRepo }) => async ({ projectId, imageId }) => {
  const image = await projectImageRepo.findByProjectAndId({ projectId, imageId });
  if (!image) throw new NotFoundError('Project image not found');
  return image;
};
