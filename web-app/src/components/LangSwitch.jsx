import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import styles from './LangSwitch.module.scss';

const LANGUAGES = ['en', 'tr'];

export const LangSwitch = () => {
  const { i18n } = useTranslation();

  return (
    <div className={styles.switch} role="group" aria-label="Language">
      {LANGUAGES.map((lng) => (
        <button
          key={lng}
          type="button"
          className={classNames(styles.option, { [styles.active]: i18n.language === lng })}
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
