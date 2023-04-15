import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { Pagination } from '@components/specific/Pagination';
import { BreadCrumbs } from '@components/pure/BreadCrumbs';
import { UrlService } from '@shared/services/UrlService';
import { ProductsResType, ProductType } from '@mytypes/product';

import { Sorting } from './components/Sorting';
import { SortItemType } from './types';
import { PRODUCTS_ON_PAGE } from '../../constants';
import { List } from './components/List';
import styles from './Products.module.scss';

type Props = {
  data?: ProductsResType;
  category: string;
};

const sortList: SortItemType[] = [
  { name: 'По умолчанию', type: 'default' },
  { name: 'По возрастанию цены', type: 'increase_price' },
  { name: 'По убыванию цены', type: 'decrease_price' },
];

const initialSort = sortList[0];

export const Products: FC<Props> = ({ data, category }) => {
  // Vars
  const [skip, setSkip] = useState(0);
  const { data: initialProducts, isLoading } = useSWR<ProductsResType>(
    UrlService.getCategoryProducts({
      category,
      limit: `${PRODUCTS_ON_PAGE}`,
      skip: `${skip}`,
    }),
    { fallbackData: data }
  );
  const [filteredProducts, setFilteredProducts] = useState<
    ProductType[] | undefined
  >(initialProducts?.products);
  const [products, setProducts] = useState<ProductType[] | undefined>(
    filteredProducts
  );
  const [activeSort, setActiveSort] = useState(initialSort);
  const { query } = useRouter();

  // Handlers
  const changeSkipHandler = (page: number) => setSkip(page * PRODUCTS_ON_PAGE);

  // Effects
  useEffect(() => {
    const getFilteredProducts = () => {
      const filterParams = query['brand'] as string;
      const arrayOfFilterParams = filterParams?.split(', ');
      const filteredData: ProductType[] = [];

      if (arrayOfFilterParams) {
        arrayOfFilterParams.forEach((param) => {
          initialProducts?.products.forEach((product) => {
            if (param === product['brand']) {
              filteredData.push(product);
            }
          });
        });

        return filteredData;
      }
      return initialProducts?.products;
    };
    setFilteredProducts(getFilteredProducts());
  }, [initialProducts?.products, query]);

  useEffect(() => {
    const getSortedProducts = () => {
      if (filteredProducts) {
        const copyProducts = [...filteredProducts];

        switch (activeSort.type) {
          case 'increase_price':
            return copyProducts.sort((a, b) => +a.price - +b.price);
          case 'decrease_price':
            return copyProducts.sort((a, b) => +b.price - +a.price);
          default:
            return copyProducts;
        }
      }
    };
    setProducts(getSortedProducts());
  }, [activeSort.type, filteredProducts]);

  return (
    <article className={styles.root}>
      <div className={styles.heading}>
        <h2 className={styles.heading__text}>Товары</h2>
        <Sorting
          sortList={sortList}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
        />
      </div>
      <BreadCrumbs />
      <List products={products} isLoading={isLoading} />
      <div className={styles.pagination}>
        <Pagination
          productsTotal={initialProducts?.total}
          productsOnPage={PRODUCTS_ON_PAGE}
          changePageNandler={changeSkipHandler}
        />
      </div>
    </article>
  );
};
