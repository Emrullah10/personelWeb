export const makeSkillRepository = ({ query }) => ({
  findAllOrdered: async () => {
    const { rows } = await query(
      'SELECT id, category, items FROM skills ORDER BY display_order ASC'
    );
    return rows;
  },
});
