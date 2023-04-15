import Image from 'next/image';
import cl from 'classnames';

import shampoo1 from '@images/aboutus/shampoo1.png';
import shampoo2 from '@images/aboutus/shampoo2.png';
import shampoo3 from '@images/aboutus/shampoo3.png';
import MoneyIc from '@icons/aboutus/badge/money.svg';
import DeliveryIc from '@icons/aboutus/badge/delivery.svg';
import MedalIc from '@icons/aboutus/badge/medal.svg';

import { Badge } from './components/Badge';
import { Subscribe } from './components/Subscribe';
import styles from './AboutUs.module.scss';

export const AboutUs = () => {
  return (
    <article className={styles.root}>
      <div className={styles.heading}>
        <h2 className={styles.heading__text}>Почему мы?</h2>
        <div className={styles.heading__badges}>
          <Badge Icon={MoneyIc} text='Доступные цены' />
          <Badge Icon={DeliveryIc} text='Бесплатная доставка' />
          <Badge Icon={MedalIc} text='Оригинальная продукция' />
        </div>
      </div>
      <div className={styles.info}>
        <h2 className={styles.heading__text}>Миссия</h2>
        <p className={styles.info__text}>
          Миссия Делится своим зарядом и позитивом и предоставлять качественный
          продукт для красоты и уверенности, тем самым делая наших клиентов
          счастливее!
        </p>
        <h2 className={styles.heading__text}>Цель</h2>
        <p className={styles.info__text}>
          Привить культуру правильного и качественного ухода для поддержания
          красоты и молодости. Стать лидером среди аналогичных магазинов за счет
          высокого сервиса и отношения в формате “Счастлив клиент -счастливы
          мы!” Всегда следовать тенденциям моды и расширять ассортимент только
          качественным продуктом Стать идеальным и доступным магазином для
          большинства девушек и женщин!
        </p>
      </div>
      <div className={cl(styles.bg, styles.bg__pic1)}>
        <Image src={shampoo1} alt='shampoo' />
      </div>
      <div className={cl(styles.bg, styles.bg__pic2)}>
        <Image src={shampoo2} alt='shampoo' />
      </div>
      <div className={cl(styles.bg, styles.bg__pic3)}>
        <Image src={shampoo3} alt='shampoo' />
      </div>
      <Subscribe />
    </article>
  );
};
