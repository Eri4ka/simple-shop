import { ProductType } from '@mytypes/product';

export type TGetBrands<T> = (data: ProductType[]) => T;
