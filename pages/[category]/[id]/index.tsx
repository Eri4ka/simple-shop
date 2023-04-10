import type { NextPage, GetServerSideProps } from 'next';

import { PRODUCTS_URL } from '@constants/index';
import { ProductType } from '@mytypes/index';
import { request } from '@shared/api';
import { Product } from '@pages-content/Product';

export const getServerSideProps: GetServerSideProps<{
  data: ProductType;
}> = async ({ query }) => {
  const { id } = query;

  try {
    const data = await request(`${PRODUCTS_URL}${id}`);

    if (!data) {
      return {
        notFound: true,
      };
    }

    return { props: { data } };
  } catch {
    return {
      notFound: true,
    };
  }
};

const ProductPage: NextPage<{ data: ProductType }> = ({ data }) => {
  return <Product product={data} />;
};

export default ProductPage;
