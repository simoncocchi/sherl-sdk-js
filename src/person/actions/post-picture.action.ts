import { PersonApi } from '../api/client';
import { PersonErr, errorFactory } from '../errors';

export const postPicture = async (
  idPerson: string,
  idMedia: string,
): Promise<Object> => { // reponse ???

  const response = await PersonApi.postPicture(idPerson, idMedia);

  if (!response.data) {
    throw errorFactory.create(PersonErr.POST_PICTURE_FAILED);
  }

  return response.data;
};
