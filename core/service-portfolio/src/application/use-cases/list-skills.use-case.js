export const makeListSkills = ({ skillRepo }) => async () => {
  return skillRepo.findAllOrdered();
};
