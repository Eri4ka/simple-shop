import { StaticImageData } from 'next/image';

export type ProductsResType = {
  products: ProductType[];
  total: number;
};

export type ProductType = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: StaticImageData[];
  price: number;
  title: string;
  rating: number;
};
