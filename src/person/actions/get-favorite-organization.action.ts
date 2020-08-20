import { ApiResponse, Pagination } from '../../common/api';
import { IOrganizationResponse } from '../../organization/types';
import { PersonApi } from '../api/client';
import { errorFactory, PersonErr } from '../errors';

export const getFavoriteOrganization = async (
  id: string,
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IOrganizationResponse[]>> => {
  const response = await PersonApi.getFavoriteOrganization(
    id,
    page,
    itemsPerPage,
    filters,
  );

  if (response.status !== 200) {
    throw errorFactory.create(PersonErr.FETCH_FAILED, {
      status: response.status,
    });
  }

  return response.data;
};
