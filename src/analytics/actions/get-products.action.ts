import { IAnalyticsProductResponse } from '../types';
import { AnalyticsApi } from '../api/client';

export const getAnalyticsProduct = async (filters: {
  [key: string]: any;
}): Promise<IAnalyticsProductResponse[]> => {
  const response = await AnalyticsApi.getAnalyticsProduct(filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
