import { FC } from 'react';

import { Slider } from '@components/pure/Slider';

import styles from './Home.module.scss';

export const HomePageContent: FC = () => {
  return (
    <section className={styles.root}>
      <Slider />
    </section>
  );
};
