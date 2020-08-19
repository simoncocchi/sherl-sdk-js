import { ApiResponse } from '../../common/api';
import { IRoleResponse } from '../types';
import { IAMApi } from '../api/client';

export const getRole = async (id: string): Promise<IRoleResponse> => {
  let response: ApiResponse<IRoleResponse> | null = null;

  try {
    response = await IAMApi.getRole(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
