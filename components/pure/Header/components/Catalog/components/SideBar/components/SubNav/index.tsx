import Link from 'next/link';
import { FC, useState } from 'react';
import cl from 'classnames';

import styles from './SubNav.module.scss';

type Props = {
  children: React.ReactNode;
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
      <span className={cl(styles.button, isOpen && styles.button_active)}>
        {children}
      </span>
      <ul className={cl(styles.menu, isOpen && styles.menu_active)}>
        {items?.map((item, idx) => (
          <li key={idx} className={styles.menu__item}>
            <Link href={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
