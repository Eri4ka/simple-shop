import LoaderIc from '@icons/loader.svg';

import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.root}>
      <LoaderIc alt='loader' />
    </div>
  );
};
