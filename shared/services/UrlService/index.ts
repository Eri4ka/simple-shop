import {
  API_URL,
  CATEGORIES_URL,
  PRODUCTS_URL,
  PRODUCTS_CATEGORY_URL,
  PRODUCTS_SEARCH_URL,
} from './constants';

import { Url } from './types';

export const UrlService: Url = {
  baseUrl: API_URL,

  getCategories: function () {
    return `${this.baseUrl}${CATEGORIES_URL}`;
  },

  getProducts: function ({ limit = 0, skip = '' }) {
    return `${this.baseUrl}${PRODUCTS_URL}?limit=${limit}&skip=${skip}`;
  },

  getProductsById: function ({ id, limit = '', skip = '' }) {
    return `${this.baseUrl}${PRODUCTS_URL}${id}?limit=${limit}&skip=${skip}`;
  },

  getCategoryProducts: function ({ category, limit = '0', skip = '' }) {
    return `${this.baseUrl}${PRODUCTS_CATEGORY_URL}${category}?limit=${limit}&skip=${skip}`;
  },

  getSearchProducts: function ({ value, limit = '0', skip = '' }) {
    return `${this.baseUrl}${PRODUCTS_SEARCH_URL}?${
      value ? 'q=' + value : ''
    }&limit=${limit}&skip=${skip}`;
  },
};
