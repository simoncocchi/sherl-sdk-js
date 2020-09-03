import { OrganizationApi } from '../api/client';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IFounderParams } from '../types';

export const postCreateFounder = async (
  id: string,
  params: IFounderParams,
): Promise<IOrganizationResponse> => {
  // reponse ??
  const response = await OrganizationApi.postCreateFounder(id, params);

  if (!response.data) {
    throw errorFactory.create(OrganizationErr.POST_FOUNDER_FAILED);
  }

  return response.data;
};
