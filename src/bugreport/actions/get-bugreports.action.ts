import { Pagination } from '../../common/api';
import { IBugReportResponse } from '../types';
import { BugreportApi } from '../api/client';

export const getBugreports = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IBugReportResponse[]>> => {
  const response = await BugreportApi.getBugreports(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
