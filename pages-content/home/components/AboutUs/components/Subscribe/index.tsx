import styles from './Subscribe.module.scss';

export const Subscribe = () => {
  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <span className={styles.info__text}>
          Будь в курсе всех событий! Подпишись на нас в
        </span>
      </div>

      <button className={styles.button}>
        <a
          href='https://www.instagram.com'
          target='_blank'
          rel='noreferrer'
          className={styles.button__text}
        >
          Подписаться
        </a>
      </button>
    </div>
  );
};
