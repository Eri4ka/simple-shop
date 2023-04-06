import { FC, useState } from 'react';
import cl from 'classnames';

import styles from './Pagination.module.scss';

type Props = {
  totalProducts?: number;
  productsOnPage: number;
  onClick: (page: number) => void;
};

export const Pagination: FC<Props> = ({
  totalProducts,
  productsOnPage,
  onClick,
}) => {
  // Vars
  const [activePage, setActivePage] = useState(1);
  const pagesCount = totalProducts
    ? Math.ceil(totalProducts / productsOnPage)
    : 1;
  const pages = Array.from(Array(pagesCount).keys());

  // Handlers
  const clickOnPageHandler = (currentPage: number) => {
    setActivePage(currentPage);
    onClick(currentPage - 1);
  };

  const clickOnPrevPageHandler = () => {
    setActivePage((current) => current - 1);
    onClick(activePage - 2);
  };

  const clickOnNextPageHandler = () => {
    setActivePage((current) => current + 1);
    onClick(activePage);
  };

  return (
    <div className={styles.root}>
      <button
        className={styles.button}
        onClick={clickOnPrevPageHandler}
        disabled={activePage === 1}
      >
        {'<'}
      </button>
      <ul className={styles.list}>
        {pages.map((item) => {
          const currentPage = item + 1;
          return (
            <li
              className={cl(
                styles.list__page,
                activePage === currentPage && styles.list__page_active
              )}
              key={item}
              onClick={() => clickOnPageHandler(currentPage)}
            >
              {currentPage}
            </li>
          );
        })}
      </ul>
      <button
        className={styles.button}
        onClick={clickOnNextPageHandler}
        disabled={activePage === pagesCount}
      >
        {'>'}
      </button>
    </div>
  );
};
