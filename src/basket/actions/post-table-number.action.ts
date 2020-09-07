import { BasketApi } from '../api/client';
import { BasketErr, errorFactory } from '../errors';
import { IBasketResponse, ITableNumberParameter } from '../types';

export const postTableNumber = async (
  parameter: ITableNumberParameter,
): Promise<IBasketResponse> => {
  // reponse
  const response = await BasketApi.postTableNumber(parameter);

  if (!response.data) {
    throw errorFactory.create(BasketErr.POST_FAILED);
  }

  return response.data;
};
