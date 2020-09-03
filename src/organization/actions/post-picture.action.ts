import { OrganizationApi } from '../api/client';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse } from '../types';

export const postPicture = async (
  id: string,
  idMedia: string,
): Promise<IOrganizationResponse> => {
  // reponse ??
  const response = await OrganizationApi.postPicture(id, idMedia);

  if (!response.data) {
    throw errorFactory.create(OrganizationErr.POST_PICTURE_MEDIA_FAILED);
  }

  return response.data;
};
