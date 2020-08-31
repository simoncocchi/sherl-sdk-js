import { PersonApi } from '../api/client';
import { PersonErr, errorFactory } from '../errors';

export const postEnable = async (
  id: string,
): Promise<Object> => { // reponse
  const response = await PersonApi.postEnable(
    id
  );

  if (!response.data) {
    throw errorFactory.create(PersonErr.POST_ENABLE_FAILED);
  }

  return response.data;
};
