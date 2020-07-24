import { ApiResponse } from '../../common/api';
import { IMeResponse } from '../types';
import { MeApi } from '../api/client';

// export const getMe = async (): Promise<IMeResponse> => {
//   let response: ApiResponse<IMeResponse> | null = null;

//   try {
//     response = await MeApi.getMe();
//   } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
//     throw new Error('Cannot reach API');
//   }

//   if (response) {
//     return response.data;
//   }

//   throw new Error('Empty response from API');
// };

export const getMe = async (): Promise<IMeResponse[]> => {
  const response = await MeApi.getMe();
  return response.data;
};
