import Image from 'next/image';
import { FC } from 'react';

import CartIc from '@icons/card/cart.svg';
import { ProductType } from '@mytypes/index';

import styles from './Card.module.scss';

type Props = {
  card: ProductType;
};

export const Card: FC<Props> = ({ card }) => {
  // Vars
  const { brand, category, title, price, discountPercentage, images } = card;
  const discount = Math.floor(price - (price * discountPercentage) / 100);

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Image
          src={images[0]}
          alt={title}
          fill
          sizes='285px'
          style={{ objectFit: 'contain' }}
        />
      </div>
      <span className={styles.brand}>{brand}</span>
      <span className={styles.category}>{category}</span>
      <span className={styles.title}>{title}</span>
      <button className={styles.button}>
        <div className={styles.button__content}>
          <span className={styles.button__price}>
            {discount ? discount : price} $
          </span>
          {discount && (
            <span className={styles.button__discount}>{price} $</span>
          )}
        </div>
        <div className={styles.button__icon}>{<CartIc alt='cart' />}</div>
      </button>
    </div>
  );
};
