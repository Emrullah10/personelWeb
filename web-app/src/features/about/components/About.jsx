import { Trans, useTranslation } from 'react-i18next';
import { Container } from '@components/Container';
import { SectionTitle } from '@components/SectionTitle';
import { Reveal } from '@components/Reveal';
import styles from './About.module.scss';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.section}>
      <Container>
        <Reveal>
          <SectionTitle eyebrow="01" title={t('about.title')} />
        </Reveal>
        <Reveal delay={0.1}>
          <p className={styles.body}>
            <Trans i18nKey="about.body" components={[<strong key="0" />]} />
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className={styles.languages}>{t('about.languages')}</p>
        </Reveal>
      </Container>
    </section>
  );
};
