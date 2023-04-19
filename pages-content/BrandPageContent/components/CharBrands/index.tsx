import { FC } from 'react';

import { TBrandsByAlphabet } from '@mytypes/brands';

import styles from './CharBrands.module.scss';
import Link from 'next/link';

type Props = {
  data: TBrandsByAlphabet;
};

export const CharBrands: FC<Props> = ({ data }) => {
  const isEmpty = data.brands.length === 0;

  if (isEmpty) {
    return null;
  }

  return (
    <div id={data.char} className={styles.root}>
      <h1 className={styles.char}>{data.char}</h1>
      <ul className={styles.grid}>
        {data.brands.map((brand) => (
          <li key={brand} className={styles.grid__item}>
            <Link href={`/brands/${brand}`} className={styles.grid__link}>
              <h2 className={styles.grid__brand}>{brand}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
