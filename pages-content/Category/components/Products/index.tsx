import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { Pagination } from '@components/specific/Pagination';
import { Loader } from '@components/pure/Loader';
import { Card } from '@components/pure/Card';
import { PRODUCTS_CATEGORY_URL } from '@constants/index';
import { ProductsResType, ProductType } from '@mytypes/index';

import { PRODUCTS_ON_PAGE } from '../../constants';
import styles from './Products.module.scss';
import { BreadCrumbs } from '@components/pure/BreadCrumbs';

type Props = {
  data?: ProductsResType;
  category: string;
};

export const Products: FC<Props> = ({ data, category }) => {
  // Vars
  const [skip, setSkip] = useState(0);
  const { data: products, isLoading } = useSWR<ProductsResType>(
    `${PRODUCTS_CATEGORY_URL}${category}?limit=${PRODUCTS_ON_PAGE}&skip=${skip}`,
    { fallbackData: data }
  );
  const [filteredProducts, setFilteredProducts] = useState<
    ProductType[] | undefined
  >(products?.products);
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
          products?.products.forEach((product) => {
            if (param === product['brand']) {
              filteredData.push(product);
            }
          });
        });

        return filteredData;
      }
      return products?.products;
    };
    setFilteredProducts(getFilteredProducts);
  }, [products?.products, query]);

  return (
    <article className={styles.root}>
      <h2 className={styles.heading}>Товары</h2>
      <BreadCrumbs />
      <div className={styles.grid}>
        {filteredProducts?.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        {isLoading && (
          <div className={styles.grid__loader}>
            <Loader />
          </div>
        )}
      </div>
      <div className={styles.pagination}>
        <Pagination
          productsTotal={products?.total}
          productsOnPage={PRODUCTS_ON_PAGE}
          onPageClick={changeSkipHandler}
        />
      </div>
    </article>
  );
};
