import { useQuery } from '@tanstack/react-query';
import { fetchProjects } from '@api/portfolio.api';

export const useProjects = () =>
  useQuery({
    queryKey: ['projects', 'list'],
    queryFn: fetchProjects,
  });
