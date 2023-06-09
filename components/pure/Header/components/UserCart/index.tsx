import { useContext } from 'react';

import { CartContext, ContextType } from '@context/CartManager';
import CartIc from '@icons/header/user/cart.svg';

import { User } from '../User';

export const UserCart = () => {
  const { cartSum } = useContext(CartContext) as ContextType;

  return <User Icon={CartIc} heading='Моя корзина' text={`${cartSum} $`} />;
};
