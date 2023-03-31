import { FC } from 'react';

import styles from './User.module.scss';

type Props = {
  Icon: React.ElementType;
  heading: string;
  text: string;
};

export const User: FC<Props> = ({ Icon, heading, text }) => {
  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.info}>
        <span className={styles.info__heading}>{heading}</span>
        <span className={styles.info__text}>{text}</span>
      </div>
    </div>
  );
};
