import { Card } from '@components/pure/Card';
import styles from './Products.module.scss';
import useSWR from 'swr';
import { PRODUCTS_CATEGORY_URL } from '@constants/index';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { ProductsResType, ProductType } from '@mytypes/index';
import { Pagination } from '@components/specific/Pagination';
import { Loader } from '@components/pure/Loader';
import { PRODUCTS_ON_PAGE } from '@pages-content/Category/constants';
import { useRouter } from 'next/router';

type Props = {
  data?: ProductsResType;
  category: string;
};

export const Products: FC<Props> = ({ data, category }) => {
  const [skip, setSkip] = useState(0);
  const { data: products, isLoading } = useSWR<ProductsResType>(
    `${PRODUCTS_CATEGORY_URL}${category}?limit=12&skip=${skip}`,
    { fallbackData: data }
  );
  const {
    query: { category: alias, ...params },
  } = useRouter();
  const [filteredProducts, setFilteredProducts] = useState<
    ProductType[] | undefined
  >(products?.products);
  const changeSkipHandler = (page: number) => setSkip(page * PRODUCTS_ON_PAGE);

  const changeFilterHandler = useMemo(() => {
    const filterParams = params.brand as string;
    const arrayOfFilterParams = filterParams?.split(', ');
    const filteredData: ProductType[] = [];

    if (arrayOfFilterParams) {
      arrayOfFilterParams.forEach((param) => {
        products?.products.forEach((product) => {
          if (param === product.brand) {
            filteredData.push(product);
          }
        });
      });

      return filteredData;
    }
    return products?.products;
  }, [params.brand, products]);

  useEffect(() => {
    setFilteredProducts(changeFilterHandler);
  }, [changeFilterHandler]);

  return (
    <article className={styles.root}>
      <h2 className={styles.heading}>Товары</h2>
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
          totalProducts={products?.total}
          productsOnPage={PRODUCTS_ON_PAGE}
          onClick={changeSkipHandler}
        />
      </div>
    </article>
  );
};
