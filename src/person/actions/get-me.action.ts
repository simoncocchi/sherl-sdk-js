import { IMeResponse } from '../types';
import { PersonApi } from '../api/client';

export const getMe = async (): Promise<IMeResponse[]> => {
  const response = await PersonApi.getMe();
  return response.data;
};
