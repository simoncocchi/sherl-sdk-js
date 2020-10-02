import { ApiResponse } from '../../common/api';
import { IConfigResponse } from '../types';
import { PersonApi } from '../api/client';

export const getConfigs = async (): Promise<IConfigResponse[]> => {
  let response: ApiResponse<IConfigResponse[]> | null = null;

  try {
    response = await PersonApi.getConfigs();
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
