import { FC, MouseEvent } from 'react';
import cl from 'classnames';

import CartIc from '@icons/card/cart.svg';
import AddIc from '@icons/card/cart-add.svg';

import styles from './CartButton.module.scss';

type Props = {
  inCart: boolean;
  buttonToggleHandler: (e: MouseEvent) => void;
  discount: number;
  price: number;
};

export const CartButton: FC<Props> = ({
  inCart,
  buttonToggleHandler,
  discount,
  price,
}) => {
  return (
    <button
      className={cl(styles.button, { [styles.button_cart]: inCart })}
      onClick={buttonToggleHandler}
    >
      {inCart && (
        <>
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
        </>
      )}
      {!inCart && (
        <>
          <div className={styles.button__content}>
            <span className={styles.button__price}>
              {discount ? discount : price} $
            </span>
            {discount && (
              <span className={styles.button__discount}>{price} $</span>
            )}
          </div>
          <div className={styles.button__icon}>{<CartIc alt='cart' />}</div>
        </>
      )}
    </button>
  );
};
