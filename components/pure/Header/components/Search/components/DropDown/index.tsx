import { FC, memo } from 'react';

import { ProductType } from '@mytypes/product';

import { SearchProduct } from './components/SearchCard';
import styles from './DropDown.module.scss';

type Props = {
  data: ProductType[];
};

export const DropDown: FC<Props> = memo(({ data }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        {data.length === 0 ? (
          <span className={styles.total}>Ничего не найдено</span>
        ) : null}
        <ul className={styles.list}>
          {data?.map((product) => (
            <SearchProduct key={product.id} data={product} />
          ))}
        </ul>
      </div>
    </div>
  );
});
