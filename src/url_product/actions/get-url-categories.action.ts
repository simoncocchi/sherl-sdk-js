import { IUrlCategoryWithSubResponse, IUrlSubCategoryResponse, IUrlCategoryResponse  } from '../types';
import { UrlProductApi } from '../api/client';
import { ApiResponse } from '../../common/api';

export const getUrlCategories = async (): Promise<IUrlCategoryWithSubResponse[]> => {
  const response = await UrlProductApi.getUrlCategoriesAndSub();
  return response.data;
};

export const getUrlCategoriesSlug = async (slug: string): Promise<IUrlSubCategoryResponse> => {
  let response: ApiResponse<IUrlSubCategoryResponse> | null = null;

  try {
    response = await UrlProductApi.getUrlCategoriesSlug(slug);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};

export const getUrlCategoriesOrganizationSlug = async (organizationslug: string): Promise<IUrlCategoryResponse> => {
  let response: ApiResponse<IUrlCategoryResponse> | null = null;

  try {
    response = await UrlProductApi.getUrlCategoriesOrganizationSlug(organizationslug);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};