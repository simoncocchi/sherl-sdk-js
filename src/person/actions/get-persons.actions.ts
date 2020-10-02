import { Pagination } from '../../common/api';
import { IPersonMeResponse } from '../types';
import { PersonApi } from '../api/client';

export const getPersons = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: string },
): Promise<Pagination<IPersonMeResponse[]>> => {
  const response = await PersonApi.getPersons(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
