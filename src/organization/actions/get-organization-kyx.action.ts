import { ApiResponse } from '../../common/api';
import { IKycResposne } from '../types';
import { OrganizationApi } from '../api/client';

export const getOrganizationKyc = async (id: string): Promise<IKycResposne[]> => {
  let response: ApiResponse<IKycResposne[]> | null = null;

  try {
    response = await OrganizationApi.getOrganizationKyc(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
