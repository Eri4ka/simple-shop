import { FC } from 'react';

import { TBrandsByAlphabet } from '@mytypes/brands';

import styles from './Catalog.module.scss';

type Props = {
  data: TBrandsByAlphabet['char'][];
};

export const Catalog: FC<Props> = ({ data }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>Каталог брендов</h2>
      <ul className={styles.list}>
        {data.map((char) => (
          <li className={styles.list__item} key={char}>
            {char}
          </li>
        ))}
      </ul>
    </div>
  );
};
