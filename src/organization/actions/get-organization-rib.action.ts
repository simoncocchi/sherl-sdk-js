import { ApiResponse } from '../../common/api';
import { IRibResponse } from '../types';
import { OrganizationApi } from '../api/client';

export const getOrganizationRib = async (id: string): Promise<IRibResponse> => {
  let response: ApiResponse<IRibResponse> | null = null;

  try {
    response = await OrganizationApi.getOrganizationRib(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
