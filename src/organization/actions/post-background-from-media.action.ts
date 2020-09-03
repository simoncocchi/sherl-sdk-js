import { OrganizationApi } from '../api/client';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IBackgroundParams } from '../types';

export const postBackgroundImageFromMedia = async (
  id: string,
  idMedia: string,
  params: IBackgroundParams,
): Promise<IOrganizationResponse> => {
  // reponse ??
  const response = await OrganizationApi.postBackgroundImageFromMedia(
    id,
    idMedia,
    params,
  );

  if (!response.data) {
    throw errorFactory.create(OrganizationErr.POST_BACKGROUND_MEDIA_FAILED);
  }

  return response.data;
};
