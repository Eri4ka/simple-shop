import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cl from 'classnames';

import { clearURLQueries } from '@shared/helpers';

import { Crumb } from './types';
import styles from './BreadCrumbs.module.scss';

type Props = {
  lastCrumb?: string;
};

export const BreadCrumbs: FC<Props> = ({ lastCrumb }) => {
  // Vars
  const { asPath } = useRouter();

  const pathWithoutQueries = clearURLQueries(asPath);
  const [breadCrumbs, setBreadCrumbs] = useState<Crumb[]>([]);

  // Effects
  useEffect(() => {
    const buildBreadCrumbs = () => {
      const paths = pathWithoutQueries.split('/');
      const breadCrumbs: Crumb[] = [];

      paths.forEach((item, index, current) => {
        if (index === 0) {
          breadCrumbs.push({ name: 'Главная', path: `/` });
        } else {
          const prevPath = index !== 1 ? breadCrumbs[index - 1].path : '';
          const isLastPath = current.length === index + 1;
          const name = isLastPath && lastCrumb ? lastCrumb : item;

          breadCrumbs.push({ name, path: `${prevPath}/${item}` });
        }
      });

      return breadCrumbs;
    };
    setBreadCrumbs(buildBreadCrumbs());
  }, [pathWithoutQueries, lastCrumb]);

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {breadCrumbs.map((crumb) => {
          return (
            <li
              className={cl(styles.list__crumb, {
                [styles.list__crumb_active]: pathWithoutQueries === crumb.path,
              })}
              key={crumb.name}
            >
              <Link href={crumb.path}>{crumb.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
