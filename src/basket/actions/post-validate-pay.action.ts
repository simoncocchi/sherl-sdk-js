import { BasketApi } from '../api/client';
import { BasketErr, errorFactory } from '../errors';
import { IBasketResponse, IValidateParameter } from '../types';

export const postValidateAndPayBasket = async (
  parameter: IValidateParameter,
): Promise<IBasketResponse> => {
  // reponse
  const response = await BasketApi.postValidateAndPayBasket(parameter);

  if (!response.data) {
    throw errorFactory.create(BasketErr.POST_FAILED);
  }

  return response.data;
};
