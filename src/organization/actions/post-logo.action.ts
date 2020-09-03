import { OrganizationApi } from '../api/client';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse } from '../types';

export const postLogo = async (
  id: string,
  idMedia: string,
): Promise<IOrganizationResponse> => {
  // reponse ??
  const response = await OrganizationApi.postLogo(id, idMedia);

  if (!response.data) {
    throw errorFactory.create(OrganizationErr.POST_LOGO_FAILED);
  }

  return response.data;
};
