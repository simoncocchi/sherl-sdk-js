import { Pagination } from '../../common/api';
import { ICommunicationResponse } from '../types';
import { CommunicationApi } from '../api/client';

export const getCommunication = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<ICommunicationResponse[]>> => {
  const response = await CommunicationApi.getCommunication(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
