import { OrganizationApi } from '../api/client';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IOrganizationParams } from '../types';

export const postNewOrganization = async (
  params: IOrganizationParams,
): Promise<IOrganizationResponse> => {
  // reponse ??
  const response = await OrganizationApi.postNewOrganization(
    params,
  );

  if (!response.data) {
    throw errorFactory.create(OrganizationErr.POST_CREATE_ORGANIZATION_FAILED);
  }

  return response.data;
};
