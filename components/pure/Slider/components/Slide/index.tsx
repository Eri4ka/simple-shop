import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import cl from 'classnames';

import styles from './Slide.module.scss';

type Props = {
  textPromo: string;
  textAdd: string;
  image: StaticImageData;
};

export const Slide: FC<Props> = ({ textPromo, textAdd, image }) => {
  return (
    <div className={styles.slide}>
      <span className={cl(styles.text, styles.text__promo)}>{textPromo}</span>
      <span className={cl(styles.text, styles.text__additional)}>
        {textAdd}
      </span>
      <Image className={styles.slide__img} src={image} alt='slide-picture' />
    </div>
  );
};
