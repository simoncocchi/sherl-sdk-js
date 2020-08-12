import { ApiResponse } from '../../common/api';
import { IPublicCategoryResponse } from '../types';
import { ProductApi } from '../api/client';

export const getPublicCategories = async (): Promise<IPublicCategoryResponse[]> => {
  let response: ApiResponse<IPublicCategoryResponse[]> | null = null;

  try {
    response = await ProductApi.getPublicCategories();
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
