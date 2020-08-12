import { Pagination } from '../../common/api';
import { ILocation } from '../types';
import { PersonApi } from '../api/client';

export const getPosition = async (position: {
  [key: string]: any;
}): Promise<Pagination<ILocation[]>> => {
  const response = await PersonApi.getPosition(position);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
