import type { NextPage, GetServerSideProps } from 'next';

import { ProductType, ProductsResType } from '@mytypes/product';
import { request } from '@shared/api';
import { UrlService } from '@shared/services/UrlService';
import { SingleBrandPageContent } from '@pages-content/SingleBrandPageContent';

export const getServerSideProps: GetServerSideProps<{
  dataByBrand: ProductType[];
}> = async ({ query }) => {
  const brand = query.brand as string;

  const data: ProductsResType = await request(UrlService.getProducts({}));
  const dataByBrand = data.products.filter((product) => {
    return product.brand.toLowerCase() === brand.toLowerCase();
  });

  if (dataByBrand.length === 0) {
    return {
      notFound: true,
    };
  }

  return { props: { dataByBrand, brand } };
};

type Props = {
  dataByBrand: ProductType[];
  brand: string;
};

const SingleBrandPage: NextPage<Props> = ({ dataByBrand, brand }) => {
  return <SingleBrandPageContent data={dataByBrand} head={brand} />;
};

export default SingleBrandPage;
