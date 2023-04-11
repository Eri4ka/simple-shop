import { createContext, FC, ReactNode, useState, useEffect } from 'react';

import { LocalStorageService } from '@shared/services/localStorage';

type Props = {
  children: ReactNode;
};

type CartType = { id: number; count: number; price: number };

export type ContextType = {
  cart: CartType[];
  addToCartHandler: (value: CartType) => void;
  removeFromCartHandler: (id: number) => void;
  multipleAddtoCartHandler: (value: CartType) => void;
  cartSum: number;
};

export const CartContext = createContext<ContextType | null>(null);

export const CartProvider: FC<Props> = ({ children }) => {
  // Vars
  const [cart, setCart] = useState<CartType[]>(() =>
    LocalStorageService.get('cart', [])
  );
  const [cartSum, setCarSum] = useState(0);

  // Handlers
  const addToCartHandler = (product: CartType) => {
    setCart((cart) => [...cart, product]);
  };

  const removeFromCartHandler = (id: number) => {
    setCart((cart) => cart.filter((item) => item.id !== id));
  };

  const multipleAddtoCartHandler = (product: CartType) => {
    const idx = cart.findIndex((item) => item.id === product.id);

    if (idx !== -1) {
      setCart((cart) =>
        cart.map((item, i) => {
          if (i === idx) {
            return { ...item, count: item.count + product.count };
          }
          return item;
        })
      );
    } else {
      setCart((cart) => [...cart, product]);
    }
  };

  // Effects
  useEffect(() => {
    const getCartSum = () => {
      return cart.reduce((acc, i) => acc + i.price * i.count, 0);
    };

    setCarSum(getCartSum());
  }, [cart]);

  useEffect(() => {
    LocalStorageService.set('cart', cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCartHandler,
        removeFromCartHandler,
        multipleAddtoCartHandler,
        cartSum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
