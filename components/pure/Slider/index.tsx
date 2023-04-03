import { Pagination, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';

import styles from './Slider.module.scss';
import { Slide } from './components/Slide';
import { slides } from './constants';

export const Slider = () => {
  return (
    <article className={styles.root}>
      <Swiper
        modules={[Pagination, A11y, EffectFade, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          type: 'bullets',
          bulletClass: styles.dots__element,
          bulletActiveClass: styles.dots__element_active,
          horizontalClass: styles.dots,
        }}
        effect='fade'
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
        }}
      >
        {slides?.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <Slide
              textPromo={slide.textPromo}
              textAdd={slide.textAdd}
              image={slide.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};
