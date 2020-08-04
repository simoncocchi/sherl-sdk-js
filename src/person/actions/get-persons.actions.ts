import { Pagination } from '../../common/api';
import { IMeResponse } from '../types';
import { PersonApi } from '../api/client';

export const list = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IMeResponse[]>> => {
  const response = await PersonApi.list(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};