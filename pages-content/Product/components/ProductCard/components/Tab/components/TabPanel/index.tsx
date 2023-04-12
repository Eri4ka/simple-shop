import { FC } from 'react';

import styles from './TabPanel.module.scss';

type Props = {
  id: number;
  activeTab: number;
  children: React.ReactNode;
};

export const TabPanel: FC<Props> = ({ id, activeTab, children }) => {
  return id === activeTab ? (
    <div className={styles.root}>{children}</div>
  ) : null;
};
