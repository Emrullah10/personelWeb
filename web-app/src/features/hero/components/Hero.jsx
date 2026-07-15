import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Container } from '@components/Container';
import { Button } from '@components/Button';
import styles from './Hero.module.scss';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <motion.p
          className={styles.greeting}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('hero.greeting')}
        </motion.p>
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('hero.name')}
        </motion.h1>
        <motion.h2
          className={styles.role}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('hero.role')}
        </motion.h2>
        <motion.div
          className={styles.meta}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <span>{t('hero.location')}</span>
          <span className={styles.metaDivider} />
          <span className={styles.availability}>
            <span className={styles.availabilityDot} />
            {t('hero.availability')}
          </span>
        </motion.div>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t('hero.tagline')}
        </motion.p>
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button as="a" href="#contact" variant="primary">
            {t('hero.cta')}
          </Button>
          <Button as="a" href="#projects" variant="secondary">
            {t('hero.secondaryCta')}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};
