import { Pagination } from '../../common/api';
import { IClaimResponse } from '../types';
import { ClaimApi } from '../api/client';

export const getClaims = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IClaimResponse[]>> => {
  const response = await ClaimApi.getClaims(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
