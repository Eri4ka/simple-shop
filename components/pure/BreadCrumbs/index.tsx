import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cl from 'classnames';

import { clearURLQueries } from '@shared/helpers';

import styles from './BreadCrumbs.module.scss';

export const BreadCrumbs = () => {
  // Vars
  const { asPath } = useRouter();
  const pathWithoutQueries = clearURLQueries(asPath);
  const [breadCrumbs, setBreadCrumbs] = useState<
    { name: string; path: string }[]
  >([]);

  // Effects
  useEffect(() => {
    const buildBreadCrumbs = () => {
      const paths = pathWithoutQueries.split('/');

      const breadCrumbs = paths.map((item) => {
        if (item === '') {
          return { name: 'Главная', path: '/' };
        }
        return { name: item, path: `/${item}` };
      });

      return breadCrumbs;
    };
    setBreadCrumbs(buildBreadCrumbs());
  }, [pathWithoutQueries]);

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
