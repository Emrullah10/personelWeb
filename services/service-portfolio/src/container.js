import pg from 'pg';
import { datasourceConfig } from '../configs/datasource-config.js';
import { makeProjectRepository } from '@personel/core-portfolio/infrastructure/persistence/repositories/project.repository.js';
import { makeExperienceRepository } from '@personel/core-portfolio/infrastructure/persistence/repositories/experience.repository.js';
import { makeSkillRepository } from '@personel/core-portfolio/infrastructure/persistence/repositories/skill.repository.js';
import { makeMessageRepository } from '@personel/core-portfolio/infrastructure/persistence/repositories/message.repository.js';
import { makeListProjects } from '@personel/core-portfolio/application/use-cases/list-projects.use-case.js';
import { makeListExperiences } from '@personel/core-portfolio/application/use-cases/list-experiences.use-case.js';
import { makeListSkills } from '@personel/core-portfolio/application/use-cases/list-skills.use-case.js';
import { makeCreateMessage } from '@personel/core-portfolio/application/use-cases/create-message.use-case.js';
import { wrapWithHttpTranslation } from '@personel/core-portfolio/interfaces/http/translate-domain-error.js';

const { Pool } = pg;

export const buildContainer = ({ pool = new Pool(datasourceConfig) } = {}) => {
  const query = (text, params) => pool.query(text, params);

  const repos = {
    projectRepo: makeProjectRepository({ query }),
    experienceRepo: makeExperienceRepository({ query }),
    skillRepo: makeSkillRepository({ query }),
    messageRepo: makeMessageRepository({ query }),
  };

  return {
    pool,
    listProjects: makeListProjects(repos),
    listExperiences: makeListExperiences(repos),
    listSkills: makeListSkills(repos),
    createMessage: wrapWithHttpTranslation(makeCreateMessage(repos)),
  };
};
