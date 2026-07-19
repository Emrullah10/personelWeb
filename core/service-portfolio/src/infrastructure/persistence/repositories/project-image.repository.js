export const makeProjectImageRepository = ({ query }) => ({
  findByProjectAndId: async ({ projectId, imageId }) => {
    const { rows } = await query(
      'SELECT image, mime_type FROM project_images WHERE id = $1 AND project_id = $2',
      [imageId, projectId]
    );
    return rows[0] ?? null;
  },
});
