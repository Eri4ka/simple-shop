import { FC } from 'react';

import { TBrandsByAlphabet } from '@mytypes/brands';

import { Catalog } from './components/Catalog';
import styles from './BrandPageContent.module.scss';

type Props = {
  data: TBrandsByAlphabet[];
};

export const BrandPageContent: FC<Props> = ({ data }) => {
  // console.log(data);
  const alphabetList = data.map((brand) => brand.char);

  console.log(alphabetList);

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <Catalog data={alphabetList} />
      </div>
    </section>
  );
};
