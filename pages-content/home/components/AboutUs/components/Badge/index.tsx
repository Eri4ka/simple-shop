import { FC } from 'react';

import styles from './Badge.module.scss';

type Props = {
  Icon: React.ElementType;
  text: string;
};

export const Badge: FC<Props> = ({ Icon, text }) => {
  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  );
};
