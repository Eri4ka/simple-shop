import Image from 'next/image';
import Link from 'next/link';
import { FC, useContext, MouseEvent, useState, useEffect } from 'react';
import cl from 'classnames';

import CartIc from '@icons/card/cart.svg';
import AddIc from '@icons/card/cart-add.svg';
import { ProductType } from '@mytypes/index';
import { getDiscount } from '@shared/helpers';
import { CartContext, ContextType } from '@shared/context/CartProvider';

import styles from './Card.module.scss';

type Props = {
  card: ProductType;
};

export const Card: FC<Props> = ({ card }) => {
  // Vars
  const { id, brand, category, title, price, discountPercentage, images } =
    card;
  const discount = getDiscount(price, discountPercentage);
  const { cart, addToCartHandler, removeFromCartHandler } = useContext(
    CartContext
  ) as ContextType;
  const [inCart, setInCart] = useState(false);

  // Handlers
  const toggleCartHandler = (e: MouseEvent) => {
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

  const renderCartButton = () => {
    if (inCart) {
      return (
        <button
          className={cl(styles.button, styles.button_cart)}
          onClick={toggleCartHandler}
        >
          <div className={styles.button__content}>
            <span
              className={cl(styles.button__price, styles.button__price_cart)}
            >
              {discount ? discount : price} $
            </span>
          </div>
          <div className={styles.button__icon}>
            {<AddIc alt='cart-added' />}
          </div>
        </button>
      );
    }

    return (
      <button className={styles.button} onClick={toggleCartHandler}>
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
    );
  };

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
      {renderCartButton()}
    </Link>
  );
};
