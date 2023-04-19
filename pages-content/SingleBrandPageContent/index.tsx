import { FC } from 'react';

import { ProductType } from '@mytypes/product';

import { SectionHead } from '@components/specific/SectionHead';
import { Card } from '@components/pure/Card';

import styles from './SingleBrandPageContent.module.scss';

type Props = {
  data: ProductType[];
  head: string;
};

export const SingleBrandPageContent: FC<Props> = ({ data, head }) => {
  return (
    <section className={styles.root}>
      <SectionHead heading={head} />
      <div className={styles.content}>
        <div className={styles.content__grid}>
          {data.map((product) => (
            <Card key={product.id} info={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
