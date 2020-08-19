import { ApiResponse } from '../../common/api';
import { IProfileResponse } from '../types';
import { IAMApi } from '../api/client';

export const getProfile = async (id: string): Promise<IProfileResponse> => {
  let response: ApiResponse<IProfileResponse> | null = null;

  try {
    response = await IAMApi.getProfile(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
