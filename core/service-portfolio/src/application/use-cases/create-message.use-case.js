import { validateMessageInput } from '../../domain/message.js';

export const makeCreateMessage = ({ messageRepo }) => async (input) => {
  validateMessageInput(input);
  return messageRepo.create(input);
};
