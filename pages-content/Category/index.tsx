import { FC } from 'react';

import { ProductsResType } from '@mytypes/index';

import styles from './Category.module.scss';
import { Filter } from './components/Filter';
import { Products } from './components/Products';

type Props = {
  data: ProductsResType;
  category: string;
};

const Category: FC<Props> = ({ data, category }) => {
  // console.log(data);

  // console.log(le);
  return (
    <section className={styles.root}>
      <div className={styles.head}>
        <h1 className={styles.head__text}>{category}</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.content__wrapper}>
          <Filter category={category} />
          <Products category={category} data={data} />
        </div>
      </div>
    </section>
  );
};

export default Category;
