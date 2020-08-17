import { IOpinionResonse } from '../types';
import { OpinionApi } from '../api/client';

export const getAverage = async (
  filters: { [key: string]: any },
): Promise<IOpinionResonse> => {
  const response = await OpinionApi.getAverage(filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
