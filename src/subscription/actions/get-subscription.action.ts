import { ISubscriptionResponse } from '../types';
import { SubscriptionApi } from '../api/client';

export const getSubscription = async (filters: {
  [key: string]: any;
}): Promise<ISubscriptionResponse> => {
  const response = await SubscriptionApi.getSubscription(filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
