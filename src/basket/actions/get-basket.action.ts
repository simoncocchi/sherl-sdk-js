import { ApiResponse } from '../../common/api';
import { IBasketResponse } from '../types';
import { BasketApi } from '../api/client';

export const getBasket = async (
  customerUri: string,
): Promise<IBasketResponse> => {
  let response: ApiResponse<IBasketResponse> | null = null;

  try {
    response = await BasketApi.getBasket(customerUri);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
