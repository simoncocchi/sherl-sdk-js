import { ApiResponse } from '../../common/api';
import { IPersonMeResponse } from '../types';
import { PersonApi } from '../api/client';

export const getPersonById = async (id: string): Promise<IPersonMeResponse> => {
  let response: ApiResponse<IPersonMeResponse> | null = null;

  try {
    response = await PersonApi.getPersonById(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
