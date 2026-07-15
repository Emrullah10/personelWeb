import { useTranslation } from 'react-i18next';
import { Container } from '@components/Container';
import { ThemeToggle } from '@components/ThemeToggle';
import { LangSwitch } from '@components/LangSwitch';
import styles from './MainLayout.module.scss';

const NAV_SECTIONS = ['about', 'skills', 'experience', 'projects', 'contact'];

export const MainLayout = ({ children }) => {
  const { t } = useTranslation();

  return (
    <>
      <a href="#top" className={styles.skipLink}>
        {t('a11y.skipToContent')}
      </a>
      <header className={styles.header}>
        <Container className={styles.headerInner}>
          <a href="#top" className={styles.logo} aria-label="Emrullah Bozkurt">
            Emrullah Bozkurt
          </a>
          <nav className={styles.nav}>
            {NAV_SECTIONS.map((section) => (
              <a key={section} href={`#${section}`}>
                {t(`nav.${section}`)}
              </a>
            ))}
          </nav>
          <div className={styles.actions}>
            <LangSwitch />
            <ThemeToggle />
          </div>
        </Container>
      </header>
      <main id="top">{children}</main>
      <footer className={styles.footer}>
        <Container className={styles.footerInner}>
          <span>© {new Date().getFullYear()} Emrullah Bozkurt</span>
          <span>{t('footer.rights')}</span>
        </Container>
      </footer>
    </>
  );
};
