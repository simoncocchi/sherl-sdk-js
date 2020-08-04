import { IMeResponse } from '../types';
import { PersonApi } from '../api/client';

export const getMe = async (): Promise<IMeResponse[]> => {
  const response = await PersonApi.getMe();
  return response.data;
};

export const getConfigs = async (): Promise<IMeResponse[]> => {
  const response = await PersonApi.getConfigs();
  return response.data;
};

export const getVirtualMoney = async (): Promise<IMeResponse[]> => {
  const response = await PersonApi.getVirtualMoney();
  return response.data;
};
