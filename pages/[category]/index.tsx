import type { NextPage, GetServerSideProps } from 'next';

import { PRODUCTS_CATEGORY_URL } from '@constants/index';
import { ProductsResType } from '@mytypes/index';
import { request } from '@shared/api';
import Category from '@pages-content/Category';

export const getServerSideProps: GetServerSideProps<{
  data: ProductsResType;
}> = async ({ query }) => {
  const { category } = query;
  const data = await request(`${PRODUCTS_CATEGORY_URL}${category}?limit=12`);

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
