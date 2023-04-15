import type { NextPage, GetServerSideProps } from 'next';

import { ProductType, ProductsResType } from '@mytypes/product';
import { request } from '@shared/api';
import { ProductPageContent } from '@pages-content/ProductPageContent';
import { UrlService } from '@shared/services/UrlService';

export const getServerSideProps: GetServerSideProps<{
  data: ProductType;
}> = async ({ query }) => {
  const { id } = query;

  try {
    const data: ProductType = await request(UrlService.getProductsById({ id }));

    if (!data) {
      return {
        notFound: true,
      };
    }

    const { products }: ProductsResType = await request(
      UrlService.getCategoryProducts({ category: data.category })
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
  return <ProductPageContent product={data} related={related} />;
};

export default ProductPage;
