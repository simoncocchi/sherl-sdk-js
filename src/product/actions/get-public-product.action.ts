import { ApiResponse } from '../../common/api';
import { IPublicProductResponse } from '../types';
import { ProductApi } from '../api/client';

export const getPublicProduct = async (
  id: string,
): Promise<IPublicProductResponse> => {
  let response: ApiResponse<IPublicProductResponse> | null = null;

  try {
    response = await ProductApi.getPublicProduct(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
