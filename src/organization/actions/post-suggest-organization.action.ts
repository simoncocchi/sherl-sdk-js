import { OrganizationApi } from '../api/client';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IOrganizationParams } from '../types';

export const postSuggestOrganization = async (
  params: IOrganizationParams,
): Promise<IOrganizationResponse> => {
  // reponse ??
  const response = await OrganizationApi.postSuggestOrganization(
    params,
  );

  if (!response.data) {
    throw errorFactory.create(OrganizationErr.POST_ORGANIZATION_SUGGEST_FAILED);
  }

  return response.data;
};
