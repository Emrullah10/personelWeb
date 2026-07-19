export const makeProjectRepository = ({ query }) => ({
  findAllOrdered: async () => {
    const { rows } = await query(
      `SELECT p.id, p.title, p.description, p.tech_stack, p.github_url, p.live_url, p.mobile_url,
         COALESCE(
           (SELECT json_agg(json_build_object('id', pi.id, 'caption', pi.caption) ORDER BY pi.display_order)
            FROM project_images pi WHERE pi.project_id = p.id),
           '[]'
         ) AS images
       FROM projects p ORDER BY p.display_order ASC`
    );
    return rows;
  },
});
