import { FC, useState } from 'react';
import cl from 'classnames';

import { NEXT_ELEMENT, PREV_ELEMENT } from './constants';
import styles from './Pagination.module.scss';

type Props = {
  productsTotal?: number;
  productsOnPage: number;
  changePageNandler: (page: number) => void;
};

export const Pagination: FC<Props> = ({
  productsTotal,
  productsOnPage,
  changePageNandler,
}) => {
  // Vars
  const [activePage, setActivePage] = useState(1);
  const pagesCount = productsTotal
    ? Math.ceil(productsTotal / productsOnPage)
    : 1;

  const pages = Array.from(Array(pagesCount).keys());
  const isPrevButtonDisabled = activePage === 1;
  const isNextButtonDisabled = activePage === pagesCount;

  // Handlers
  const clickOnPageHandler = (currentPage: number) => {
    setActivePage(currentPage);
    changePageNandler(currentPage - 1);
  };

  const clickOnPrevPageHandler = () => {
    setActivePage((current) => current - 1);
    changePageNandler(activePage - 2);
  };

  const clickOnNextPageHandler = () => {
    setActivePage((current) => current + 1);
    changePageNandler(activePage);
  };

  return (
    <div className={styles.root}>
      <button
        className={styles.button}
        onClick={clickOnPrevPageHandler}
        disabled={isPrevButtonDisabled}
      >
        {PREV_ELEMENT}
      </button>
      <ul className={styles.list}>
        {pages.map((page) => {
          const currentPage = page + 1;
          return (
            <li
              className={cl(styles.list__page, {
                [styles.list__page_active]: activePage === currentPage,
              })}
              key={page}
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
        disabled={isNextButtonDisabled}
      >
        {NEXT_ELEMENT}
      </button>
    </div>
  );
};
