import Image from 'next/image';
import Link from 'next/link';

import logoPic from '@images/logo.png';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.info__logo}>
              <Image src={logoPic} alt='kimgo' />
            </div>
            <address className={styles.info__adress}>
              <h2 className={styles.info__heading}>Контакты</h2>
              <a href='tel:+7 707 602 5959' className={styles.info__text}>
                +7 707 602 5959
              </a>
            </address>
            <address className={styles.info__adress}>
              <h2 className={styles.info__heading}>Адрес</h2>
              <p className={styles.info__text}>
                г. Алматы, улица Макатаева 117
              </p>
            </address>
          </div>
          <div className={styles.section}>
            <p className={styles.section__text}>Каталог</p>
            <Link href='/popular'>
              <p className={styles.section__text}>Популярные</p>
            </Link>
            <Link href='/brands'>
              <p className={styles.section__text}>Бренды</p>
            </Link>
            <Link href='/promo'>
              <p className={styles.section__text}>Акции</p>
            </Link>
            <Link href='/delivery'>
              <p className={styles.section__text}>Доставка и оплата</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
