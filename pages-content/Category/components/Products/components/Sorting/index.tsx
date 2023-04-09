import { FC, useEffect, useRef, useState } from 'react';
import cl from 'classnames';

import Dropdown from './components/Dropdown';
import { SortItemType } from '../../types';
import styles from './Sorting.module.scss';

type Props = {
  sortList: SortItemType[];
  activeSort: SortItemType;
  setActiveSort: (sort: SortItemType) => void;
};

export const Sorting: FC<Props> = ({ sortList, activeSort, setActiveSort }) => {
  // Vars
  const { name } = activeSort;
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  // Handlers
  const toggleDropdownHandler = () => setIsOpen((value) => !value);

  const changeActiveSortHandler = (sort: SortItemType) => {
    setActiveSort(sort);
    setIsOpen(false);
  };

  // Effects
  useEffect(() => {
    const clickOutsideHandler = (e: MouseEvent) => {
      if (!selectRef.current?.contains(e.target as HTMLDivElement)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', clickOutsideHandler);
    return () => document.removeEventListener('click', clickOutsideHandler);
  }, []);

  return (
    <div className={styles.root}>
      <h4 className={styles.heading}>Сортировать</h4>
      <div className={styles.select} ref={selectRef}>
        <button
          className={cl(
            styles.select__button,
            isOpen && styles.select__button_active
          )}
          onClick={toggleDropdownHandler}
        >
          {name}
        </button>
        {isOpen && (
          <Dropdown
            sortList={sortList}
            changeActiveSortHandler={changeActiveSortHandler}
          />
        )}
      </div>
    </div>
  );
};
