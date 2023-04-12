import { FC } from 'react';

import styles from './Product.module.scss';
import { BreadCrumbs } from '@components/pure/BreadCrumbs';
import { ProductType } from '@mytypes/index';
import { ProductCard } from './components/ProductCard';
import { Related } from './components/Related';

type Props = {
  product: ProductType;
  related: ProductType[];
};

export const Product: FC<Props> = ({ product, related }) => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <BreadCrumbs lastCrumb={product.title} />
        <ProductCard product={product} />
        <Related products={related} />
      </div>
    </section>
  );
};
