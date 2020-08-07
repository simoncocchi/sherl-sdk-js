import { Pagination } from '../../common/api';
import { IDiscountResponse } from '../types';
import { DiscountApi } from '../api/client';

export const ListDiscount = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IDiscountResponse[]>> => {
  const response = await DiscountApi.ListDiscount(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};