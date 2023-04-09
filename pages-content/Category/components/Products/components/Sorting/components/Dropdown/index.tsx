import { FC } from 'react';

import { SortItemType } from '../../../../types/index';
import styles from './Dropdown.module.scss';

type Props = {
  sortList: SortItemType[];
  changeActiveSortHandler: (sort: SortItemType) => void;
};

export const Dropdown: FC<Props> = ({ sortList, changeActiveSortHandler }) => {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {sortList.map(({ name, type }, idx) => (
          <li
            key={`${idx}${name}`}
            className={styles.list__item}
            onClick={() => changeActiveSortHandler({ name, type })}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
