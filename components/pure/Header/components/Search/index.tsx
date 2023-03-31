import SearchIc from '@icons/header/search/search.svg';

import styles from './Search.module.scss';

export const Search = () => {
  return (
    <div className={styles.root}>
      <form className={styles.form}>
        <input
          className={styles.form__field}
          type='text'
          placeholder='Что вы ищите?'
        />
        <button className={styles.form__button}>
          <SearchIc />
        </button>
      </form>
    </div>
  );
};
