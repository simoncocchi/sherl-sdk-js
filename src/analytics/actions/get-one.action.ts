import { IOneResponse } from '../types';
import { AnalyticsApi } from '../api/client';

export const getAnalyticsOne = async (filters: {
  [key: string]: any;
}): Promise<IOneResponse> => {
  const response = await AnalyticsApi.getAnalyticsOne(filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
