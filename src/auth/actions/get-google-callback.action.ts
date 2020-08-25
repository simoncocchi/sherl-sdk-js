import { ApiResponse } from '../../common/api';
import { IAuthCallbackResponse } from '../types';
import { AuthApi } from '../api/client';

export const getGoogleCallback = async (): Promise<IAuthCallbackResponse> => {
  let response: ApiResponse<IAuthCallbackResponse> | null = null;

  try {
    response = await AuthApi.getGoogleCallback();
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
