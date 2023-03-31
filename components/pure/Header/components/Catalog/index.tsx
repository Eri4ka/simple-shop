import { useState } from 'react';
import cl from 'classnames';

import styles from './Catalog.module.scss';

export const Catalog = () => {
  // Vars
  const [openSideBar, setOpenSideBar] = useState(false);

  // Handlers
  const toggleSiderBarHandler = () => {
    setOpenSideBar((value) => !value);
  };

  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <li className={styles.item}>Каталог</li>
        <li className={styles.item}>Популярное</li>
        <li className={styles.item}>Бренды</li>
        <li className={styles.item}>Акции</li>
        <li className={styles.item}>Контакты</li>
        <li className={styles.item}>Доставка и оплата</li>
        <li className={styles.item}>Помощь</li>
        <li className={styles.item}>Публичная оферта</li>
      </ul>
      <div
        className={cl(styles.toggle, openSideBar && styles.toggle_active)}
        onClick={toggleSiderBarHandler}
      >
        <div className={styles.toggle__elem}></div>
        <div className={styles.toggle__elem}></div>
      </div>
    </nav>
  );
};
