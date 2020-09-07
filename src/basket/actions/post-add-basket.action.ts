import { BasketApi } from '../api/client';
import { BasketErr, errorFactory } from '../errors';
import { IBasketResponse, IBasketAddParameter } from '../types';

export const postAddBasket = async (
  parameter: IBasketAddParameter,
): Promise<IBasketResponse> => {
  // reponse
  const response = await BasketApi.postAddBasket(parameter);

  if (!response.data) {
    throw errorFactory.create(BasketErr.POST_FAILED);
  }

  return response.data;
};
