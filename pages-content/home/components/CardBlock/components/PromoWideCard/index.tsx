import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from './PromoWideCard.module.scss';

type Props = {
  imageSrc: StaticImageData;
  text: string;
};

export const PromoWideCard: FC<Props> = ({ imageSrc, text }) => {
  return (
    <div className={styles.root}>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
      <Image className={styles.image} src={imageSrc} alt='cosmetics' priority />
    </div>
  );
};
