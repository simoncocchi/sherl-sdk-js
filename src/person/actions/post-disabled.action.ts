import { PersonApi } from '../api/client';
import { PersonErr, errorFactory } from '../errors';

export const postDisabled = async (
  id: string,
): Promise<Object> => { // reponse
  const response = await PersonApi.postEnable(
    id
  );

  if (!response.data) {
    throw errorFactory.create(PersonErr.POST_DISABLED_FAILED);
  }

  return response.data;
};
