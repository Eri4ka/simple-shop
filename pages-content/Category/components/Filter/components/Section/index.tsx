import { FC } from 'react';

import { Checkbox } from '@components/pure/Checkbox';
import { FilterType } from '@mytypes/index';

import styles from './Section.module.scss';

type Props = {
  type: string;
  values: FilterType[];
};

export const Section: FC<Props> = ({ type, values }) => {
  return (
    <div className={styles.wrapper}>
      <h5 className={styles.heading}>{type}</h5>
      <div className={styles.fields}>
        {values?.map(({ value, total }, i) => (
          <Checkbox key={`${i}${value}`} label={value} total={total} />
        ))}
      </div>
    </div>
  );
};
