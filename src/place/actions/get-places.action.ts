import { Pagination } from '../../common/api';
import { IPlaceResponse } from '../types';
import { PlaceApi } from '../api/client';

export const getPlaces = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IPlaceResponse[]>> => {
  const response = await PlaceApi.getPlaces(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
