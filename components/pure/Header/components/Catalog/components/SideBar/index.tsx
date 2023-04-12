import { FC } from 'react';
import cl from 'classnames';

import { SubNav } from './components/SubNav';
import styles from './SideBar.module.scss';

type Props = {
  isActive: boolean;
  items: string[];
};

export const SideBar: FC<Props> = ({ isActive, items }) => {
  return (
    <div className={cl(styles.bar, isActive && styles.bar_active)}>
      <ul>
        <SubNav items={items}>
          <li className={styles.bar__item}>Каталог</li>
        </SubNav>
        <li className={styles.bar__item}>Популярное</li>
        <li className={styles.bar__item}>Бренды</li>
        <li className={styles.bar__item}>Акции</li>
        <li className={styles.bar__item}>Контакты</li>
        <li className={styles.bar__item}>Доставка и оплата</li>
        <li className={styles.bar__item}>Помощь</li>
        <li className={styles.bar__item}>Публичная оферта</li>
      </ul>
    </div>
  );
};
