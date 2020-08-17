import { Pagination } from '../../common/api';
import { IOpinionResonse } from '../types';
import { OpinionApi } from '../api/client';

export const getIGive = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IOpinionResonse[]>> => {
  const response = await OpinionApi.getIGive(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
