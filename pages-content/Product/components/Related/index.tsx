import { FC } from 'react';
import { A11y, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cl from 'classnames';

import { Card } from '@components/pure/Card';
import { ProductType } from '@mytypes/index';

import 'swiper/scss';
import 'swiper/scss/effect-fade';

import { useSwiperRef } from './hooks/useSwiperRef';
import styles from './Related.module.scss';

type Props = {
  products: ProductType[];
};

export const Related: FC<Props> = ({ products }) => {
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();

  return (
    <aside>
      <div className={styles.heading}>
        <span className={styles.heading__divider} />
        <h2 className={styles.heading__text}>Вам также может понравиться</h2>
        <span className={styles.heading__divider} />
      </div>
      <div className={styles.slider}>
        <Swiper
          modules={[A11y, EffectFade, Navigation]}
          spaceBetween={15}
          slidesPerView='auto'
          navigation={{
            nextEl,
            prevEl,
            disabledClass: styles.slider__arrow_disabled,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          {products?.map((product, idx) => (
            <SwiperSlide key={idx} className={styles.slider__slide}>
              <Card card={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          ref={prevElRef}
          className={cl(styles.slider__arrow, styles.slider__prev)}
        />
        <button
          ref={nextElRef}
          className={cl(styles.slider__arrow, styles.slider__next)}
        />
      </div>
    </aside>
  );
};
