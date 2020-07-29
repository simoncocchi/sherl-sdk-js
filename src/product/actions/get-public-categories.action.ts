import { Pagination } from '../../common/api';
import { IPublicCategoryWithSubResponse, IPublicSubCategoryResponse, IPublicCategoryResponse  } from '../types';
import { ProductApi } from '../api/client';

export const getPublicCategoriesAndSub = async (): Promise<IPublicCategoryWithSubResponse[]> => {
  const response = await ProductApi.getPublicCategoriesAndSub();
  return response.data;
};

export const getPublicCategoriesSlug = async (slug: { [key: string]: any },
): Promise<Pagination<IPublicSubCategoryResponse[]>> => {
  const response = await ProductApi.getPublicCategoriesSlug( slug);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};

export const getPublicCategories = async (): Promise<IPublicCategoryResponse[]> => {
  const response = await ProductApi.getPublicCategories();
  return response.data;
};