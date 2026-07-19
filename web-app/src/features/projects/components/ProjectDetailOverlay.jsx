import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getProjectImageUrl } from '@api/portfolio.api';
import styles from './ProjectDetailOverlay.module.scss';

export const ProjectDetailOverlay = ({ project, onClose }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const images = project.images ?? [];

  return (
    <motion.div
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        layoutId={`project-${project.id}`}
        className={styles.panel}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className={styles.close} onClick={onClose} aria-label={t('projects.close')}>
          ✕
        </button>

        {images.length > 0 && (
          <div className={styles.gallery}>
            {images.map((image) => (
              <img
                key={image.id}
                className={styles.galleryImage}
                src={getProjectImageUrl(project.id, image.id)}
                alt={image.caption?.[lang] ?? image.caption?.en ?? project.title}
                loading="lazy"
              />
            ))}
          </div>
        )}

        <div className={styles.body}>
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
            {project.mobile_url && (
              <a href={project.mobile_url} target="_blank" rel="noreferrer">
                {t('projects.mobile')}
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
};
