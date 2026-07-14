import { useTranslation } from 'react-i18next';
import { Container } from '@components/Container';
import { SectionTitle } from '@components/SectionTitle';
import { Reveal } from '@components/Reveal';
import { useExperiences } from '../hooks/useExperiences';
import styles from './Experience.module.scss';

export const Experience = () => {
  const { t, i18n } = useTranslation();
  const { data: experiences = [], isLoading } = useExperiences();
  const lang = i18n.language;

  return (
    <section id="experience" className={styles.section}>
      <Container>
        <Reveal>
          <SectionTitle eyebrow="03" title={t('experience.title')} />
        </Reveal>
        {!isLoading && (
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <Reveal key={exp.id} delay={index * 0.1} className={styles.item}>
                <div className={styles.marker} />
                <div className={styles.content}>
                  <div className={styles.headerRow}>
                    <h3 className={styles.role}>{exp.role?.[lang] ?? exp.role?.en}</h3>
                    <span className={styles.period}>{exp.period}</span>
                  </div>
                  <p className={styles.company}>
                    {exp.company}
                    {exp.location ? ` · ${exp.location}` : ''}
                  </p>
                  <ul className={styles.bullets}>
                    {(exp.bullets?.[lang] ?? exp.bullets?.en ?? []).map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
