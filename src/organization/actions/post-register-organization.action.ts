import { OrganizationApi } from '../api/client';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IOrganizationRegisterParams } from '../types';

export const postRegisterOrgnization = async (
  params: IOrganizationRegisterParams,
): Promise<IOrganizationResponse> => {
  // reponse ??
  const response = await OrganizationApi.postRegisterOrgnization(
    params,
  );

  if (!response.data) {
    throw errorFactory.create(OrganizationErr.POST_ORANIZATION_REGISTER_FAILED);
  }

  return response.data;
};
