import { SearchApi } from '../api/client';
import { errorFactory, SearchErr } from '../errors';

export const getAutocomplete = async (
  q: string,
  filters: { [key: string]: any },
) => {
  const response = await SearchApi.getAutocomplete(q, filters);

  if (response.status !== 200) {
    throw errorFactory.create(SearchErr.FETCH_FAILED, {
      status: response.status,
    });
  }

  return response.data;
};
