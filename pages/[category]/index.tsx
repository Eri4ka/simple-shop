import type { NextPage, GetServerSideProps } from 'next';

import { ProductsResType } from '@mytypes/product';
import { request } from '@shared/api';
import { CategoryPageContent } from '@pages-content/CategoryPageContent';
import { UrlService } from '@shared/services/UrlService';

export const getServerSideProps: GetServerSideProps<{
  data: ProductsResType;
}> = async ({ query }) => {
  const { category } = query;
  const data = await request(
    UrlService.getCategoryProducts({ category, limit: '12' })
  );

  if (data.total === 0) {
    return {
      notFound: true,
    };
  }

  return { props: { data, category } };
};

const CategoryPage: NextPage<{ data: ProductsResType; category: string }> = ({
  data,
  category,
}) => {
  return <CategoryPageContent data={data} category={category} />;
};

export default CategoryPage;
