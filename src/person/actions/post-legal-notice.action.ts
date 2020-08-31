import { PersonApi } from '../api/client';
import { PersonErr, errorFactory } from '../errors';

export const postLegalNotice = async (
  id: string,
  version: string,
): Promise<Object> => { // reponse
  const response = await PersonApi.postLegalNotice(
    id,
    version
  );

  if (!response.data) {
    throw errorFactory.create(PersonErr.POST_LEGAL_NOTICE_FAILED);
  }

  return response.data;
};
