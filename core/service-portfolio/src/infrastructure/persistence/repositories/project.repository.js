export const makeProjectRepository = ({ query }) => ({
  findAllOrdered: async () => {
    const { rows } = await query(
      'SELECT id, title, description, tech_stack, github_url, live_url, image_url FROM projects ORDER BY display_order ASC'
    );
    return rows;
  },
});
