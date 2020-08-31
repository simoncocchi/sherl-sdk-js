import { PersonApi } from '../api/client';
import { PersonErr, errorFactory } from '../errors';

export const postRefreshIamOne = async (
  id: string,
): Promise<Object> => { // reponse
  const response = await PersonApi.postRefreshIamOne(
    id
  );

  if (!response.data) {
    throw errorFactory.create(PersonErr.POST_REFRESH_IAM_FAILED);
  }

  return response.data;
};
