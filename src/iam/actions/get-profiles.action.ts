import { Pagination } from '../../common/api';
import { IProfileResponse } from '../types';
import { IAMApi } from '../api/client';

export const getProfiles = async (
  filters: { [key: string]: any },
): Promise<Pagination<IProfileResponse[]>> => {
  const response = await IAMApi.getProfiles(filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
