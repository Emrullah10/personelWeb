export const makeExperienceRepository = ({ query }) => ({
  findAllOrdered: async () => {
    const { rows } = await query(
      'SELECT id, company, role, location, period, bullets FROM experiences ORDER BY display_order ASC'
    );
    return rows;
  },
});
