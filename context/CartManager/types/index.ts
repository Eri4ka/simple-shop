export type CartType = { id: number; count: number; price: number };

export type ContextType = {
  cart: CartType[];
  addToCartHandler: (value: CartType) => void;
  removeFromCartHandler: (id: number) => void;
  multipleAddtoCartHandler: (value: CartType) => void;
  cartSum: number;
};
