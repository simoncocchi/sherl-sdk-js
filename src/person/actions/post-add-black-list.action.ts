import { PersonApi } from '../api/client';
import { PersonErr, errorFactory } from '../errors';

export const postAddBlackList = async (
  id: string,
): Promise<Object> => { // reponse
  const response = await PersonApi.postAddBlackList(
    id
  );

  if (!response.data) {
    throw errorFactory.create(PersonErr.POST_ADD_BLACK_FAILED);
  }

  return response.data;
};
