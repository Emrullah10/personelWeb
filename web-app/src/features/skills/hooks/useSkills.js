import { useQuery } from '@tanstack/react-query';
import { fetchSkills } from '@api/portfolio.api';

export const useSkills = () =>
  useQuery({
    queryKey: ['skills', 'list'],
    queryFn: fetchSkills,
  });
