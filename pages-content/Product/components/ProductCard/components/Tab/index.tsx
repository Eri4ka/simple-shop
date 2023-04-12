import { FC, useState } from 'react';
import cl from 'classnames';

import { ProductType } from '@mytypes/index';

import { TabPanel } from './components/TabPanel';
import styles from './Tab.module.scss';

type Props = {
  product: ProductType;
};

export const Tab: FC<Props> = ({ product }) => {
  // Vars
  const { description, category, rating } = product;
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      id: 1,
      title: 'Описание',
      content: <span className={styles.content__text}>{description}</span>,
    },
    {
      id: 2,
      title: 'Характеристики',
      content: (
        <div className={styles.content}>
          <p className={styles.content__char}>
            Категория:<span className={styles.content__value}>{category}</span>
          </p>
          <p className={styles.content__char}>
            Рейтинг:<span className={styles.content__value}>{rating}</span>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.root}>
      <ul className={styles.bar}>
        {tabs.map(({ id, title }) => (
          <li
            key={id}
            className={cl(
              styles.bar__item,
              activeTab === id && styles.bar__item_active
            )}
            onClick={() => setActiveTab(id)}
          >
            {title}
          </li>
        ))}
      </ul>
      {tabs.map(({ id, content }) => (
        <TabPanel key={id} id={id} activeTab={activeTab}>
          {content}
        </TabPanel>
      ))}
    </div>
  );
};
