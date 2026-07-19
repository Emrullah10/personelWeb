import { httpClient } from './httpClient';
import { API_PATHS, projectImageUrl } from '@shared/constant/api-paths';

export const getProjectImageUrl = (projectId, imageId) =>
  `${httpClient.defaults.baseURL}${projectImageUrl(projectId, imageId)}`;

export const fetchProjects = async () => {
  const { data } = await httpClient.get(API_PATHS.projects);
  return data;
};

export const fetchExperiences = async () => {
  const { data } = await httpClient.get(API_PATHS.experiences);
  return data;
};

export const fetchSkills = async () => {
  const { data } = await httpClient.get(API_PATHS.skills);
  return data;
};

export const postMessage = async (payload) => {
  const { data } = await httpClient.post(API_PATHS.messages, payload);
  return data;
};
