import { IBasketResponse } from '../types';
import { BasketApi } from '../api/client';

export const getBasket = async (
  customerUri: string,
): Promise<IBasketResponse> => {
  const response = await BasketApi.getBasket(customerUri);
  return response.data;
};
