import { IAudienceResponse } from '../types';
import { AnalyticsApi } from '../api/client';

export const getAnalyticsAudience = async (filters: {
  [key: string]: any;
}): Promise<IAudienceResponse[]> => {
  const response = await AnalyticsApi.getAnalyticsAudience(filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
