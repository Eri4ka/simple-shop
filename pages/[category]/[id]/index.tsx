import type { NextPage, GetServerSideProps } from 'next';

import { PRODUCTS_CATEGORY_URL, PRODUCTS_URL } from '@constants/index';
import { ProductType, ProductsResType } from '@mytypes/index';
import { request } from '@shared/api';
import { Product } from '@pages-content/Product';

export const getServerSideProps: GetServerSideProps<{
  data: ProductType;
}> = async ({ query }) => {
  const { id } = query;

  try {
    const data: ProductType = await request(`${PRODUCTS_URL}${id}`);

    if (!data) {
      return {
        notFound: true,
      };
    }

    const { products }: ProductsResType = await request(
      `${PRODUCTS_CATEGORY_URL}${data.category}`
    );
    const related = products.filter((product) => product.id !== data.id);

    return { props: { data, related } };
  } catch {
    return {
      notFound: true,
    };
  }
};

type Props = {
  data: ProductType;
  related: ProductType[];
};

const ProductPage: NextPage<Props> = ({ data, related }) => {
  return <Product product={data} related={related} />;
};

export default ProductPage;
