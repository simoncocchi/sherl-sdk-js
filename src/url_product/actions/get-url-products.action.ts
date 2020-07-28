import { Pagination } from '../../common/api';
import { IUrlProductResponse } from '../types';
import { UrlProductApi } from '../api/client';

export const getUrlProducts = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IUrlProductResponse[]>> => {
  const response = await UrlProductApi.getUrlProducts(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
