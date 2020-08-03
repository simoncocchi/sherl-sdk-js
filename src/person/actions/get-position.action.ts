import { Pagination } from '../../common/api';
import { IPosiionResponse } from '../types';
import { PersonApi } from '../api/client';

export const getPosition = async (position: { [key: string]: any }): Promise<Pagination<IPosiionResponse[]>> => {
  const response = await PersonApi.getPosition(position);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
