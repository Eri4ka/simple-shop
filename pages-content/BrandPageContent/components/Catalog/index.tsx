import { FC } from 'react';

import { TBrandsByAlphabet } from '@mytypes/brands';

import { Char } from './components/Char';
import styles from './Catalog.module.scss';

type Props = {
  data: TBrandsByAlphabet[];
};

export const Catalog: FC<Props> = ({ data }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>Каталог брендов</h2>
      <ul className={styles.list}>
        {data.map((brands) => (
          <Char key={brands.char} data={brands} />
        ))}
      </ul>
    </div>
  );
};
