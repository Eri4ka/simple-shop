import Link from 'next/link';
import styles from './styles.module.scss';

export const NotFoundPageContent = () => {
  return (
    <section className={styles.notFound}>
      <div className={styles.notFound__wrapper}>
        <h1 className={styles.notFound__heading}>404</h1>
        <h2 className={styles.notFound__text}>Страница не найдена</h2>
        <Link href='/'>
          <span className={styles.notFound__home}>Вернуться на главную</span>{' '}
        </Link>
      </div>
    </section>
  );
};
