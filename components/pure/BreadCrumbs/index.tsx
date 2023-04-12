import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cl from 'classnames';

import { clearURLQueries } from '@shared/helpers';

import styles from './BreadCrumbs.module.scss';

type CrumbType = { name: string; path: string };

type Props = {
  lastCrumb?: string;
};

export const BreadCrumbs: FC<Props> = ({ lastCrumb }) => {
  // Vars
  const { asPath } = useRouter();

  const pathWithoutQueries = clearURLQueries(asPath);
  const [breadCrumbs, setBreadCrumbs] = useState<CrumbType[]>([]);

  // Effects
  useEffect(() => {
    const buildBreadCrumbs = () => {
      const paths = pathWithoutQueries.split('/');
      const breadCrumbs: CrumbType[] = [];

      paths.forEach((item, idx, current) => {
        if (idx === 0) {
          breadCrumbs.push({ name: 'Главная', path: `/` });
        } else {
          const prevPath = idx !== 1 ? breadCrumbs[idx - 1].path : '';
          const isLastPath = current.length === idx + 1;
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
        {breadCrumbs.map(({ name, path }, idx) => {
          return (
            <li
              className={cl(
                styles.list__crumb,
                pathWithoutQueries === path && styles.list__crumb_active
              )}
              key={`${idx}${name}`}
            >
              <Link href={path}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
