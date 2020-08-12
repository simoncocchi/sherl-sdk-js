import { Pagination } from '../../common/api';
import { IPublicProductResponse } from '../types';
import { ProductApi } from '../api/client';

export const getPublicProducts = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IPublicProductResponse[]>> => {
  const response = await ProductApi.getPublicProducts(
    page,
    itemsPerPage,
    filters,
  );

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
