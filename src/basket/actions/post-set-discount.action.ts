import { BasketApi } from '../api/client';
import { BasketErr, errorFactory } from '../errors';
import { IBasketResponse, ISetDiscountSponsorshipParameter } from '../types';

export const postSetDisount = async (
  parameter: ISetDiscountSponsorshipParameter,
): Promise<IBasketResponse> => {
  // reponse
  const response = await BasketApi.postSetDisount(parameter);

  if (!response.data) {
    throw errorFactory.create(BasketErr.POST_FAILED);
  }

  return response.data;
};
