export const API_PATHS = {
  projects: '/api/projects',
  experiences: '/api/experiences',
  skills: '/api/skills',
  messages: '/api/messages',
};

export const projectImageUrl = (projectId, imageId) =>
  `${API_PATHS.projects}/${projectId}/images/${imageId}`;
