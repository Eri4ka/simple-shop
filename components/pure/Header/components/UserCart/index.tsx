import CartIc from '@icons/header/user/cart.svg';

import { User } from '../User';

export const UserCart = () => {
  return <User Icon={CartIc} heading='Моя корзина' text='17 342 тг.' />;
};
