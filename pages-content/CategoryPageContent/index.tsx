import { FC } from 'react';

import { ProductsResType } from '@mytypes/product';

import styles from './Category.module.scss';
import { Filter } from './components/Filter';
import { Products } from './components/Products';
import { SectionHead } from '@components/specific/SectionHead';

type Props = {
  data: ProductsResType;
  category: string;
};

export const CategoryPageContent: FC<Props> = ({ data, category }) => {
  return (
    <section className={styles.root}>
      <SectionHead heading={category} />
      <div className={styles.content}>
        <div className={styles.content__wrapper}>
          <Filter category={category} />
          <Products data={data} category={category} />
        </div>
      </div>
    </section>
  );
};
