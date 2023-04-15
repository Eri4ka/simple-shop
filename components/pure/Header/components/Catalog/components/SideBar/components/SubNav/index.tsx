import Link from 'next/link';
import { FC, useState, ReactNode } from 'react';
import cl from 'classnames';

import styles from './SubNav.module.scss';

type Props = {
  children: ReactNode;
  items: string[];
};

export const SubNav: FC<Props> = ({ children, items }) => {
  // Vars
  const [isOpen, setIsOpen] = useState(false);

  // Handlers
  const toggleMenuHandler = () => {
    setIsOpen((value) => !value);
  };

  return (
    <div onClick={toggleMenuHandler}>
      <span className={cl(styles.button, { [styles.button_active]: isOpen })}>
        {children}
      </span>
      <ul className={cl(styles.menu, { [styles.menu_active]: isOpen })}>
        {items?.map((item, index) => (
          <li key={index} className={styles.menu__item}>
            <Link href={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
