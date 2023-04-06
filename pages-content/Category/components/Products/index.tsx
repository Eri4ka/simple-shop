import { Card } from '@components/pure/Card';
import styles from './Products.module.scss';
import useSWR from 'swr';
import { PRODUCTS_CATEGORY_URL } from '@constants/index';
import { FC, useState } from 'react';
import { ProductsResType } from '@mytypes/index';
import { Pagination } from '@components/specific/Pagination';
import { Loader } from '@components/pure/Loader';
import { PRODUCTS_ON_PAGE } from '@pages-content/Category/constants';

type Props = {
  category: string;
  data: ProductsResType;
};

export const Products: FC<Props> = ({ category, data }) => {
  const [skip, setSkip] = useState(0);
  const { data: products, isLoading } = useSWR<ProductsResType>(
    `${PRODUCTS_CATEGORY_URL}${category}?limit=12&skip=${skip}`,
    { fallbackData: data }
  );

  const skipChangeHandler = (page: number) => setSkip(page * PRODUCTS_ON_PAGE);

  return (
    <article className={styles.root}>
      <h2 className={styles.heading}>Товары</h2>
      <div className={styles.grid}>
        {products?.products.map((card) => (
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
          totalProducts={data?.total}
          productsOnPage={PRODUCTS_ON_PAGE}
          onClick={skipChangeHandler}
        />
      </div>
    </article>
  );
};
