import { HealthyApi } from '../api/client';

export const getHealthy = async () => {
  const response = await HealthyApi.getHealthy();
  return response.data;
};
