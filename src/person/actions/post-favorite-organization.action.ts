import { PersonApi } from '../api/client';
import { PersonErr, errorFactory } from '../errors';

export const postFavoriteOrganization = async (
    idOrganization: string
): Promise<Object> => {
  const response = await PersonApi.postFavoriteOrganization(
    idOrganization
  );

  if (!response.data) {
    throw errorFactory.create(PersonErr.POST_ADDRESS_FAILED);
  }

  return response.data;
};
