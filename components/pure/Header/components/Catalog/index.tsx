import { useState } from 'react';
import useSWR from 'swr';
import cl from 'classnames';

import { UrlService } from '@shared/services/UrlService';

import { DropDown } from './components/DropDown';
import { SideBar } from './components/SideBar';
import styles from './Catalog.module.scss';

export const Catalog = () => {
  // Vars
  const [openSideBar, setOpenSideBar] = useState(false);
  const { data } = useSWR(UrlService.getCategories());

  // Handlers
  const toggleSiderBarHandler = () => {
    setOpenSideBar((value) => !value);
  };

  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <DropDown items={data}>
          <li className={styles.item}>Каталог</li>
        </DropDown>
        <li className={styles.item}>Популярное</li>
        <li className={styles.item}>Бренды</li>
        <li className={styles.item}>Акции</li>
        <li className={styles.item}>Контакты</li>
        <li className={styles.item}>Доставка и оплата</li>
        <li className={styles.item}>Помощь</li>
        <li className={styles.item}>Публичная оферта</li>
      </ul>
      <div
        className={cl(styles.toggle, { [styles.toggle_active]: openSideBar })}
        onClick={toggleSiderBarHandler}
      >
        <div className={styles.toggle__elem}></div>
        <div className={styles.toggle__elem}></div>
      </div>
      <SideBar isActive={openSideBar} items={data} />
    </nav>
  );
};
