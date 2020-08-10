import { Pagination } from '../../common/api';
import { ICmsResponse } from '../types';
import { CmsApi } from '../api/client';

export const getContents = async (
  page = 1,
  itemsPerPage = 2,
  filters: { [key: string]: any },
): Promise<Pagination<ICmsResponse[]>> => {
  const response = await CmsApi.getContents(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
