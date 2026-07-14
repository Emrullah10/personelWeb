export const makeListExperiences = ({ experienceRepo }) => async () => {
  return experienceRepo.findAllOrdered();
};
