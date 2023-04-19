import { TBrandsList, TBrandsByAlphabet } from '@mytypes/brands';

import { TGetBrands } from './types';
import { ALPHABETE } from './constants';

const getBrandsList: TGetBrands<TBrandsList> = (data) => {
  return Array.from(new Set(data.map((item) => item.brand)));
};

export const getBrandsListByAlphabet: TGetBrands<TBrandsByAlphabet[]> = (
  data
) => {
  const brandList = getBrandsList(data);

  return [...ALPHABETE].map((char) => {
    const brands = brandList.filter((brand) => char === brand[0].toUpperCase());

    return { char, brands };
  });
};
