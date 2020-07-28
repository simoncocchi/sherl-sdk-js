import { Pagination } from '../../common/api';
import { IUrlCategoryWithSubResponse, IUrlSubCategoryResponse, IUrlCategoryResponse  } from '../types';
import { UrlProductApi } from '../api/client';
import { ApiResponse } from '../../common/api';

export const getUrlCategories = async (): Promise<IUrlCategoryWithSubResponse[]> => {
  const response = await UrlProductApi.getUrlCategoriesAndSub();
  return response.data;
};

export const getUrlCategoriesSlug = async (slug: { [key: string]: any },
): Promise<Pagination<IUrlSubCategoryResponse[]>> => {
  const response = await UrlProductApi.getUrlCategoriesSlug( slug);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};

export const getUrlCategoriesOrganizationSlug = async (organizationSlug: { [key: string]: any },
  ): Promise<Pagination<IUrlCategoryResponse[]>> => {
    const response = await UrlProductApi.getUrlCategoriesOrganizationSlug( organizationSlug);
  
    if (response.status !== 200) {
      throw new Error(
        `Failed to fetch products API (status: ${response.status})`,
      );
    }
  
    return response.data;
  };