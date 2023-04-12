import { FC } from 'react';

import styles from './List.module.scss';
import { ProductType } from '@mytypes/index';
import { Loader } from '@components/pure/Loader';
import { Card } from '@components/pure/Card';

type Props = {
  products?: ProductType[];
  isLoading: boolean;
};

export const List: FC<Props> = ({ products, isLoading }) => {
  return (
    <div className={styles.grid}>
      {products?.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
      {isLoading && (
        <div className={styles.grid__loader}>
          <Loader />
        </div>
      )}
    </div>
  );
};
