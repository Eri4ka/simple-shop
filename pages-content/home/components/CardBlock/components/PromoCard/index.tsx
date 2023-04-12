import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import styles from './PromoCard.module.scss';

type Props = {
  logoSrc: StaticImageData;
  discountText: string;
  text: string;
};

export const PromoCard: FC<Props> = ({ logoSrc, discountText, text }) => {
  return (
    <div className={styles.root}>
      <Image src={logoSrc} alt='mixit' />
      <span className={styles.discount}>{discountText}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};
