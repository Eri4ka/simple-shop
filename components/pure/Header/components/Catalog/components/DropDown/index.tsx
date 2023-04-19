import Link from 'next/link';

import { FC, useState } from 'react';

import styles from './DropDown.module.scss';

type Props = {
  children: React.ReactNode;
  items: string[];
};

export const DropDown: FC<Props> = ({ children, items }) => {
  // Vars
  const [isOpen, setIsOpen] = useState(false);

  // Handlers
  const mouseOverHandler = () => {
    setIsOpen(true);
  };

  const mouseLeaveHandler = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={styles.root}
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {children}
      {isOpen && (
        <div className={styles.menu}>
          <ul className={styles.menu__list}>
            {items?.map((item, index) => (
              <li key={index} className={styles.menu__item}>
                <Link href={`/${item}`} className={styles.menu__link}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
