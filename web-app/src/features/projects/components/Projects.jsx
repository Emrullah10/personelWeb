import { useTranslation } from 'react-i18next';
import { Container } from '@components/Container';
import { SectionTitle } from '@components/SectionTitle';
import { Reveal } from '@components/Reveal';
import { useProjects } from '../hooks/useProjects';
import styles from './Projects.module.scss';

export const Projects = () => {
  const { t, i18n } = useTranslation();
  const { data: projects = [], isLoading } = useProjects();
  const lang = i18n.language;

  return (
    <section id="projects" className={styles.section}>
      <Container>
        <Reveal>
          <SectionTitle eyebrow="04" title={t('projects.title')} />
        </Reveal>
        {!isLoading && (
          <div className={styles.grid}>
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.1}>
                <article className={styles.card}>
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
                      <a href={project.github_url} target="_blank" rel="noreferrer">
                        {t('projects.code')}
                      </a>
                    )}
                    {project.live_url && (
                      <a href={project.live_url} target="_blank" rel="noreferrer">
                        {t('projects.live')}
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
