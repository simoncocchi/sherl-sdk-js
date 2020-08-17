import { IOpinionResonse } from '../types';
import { OpinionApi } from '../api/client';

export const getBy = async (
  filters: { [key: string]: any },
): Promise<IOpinionResonse> => {
  const response = await OpinionApi.getBy(filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
