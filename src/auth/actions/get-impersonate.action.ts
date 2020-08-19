import { ApiResponse } from '../../common/api';
import { ApiLoginResponse } from '../types';
import { AuthApi } from '../api/client';

export const getImpersonate = async (id: string): Promise<ApiLoginResponse> => {
  let response: ApiResponse<ApiLoginResponse> | null = null;

  try {
    response = await AuthApi.getImpersonate(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
