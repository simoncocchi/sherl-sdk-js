import { OrganizationApi } from '../api/client';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IPictureParams } from '../types';

export const postPictureFromMedia = async (
  id: string,
  idMedia: string,
  params: IPictureParams,
): Promise<IOrganizationResponse> => {
  // reponse ??
  const response = await OrganizationApi.postPictureFromMedia(
    id,
    idMedia,
    params,
  );

  if (!response.data) {
    throw errorFactory.create(OrganizationErr.POST_PICTURE_MEDIA_FAILED);
  }

  return response.data;
};
