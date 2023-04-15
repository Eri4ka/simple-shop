import type { NextPage, GetServerSideProps } from 'next';

import { ProductsResType } from '@mytypes/index';
import { request } from '@shared/api';
import Category from '@pages-content/Category';
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
  return <Category data={data} category={category} />;
};

export default CategoryPage;
