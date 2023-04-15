import { FC, useContext } from 'react';
import Image from 'next/image';

import { ProductType } from '@mytypes/product';
import { getSalaryDiscount } from '@shared/helpers';
import { CartContext, ContextType } from '@context/CartManager';

import { BucketButton } from './components/BucketButton';
import { Tab } from './components/Tab';
import styles from './ProductCard.module.scss';

type Props = {
  product: ProductType;
};

export const ProductCard: FC<Props> = ({ product }) => {
  // Vars
  const { id, title, price, discountPercentage, images } = product;
  const { multipleAddtoCartHandler } = useContext(CartContext) as ContextType;

  const discount = getSalaryDiscount(price, discountPercentage);
  const finalPrice = discount !== 0 ? discount : price;

  // Handlers
  const addToCartHandler = (count: number) => {
    multipleAddtoCartHandler({ id, price: finalPrice, count });
  };

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
        <p className={styles.info__price}>{finalPrice} $</p>
        <BucketButton onAdd={addToCartHandler} />
        <Tab product={product} />
      </div>
    </div>
  );
};
