import { FC } from 'react';

import styles from './Product.module.scss';
import { BreadCrumbs } from '@components/pure/BreadCrumbs';
import { ProductType } from '@mytypes/index';

type Props = {
  product: ProductType;
};

export const Product: FC<Props> = ({ product }) => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <BreadCrumbs lastCrumb={product.title} />
      </div>
    </section>
  );
};
