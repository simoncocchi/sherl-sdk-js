import { PersonApi } from '../api/client';
import { PersonErr, errorFactory } from '../errors';

export const postRefreshIam = async (): Promise<Object> => {
  // reponse
  const response = await PersonApi.postRefreshIam();

  if (!response.data) {
    throw errorFactory.create(PersonErr.POST_REFRESH_IAM_FAILED);
  }

  return response.data;
};
