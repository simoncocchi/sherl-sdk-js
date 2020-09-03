import { OrganizationApi } from '../api/client';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IRibParams } from '../types';

export const postCreateRib = async (
  id: string,
  params: IRibParams,
): Promise<IOrganizationResponse> => {
  // reponse ??
  const response = await OrganizationApi.postCreateRib(id, params);

  if (!response.data) {
    throw errorFactory.create(OrganizationErr.POST_RIB_FAILED);
  }

  return response.data;
};
