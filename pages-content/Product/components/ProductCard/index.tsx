import { FC, useContext } from 'react';
import Image from 'next/image';

import { ProductType } from '@mytypes/index';
import { getSalaryDiscount } from '@shared/helpers';
import { CartContext, ContextType } from '@shared/context/CartProvider';

import { BucketButton } from './components/BucketButton';
import { Tab } from './components/Tab';
import styles from './ProductCard.module.scss';

type Props = {
  product: ProductType;
};

export const ProductCard: FC<Props> = ({ product }) => {
  // Vars
  const { multipleAddtoCartHandler } = useContext(CartContext) as ContextType;

  const { id, title, price, discountPercentage, images } = product;
  const discount = getSalaryDiscount(price, discountPercentage);

  // Handlers
  const addToCartHandler = (count: number) => {
    const finalPrice = discount ? discount : price;
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
        <p className={styles.info__price}>{discount ? discount : price} $</p>
        <BucketButton onAdd={addToCartHandler} />
        <Tab product={product} />
      </div>
    </div>
  );
};
