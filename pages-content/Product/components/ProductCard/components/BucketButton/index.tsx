import styles from './BucketButton.module.scss';

export const BucketButton = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.counter}>
          <button className={styles.counter__tumbler}>-</button>
          <span className={styles.counter__digit}>1</span>
          <button className={styles.counter__tumbler}>+</button>
        </div>
        <button className={styles.content__button}>В корзину</button>
      </div>
    </div>
  );
};
