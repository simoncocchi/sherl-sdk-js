import { PersonApi } from '../api/client';
import { PersonErr, errorFactory } from '../errors';

export const postFavoriteOrganization = async (
  idPerson: string,
  idOrganization: string,
): Promise<Object> => { // reponse
  const response = await PersonApi.postFavoriteOrganization(
    idPerson,
    idOrganization,
  );

  if (!response.data) {
    throw errorFactory.create(PersonErr.POST_ADDRESS_FAILED);
  }

  return response.data;
};
