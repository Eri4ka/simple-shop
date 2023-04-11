import { FC } from 'react';
import Image from 'next/image';

import { ProductType } from '@mytypes/index';
import { getDiscount } from '@shared/helpers';

import { BucketButton } from './components/BucketButton';
import { Tab } from './components/Tab';
import styles from './ProductCard.module.scss';

type Props = {
  product: ProductType;
};

export const ProductCard: FC<Props> = ({ product }) => {
  // Vars
  const { title, price, discountPercentage, images } = product;
  const discount = getDiscount(price, discountPercentage);

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Image
          src={images[0]}
          alt={title}
          fill
          sizes='330px'
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.info__title}>{title}</h2>
        <p className={styles.info__price}>{discount} $</p>
        <BucketButton />
        <Tab product={product} />
      </div>
    </div>
  );
};
