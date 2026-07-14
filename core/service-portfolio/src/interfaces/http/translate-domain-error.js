import { ValidationError } from '@personel/errors';
import { InvalidMessageError } from '../../domain/errors/invalid-message.error.js';

export const wrapWithHttpTranslation = (fn) => async (...args) => {
  try {
    return await fn(...args);
  } catch (err) {
    if (err instanceof InvalidMessageError) {
      throw new ValidationError(err.message);
    }
    throw err;
  }
};
