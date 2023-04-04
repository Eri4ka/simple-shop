import { FC } from 'react';
import useSWR from 'swr';

import MixitIc from '@images/promo/mixit.png';
import CosmeticPic from '@images/promo/cosmetic.png';
import { Slider } from '@components/pure/Slider';
import { CardBlock } from '@components/specific/CardBlock';
import { PromoWideCard } from '@components/pure/PromoWideCard';
import { PromoCard } from '@components/pure/PromoCard';
import { PRODUCTS_URL } from '@constants/index';
import { ProductsResType } from '@mytypes/index';

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
    `${PRODUCTS_URL}?limit=6`
  );
  const { data: novelties } = useSWR<ProductsResType>(
    `${PRODUCTS_URL}?limit=4&skip=30`
  );
  const { data: discounts } = useSWR<ProductsResType>(
    `${PRODUCTS_URL}?limit=7&skip=50`
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
    </section>
  );
};
