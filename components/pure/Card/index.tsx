import Image from 'next/image';
import Link from 'next/link';
import { FC, useContext, MouseEvent, useState, useEffect } from 'react';

import { ProductType } from '@mytypes/index';
import { getSalaryDiscount } from '@shared/helpers';
import { CartContext, ContextType } from '@shared/context/CartProvider';

import styles from './Card.module.scss';
import { CartButton } from './components/CartButton';

type Props = {
  info: ProductType;
};

export const Card: FC<Props> = ({ info }) => {
  // Vars
  const { cart, addToCartHandler, removeFromCartHandler } = useContext(
    CartContext
  ) as ContextType;
  const [inCart, setInCart] = useState(false);

  const { id, brand, category, title, price, discountPercentage, images } =
    info;
  const discount = getSalaryDiscount(price, discountPercentage);

  // Handlers
  const buttonToggleHandler = (e: MouseEvent) => {
    e.preventDefault();

    if (inCart) {
      removeFromCartHandler(id);
      setInCart(false);
    } else {
      addToCartHandler({ id, count: 1, price: discount ? discount : price });
      setInCart(true);
    }
  };

  // Effects
  useEffect(() => {
    setInCart(cart.some((item) => item.id === id));
  }, [cart, id]);

  return (
    <Link href={`/${category}/${id}`} className={styles.root}>
      <div className={styles.image}>
        <Image
          src={images[0]}
          alt={title}
          fill
          sizes='285px'
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>
      <span className={styles.brand}>{brand}</span>
      <span className={styles.category}>{category}</span>
      <span className={styles.title}>{title}</span>
      <CartButton
        inCart={inCart}
        buttonToggleHandler={buttonToggleHandler}
        discount={discount}
        price={price}
      />
    </Link>
  );
};
