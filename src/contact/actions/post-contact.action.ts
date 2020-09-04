import { ContactApi } from '../api/client';
import { ContactErr, errorFactory } from '../errors';
import { IContactParameter } from '../types';

export const postContact = async (parameter: IContactParameter) => {
  // reponse ??
  const response = await ContactApi.postContact(parameter);

  if (!response.data) {
    throw errorFactory.create(ContactErr.POST_CONTACT_FAILED);
  }

  return response.data;
};
