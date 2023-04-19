import Image from 'next/image';
import Link from 'next/link';

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
              <Link href='/'>
                <Image src={Logo} alt='logo' priority />
              </Link>
            </div>
            <Search />
            <div className={styles.user}>
              <UserAccount />
              <UserCart />
            </div>
            <address className={styles.contacts}>
              <span className={styles.contacts__text}>Есть вопросы?</span>
              <a href='tel:+7 707 602 5959' className={styles.contacts__phone}>
                +7 700 344 32 55
              </a>
            </address>
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
