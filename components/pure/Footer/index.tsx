import Image from 'next/image';

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
            <div className={styles.info__adress}>
              <h2 className={styles.info__heading}>Контакты</h2>
              <p className={styles.info__text}>+7 707 602 5959</p>
            </div>
            <div className={styles.info__adress}>
              <h2 className={styles.info__heading}>Адрес</h2>
              <p className={styles.info__text}>
                г. Алматы, улица Макатаева 117
              </p>
            </div>
          </div>
          <div className={styles.section}>
            <p className={styles.section__text}>Каталог</p>
            <p className={styles.section__text}>Популярные</p>
            <p className={styles.section__text}>Бренды</p>
            <p className={styles.section__text}>Акции</p>
            <p className={styles.section__text}>Доставка и оплата</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
