type SkipNLimit = {
  skip?: string;
  limit?: string;
};

type IdParam = { id?: string | string[] };

type CategoryParam = { category?: string | string[] };

type SearchParam = { value?: string };

type UrlParam<T> = T & SkipNLimit;

type GetUrl<T = void> = ({ ...args }: T) => string;

export type Url = {
  baseUrl: string;
  getCategories: GetUrl;
  getProducts: GetUrl<SkipNLimit>;
  getProductsById: GetUrl<UrlParam<IdParam>>;
  getCategoryProducts: GetUrl<UrlParam<CategoryParam>>;
  getSearchProducts: GetUrl<UrlParam<SearchParam>>;
};
