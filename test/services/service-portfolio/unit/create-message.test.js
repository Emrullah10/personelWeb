import { describe, it, expect } from 'vitest';
import { makeCreateMessage } from '../../../../core/service-portfolio/src/application/use-cases/create-message.use-case.js';
import { InvalidMessageError } from '../../../../core/service-portfolio/src/domain/errors/invalid-message.error.js';

const makeFakeMessageRepo = () => {
  const created = [];
  return {
    create: async (input) => {
      const record = { id: created.length + 1, ...input, created_at: new Date().toISOString() };
      created.push(record);
      return record;
    },
    created,
  };
};

describe('makeCreateMessage', () => {
  it('creates a message when input is valid', async () => {
    const messageRepo = makeFakeMessageRepo();
    const createMessage = makeCreateMessage({ messageRepo });

    const result = await createMessage({ name: 'Ada Lovelace', email: 'ada@example.com', body: 'Hello, this is a test message.' });

    expect(result.name).toBe('Ada Lovelace');
    expect(messageRepo.created).toHaveLength(1);
  });

  it('rejects a message with an invalid email', async () => {
    const messageRepo = makeFakeMessageRepo();
    const createMessage = makeCreateMessage({ messageRepo });

    await expect(
      createMessage({ name: 'Ada', email: 'not-an-email', body: 'Hello, this is a test message.' })
    ).rejects.toThrow(InvalidMessageError);
  });

  it('rejects a message with a too-short body', async () => {
    const messageRepo = makeFakeMessageRepo();
    const createMessage = makeCreateMessage({ messageRepo });

    await expect(
      createMessage({ name: 'Ada', email: 'ada@example.com', body: 'short' })
    ).rejects.toThrow(InvalidMessageError);
  });
});
