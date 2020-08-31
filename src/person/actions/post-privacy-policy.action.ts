import { PersonApi } from '../api/client';
import { PersonErr, errorFactory } from '../errors';

export const postPrivacyPolice = async (
  id: string,
  version: string,
): Promise<Object> => { // reponse
  const response = await PersonApi.postPrivacyPolice(
    id,
    version
  );

  if (!response.data) {
    throw errorFactory.create(PersonErr.POST_PRIVACY_POLiCY_FAILED);
  }

  return response.data;
};
