import { useTranslation } from 'react-i18next';
import { Container } from '@components/Container';
import { SectionTitle } from '@components/SectionTitle';
import { Reveal } from '@components/Reveal';
import { useSkills } from '../hooks/useSkills';
import styles from './Skills.module.scss';

export const Skills = () => {
  const { t } = useTranslation();
  const { data: skills = [], isLoading } = useSkills();

  return (
    <section id="skills" className={styles.section}>
      <Container>
        <Reveal>
          <SectionTitle eyebrow="02" title={t('skills.title')} />
        </Reveal>
        {!isLoading && (
          <div className={styles.grid}>
            {skills.map((group, index) => (
              <Reveal key={group.id} delay={index * 0.1}>
                <div className={styles.card}>
                  <h3 className={styles.category}>{group.category}</h3>
                  <div className={styles.items}>
                    {group.items.map((item) => (
                      <span key={item} className={styles.chip}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
