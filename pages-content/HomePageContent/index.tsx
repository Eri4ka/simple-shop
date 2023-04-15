import { FC } from 'react';
import useSWR from 'swr';

import MixitIc from '@images/promo/mixit.png';
import CosmeticPic from '@images/promo/cosmetic.png';
import { Slider } from '@components/pure/Slider';
import { UrlService } from '@shared/services/UrlService';
import { ProductsResType } from '@mytypes/product';

import { CardBlock } from './components/CardBlock';
import { AboutUs } from './components/AboutUs';
import { PromoWideCard } from './components/CardBlock/components/PromoWideCard';
import { PromoCard } from './components/CardBlock/components/PromoCard';
import styles from './Home.module.scss';

const discountBanner = {
  logoSrc: MixitIc,
  discountText: '-50%',
  text: 'на товары MIXIT',
};

const recommendationBanner = {
  imageSrc: CosmeticPic,
  text: 'Скиддка на второй<br>товар <strong><i>25%</i></strong></p>',
};

export const HomePageContent: FC = () => {
  // Vars
  const { data: recommendations } = useSWR<ProductsResType>(
    UrlService.getProducts({ limit: '6' })
  );
  const { data: novelties } = useSWR<ProductsResType>(
    UrlService.getProducts({ limit: '6', skip: '30' })
  );
  const { data: discounts } = useSWR<ProductsResType>(
    UrlService.getProducts({ limit: '7', skip: '50' })
  );
  const { logoSrc, discountText, text } = discountBanner;
  const { imageSrc, text: recomText } = recommendationBanner;

  return (
    <section className={styles.root}>
      <Slider />
      <CardBlock
        heading='Рекомендуем'
        data={recommendations?.products}
        PromoComponent={<PromoWideCard imageSrc={imageSrc} text={recomText} />}
      />
      <CardBlock heading='Новинки' data={novelties?.products} />
      <CardBlock
        heading='Скидки'
        data={discounts?.products}
        PromoComponent={
          <PromoCard
            logoSrc={logoSrc}
            discountText={discountText}
            text={text}
          />
        }
      />
      <AboutUs />
    </section>
  );
};
