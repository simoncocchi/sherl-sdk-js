import { ApiResponse } from '../../common/api';
import { IBugReportResponse } from '../types';
import { BugreportApi } from '../api/client';

export const getBugreport = async (id: string): Promise<IBugReportResponse> => {
  let response: ApiResponse<IBugReportResponse> | null = null;

  try {
    response = await BugreportApi.getBugreport(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
