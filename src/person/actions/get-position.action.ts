import { Pagination } from '../../common/api';
import { ILocation } from '../types';
import { PersonApi } from '../api/client';

export const getCurrentAddress = async (position: {
  [key: string]: string;
}): Promise<Pagination<ILocation[]>> => {
  const response = await PersonApi.getCurrentAddress(position);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
