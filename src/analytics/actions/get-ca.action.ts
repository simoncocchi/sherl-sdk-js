import { ICAResponse } from '../types';
import { AnalyticsApi } from '../api/client';

export const getAnalyticsCA = async (filters: {
  [key: string]: any;
}): Promise<ICAResponse[]> => {
  const response = await AnalyticsApi.getAnalyticsCA(filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
