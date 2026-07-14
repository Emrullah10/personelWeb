export const makeMessageRepository = ({ query }) => ({
  create: async ({ name, email, body }) => {
    const { rows } = await query(
      'INSERT INTO messages (name, email, body) VALUES ($1, $2, $3) RETURNING id, name, email, body, created_at',
      [name, email, body]
    );
    return rows[0];
  },
});
