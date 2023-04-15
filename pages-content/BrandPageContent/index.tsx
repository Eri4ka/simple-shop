import { FC } from 'react';

import { TBrandsByAlphabet } from '@mytypes/brands';

import { Catalog } from './components/Catalog';
import { CharBrands } from './components/CharBrands';
import styles from './BrandPageContent.module.scss';

type Props = {
  data: TBrandsByAlphabet[];
};

export const BrandPageContent: FC<Props> = ({ data }) => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <Catalog data={data} />
        {data.map((brand) => (
          <CharBrands key={brand.char} data={brand} />
        ))}
      </div>
    </section>
  );
};
