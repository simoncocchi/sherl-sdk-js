import { BasketApi } from '../api/client';
import { BasketErr, errorFactory } from '../errors';
import { IBasketResponse, ISetDiscountSponsorshipParameter } from '../types';

export const postSetSponsorship = async (
  parameter: ISetDiscountSponsorshipParameter,
): Promise<IBasketResponse> => {
  // reponse
  const response = await BasketApi.postSetSponsorship(parameter);

  if (!response.data) {
    throw errorFactory.create(BasketErr.POST_FAILED);
  }

  return response.data;
};
