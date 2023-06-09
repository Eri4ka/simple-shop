import { FC } from 'react';
import { useRouter } from 'next/router';

import { Checkbox } from '@components/pure/Checkbox';
import { FilterType } from '@mytypes/filter';

import styles from './Section.module.scss';

type Props = {
  name: string;
  heading: string;
  values: FilterType[];
};

export const Section: FC<Props> = ({ name, heading, values }) => {
  // Vars
  const { query, push } = useRouter();
  const params = query[name] as string;
  const paramsArr = params?.split(', ') ?? [];

  // Handlers
  const setActiveValueHandler = (checked: boolean, value: string) => {
    if (checked) {
      const uniqueCurrentParams = Array.from(
        new Set([...paramsArr, value])
      ).join(', ');
      const queryParams = {
        ...query,
        [name]: uniqueCurrentParams,
      };
      push({ query: { ...queryParams } }, undefined, {
        shallow: true,
      });
    } else {
      const filteredParamsArr = paramsArr.filter((item) => item !== value);
      let queryParams = { ...query, [name]: filteredParamsArr };

      if (filteredParamsArr.length > 0) {
        queryParams = {
          ...query,
          [name]: filteredParamsArr.join(', '),
        };
      }
      push({ query: { ...queryParams } }, undefined, {
        shallow: true,
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <h5 className={styles.heading}>{heading}</h5>
      <div className={styles.fields}>
        {values?.map(({ value, total }, i) => (
          <Checkbox
            key={`${i}${value}`}
            label={value}
            activeValues={paramsArr}
            total={total}
            toggleHandler={setActiveValueHandler}
          />
        ))}
      </div>
    </div>
  );
};
