export const makeListProjects = ({ projectRepo }) => async () => {
  return projectRepo.findAllOrdered();
};
