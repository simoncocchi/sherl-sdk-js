import { Pagination } from '../../common/api';
import { IPublicCategoryResponse } from '../types';
import { ProductApi } from '../api/client';

export const getPublicCategoriesSlug = async (slug: {
  [key: string]: any;
}): Promise<Pagination<IPublicCategoryResponse>> => {
  const response = await ProductApi.getPublicCategoriesSlug(slug);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
