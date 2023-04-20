import Link from 'next/link';
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
        <li className={styles.item}>
          <Link href='/brands' className={styles.item__link}>
            Бренды
          </Link>
        </li>
        <li className={styles.item}>Акции</li>
        <li className={styles.item}>
          <Link href='/contacts' className={styles.item__link}>
            Контакты
          </Link>
        </li>
        <li className={styles.item}>Доставка и оплата</li>
        <li className={styles.item}>Помощь</li>
        <li className={styles.item}>
          <Link href='/offer' className={styles.item__link}>
            Публичная оферта
          </Link>
        </li>
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
