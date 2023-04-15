import { GetServerSideProps, NextPage } from 'next';

import { BrandPageContent } from '@pages-content/BrandPageContent';
import { UrlService } from '@shared/services/UrlService';
import { request } from '@shared/api';
import { getBrandsListByAlphabet } from '@shared/helpers/brands';
import { TBrandsByAlphabet } from '@mytypes/brands';
import { ProductsResType } from '@mytypes/product';

type Props = {
  brandsByAlphabet: TBrandsByAlphabet[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const data: ProductsResType = await request(UrlService.getProducts({}));

  if (data.total === 0) {
    return {
      notFound: true,
    };
  }

  const brandsByAlphabet = getBrandsListByAlphabet(data.products);

  return { props: { brandsByAlphabet } };
};

const BrandPage: NextPage<Props> = ({ brandsByAlphabet }) => {
  return <BrandPageContent data={brandsByAlphabet} />;
};

export default BrandPage;
