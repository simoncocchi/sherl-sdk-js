import { INotificationsResponse } from '../types';
import { AnalyticsApi } from '../api/client';

export const getAnalyticsNotification = async (filters: {
  [key: string]: any;
}): Promise<INotificationsResponse> => {
  const response = await AnalyticsApi.getAnalyticsNotification(filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
