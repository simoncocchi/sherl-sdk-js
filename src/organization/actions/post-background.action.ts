import { OrganizationApi } from '../api/client';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse } from '../types';

export const postBackgroundImage = async (
  id: string,
  idMedia: string,
): Promise<IOrganizationResponse> => {
  // reponse ??
  const response = await OrganizationApi.postBackgroundImage(id, idMedia);

  if (!response.data) {
    throw errorFactory.create(OrganizationErr.POST_BACKGROUD_FAILED);
  }

  return response.data;
};
