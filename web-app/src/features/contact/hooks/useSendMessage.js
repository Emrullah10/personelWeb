import { useMutation } from '@tanstack/react-query';
import { postMessage } from '@api/portfolio.api';

export const useSendMessage = () =>
  useMutation({
    mutationFn: postMessage,
  });
