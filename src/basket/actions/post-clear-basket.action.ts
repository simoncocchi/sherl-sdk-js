import { BasketApi } from '../api/client';
import { BasketErr, errorFactory } from '../errors';
import { IBasketResponse, IClearParameter } from '../types';

export const postClearBasket = async (
  parameter: IClearParameter,
): Promise<IBasketResponse> => {
  // reponse
  const response = await BasketApi.postClearBasket(parameter);

  if (!response.data) {
    throw errorFactory.create(BasketErr.POST_FAILED);
  }

  return response.data;
};
