import { IMeResponse } from '../types';
import { MeApi } from '../api/client';

export const getMe = async (): Promise<IMeResponse[]> => {
  const response = await MeApi.getMe();
  return response.data;
};
