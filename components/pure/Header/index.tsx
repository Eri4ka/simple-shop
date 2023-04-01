import Image from 'next/image';

import Logo from '@public/images/logo.png';

import { Search } from './components/Search';
import { UserCart } from './components/UserCart';
import { UserAccount } from './components/UserAccount';
import { Catalog } from './components/Catalog';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.top}>
        <div className={styles.top__wrapper}>
          <div className={styles.top__content}>
            <div className={styles.logo}>
              <Image src={Logo} alt='logo' priority />
            </div>
            <Search />
            <div className={styles.user}>
              <UserAccount />
              <UserCart />
            </div>
            <div className={styles.contacts}>
              <span className={styles.contacts__text}>Есть вопросы?</span>
              <span className={styles.contacts__phone}>+7 700 344 32 55</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottom__wrapper}>
          <Catalog />
        </div>
      </div>
    </header>
  );
};
