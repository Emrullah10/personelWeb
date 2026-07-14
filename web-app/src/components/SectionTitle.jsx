import styles from './SectionTitle.module.scss';

export const SectionTitle = ({ eyebrow, title }) => (
  <div className={styles.wrapper}>
    {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
    <h2 className={styles.title}>{title}</h2>
  </div>
);
