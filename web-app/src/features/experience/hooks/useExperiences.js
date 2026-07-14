import { useQuery } from '@tanstack/react-query';
import { fetchExperiences } from '@api/portfolio.api';

export const useExperiences = () =>
  useQuery({
    queryKey: ['experiences', 'list'],
    queryFn: fetchExperiences,
  });
