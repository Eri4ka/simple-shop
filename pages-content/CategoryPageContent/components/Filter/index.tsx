import { FC, useEffect, useState } from 'react';
import useSWR from 'swr';

import { ProductType, ProductsResType } from '@mytypes/product';
import { FilterType } from '@mytypes/filter';
import { UrlService } from '@shared/services/UrlService';

import { Section } from './components/Section';
import styles from './Filter.module.scss';

type Props = {
  category: string;
};

export const Filter: FC<Props> = ({ category }) => {
  // Vars
  const { data } = useSWR<ProductsResType>(
    UrlService.getCategoryProducts({ category })
  );
  const [brands, setBrands] = useState<FilterType[]>([]);

  const filters = [{ id: 1, name: 'brand', heading: 'Брэнд', values: brands }];

  // Effects
  useEffect(() => {
    const buildFilterFromData = (field: keyof ProductType) => {
      const getFilterFields = () => {
        const fields = data?.products.map((item) => {
          return item[field] as string;
        });

        const uniqueFields = Array.from(new Set(fields));
        return uniqueFields;
      };

      const filterFields = getFilterFields();

      const filterValues = filterFields.map((item) => {
        const total = data?.products.filter(
          (elem) => elem.brand === item
        ).length;
        return { value: item, total };
      });

      return filterValues;
    };
    setBrands(buildFilterFromData('brand'));
  }, [data?.products]);

  return (
    <aside className={styles.wrapper}>
      <h2 className={styles.heading}>Фильтр</h2>
      <div className={styles.content}>
        {filters.map(({ id, name, heading, values }) => (
          <Section key={id} name={name} heading={heading} values={values} />
        ))}
      </div>
    </aside>
  );
};
