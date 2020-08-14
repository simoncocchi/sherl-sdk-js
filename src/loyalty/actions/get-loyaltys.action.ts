import { Pagination } from '../../common/api';
import { ILoyaltyResponse } from '../types';
import { LoyaltyApi } from '../api/client';

export const getLoyaltys = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<ILoyaltyResponse[]>> => {
  const response = await LoyaltyApi.getLoyaltys(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
