import { FC } from 'react';

import { Card } from '@components/pure/Card';
import { ProductType } from '@mytypes/index';

import styles from './CardBlock.module.scss';

type Props = {
  heading: string;
  data: ProductType[] | undefined;
  PromoComponent?: React.ReactNode;
};

export const CardBlock: FC<Props> = ({ heading, data, PromoComponent }) => {
  return (
    <article className={styles.root}>
      <div className={styles.heading}>
        <h2 className={styles.heading__text}>{heading}</h2>
        <span className={styles.heading__separator} />
      </div>
      <div className={styles.grid}>
        {data?.map((card) => (
          <Card key={card.id} info={card} />
        ))}
        {PromoComponent}
      </div>
    </article>
  );
};
