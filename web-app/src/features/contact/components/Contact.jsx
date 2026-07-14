import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Container } from '@components/Container';
import { SectionTitle } from '@components/SectionTitle';
import { Reveal } from '@components/Reveal';
import { Button } from '@components/Button';
import { useSendMessage } from '../hooks/useSendMessage';
import styles from './Contact.module.scss';

export const Contact = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { mutate, isPending, isSuccess, isError } = useSendMessage();

  const onSubmit = (values) => {
    mutate(values, { onSuccess: () => reset() });
  };

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
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={styles.field}>
              <label htmlFor="name">{t('contact.name')}</label>
              <input id="name" type="text" {...register('name', { required: true, minLength: 2 })} />
              {errors.name && <span className={styles.error}>{t('contact.validation.name')}</span>}
            </div>
            <div className={styles.field}>
              <label htmlFor="email">{t('contact.email')}</label>
              <input
                id="email"
                type="email"
                {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
              />
              {errors.email && <span className={styles.error}>{t('contact.validation.email')}</span>}
            </div>
            <div className={styles.field}>
              <label htmlFor="body">{t('contact.message')}</label>
              <textarea id="body" rows={5} {...register('body', { required: true, minLength: 10 })} />
              {errors.body && <span className={styles.error}>{t('contact.validation.message')}</span>}
            </div>
            <Button type="submit" variant="primary" disabled={isPending}>
              {isPending ? t('contact.sending') : t('contact.send')}
            </Button>
            {isSuccess && <p className={styles.success}>{t('contact.success')}</p>}
            {isError && <p className={styles.error}>{t('contact.error')}</p>}
          </form>
        </Reveal>
      </Container>
    </section>
  );
};
