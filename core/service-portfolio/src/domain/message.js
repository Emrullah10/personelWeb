import { InvalidMessageError } from './errors/invalid-message.error.js';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateMessageInput = ({ name, email, body }) => {
  if (!name || name.trim().length < 2) {
    throw new InvalidMessageError('Name must be at least 2 characters');
  }
  if (!email || !EMAIL_PATTERN.test(email)) {
    throw new InvalidMessageError('A valid email is required');
  }
  if (!body || body.trim().length < 10) {
    throw new InvalidMessageError('Message must be at least 10 characters');
  }
};
