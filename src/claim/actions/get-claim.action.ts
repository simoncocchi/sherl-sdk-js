import { ApiResponse } from '../../common/api';
import { IClaimResponse } from '../types';
import { ClaimApi } from '../api/client';

export const getClaim = async (id: string): Promise<IClaimResponse> => {
  let response: ApiResponse<IClaimResponse> | null = null;

  try {
    response = await ClaimApi.getClaim(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
