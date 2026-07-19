import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { Container } from '@components/Container';
import { SectionTitle } from '@components/SectionTitle';
import { Reveal } from '@components/Reveal';
import { useProjects } from '../hooks/useProjects';
import { ProjectDetailOverlay } from './ProjectDetailOverlay';
import styles from './Projects.module.scss';

export const Projects = () => {
  const { t, i18n } = useTranslation();
  const { data: projects = [], isLoading } = useProjects();
  const [activeProject, setActiveProject] = useState(null);
  const lang = i18n.language;

  const openProject = (project) => setActiveProject(project);
  const closeProject = () => setActiveProject(null);

  const handleKeyDown = (event, project) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProject(project);
    }
  };

  return (
    <section id="projects" className={styles.section}>
      <Container>
        <Reveal>
          <SectionTitle eyebrow="04" title={t('projects.title')} />
        </Reveal>
        {!isLoading && (
          <LayoutGroup>
            <div className={styles.grid}>
              {projects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.1}>
                  <motion.article
                    layoutId={`project-${project.id}`}
                    className={styles.card}
                    onClick={() => openProject(project)}
                    onKeyDown={(event) => handleKeyDown(event, project)}
                    role="button"
                    tabIndex={0}
                  >
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.description}>
                      {project.description?.[lang] ?? project.description?.en}
                    </p>
                    <div className={styles.tech}>
                      {(project.tech_stack ?? []).map((tech) => (
                        <span key={tech} className={styles.chip}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className={styles.links}>
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          {t('projects.code')}
                        </a>
                      )}
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          {t('projects.live')}
                        </a>
                      )}
                      {project.mobile_url && (
                        <a
                          href={project.mobile_url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          {t('projects.mobile')}
                        </a>
                      )}
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
            <AnimatePresence>
              {activeProject && (
                <ProjectDetailOverlay project={activeProject} onClose={closeProject} />
              )}
            </AnimatePresence>
          </LayoutGroup>
        )}
      </Container>
    </section>
  );
};
