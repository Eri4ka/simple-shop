import { FC } from 'react';

import styles from './SectionHead.module.scss';

type Props = {
  heading: string;
};

export const SectionHead: FC<Props> = ({ heading }) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.text}>{heading}</h1>
    </div>
  );
};
