import { ApiResponse } from '../../common/api';
import { ILoyaltyResponse } from '../types';
import { LoyaltyApi } from '../api/client';

export const getLoyalty = async (id: string): Promise<ILoyaltyResponse> => {
  let response: ApiResponse<ILoyaltyResponse> | null = null;

  try {
    response = await LoyaltyApi.getLoyalty(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
