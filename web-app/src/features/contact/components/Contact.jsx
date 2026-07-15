import { useTranslation } from 'react-i18next';
import { Container } from '@components/Container';
import { SectionTitle } from '@components/SectionTitle';
import { Reveal } from '@components/Reveal';
import styles from './Contact.module.scss';

const EMAIL = 'emrullahbozkurt06@gmail.com';

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/dev-emrullah-bozkurt' },
  { label: 'GitHub', href: 'https://github.com/Emrullah10' },
  { label: 'CV', href: '/Emrullah_Bozkurt_CV.pdf', download: true },
];

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className={styles.section}>
      <Container>
        <Reveal>
          <SectionTitle eyebrow="05" title={t('contact.title')} />
        </Reveal>
        <Reveal delay={0.1}>
          <p className={styles.subtitle}>{t('contact.subtitle')}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <a href={`mailto:${EMAIL}`} className={styles.emailLink}>
            {EMAIL}
          </a>
        </Reveal>
        <Reveal delay={0.3}>
          <div className={styles.status}>
            <span className={styles.statusDot} />
            {t('contact.status')}
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className={styles.socials}>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.download ? undefined : '_blank'}
                rel={link.download ? undefined : 'noreferrer'}
                download={link.download}
                className={styles.socialLink}
              >
                {link.label}
                <span className={styles.arrow}>→</span>
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
