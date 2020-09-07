import { DiscountApi } from '../api/client';
import { DiscountErr, errorFactory } from '../errors';
import { IDiscountParameter, IDiscountResponse } from '../types';

export const postDiscount = async (
  parameter: IDiscountParameter,
): Promise<IDiscountResponse> => {
  const response = await DiscountApi.postDiscount(parameter);

  if (!response.data) {
    throw errorFactory.create(DiscountErr.POST_FAILED);
  }

  return response.data;
};
