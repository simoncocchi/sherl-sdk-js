import { PersonApi } from '../api/client';
import { PersonErr, errorFactory } from '../errors';

export const postCreateAdmin = async (
  id: string,
  firstName: string,
  lastName: string,
  email: string,
): Promise<Object> => { // reponse
  const response = await PersonApi.postCreateAdmin(
    id,
    firstName,
    lastName,
    email,
  );

  if (!response.data) {
    throw errorFactory.create(PersonErr.POST_CREATE_ADMIN_FAILED);
  }

  return response.data;
};
