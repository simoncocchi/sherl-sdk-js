import { ApiResponse } from '../../common/api';
import { IUrlProductResponse } from '../types';
import { UrlProductApi } from '../api/client';

export const getUrlProduct = async (id: string): Promise<IUrlProductResponse> => {
  let response: ApiResponse<IUrlProductResponse> | null = null;

  try {
    response = await UrlProductApi.getUrlProduct(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
